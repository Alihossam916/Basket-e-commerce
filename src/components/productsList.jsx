import Rating from "@mui/material/Rating";

export default function ProductsList({ itemsData }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* map through products here */}
      {itemsData.map((data, index) => {
        return (
          <button
            key={index}
            className="relative flex flex-col justify-self-center gap-2 w-[full] p-4 border border-gray-300 rounded items-start text-center cursor-pointer hover:scale-90 transition-all duration-300"
          >
            <img src={data.imgSrc} alt={data.name} />
            <h3 className="font-bold text-md text-left">{data.name}</h3>
            <p className="text-xs text-stock-available">{data.stock}</p>
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
                ${(data.price - (data.price * data.offer) / 100).toFixed(2)}
              </p>
            </div>
            {/* item counter */}
            <div className="flex flex-row items-center justify-center p-2 gap-2 w-full mt-2">
              {/* add item counter functionality */}
              <button className="bg-gray-200 p-1 rounded-l-xl w-full cursor-pointer">
                -
              </button>
              <span className="w-full">0</span>
              <button className="bg-amber-400 p-1 rounded-r-xl w-full cursor-pointer">
                +
              </button>
            </div>
            <p className="absolute top-2 left-2 bg-primary text-white py-1 px-2 rounded">
              {data.offer}%
            </p>
          </button>
        );
      })}
    </section>
  );
}
