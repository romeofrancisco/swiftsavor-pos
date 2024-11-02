import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";

export const fetchProducts = createAsyncThunk("api/products", async () => {
  const response = await axios.get("/api/products");
  return { products: response.data };
});
