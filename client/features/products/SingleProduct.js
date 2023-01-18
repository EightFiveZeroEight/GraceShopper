/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "./productsSlice";
import { addCartItemAsync } from "../cart/cartSlice";
import { Link, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const localCart = {
  name: "local-cart",
  cartItems: [],
};

// === LOCAL STORAGE HELPER FUNCTIONS
const asyncLocalStorage = {
  // functions to add and get local storage
  setItem: async function (key, value) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key) {
    await null;
    return localStorage.getItem(key);
  },
};

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const product = useSelector((state) => state.products.singleProduct);
  const user = useSelector((state) => state.auth.me);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  //  ==== ON ADD TO CART ====
  const clickHandler = () => {
    //if they're logged in -----
    setCount(1)

    if (isLoggedIn) { //true
      console.log('you are logged in')
      dispatch(addCartItemAsync({ id, count, user }));
    } else {
      // --- if they're a guest
      //push multiple items to arr based off count state
      let i = 0;
      while (i < count) {
        localCart.cartItems.push(product);
        i++;
      }


      //add the local cart obj / arr to local storage
      asyncLocalStorage.setItem(
        localCart.name,
        JSON.stringify(localCart.cartItems)
      );

      <Link to="/signup"></Link>
    }
  };

  // ==== ON COMPONENT LOAD
  useEffect(() => {
    console.log(fetchSingleProduct);
    dispatch(fetchSingleProduct(id));
  }, []);

  return (
    <div className="single-product-container">
      <div className="single-product-left">
        <img src={product.image} alt="" className="single-product-image" />
      </div>
      <div className="single-product-right">
        {/* <div className="circle"></div> */}
        <div className="product-top">
          <h2 className="single-product-name">{product.name}</h2>
          <h3 className="single-product-price">${product.price}</h3>
        </div>
        <p className="product-description ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ea
          repellat nobis voluptatibus laudantium nulla totam officiis.
          Exercitationem repudiandae officia quis atque sequi qui inventore in
          culpa, sunt maiores quam. Nisi placeat omnis iusto aut. Facilis, ab
          sunt sit dolores iure nemo temporibus voluptates voluptate aperiam
          maiores, ducimus voluptatum maxime ea dolor atque blanditiis tenetur
          animi dolorum eaque neque quam.
        </p>
        <div className="product-bottom">
          <div className="product-bottom-left">
            <AddIcon onClick={() => setCount(count + 1)} className="add" />
            <p className="count">{count}</p>
            <RemoveIcon
              className="remove"
              onClick={() => (count == 1 ? null : setCount(count - 1))}
            />
          </div>
          <div className="product-bottom-right">
            <Button
              className="add-to-cart"
              variant="text"
              startIcon={<ShoppingCartRoundedIcon />}
              onClick={() => clickHandler()}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
