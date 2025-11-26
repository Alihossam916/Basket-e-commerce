// import MUI components
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { addToList, removeFromList } from "../features/wishlistSlice";

export default function SpecialOffers() {
  const items = useSelector((state) => state.api.value);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  
  const dispatch = useDispatch();

  const topDiscountedItems = items.filter(
    (item) => item.discountPercentage > 15
  );

  return (
    <section className="flex flex-col items-center w-full gap-4">
      <h2 className="text-primary font-bold text-2xl">Special Offers</h2>
      {/* offers container */}
      <div className="flex flex-row justify-start gap-4 w-full overflow-x-auto border-4 border-price-sale p-4">
        {/* Example offer items */}

        {topDiscountedItems.map((product) => {
          return (
            <button
              key={product.id}
              className="relative flex flex-col gap-2 w-[230px] p-4 border rounded items-start justify-around text-center cursor-pointer hover:scale-90 transition-all duration-300"
            >
              <img src={product.thumbnail} alt={product.title} />
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
                  (product.discountPercentage.toFixed(0) != 0 ? "" : " hidden")
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
            </button>
          );
        })}
      </div>
    </section>
  );
}
