// MUI components
import Rating from "@mui/material/Rating";
import CircularProgress from "@mui/material/CircularProgress";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../features/filterSlice";

// react imports
import { useEffect } from "react";

export default function ProductsList() {
  const dispatch = useDispatch();
  const {
    value: selectedProducts,
    loading,
    error,
  } = useSelector((state) => state.api);

  const filter = useSelector((state) => state.filter.filter);
  const {
    category,
    priceRange,
    availability,
    sorting,
    currentPage,
    itemsPerPage,
  } = filter;

  // Apply filters
  let filteredProducts = selectedProducts;

  // Category filter
  if (category.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      category.includes(product.category)
    );
  }
  // Price range filter
  if (
    priceRange.min > 0 &&
    priceRange.max > 0 &&
    priceRange.max >= priceRange.min
  ) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price >= priceRange.min && product.price <= priceRange.max;
    });
  }else if (priceRange.min > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price >= priceRange.min;
    });
  }else if (priceRange.max > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price <= priceRange.max;
    });
  }
  // Availability filter
  if (availability.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      const status = product.stock > 0 ? "In Stock" : "Out of Stock";
      return availability.includes(status);
    });
  }
  // Sorting
  switch (sorting) {
    case "lowToHigh":
      filteredProducts = filteredProducts
        .slice()
        .sort((a, b) => a.price - b.price);
      break;
    case "highToLow":
      filteredProducts = filteredProducts
        .slice()
        .sort((a, b) => b.price - a.price);
      break;
    case "topRated":
      filteredProducts = filteredProducts
        .slice()
        .sort((a, b) => b.rating - a.rating);
      break;
  }

  // Apply pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Update counter in filter state whenever filteredProducts changes
  useEffect(() => {
    dispatch(
      changeFilter({
        ...filter,
        counter: filteredProducts.length,
      })
    );
  }, [filteredProducts.length]);

  return (
    <section className={"flex flex-wrap justify-center items-center gap-6 p-4"}>
      {/* show loading until products are fetched */}
      {loading && <CircularProgress size={"150px"} color="primary" />}
      {/* show error if there is an error */}
      {error && (
        <p className="text-red-500 font-bold text-2xl capitalize">
          product not found
        </p>
      )}
      {/* map through products here */}
      {paginatedProducts.map((product, index) => {
        return (
          <div
            id={`product-${index}`}
            key={index}
            className="relative flex flex-col justify-self-center gap-2 w-[220px] p-4 border border-gray-300 rounded items-start text-center hover:scale-90 transition-all duration-300"
          >
            <button className="cursor-pointer">
              <img src={product.thumbnail} alt={product.title} />
            </button>
            <h3 className="font-bold text-md text-left">{product.title}</h3>
            <p className="text-md font-semibold uppercase text-stock-available">
              {product.stock ? `In stock` : `Out of stock`}
            </p>
            <div className="flex flex-row justify-center items-center gap-2">
              <Rating
                name="read-only"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
              />
              <p>({product.rating})</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="text-gray-400 font-bold text-lg line-through">
                ${product.price}
              </p>
              <p className="text-sm text-white bg-price-sale p-1 rounded">
                $
                {(
                  product.price -
                  (product.price * product.discountPercentage.toFixed(0)) / 100
                ).toFixed(2)}
              </p>
            </div>
            {/* item counter */}
            <div className="flex flex-row items-center justify-center p-2 gap-2 w-full mt-2">
              {/* add item counter functionality */}
              <input
                className="bg-gray-200 hover:bg-gray-400 transition-colors duration-300 p-1 rounded-l-xl w-full cursor-pointer"
                type="button"
                value="-"
              />
              <span className="w-full">0</span>
              <input
                className="bg-amber-400 hover:bg-amber-600 transition-colors duration-300 p-1 rounded-r-xl w-full cursor-pointer"
                type="button"
                value="+"
              />
            </div>
            <p className="absolute top-2 left-2 bg-primary text-white py-1 px-2 rounded">
              {product.discountPercentage.toFixed(0)}%
            </p>
          </div>
        );
      })}
    </section>
  );
}
