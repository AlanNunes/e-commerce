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
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAll: (state) => {
      state.items = [];
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCount = (state: RootState) => state.cart.items.length;
export const selectTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export const { addItem, removeItem, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
