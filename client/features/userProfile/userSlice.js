/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk(
  "fetchSingleUser",
  async (id) => {
    console.log(`Are we hitting thunk?`, id);
    const response = await axios.get(`/api/users/${id}`);
    console.log(`Are we hitting thunk?`, response);

    return response.data;
  }
);

// export const fetchSingleUser = createAsyncThunk(
//   "fetchSingleUser",
//   async (id, id) => {
//     const response = await axios.get("/api/users/");
//     return response.data;
//   }
// );

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      console.log("inside extra builders action.payload", action.payload);
      state.users = [...action.payload];
      console.log("This is inside of the extraReducers state", state.users);
    });
  },
});

export default usersSlice.reducer;
