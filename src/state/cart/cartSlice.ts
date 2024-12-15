import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
  items: CartItem[];
  count: number;
  total: number;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
