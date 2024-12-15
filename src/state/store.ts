import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalog/catalogSlice";
import cartRedurcer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    cart: cartRedurcer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
