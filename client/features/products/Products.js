/* eslint-disable no-unused-vars */
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
	console.log(products);

	return (
		<div>
			<h1> Products </h1>
			<div className="card-container">
				{products && products.length
					? products.map((product) => {
							return (
								<div className="card" key={product.id}>
									<div className="card-top">
                  <Link to={`/products/${product.id}`}>
                    <img src={product.image} />
                  </Link>
                  </div>
									<div className="card-bottom">
										<div className="product-name">
											<Link to={`/products/${product.id}`}>{product.name}</Link>
										</div>
										<div className="product-price">
											<Link to={`/products/${product.id}`}>
												{product.price}
											</Link>
										</div>
									</div>
								</div>
							);
					  })
					: null}
			</div>
		</div>
	);
};
export default Products;
