/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (thunkApi) => {
    const response = await axios.get("/api/products");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log("inside extra builders action.payload", action.payload);
      state.products = [...action.payload];
      console.log("This is inside of the extraReducers state", state.products);
    });
  },
});

export default productsSlice;
