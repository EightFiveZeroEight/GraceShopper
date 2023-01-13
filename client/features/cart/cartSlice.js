/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartItems = createAsyncThunk(
  "fetchCartItems",
  async (id) => {
    const response = await axios.get(`/api/cart/${id}`)
  }

//   const cartSlice = createSlice({

//   })
// )
