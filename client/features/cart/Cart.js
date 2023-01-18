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
  const cartArr = localCart[0]
  console.log(cartArr, "@@@@@@@@@@@@@");

  //add cart to the store****
  const theCart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {

    const cartItems = localStorage.getItem("local-cart");
    const arrOfCartItems = JSON.parse(cartItems); // works
    console.log(arrOfCartItems, "&&&&&&&&&");
    localCartArr.push(arrOfCartItems);

    // setArray(oldArray => [...oldArray,newValue] );

    setLocalCart((localCart) => [...localCart, arrOfCartItems]);

    dispatch(fetchCartItems(id));
  }, []);

  // console.log('@@@@@@@@@@@',test,'@@@@@@@@@@@')

  // console.log(theCart[0] ? theCart[0].products : null, "At the cart.js");
  // If we don't use a ternary it won't render as it is undefined during the mount stage of useEffect.
  // Cannot use hooks in a function
  // might be doing eager loading, ask it would give back all objects associated with the cart id.
  //

  // function handleOnClick() {

  // }

  return (
    <>
      <ol>
        {isLoggedIn && theCart[0] ? (
          theCart[0].products.map((singleItem, index) => {
            let theCart = (
              <ul key={index}>
                <li>Name: {singleItem.name}</li>
                <li>Price: {singleItem.price}</li>
                <li>Quantity Desired: {singleItem.cartItems.quantity}</li>
                <li>
                  Price: {singleItem.cartItems.quantity * singleItem.price}
                </li>
                <br />
              </ul>
            );
            return theCart;
          })
        ) : (
          <ul>
            {cartArr && cartArr.length ? cartArr.map((item, idx)=>{
              return (
                <li key={idx}>{item.name}</li>
              )
            }): null}
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


// var array = [[1, 2], [3, 4]];
// var double = x => x * 2;
// var doubledArray = array.map( subarray => subarray.map( double ));

// {
/* <>
<ol>
{localCart.map((item, idx)=>{
  return <li key={idx}>{item[idx].name}</li>
})}
</ol>
</>
)}
<button>
<Link to="/checkout">Checkout</Link>
</button>
</ol> */
// }
