/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async (thunkApi) => {
    const response = await axios.get('/api/products')
    console.log('response:', response.data)
    return response.data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {},
  extraReducer: {
    [fetchProducts.fulfilled]: (state, action) => {
      const products = action.payload
      state.products = products
      return products
    }
  }
})

export default productsSlice
