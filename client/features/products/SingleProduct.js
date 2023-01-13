import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "./productsSlice";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {

  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    console.log(fetchSingleProduct)
    dispatch(fetchSingleProduct(id))
  }, [])

  const product = useSelector(state => state.products.singleProduct)
  console.log('**********product:', product)

  return (
   <div>
    <h1>{product.name}</h1>
    {/* <div>{product.price}</div> */}
   </div>
  );
};


export default SingleProduct
