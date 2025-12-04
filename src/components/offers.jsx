// import MUI components
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
// ✅ Add arrow icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { addToList, removeFromList } from "../features/wishlistSlice";

// react imports
// ✅ Add useRef for scroll control
import { useState, useRef } from "react";

// react components
import ProductDetails from "./productDetails";

export default function SpecialOffers() {
  const items = useSelector((state) => state.api.value);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const dispatch = useDispatch();

  const topDiscountedItems = items.filter(
    (item) => item.discountPercentage > 15
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Add scroll ref and state for arrow visibility
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // product details handlers
  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  // ✅ Scroll handlers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Scroll by ~1.5 product widths
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Scroll by ~1.5 product widths
        behavior: "smooth",
      });
    }
  };

  // ✅ Update arrow visibility based on scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  return (
    <>
      <section className="flex flex-col items-center w-full gap-4">
        <h2 className="text-primary font-bold text-2xl">Special Offers</h2>

        {/* ✅ Container with arrows */}
        <div className="relative w-full">
          {/* ✅ Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Scroll left"
            >
              <ArrowBackIosIcon className="text-gray-700" />
            </button>
          )}

          {/* ✅ Right Arrow */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Scroll right"
            >
              <ArrowForwardIosIcon className="text-gray-700" />
            </button>
          )}

          {/* ✅ Offers container with scroll tracking */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex flex-row justify-start gap-4 w-full overflow-x-auto border-4 border-price-sale p-4 scroll-smooth"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {/* Example offer items */}

            {topDiscountedItems.map((product) => {
              return (
                <div
                  key={product.id}
                  className="relative flex flex-col gap-2 w-[230px] p-4 border rounded items-start justify-around text-center cursor-pointer hover:scale-90 transition-all duration-300 flex-shrink-0"
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
                  <h3 className="font-bold text-md text-left">
                    {product.title}
                  </h3>
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
                        (1 - product.discountPercentage.toFixed(0) / 100)
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
