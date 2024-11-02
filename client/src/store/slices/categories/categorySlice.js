import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoryThunk";

const initialState = {
  categories: [
    {
      id: null,
      name: null,
      image: null,
      created: null,
    },
  ],
  loading: false,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const { categories } = action.payload;
        state.categories = categories;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
