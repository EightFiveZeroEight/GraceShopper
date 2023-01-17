/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "./productsSlice";
import { Link, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    console.log(fetchSingleProduct);
    dispatch(fetchSingleProduct(id));
  }, []);

  const product = useSelector((state) => state.products.singleProduct);
  console.log("**********product:", product);

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
              onClick={() => setCount(count - 1)}
            />
          </div>
          <div className="product-bottom-right">
            <Button
              className="add-to-cart"
              variant="text"
              startIcon={<ShoppingCartRoundedIcon />}
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
