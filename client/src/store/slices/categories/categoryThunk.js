import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";

export const fetchCategories = createAsyncThunk("api/categories", async () => {
  const response = await axios.get("/api/categories");
  return { categories: response.data };
});
