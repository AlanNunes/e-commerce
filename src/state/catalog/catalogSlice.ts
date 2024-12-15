import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CatalogState {
  items: CatalogItemState[];
  isLoading: boolean;
  errorMessage: string;
}

interface CatalogItemState {
  id: number;
  name: string;
  price: number;
}

const initialState: CatalogState = {
  items: [],
  isLoading: false,
  errorMessage: "",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refreshCatalogAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshCatalogAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      });
  },
});

export const refreshCatalogAsync = createAsyncThunk(
  "catalog/getCatalogAsync",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const fakeData: CatalogItemState[] = [
      {
        id: 1,
        name: "iPhone 13",
        price: 11000.59,
      },
      {
        id: 2,
        name: "iPhone 14",
        price: 13000.99,
      },
      {
        id: 3,
        name: "iPhone 15",
        price: 17000.12,
      },
      {
        id: 4,
        name: "Apple Watch",
        price: 3900.99,
      },
    ];
    return fakeData;
  }
);

export default catalogSlice.reducer;

export const selectCatalog = (state: RootState) => state.catalog.items;
export const isCatalogLoading = (state: RootState) => state.catalog.isLoading;
