// react-router components
import { Link } from "react-router";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../features/cartSlice";

export default function Cart() {
  // cart state from redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  // user state from redux
  const { isLoggedIn } = useSelector((state) => state.user);

  const hasItems = Object.keys(cartItems).length > 0;

  const totalPrice = Object.values(cartItems).reduce((total, item) => {
    return total + item.price * (1 - item.discountPercentage.toFixed(0) / 100).toFixed(2) * item.quantity;
  }, 0);

  // cart handlers
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeItem(product));
  };
  const handleClearItem = (product) => {
    dispatch(clearItem(product));
  };

  return (
    <main className="cartItems-container flex flex-col justify-center items-center gap-6 my-10 mx-10 lg:mx-50">
      {!hasItems ? (
        <h1 className="text-4xl text-center my-40">Cart Is Empty</h1>
      ) : (
        <div className="w-full">
          {/* each item in the cart */}
          {Object.entries(cartItems).map(([productId, item]) => {
            return (
              <div
                key={productId}
                className="w-full grid grid-cols-1 md:grid-cols-4 place-items-center border-b border-gray-400 md:border-none p-4 gap-4 md:gap-2"
              >
                <div className="flex justify-start items-center gap-4">
                  <img src={item.thumbnail} alt="item image" className="w-20" />
                  <p className="text-center overflow-ellipsis">{item.title}</p>
                </div>
                {/* item counter */}
                <div className="flex items-center gap-4">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() => handleRemoveFromCart(item)}
                    className="flex justify-center items-center border border-gray-300 p-2 w-10 h-10 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="p-2">{item.quantity}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex justify-center items-center border border-gray-300 p-2 w-10 h-10 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    +
                  </button>
                </div>
                {/* add the offer of each item when applicable */}
                <p className="text-center">
                  $
                  {(
                    item.price *
                    (1 - item.discountPercentage.toFixed(0) / 100) *
                    item.quantity
                  ).toFixed(2)}
                </p>
                <button
                  onClick={() => handleClearItem(item)}
                  className="border border-red-500 text-red-500 p-2 rounded hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            );
          })}
          <hr className="invisible md:visible md:block w-full border-t border-gray-300 my-4" />
          <div className="w-full flex flex-row flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-0">
            <div className="flex flex-row justify-center items-center gap-4">
              <Link to={isLoggedIn ? "/checkout" : "/login"}>
                <button className="bg-primary text-white py-2 px-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
                  Checkout
                </button>
              </Link>
              <Link to="/">
                <button className="bg-primary text-white py-2 px-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
                  Continue Shopping
                </button>
              </Link>
            </div>
            <h2 className="text-2xl font-semibold">
              Total Price: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </main>
  );
}
