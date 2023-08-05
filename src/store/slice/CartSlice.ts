import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
  items: Array<any>;
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity += actions.payload.quantity;
    },
    removeFromCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity -= actions.payload.quantity;
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const CartAction = cartSlice.actions;

export default cartSlice.reducer;
