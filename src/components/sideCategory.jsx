// MUI components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IconButton, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// react imports
import { useState } from "react";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, resetPagination } from "../features/filterSlice";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const categories = [
    "groceries",
    "fragrances",
    "smartphones",
    "laptops",
    "skin-care",
    "home-decoration",
  ];

  const availability = ["In Stock", "Out of Stock"];

  // ------ filtering handlers ------
  // sorting handler
  const handleSorting = (e) => {
    dispatch(
      changeFilter({
        ...filter,
        sorting: e.target.value,
      })
    );
    dispatch(resetPagination());
  };
  // category handler
  const handleCategory = (category) => {
    let updatedCategories;

    if (filter.category.includes(category)) {
      // Remove category if it's already selected
      updatedCategories = filter.category.filter((cat) => cat !== category);
    } else {
      // Add category if it's not selected
      updatedCategories = [...filter.category, category];
    }

    dispatch(
      changeFilter({
        ...filter,
        category: updatedCategories,
      })
    );
    dispatch(resetPagination());
  };
  // price range handler
  const handlePriceRange = (min, max) => {
    dispatch(
      changeFilter({
        ...filter,
        priceRange: { min: parseFloat(min), max: parseFloat(max) },
      })
    );
    dispatch(resetPagination());
  };
  // availability handler
  const handleAvailability = (status) => {
    let updatedAvailability;

    if (filter.availability.includes(status)) {
      // Remove status if it's already selected
      updatedAvailability = filter.availability.filter((av) => av !== status);
    } else {
      // Add status if it's not selected
      updatedAvailability = [...filter.availability, status];
    }

    dispatch(
      changeFilter({
        ...filter,
        availability: updatedAvailability,
      })
    );
    dispatch(resetPagination());
  };

  const DrawerList = (
    <Box role="presentation">
      {/* Add close button */}
      <Toolbar>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      {/* add product categories */}
      <List>
        <h3 className="ml-3 text-md font-semibold uppercase">
          Product Categories
        </h3>
        {categories.map((text) => (
          <ListItem key={text}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter.category.includes(text)} // Show checked state
                  onChange={() => {
                    handleCategory(text);
                  }}
                />
              }
              label={text}
              className="capitalize"
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Price Range */}
      <List>
        <h3 className="ml-3 text-md font-semibold uppercase">Price Range</h3>
        <div className="flex items-end m-3 gap-2 max-w-[350px]">
          <div className="flex flex-col">
            <label className="text-md mb-2">From</label>
            <input
              type="number"
              value={filter.priceRange.min}
              onChange={(e) => {
                handlePriceRange(e.target.value, filter.priceRange.max);
              }}
              className="w-full bg-gray-200 border border-black p-2"
            />
          </div>
          <span className="">-</span>
          <div className="flex flex-col">
            <label className="text-md mb-2">To</label>
            <input
              type="number"
              value={filter.priceRange.max}
              onChange={(e) => {
                handlePriceRange(filter.priceRange.min, e.target.value);
              }}
              className="w-full bg-gray-200 border border-black p-2"
            />
          </div>
        </div>
      </List>
      <Divider />
      {/* Product Availability */}
      <List>
        <h3 className="ml-3 text-md font-semibold uppercase">Availability</h3>
        {availability.map((text) => (
          <ListItem key={text}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter.availability.includes(text)} // Show checked state
                  onChange={() => handleAvailability(text)}
                />
              }
              label={text}
              className="capitalize"
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* filter */}
        <div className="ml-3 p-2">
          <label className="mr-2">Sort by:</label>
          <select
            className="border border-gray-300 p-2 rounded"
            defaultValue={filter.sorting}
            onChange={handleSorting}
          >
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="topRated">Top Rated</option>
          </select>
        </div>
      </List>
      <img
        src="/imgs/starbucks happy hour.png"
        alt="starbucks happy hour"
        className="w-[280px] ml-3"
      />
    </Box>
  );

  return (
    <div>
      <IconButton
        className="flex justify-start! lg:hidden! bg-gray-100! w-full rounded-none!"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
