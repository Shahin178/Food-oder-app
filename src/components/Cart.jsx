import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      {cartItems.length === 0 ? (
        <h1 className="text-2xl font-bold p-2">Your cart is empty!</h1>
      ) : (
        <>
          <h1 className="text-2xl font-bold p-2">Cart</h1>
          <div className="w-6/12 m-auto border border-gray-200 rounded-lg shadow p-4">
            {/* Button aligned to the right */}
            <div className="flex justify-end">
              <button
                className="px-4 mx-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white shadow-md transition duration-200"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            {/* Item list */}
            <ItemList items={cartItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
