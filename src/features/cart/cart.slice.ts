import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CategoryItem } from '../../@types/global';

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

export const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(
      state,
      {
        payload,
      }: PayloadAction<{ cartItems: CartItem[]; productToAdd: CategoryItem }>
    ) {
      const { cartItems, productToAdd } = payload;
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );

      if (existingCartItem) {
        state.cartItems = cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.cartItems = [...cartItems, { ...productToAdd, quantity: 1 }];
      }
    },
    removeCartItem(
      state,
      {
        payload,
      }: PayloadAction<{
        cartItems: CartItem[];
        cartItemToRemove: CategoryItem;
      }>
    ) {
      const { cartItems, cartItemToRemove } = payload;
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );

      if (existingCartItem && existingCartItem.quantity === 1) {
        state.cartItems = cartItems.filter(
          (cartItem) => cartItem.id !== cartItemToRemove.id
        );
      } else {
        state.cartItems = cartItems.map((cartItem) =>
          cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    },
    clearCartItem(
      state,
      {
        payload,
      }: PayloadAction<{
        cartItems: CartItem[];
        cartItemToClear: CategoryItem;
      }>
    ) {
      const { cartItems, cartItemToClear } = payload;

      state.cartItems = cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToClear.id
      );
    },
    setCartItems(state, { payload: cartItems }: PayloadAction<CartItem[]>) {
      state.cartItems = cartItems;
    },
    setIsCartOpen(state, { payload: isCartOpen }: PayloadAction<boolean>) {
      state.isCartOpen = isCartOpen;
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  clearCartItem,
  setCartItems,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
