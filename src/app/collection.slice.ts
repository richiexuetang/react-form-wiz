import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';

export const fetchCategoriesInitial = createAsyncThunk(
  'category/fetchCategoriesInitial',
  async () => {
    const categories: Category[] = await getCategoriesAndDocuments();
    const categoryMap = categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);

    return { categories, categoryMap };
  }
);
export interface CategoriesState {
  categories: Category[];
  isFetchingCategory: boolean;
  error: Error | null;
  categoryMap: CategoryMap | null;
}

export const initialState: CategoriesState = {
  categories: [],
  isFetchingCategory: true,
  error: null,
  categoryMap: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesInitial.pending, (state) => {
        state.isFetchingCategory = true;
      })
      .addCase(fetchCategoriesInitial.fulfilled, (state, action) => {
        if (action.payload) {
          state.categories = action.payload?.categories;
          state.categoryMap = action.payload?.categoryMap;
          state.isFetchingCategory = false;
        } else {
          state.isFetchingCategory = true;
        }
      });
  },
});

export const {
  setFetchingCategories,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} = collectionSlice.actions;

export default collectionSlice.reducer;
