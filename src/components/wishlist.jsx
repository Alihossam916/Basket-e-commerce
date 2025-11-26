// redux imports
import { useSelector, useDispatch } from "react-redux";
import { removeFromList, clearList } from "../features/wishlistSlice";

// mui imports
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <main className="flex flex-col gap-4 my-10 mx-10 lg:mx-40">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Wishlist</h1>
        <Button variant="contained" disabled={Object.values(wishlistItems).length === 0} className="text-white! py-2!" onClick={() => dispatch(clearList())}>Clear Wishlist</Button>
      </div>
      {Object.values(wishlistItems).length <= 0 ? (
        <p className="mx-auto text-2xl font-semibold mt-10 mb-20">
          Your wishlist is currently empty.
        </p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 w-full p-4">
          {Object.values(wishlistItems).map((product) => (
            <button
              key={product.id}
              className="relative flex flex-col justify-self-center gap-2 w-[250px] p-4 border rounded items-start text-center cursor-pointer hover:scale-90 transition-all duration-300"
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
                checked={true}
                onChange={() => {
                  dispatch(removeFromList(product));
                }}
              />
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
