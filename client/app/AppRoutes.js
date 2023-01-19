import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import SingleProduct from "../features/products/SingleProduct";
import User from "../features/userProfile/User";
import AllUsers from "../features/userProfile/AllUsers";
import Cart from "../features/cart/Cart";
import Checkout from "../features/checkout/Checkout";
/**
 * COMPONENT
 */



const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          {/* this is a catch all for unfound routes */}
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* single product route  */}
          <Route path="/products/:id" element={<SingleProduct />} />
          {/* single User route  */}
          <Route path="/users/:id" element={<User />} />
          {/* ALL User route  */}
          <Route path="/users" element={<AllUsers />} />
          {/* Cart route */}
          <Route path="/users/:id/cartitems" element={<Cart />} />
          {/* Checkout page */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      ) : (
        <Routes>
          {/* <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          /> */}

          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/products" element={<h1>TEST</h1>} />
          <Route path="users/cartitems" element={<Cart />}/>

          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
