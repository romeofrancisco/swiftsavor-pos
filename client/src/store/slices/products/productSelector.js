import { createSelector } from "@reduxjs/toolkit";

export const filterProducts = (category) =>
  createSelector(
    (state) => state.products.products, 
    (state) => state.products.selectedCategory, 
    (products, selectedCategory) => {
      if (selectedCategory) {
        return products.filter((product) => product.category == selectedCategory);
      }
      return products;
    }
  );
