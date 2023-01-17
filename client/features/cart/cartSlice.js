/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartItems = createAsyncThunk("fetchCartItems", async (id) => {
  try {
    const { data } = await axios.get(`/api/cart/${id}/products`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [], //array of products in cart
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      console.log(action.payload, "Here is inside of the cartSlice");
      return action.payload;
    });
  },
});

export default cartSlice.reducer;
