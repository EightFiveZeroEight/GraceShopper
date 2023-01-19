import React, { useEffect, useState } from "react";
import { fetchCartItems } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../products/productsSlice";
import { Link } from "react-router-dom";

function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const localCartArr = [];

  const [localCart, setLocalCart] = useState([]);
  const cartArr = localCart[0];

  //add cart to the store****
  const theCart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    const cartItems = localStorage.getItem("local-cart");
    const arrOfCartItems = JSON.parse(cartItems); // works
    localCartArr.push(arrOfCartItems);

    setLocalCart((localCart) => [...localCart, arrOfCartItems]);

    dispatch(fetchCartItems(id));
  }, []);

  return (
    <>
      <ol>
        {isLoggedIn && theCart[0] ? (
          theCart[0].products.map((singleItem, index) => {
            let theCart = (
              <ul key={index}>
                <div className="cart-item-container">
                  <li className="list-item">Name: {singleItem.name}</li>
                  <li className="list-item">Price: {singleItem.price}</li>
                  <li className="list-item">
                    Quantity Desired: {singleItem.cartItems.quantity}
                  </li>
                  <li className="list-item">
                    Price: {singleItem.cartItems.quantity * singleItem.price}
                  </li>
                </div>
                <br />
              </ul>
            );
            return theCart;
          })
        ) : (
          <ul>
            {console.log(cartArr)}
            {cartArr && cartArr.length
              ? cartArr.map((item, idx) => {
                  console.log(item);
                  let theCart = (
                    <ul key={idx}>
                      <div className="cart-item-container">
                        <li className="list-item">Name: {item.product.name}</li>
                        <li className="list-item">Price: {item.product.price}</li>
                        <li className="list-item">Count: {item.count}</li>
                        <li className="list-item">Total:{item.count * item.product.price}</li>
                        <br />
                      </div>
                    </ul>
                  );
                  return theCart;
                })
              : null}
          </ul>
        )}
      </ol>
      <button>
        <Link to="/checkout">Checkout</Link>
      </button>
    </>
  );
}

export default Cart;
