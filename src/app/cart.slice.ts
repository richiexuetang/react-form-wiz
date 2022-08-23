import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
  numItems: number;
  totalPrice: number;
}

export const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
  numItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(
      state,
      {
        payload,
      }: PayloadAction<{ cartItems: CartItem[]; productToAdd: CartItem }>
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
      state.numItems += 1;
    },
    removeCartItem(
      state,
      {
        payload,
      }: PayloadAction<{
        cartItems: CartItem[];
        cartItemToRemove: CartItem;
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
        state.numItems -= 1;
      }
    },
    clearCartItem(
      state,
      {
        payload,
      }: PayloadAction<{
        cartItems: CartItem[];
        cartItemToClear: CartItem;
      }>
    ) {
      const { cartItems, cartItemToClear } = payload;

      state.numItems -= cartItemToClear.quantity;

      state.cartItems = cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToClear.id
      );
    },
    setCartItems(state, { payload: cartItems }: PayloadAction<CartItem[]>) {
      state.cartItems = cartItems;
    },
    setIsCartOpen(state, { payload }: PayloadAction<boolean>) {
      state.isCartOpen = payload;
    },
    incrementItemsInCart(state, { payload }: PayloadAction<number>) {
      state.numItems += payload;
    },
    addPriceToTotal(state, { payload }: PayloadAction<number>) {
      state.totalPrice += payload;
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
