// import MUI components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// import react router
import { Link, useNavigate } from "react-router";

// import react hooks
import { useState, useEffect } from "react";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/userSlice";

// uuid import 
import { v4 as uuidv4 } from "uuid";

export default function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    id: uuidv4(),
    username: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Navigate when signed up successfully
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    dispatch(register(signUpData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 mx-auto max-w-[400px] p-10 shadow-xl"
    >
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-2xl font-semibold">Sign Up</h2>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
          value={signUpData.username}
          onChange={handleChange}
          required
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={signUpData.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={signUpData.password}
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
          Sign Up
        </Button>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/login">
          <button className="text-primary cursor-pointer hover:underline">
            Already have an account?
          </button>
        </Link>
      </div>
    </form>
  );
}
