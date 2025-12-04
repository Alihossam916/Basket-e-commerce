// react imports
import { useEffect, useCallback, useState } from "react";

// MUI components
import Rating from "@mui/material/Rating";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FormControlLabel from "@mui/material/FormControlLabel";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cartSlice";
import { addToList, removeFromList } from "../features/wishlistSlice";

export default function ProductDetails({ product, onClose }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [displayedImage, setDisplayedImage] = useState(product.images[0] || null);

  // cart handlers
  const handleAddToCart = useCallback(
    (product) => {
      dispatch(addItem(product));
    },
    [dispatch]
  );

  const handleRemoveFromCart = useCallback(
    (product) => {
      dispatch(removeItem(product));
    },
    [dispatch]
  );

  // Get quantity for a specific product
  const getProductQuantity = useCallback(
    (productId) => {
      return cartItems[productId]?.quantity || 0;
    },
    [cartItems]
  );

  // Display selected image
  const handleDisplayImage = (img) => {
    setDisplayedImage(img);
    console.log(img);
    
  };

  // ✅ Prevent body scroll when modal is open
  useEffect(() => {
    // Save current overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Disable scroll
    document.body.style.overflow = "hidden";

    // Cleanup: restore scroll when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // ✅ Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!product) {
    return null; // Don't render anything if no product
  }

  // ✅ Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <section
      className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-11/12 max-w-4xl h-5/6 max-h-screen bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* ✅ Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
          aria-label="Close"
        >
          <CloseIcon className="w-6 h-6 cursor-pointer" />
        </button>

        {/* ✅ Scrollable content */}
        <div className="h-full overflow-y-auto p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image */}
            <div className="flex-1">
              <img
                src={displayedImage}
                alt={product.title}
                loading="lazy"
                decoding="async"
                className="w-full h-96 object-cover border border-gray-300 rounded-lg"
              />
              {/* Additional images if available */}
              {product.images && (
                <div className="flex gap-2 mt-4 overflow-x-auto p-2">
                  {product.images.slice(0, 4).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      onClick={() => handleDisplayImage(img)}
                      loading="lazy"
                      decoding="async"
                      className="w-20 h-20 object-cover border border-gray-300 rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title || product.name}
              </h1>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage.toFixed(0) / 100)
                  ).toFixed(2)}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                    -{Math.round(product.discountPercentage)}% OFF
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Stock status */}
              <p
                className={`font-semibold ${
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.stock > 0 ? `In Stock` : "Out of Stock"}
              </p>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2">
                  <Rating
                    name="read-only"
                    defaultValue={product.rating}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-gray-600">({product.rating}/5)</span>
                </div>
              )}

              {/* Category and Brand */}
              <div className="space-y-2">
                {product.category && (
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {product.category}
                  </p>
                )}
                {product.brand && (
                  <p>
                    <span className="font-semibold">Brand:</span>{" "}
                    {product.brand}
                  </p>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col items-center gap-4 pt-4">
                <div className="flex flex-row items-center justify-center p-2 gap-2 w-full mt-2">
                  {/* add item counter functionality */}
                  <input
                    className="bg-gray-200 hover:bg-gray-400 transition-colors duration-300 p-1 rounded-l-xl w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    type="button"
                    value="-"
                    disabled={getProductQuantity(product.id) === 0}
                    onClick={() => handleRemoveFromCart(product)}
                  />
                  <span className="w-full text-center">
                    {getProductQuantity(product.id)}
                  </span>
                  <input
                    className="bg-amber-400 hover:bg-amber-600 transition-colors duration-300 p-1 rounded-r-xl w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    type="button"
                    value="+"
                    disabled={
                      getProductQuantity(product.id) === 99 ||
                      product.stock === 0
                    }
                    onClick={() => handleAddToCart(product)}
                  />
                </div>
                <FormControlLabel
                  className="w-full flex justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  control={
                    <Checkbox
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
                  }
                  label="Wishlist"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
