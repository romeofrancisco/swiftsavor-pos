import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";
import { getToken, setToken, removeToken } from "../../../utils/tokenHelper";

export const fetchUser = createAsyncThunk(
  "auth/user",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      axios.defaults.headers.Authorization = `Bearer ${token.access}`;
      const response = await axios.get("/auth/user");
      return {
        user: response.data,
        tokens: token,
      };
    } catch (e) {
      removeToken();
      console.log(e);
      return rejectWithValue("");
    }
  }
);

export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await axios.post("/auth/login", payload);
  setToken(response.data.tokens);
  return response.data;
});

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
      try {
        const token = getToken();
        axios.defaults.headers.Authorization = `Bearer ${token.access}`;
        await axios.post("/auth/logout", {"refresh":token.refresh});
        removeToken()
      } catch (e) {
        removeToken();
        return rejectWithValue("");
      }
    }
  );
