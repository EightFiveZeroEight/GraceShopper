import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../products/productsSlice'

import { Link } from 'react-router-dom'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const products = useSelector(state => state.products.products)
  console.log('*******', products)

  return(
    <div>
      <h1> Products </h1>
      {products.map(product => {
        <div key={product.id}>
          <Link to={`/products/${product.id}`} > {product.name}</Link>
          <div>{product.quantity}</div>
        </div>
      })}
    </div>
  )

}
export default Products
