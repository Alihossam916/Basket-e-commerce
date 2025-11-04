// MUI componenets
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useState } from "react";

export default function CheckoutForm() {
  const [checkoutFormData, setCheckoutFormData] = useState({
    fName: "",
    lName: "",
    contactInfo: "",
    address: "",
  });

  const handleChange = (e) => {
    setCheckoutFormData({
      ...checkoutFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", checkoutFormData);
  };

  return (
    <form
      className="w-full border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 p-6"
      onSubmit={handleSubmit}
    >
      {/* contact info */}
      <div className="flex flex-col gap-4 mb-6">
        <h3 className="text-xl font-semibold">Contact</h3>
        <TextField
          id="outlined-basic"
          label="Email or mobile phone number"
          variant="outlined"
          color="primary"
          value={checkoutFormData.name}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Email me with news and offers"
        />
      </div>
      {/* shipping address */}
      <div className="flex flex-col gap-4 mb-6">
        <h3 className="text-xl font-semibold">Delivery</h3>
        <div className="flex gap-4">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            color="primary"
            className="w-full"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            color="primary"
            className="w-full"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          color="primary"
          className="w-full"
        />
        <TextField
          id="outlined-basic"
          label="Apartment, suite, etc. (optional)"
          variant="outlined"
          color="primary"
          className="w-full"
        />
        <div className="flex gap-4">
          <TextField
            id="outlined-basic"
            label="Postal Code (Optional)"
            variant="outlined"
            color="primary"
            className="w-full"
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            color="primary"
            className="w-full"
          />
        </div>
        <FormControlLabel
          control={<Checkbox />}
          label="Save this information for next time"
        />
      </div>
      {/* Shipping Method */}
      <div className="flex flex-col gap-4 mb-6">
        <h3 className="text-xl font-semibold">Shipping Method</h3>
        <select className="border border-gray-300 p-4 rounded">
          <option value="standard">Standard Shipping - Free</option>
          <option value="express">Express Shipping - $5.99</option>
        </select>
      </div>
      {/* Payment Method */}
      <div className="flex flex-col gap-4 mb-6">
        <h3 className="text-xl font-semibold">Payment Method</h3>
        <select className="border border-gray-300 p-4 rounded">
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button className="bg-primary text-white py-2 px-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
        Complete Order
      </button>
    </form>
  );
}
