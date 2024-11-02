import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";

const initialState = {
  products: [
    {
      id: null,
      name: null,
      image: null,
      category: null,
      price: null,
      stock: null,
      created: null,
    },
  ],
  loading: false,
  selectedCategory: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.products = products;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setCategoryFilter } = productSlice.actions;

export default productSlice.reducer;
