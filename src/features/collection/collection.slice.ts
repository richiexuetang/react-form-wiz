import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../@types/global';

export interface CategoriesState {
  categories: Category[];
  isFetchingCategory: boolean;
  error: Error | null;
}

export const initialState: CategoriesState = {
  categories: [],
  isFetchingCategory: false,
  error: null,
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
});

export const {
  setFetchingCategories,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} = collectionSlice.actions;

export default collectionSlice.reducer;
