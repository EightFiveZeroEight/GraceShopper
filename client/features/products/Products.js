import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../products/productsSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.products.products);
  console.log("*******", products);

  return (
    <div>
      <h1> Products </h1>
      {products && products.length
        ? products.map((product) => {
            console.log("begins mappinng");
            return (
              <div key={product.id}>
                {console.log("enters second div")}
                {products.name}
                <Link to={`/products/${product.id}`}>
                  {product.name} We could put a image and all the details in
                  this link
                </Link>
                <div>{product.quantity}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Products;
