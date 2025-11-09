// Components
import ResponsiveDrawer from "./sideCategory";
import ProductsList from "./productsList";

// MUI Components
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Products() {
  const categories = [
    "category 1",
    "category 2",
    "category 3",
    "category 4",
    "category 5",
  ];

  const availability = ["In Stock", "Low Stock", "Out of Stock"];

  const itemsData = [
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 3.3,
      reviews: 13,
      price: 4.99,
      offer: 70,
    },
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 1,
      reviews: 2,
      price: 4.99,
      offer: 10,
    },
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 3,
      reviews: 10,
      price: 4.99,
      offer: 20,
    },
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 4.5,
      reviews: 5,
      price: 4.99,
      offer: 50,
    },
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 4.5,
      reviews: 5,
      price: 4.99,
      offer: 50,
    },
  ];

  return (
    <main className="flex flex-col lg:flex-row gap-10 my-10 mx-12 lg:mx-20">
      {/* drawer for small screens */}
      <ResponsiveDrawer />
      {/* sidebar for large screens */}
      <aside className="hidden lg:block">
        <Box role="presentation">
          <List>
            <h3 className="ml-3 text-md font-semibold uppercase">
              Product Categories
            </h3>
            {categories.map((text) => (
              <ListItem key={text}>
                <FormControlLabel
                  control={<Checkbox />}
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
                  placeholder="0"
                  className="w-full bg-gray-200 border border-black p-2"
                />
              </div>
              <span className="">-</span>
              <div className="flex flex-col">
                <label className="text-md mb-2">To</label>
                <input
                  type="number"
                  placeholder="0"
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
                  control={<Checkbox />}
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
      <div className="w-full flex flex-col gap-10">
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
          <p>products number</p>
          <div>
            <label className="mr-2">Sort by:</label>
            <select className="border border-gray-300 p-2 rounded">
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="topRated">Top Rated</option>
            </select>
          </div>
        </div>
        {/* Products List */}
        <ProductsList itemsData={itemsData} />

        {/* Pagination */}
        <Pagination count={10} color="primary" className="mx-auto" />
      </div>
    </main>
  );
}
