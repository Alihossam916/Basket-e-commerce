// Components
import ResponsiveDrawer from "./sideCategory";
import ProductsList from "./productsList";

// MUI Components
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Pagination from "@mui/material/Pagination";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  changeFilter,
  changePage,
  resetPagination,
} from "../features/filterSlice";

export default function Products() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const categories = [
    "groceries",
    "fragrances",
    "smartphones",
    "laptops",
    "skin-care",
    "home-decoration",
  ];

  const availability = ["In Stock", "Out of Stock"];

  // Pagination handler
  const handlePageChange = (event, page) => {
    dispatch(changePage(page));
    // Scroll to top when page changes
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

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
  return (
    <main className="flex flex-col lg:flex-row gap-10 my-10 mx-12 lg:mx-20">
      {/* drawer category for small screens */}
      <ResponsiveDrawer />

      {/* sidebar category for large screens */}
      <aside className="hidden lg:block">
        <Box role="presentation">
          <List>
            <h3 className="ml-3 text-md font-semibold uppercase">
              Product Categories
            </h3>
            {/* categories */}
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
            <h3 className="ml-3 text-md font-semibold uppercase">
              Price Range
            </h3>
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
            <h3 className="ml-3 text-md font-semibold uppercase">
              Availability
            </h3>
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
          <img
            src="/imgs/starbucks happy hour.png"
            alt="starbucks happy hour"
            className="w-[280px]"
          />
        </Box>
      </aside>

      {/* Products Section */}
      <section className="w-full flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center bg-[url('/imgs/image.png')] bg-cover bg-center bg-no-repeat p-10 h-64 ">
          <h3 className="text-2xl">Organic Meals Prepared</h3>
          <h3 className="font-bold text-2xl">
            Delivered to <span className="text-primary">your Home</span>
          </h3>
          <p className="text-gray-400">
            Fully prepared & delivered nationwide.
          </p>
        </div>
        {/* filter */}
        <div className="hidden sm:flex flex-row items-center justify-between p-4 bg-gray-100">
          {/* add products count */}
          <p>{filter.counter} products</p>
          {/* products sorting */}
          <div>
            <label className="mr-2">Sort by:</label>
            <select
              className="border border-gray-300 p-2 rounded"
              defaultValue={filter.sorting}
              onChange={handleSorting}
            >
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="topRated">Top Rated</option>
            </select>
          </div>
        </div>
        {/* Products List */}
        <ProductsList />
        {/* Pagination */}
        <Pagination
        // return the total number of pages
          count={Math.ceil(filter.counter / filter.itemsPerPage)}
          page={filter.currentPage}
          onChange={handlePageChange}
          color="primary"
          className="mx-auto"
          disabled={filter.counter <= filter.itemsPerPage}
          showFirstButton
          showLastButton
        />
      </section>
    </main>
  );
}
