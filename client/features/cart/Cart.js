import React, { useEffect } from "react";
import { fetchCartItems } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../products/productsSlice";

function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();

  //add cart to the store****
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems(id));
  }, []);

  const singleProduct = useSelector((state) => state.products);
  // Cannot use hooks in a function
  // might be doing eager loading, ask it would give back all objects associated with the cart id.
  //

  const grabThisProductById = (id) => {
    console.log(id, "Inside GrabThisProductById");
    dispatch(fetchSingleProduct(id));
    // Cannot use hooks in a function
    return singleProduct;
  };

  return (
    <ul>
      {cartItems.map((singleItem) => {
        return singleItem.quantity;
      })}
    </ul>
  );
}

export default Cart;
