import React, { useEffect } from "react";
import { fetchCartItems } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../products/productsSlice";

function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();

  //add cart to the store****
  const theCart = useSelector((state) => state.cart);
  const userId = useSelector((state)=> state.auth.me.id)

  useEffect(() => {
    dispatch(fetchCartItems(id));
  }, []);

  console.log(theCart[0] ? theCart[0].products  : null, "At the cart.js");
  // If we don't use a ternary it won't render as it is undefined during the mount stage of useEffect.
  // Cannot use hooks in a function
  // might be doing eager loading, ask it would give back all objects associated with the cart id.
  //



  return (
    <ol>
      {theCart[0] ? theCart[0].products.map((singleItem, index) => {
        let theCart = (
          <ul key={index}>
            <li>Name: {singleItem.name}</li>
            <li>Price: {singleItem.price}</li>
            <li>Quantity Desired: {singleItem.cartItems.quantity}</li>
            <li>Price: {singleItem.cartItems.quantity * singleItem.price}</li>
          </ul>
        );
        return theCart;
      }): null }
    </ol>
  );
}

export default Cart;
