import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './itemList'
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const dispatch= useDispatch();
  const cartItems= useSelector((store)=>store.cart.items)
  console.log(cartItems);

  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  
  return (
    <div className='text-center m-4 p-4'>
    {cartItems.length===0 && <h1 className='text-2xl font-bold p-2'>Your cart is empty!</h1>}
    <h1 className='text-2xl font-bold p-2'>Cart</h1>
    <div className='w-6/12 m-auto border border-gray-200 rounded-lg shadow'>
    <button className='p-2 m-2 bg-emerald-600 rounded-lg text-white' onClick={handleClearCart}>Clear Cart</button>
    <ItemList items={cartItems}/>
    </div>
      
    </div>
  )
}

export default Cart
