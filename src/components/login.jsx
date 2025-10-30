// import MUI components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// import react hooks
import { useState } from "react";

export default function LoginForm(){
      const [formData, setFormData] = useState({
        userName: "",
        password: "",
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
    
    return(
      <form onSubmit={handleSubmit} className="my-10 mx-auto max-w-[400px] p-10 shadow-xl">
        <div className="flex flex-col items-center gap-10">
            <h2 className="text-2xl font-semibold">Login</h2>
          <TextField
            name="userName"
            label="Username"
            variant="outlined"
            fullWidth
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
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
            className="normal-case! text-white! w-full! py-3!"
          >
            Login
          </Button>
        </div>
      </form>
    );
}