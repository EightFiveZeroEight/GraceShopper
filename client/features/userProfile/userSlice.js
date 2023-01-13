/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk(
  "fetchSingleUser",
  async (id) => {
    const { data } = await axios.get(`/api/users/${id}`);
    // console.log(`Are we hitting thunk?`, data);
    // Here we are getting the the entire fulfilled request, including the payload.
    return data;
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
    user: [],
  },
  reducers: {},
  extraReducers: {
    [fetchSingleUser.fulfilled]: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
  },
});

export default usersSlice.reducer;
