// import MUI components
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { addToList, removeFromList } from "../features/wishlistSlice";

// react imports
import { useState } from "react";

// react components
import ProductDetails from "./productDetails";

export default function BestSeller() {
  const items = useSelector((state) => state.api.value);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const dispatch = useDispatch();

  const topRatedItems = items
    .filter((item) => item.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // product details handlers

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="flex flex-col items-center w-full gap-4 my-10">
        <h2 className="font-bold text-2xl self-start">Best Sellers</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 w-full p-4">
          {topRatedItems.map((product) => {
            return (
              <div
                key={product.id}
                className="relative flex flex-col justify-self-center gap-2 w-[250px] p-4 border rounded items-start text-center cursor-pointer hover:scale-90 transition-all duration-300"
              >
                <button
                  onClick={() => openProductDetails(product)}
                  className="cursor-pointer"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
                <h3 className="font-bold text-md text-left">{product.title}</h3>
                <p className="text-md font-semibold text-stock-available">
                  {product.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
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
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                </div>
                <p
                  className={
                    "absolute top-2 left-2 bg-primary text-white py-1 px-2 rounded" +
                    (product.discountPercentage.toFixed(0) != 0
                      ? ""
                      : " hidden")
                  }
                >
                  {product.discountPercentage.toFixed(0)}%
                </p>
                <Checkbox
                  className="absolute! top-1 right-2"
                  color="secondary"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  checked={wishlistItems[product.id] ? true : false}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(addToList(product));
                    } else {
                      dispatch(removeFromList(product));
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={closeProductDetails}
        />
      )}
    </>
  );
}
