import { useState } from "react";

// react-router components
import { Link } from "react-router";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "chicken samples",
      price: 9.99,
      quantity: 1,
      image: "/imgs/image_2025-10-25_155107367.png",
    },
  ]);

  return (
    <main className="cartItems-container flex flex-col justify-center items-center gap-6 my-10 mx-10 md:mx-20 lg:mx-50">
      {cartItems.length === 0 ? (
        <h1 className="text-4xl text-center my-40">Cart Is Empty</h1>
      ) : (
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between md:justify-around items-center gap-4 sm:gap-0 w-full">
            <div className="flex justify-center items-center gap-4">
              <img src={cartItems[0].image} alt="item image" className="w-20" />
              <p className="text-center">{cartItems[0].name}</p>
            </div>
            {/* item counter */}
            <div className="flex items-center gap-4">
              <button className="flex justify-center items-center border border-gray-300 p-2 w-10 h-10 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
                -
              </button>
              <span className="p-2">{cartItems[0].quantity}</span>
              <button className="flex justify-center items-center border border-gray-300 p-2 w-10 h-10 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
                +
              </button>
            </div>
            <p className="text-center">${cartItems[0].price.toFixed(2)}</p>
            <button className="border border-red-500 text-red-500 p-2 rounded hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer">
              Remove
            </button>
          </div>
          <hr className="w-full border-t border-gray-300 my-4" />
          <div className="w-full flex flex-row flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-0">
            <div className="flex flex-row justify-center items-center gap-4">
              <Link to="/checkout">
                <button className="bg-primary text-white py-2 px-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
                  Checkout
                </button>
              </Link>
              <Link to="/">
                <button className="bg-primary text-white py-2 px-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
                  Continue Shopping
                </button>
              </Link>
            </div>
            <h2 className="text-2xl font-semibold">Total Price: $9.99</h2>
          </div>
        </div>
      )}
    </main>
  );
}
