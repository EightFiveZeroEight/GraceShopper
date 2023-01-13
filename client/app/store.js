import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import productsSlice from "../features/products/productsSlice";
import userSlice from "../features/userProfile/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSlice,
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
