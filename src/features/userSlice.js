import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  isLoggedIn: JSON.parse(localStorage.getItem("currentUser")) ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const user = state.users.find(
        (u) =>
          u.username === action.payload.username &&
          u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
        state.isLoggedIn = true;
        alert("Login successful!");
      } else {
        alert("Invalid username or password.");
      }
    },
    register: (state, action) => {
      const existingUser = state.users.find(
        (user) => user.email === action.payload.email || user.username === action.payload.username
      );
      if (!existingUser) {
        state.users.push(action.payload);
        localStorage.setItem("users", JSON.stringify(state.users));
        state.currentUser = action.payload;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
        alert("Registration successful!");
        state.isLoggedIn = true;
      } else {
        alert("This username or email already exists.");
      }
    },
    logOut: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, register, logOut } = userSlice.actions;

export default userSlice.reducer;
