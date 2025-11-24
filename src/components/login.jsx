// import MUI components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// import react router
import { Link, useNavigate } from "react-router";

// import react hooks
import { useState, useEffect } from "react";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../features/userSlice";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Navigate when there's no error
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    dispatch(logIn(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 mx-auto max-w-[400px] p-10 shadow-xl"
    >
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-2xl font-semibold">Login</h2>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
          value={formData.username}
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
      <div className="flex justify-center mt-4">
        <Link to="/signup">
          <button className="text-primary cursor-pointer hover:underline">
            Don't have an account?
          </button>
        </Link>
      </div>
    </form>
  );
}
