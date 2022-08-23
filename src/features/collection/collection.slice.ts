import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';

export const fetchCategoriesInitial = createAsyncThunk(
  'category/fetchCategoriesInitial',
  async () => {
    const res: Category[] = await getCategoriesAndDocuments();
    return res;
  }
);
export interface CategoriesState {
  categories: Category[];
  isFetchingCategory: boolean;
  error: Error | null;
  categoryItem: CategoryItem[];
}

export const initialState: CategoriesState = {
  categories: [],
  isFetchingCategory: false,
  error: null,
  categoryItem: [],
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setFetchingCategories(
      state,
      { payload: isFetching }: PayloadAction<boolean>
    ) {
      state.isFetchingCategory = isFetching;
    },
    fetchCategoriesSuccess(
      state,
      { payload: loadedCategories }: PayloadAction<Category[]>
    ) {
      state.categories = loadedCategories;
    },
    fetchCategoriesError(state, { payload: error }: PayloadAction<Error>) {
      state.error = error;
    },
    setCategoryItems(
      state,
      { payload }: PayloadAction<{ categories: Category[]; category: string }>
    ) {
      const { categories, category } = payload;

      const categoryMap = categories.reduce((acc, c) => {
        const { title, items } = c;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {} as CategoryMap);

      state.categoryItem = categoryMap[category];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesInitial.pending, (state) => {
        state.isFetchingCategory = true;
      })
      .addCase(fetchCategoriesInitial.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isFetchingCategory = false;
      });
  },
});

export const {
  setFetchingCategories,
  fetchCategoriesSuccess,
  fetchCategoriesError,
  setCategoryItems,
} = collectionSlice.actions;

export default collectionSlice.reducer;
