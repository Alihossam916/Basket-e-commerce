// MUI componenets
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// components
import CheckoutForm from "./checkoutForm";

// redux imports
import { useSelector } from "react-redux";

// react imports
import { useState } from "react";

export default function Checkout() {
  // cart state from redux
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = Object.values(cartItems).reduce((total, item) => {
    return (
      total + item.price * (1 - item.discountPercentage.toFixed(0) / 100) * item.quantity.toFixed(2)
    );
  }, 0).toFixed(2);
  const [shippingFee, setShippingFee] = useState(0);
  return (
    <main className="checkout-container flex flex-col lg:flex-row justify-center items-start gap-6 my-10 mx-5 sm:mx-20 lg:mx-50">
      <CheckoutForm shippingFee={shippingFee} setShippingFee={setShippingFee} />
      <aside className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Order Summary</h2>
        <div className="flex flex-col items-center gap-4">
          {/* Ordered items will be displayed here */}
          {Object.entries(cartItems).map(([productId, item]) => {
            return (
              <div
                key={productId}
                className="flex justify-between items-center w-full"
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover"
                    />
                    <span className="absolute text-white bg-black rounded-full py-1 px-2 text-xs -top-1 -right-1">
                      {item.quantity}
                    </span>
                  </div>

                  <span className="font-semibold capitalize text-lg">
                    {item.title}
                  </span>
                </div>
                <span className="font-semibold text-lg">
                  $
                  {(
                    item.price *
                    (1 - item.discountPercentage.toFixed(0) / 100) *
                    item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            );
          })}
          {/* -- Ordered items will be displayed here -- */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">Subtotal</span>
          <span className="font-semibold text-lg">
            ${totalPrice}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">Shipping</span>
          <span className="text-lg">{shippingFee == 0 ? `FREE` : `$${shippingFee}`}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl">Total</span>
          <span className="font-bold text-xl">
            ${(parseFloat(totalPrice) + parseFloat(shippingFee) + 2.46).toFixed(2)}
          </span>
        </div>
        <p className="text-gray-500">Including $2.46 in taxes</p>
      </aside>
    </main>
  );
}
