// import MUI components
import Rating from "@mui/material/Rating";

// redux imports
import { useSelector } from "react-redux";

export default function BestSeller() {
  const items = useSelector((state) => state.api.value);
  const topRatedItems = items.filter((item) => item.rating > 4).sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <section className="flex flex-col items-center w-full gap-4 my-10">
      <h2 className="font-bold text-2xl self-start">Best Sellers</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 w-full p-4">
        {topRatedItems.map((data) => {
          return (
            <button
              key={data.id}
              className="relative flex flex-col justify-self-center gap-2 w-[250px] p-4 border rounded items-start text-center cursor-pointer hover:scale-90 transition-all duration-300"
            >
              <img src={data.thumbnail} alt={data.title} />
              <h3 className="font-bold text-md text-left">{data.title}</h3>
              <p className="text-md font-semibold text-stock-available">{data.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}</p>
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
