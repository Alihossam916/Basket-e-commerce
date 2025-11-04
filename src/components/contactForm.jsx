import { useState } from "react";

// MUI components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-3/4 md:w-full max-w-2xl mt-10 bg-white shadow-xl rounded-lg p-8">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us</h2>
        <p className="text-gray-600 leading-relaxed">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-8">
          <TextField
            name="phone"
            label="Phone Number"
            type="tel"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-8">
          <TextField
            name="message"
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className="normal-case! text-white! px-8! py-3!"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
