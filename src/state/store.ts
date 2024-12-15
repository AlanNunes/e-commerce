import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalog/catalogSlice";
import cartReducer from "./cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const catalogPersistConfig = { key: "catalog", storage };
const cartPersistConfig = { key: "cart", storage };

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
