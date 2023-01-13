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

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  const { data } = await axios.get("/api/users/");
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    user: [],
  },
  reducers: {},
  extraReducers: {
    [fetchSingleUser.fulfilled]: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    [fetchAllUsers.fulfilled]: (state, action) => {
      const allUsers = action.payload;
      state.allUsers = [...allUsers];
    },
  },
});

export default usersSlice.reducer;
