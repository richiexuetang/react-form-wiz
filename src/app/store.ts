import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart.slice';
import collectionReducer from '../features/collection/collection.slice';
import userReducer from '../features/header/user.slice';
import logger from 'redux-logger';
import { useDispatch } from 'react-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  cart: cartReducer,
  collection: collectionReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
