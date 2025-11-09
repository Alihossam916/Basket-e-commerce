// import MUI components
import Rating from "@mui/material/Rating";

export default function BestSeller() {
  const itemsData = [
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 3.3,
      reviews: 13,
      price: 4.99,
      offer: 70,
    },
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 1,
      reviews: 2,
      price: 4.99,
      offer: 10,
    },
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 3,
      reviews: 10,
      price: 4.99,
      offer: 20,
    },
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 4.5,
      reviews: 5,
      price: 4.99,
      offer: 50,
    },
    {
      imgSrc: "/imgs/image_2025-10-25_155107367.png",
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie…",
      stock: "IN STOCK",
      rating: 4.5,
      reviews: 5,
      price: 4.99,
      offer: 50,
    },
  ];

  return (
    <section className="flex flex-col items-center w-full gap-4 my-10">
      <h2 className="font-bold text-2xl self-start">Best Sellers</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 w-full p-4">
        {itemsData.map((data, index) => {
          return (
            <button key={index} className="relative flex flex-col justify-self-center gap-2 w-[250px] p-4 border rounded items-start text-center cursor-pointer hover:scale-90 transition-all duration-300">
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
              <p className="absolute top-2 left-2 bg-primary text-white py-1 px-2 rounded">
                {data.offer}%
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
