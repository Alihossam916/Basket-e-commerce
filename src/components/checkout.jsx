// MUI componenets
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// components
import CheckoutForm from "./checkoutForm";

export default function Checkout() {

  return (
    <main className="checkout-container flex flex-col lg:flex-row justify-center items-start gap-6 my-10 mx-5 sm:mx-20 lg:mx-50">
      <CheckoutForm />
      <aside className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Order Summary</h2>
        <div className="flex flex-col items-center gap-4">
          {/* Ordered items will be displayed here */}
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="/imgs/image_2025-10-25_155107367.png"
                  alt=""
                  className="w-16 h-16 object-cover"
                />
                <span className="absolute text-white bg-black rounded-full py-1 px-2 text-xs -top-1 -right-1">
                  1
                </span>
              </div>

              <span className="font-semibold capitalize text-lg">
                chicken samples
              </span>
            </div>
            <span className="font-semibold text-lg">$9.99</span>
          </div>
          {/* -- Ordered items will be displayed here -- */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">Subtotal</span>
          <span className="font-semibold text-lg">$9.99</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">Shipping</span>
          <span className="text-lg">FREE</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl">Total</span>
          <span className="font-bold text-xl">$9.99</span>
        </div>
        <p className="text-gray-500">Including $2.46 in taxes</p>
      </aside>
    </main>
  );
}
