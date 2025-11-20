// import MUI components
import Rating from "@mui/material/Rating";

// redux imports
import { useSelector } from "react-redux";

export default function SpecialOffers() {
  const items = useSelector((state) => state.api.value);
  const topDiscountedItems = items.filter((item) => item.discountPercentage > 15);

  return (
    <section className="flex flex-col items-center w-full gap-4">
      <h2 className="text-primary font-bold text-2xl">Special Offers</h2>
      {/* offers container */}
      <div className="flex flex-row justify-start gap-4 w-full overflow-x-auto border-4 border-price-sale p-4">
        {/* Example offer items */}

        {topDiscountedItems.map((data) => {
          return (
            <button
              key={data.id}
              className="relative flex flex-col gap-2 w-[230px] p-4 border rounded items-start justify-around text-center cursor-pointer hover:scale-90 transition-all duration-300"
            >
              <img src={data.thumbnail} alt={data.title} />
              <h3 className="font-bold text-md text-left">{data.title}</h3>
              <p className="text-md font-semibold text-stock-available">
                {data.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
              </p>
              <div className="flex flex-row justify-center items-center gap-2">
                <Rating
                  name="read-only"
                  defaultValue={data.rating}
                  precision={0.5}
                  readOnly
                />
                <p>({data.rating})</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-gray-400 font-bold text-lg line-through">
                  ${data.price}
                </p>
                <p className="text-sm text-white bg-price-sale p-1 rounded">
                  ${ (data.price * (1 - data.discountPercentage / 100)).toFixed(2) }
                </p>
              </div>
              <p className="absolute top-2 left-2 bg-primary text-white py-1 px-2 rounded">
                {data.discountPercentage}%
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
