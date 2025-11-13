// MUI components
import Rating from "@mui/material/Rating";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";

// Redux imports
import { useSelector } from "react-redux";

export default function ProductsList() {
  const {
    value: filteredProducts,
    loading,
    error,
  } = useSelector((state) => state.api);

  return (
    <>
      <section
        className={
          loading == true || error != null
            ? "flex justify-center items-center p-6"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        }
      >
        {/* show loading until products are fetched */}
        {loading && <CircularProgress size={"150px"} color="primary" />}
        {/* show error if there is an error */}
        {error && (
          <p className="text-red-500 font-bold text-2xl capitalize">
            product not found
          </p>
        )}
        {/* map through products here */}
        {filteredProducts.map((product, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col justify-self-center gap-2 w-[full] p-4 border border-gray-300 rounded items-start text-center hover:scale-90 transition-all duration-300"
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
                    (product.price * product.discountPercentage.toFixed(0)) /
                      100
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
      {/* Pagination */}
      <Pagination count={10} color="primary" className="mx-auto" />
    </>
  );
}
