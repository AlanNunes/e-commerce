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
  imgUri: string;
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
        imgUri: "https://reidocelular.com.br/wp-content/uploads/2024/05/Sem-2024-11-09T064409.257-1000x1000.png",
        price: 11000.59,
      },
      {
        id: 2,
        name: "Galaxy S10",
        imgUri: "https://i.ebayimg.com/images/g/dLMAAOSwwB1i9Sh3/s-l640.png",
        price: 13000.99,
      },
      {
        id: 3,
        name: "iPhone 15",
        imgUri: "https://reidocelular.com.br/wp-content/uploads/2024/05/Sem-2024-11-09T064409.257-1000x1000.png",
        price: 17000.12,
      },
      {
        id: 4,
        name: "Apple Watch",
        imgUri: "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/t/i/titanium_orange_ocean_band_pdp_image_position-1__en-us-removebg-preview_1.png",
        price: 3900.99,
      },
      {
        id: 5,
        name: "iPhone 15",
        imgUri: "https://reidocelular.com.br/wp-content/uploads/2024/05/Sem-2024-11-09T064409.257-1000x1000.png",
        price: 17000.12,
      },
      {
        id: 6,
        name: "Apple Watch",
        imgUri: "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/t/i/titanium_orange_ocean_band_pdp_image_position-1__en-us-removebg-preview_1.png",
        price: 3900.99,
      },
    ];
    return fakeData;
  }
);

export default catalogSlice.reducer;

export const selectCatalog = (state: RootState) => state.catalog.items;
export const isCatalogLoading = (state: RootState) => state.catalog.isLoading;
