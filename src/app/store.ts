import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cart.slice';
import collectionReducer from '../features/collection/collection.slice';
import logger from 'redux-logger';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    collection: collectionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
