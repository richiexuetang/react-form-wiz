import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cart.slice';
import collectionReducer from '../features/collection/collection.slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    collection: collectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
