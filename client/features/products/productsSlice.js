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

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id) => {
    console.log('before thunk singleProduct')
    const response = await axios.get(`/api/products/${id}`)
    console.log('***response', response)
    return response.data
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    singleProduct: {},
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      const products = action.payload
      state.products = products
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      const singleProduct = action.payload
      state.singleProduct = singleProduct
    }
  }});

export default productsSlice.reducer;
