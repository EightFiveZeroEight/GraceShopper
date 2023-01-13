import React, {useEffect} from 'react'
import { fetchCartItems } from './cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Cart() {
  const { id } = useParams()
const dispatch = useDispatch()

//add cart to the store****
const cartItems = useSelector(state=>state.cart)
console.log(cartItems)

  useEffect(() => {
    dispatch(fetchCartItems(id));
  }, []);

  return (
    <div>
      hello
    </div>
  )
}

export default Cart
