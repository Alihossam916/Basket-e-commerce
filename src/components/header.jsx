// import react hooks
import { useState } from "react";

import { Link, NavLink } from "react-router";

// MUI components
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

//MUI icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

// Header component
import TemporaryDrawer from "./sideNav";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../features/userSlice";

export default function Header() {
  // login state from redux
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // cart state from redux
  const cartItems = useSelector((state) => state.cart.items);
  const itemsCount = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = Object.values(cartItems)
    .reduce((total, item) => {
      return (
        total +
        item.price *
          (1 - item.discountPercentage.toFixed(0) / 100) *
          item.quantity.toFixed(2)
      );
    }, 0)
    .toFixed(2);

  // profile menu state
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const profileOpen = Boolean(profileAnchorEl);

  // profile menu handlers
  const handleProfileMenuClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };
  // logout handler
  const handleLogout = () => {
    // add logout functionality here
    dispatch(logOut());
    setProfileAnchorEl(null);
  };

  return (
    <header className="w-full">
      <div className="w-full flex flex-row gap-10 justify-center py-2 bg-primary text-white text-sm">
        <p className="text-center">
          Due to current circumstances, there may be slight delays in order
          processing
        </p>
      </div>

      <div className="w-full flex flex-col items-center gap-4 mt-4 shadow-md">
        {/* Logo, Search Bar, profile and shopping cart */}
        <div className="w-full flex flex-row justify-around md:justify-center items-center gap-0 sm:gap-6 p-2">
          <TemporaryDrawer />
          <Link to="/">
            <button className="cursor-pointer">
              <img
                className="h-16 mt-2 mb-2"
                src="/imgs/image_2025-10-23_003201168.png"
                alt="Logo"
              />
            </button>
          </Link>
          <TextField
            id="filled-basic"
            className="w-[55%] hidden! md:flex!"
            label="Search for products"
            variant="filled"
          />
          <div className="flex flex-row gap-2">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={profileOpen ? "true" : undefined}
              onClick={handleProfileMenuClick}
            >
              <AccountCircleOutlinedIcon
                sx={{ fontSize: "30px" }}
                className="text-text-primary"
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={profileAnchorEl}
              open={profileOpen}
              onClose={handleProfileMenuClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              {currentUser ? (
                <div>
                  <MenuItem>
                    <NavLink to="/profile">Profile</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/wishlist">Wishlist</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <NavLink to="/">Logout</NavLink>
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={handleProfileMenuClose}>
                    <NavLink to="/login">Log In</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleProfileMenuClose}>
                    <NavLink to="/signup">Sign Up</NavLink>
                  </MenuItem>
                </div>
              )}
            </Menu>
            <div className="flex flex-row justify-center items-center gap-2">
              <p>${totalPrice}</p>
              <Link to="/cart">
                <button className="relative bg-[#FFF1EE] text-price-sale p-2 rounded-4xl cursor-pointer">
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
                    {itemsCount}
                  </span>
                  <ShoppingBasketOutlinedIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="w-full flex flex-row items-center gap-4 text-text-primary py-3 text-lg">
            <li>
              <NavLink
                to="/"
                className="hover:text-primary focus:bg-secondary p-2 rounded-2xl"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="hover:text-primary focus:bg-secondary p-2 rounded-2xl"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-primary focus:bg-secondary p-2 rounded-2xl"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-primary focus:bg-secondary p-2 rounded-2xl"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
