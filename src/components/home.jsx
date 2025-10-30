// import MUI components
import { Button } from "@mui/material";

// import react-router components
import { Link } from "react-router";

// import react components
import Categories from "./categories";
import SpecialOffers from "./offers";
import BestSeller from "./bestSeller";

export default function Home() {
  return (
    <main className="my-10 mx-10 lg:mx-40">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start gap-3 bg-[url('/imgs/image_2025-10-24_152603136(1).png')] bg-cover bg-center bg-no-repeat p-10 rounded">
          <h3>
            Exclusive Offer
            <span className="text-[#038E42] bg-[#00B85333] ms-4">-20% OFF</span>
          </h3>
          <h1 className="text-4xl font-bold">Gerthesim Tend Inder Prosur</h1>
          <h3>Only this week. Don't miss...</h3>
          <p>
            from <span className="text-price-sale text-3xl">$7.99</span>
          </p>
          <Link to="/products">
            <Button
              variant="contained"
              color="secondary"
              className="text-white! rounded-4xl! py-2! px-8!"
            >
              Shop Now
            </Button>
          </Link>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-3 text-white bg-[url('/imgs/image_2025-10-24_152719839.png')] bg-cover bg-center bg-no-repeat p-10 rounded">
          <h3>
            Exclusive Offer
            <span className="text-[#038E42] bg-[#00B85333] ms-4">-20% OFF</span>
          </h3>
          <h1 className="text-4xl font-bold">Gerthesim Tend Inder Prosur</h1>
          <h3>Only this week. Don't miss...</h3>
          <p>
            from <span className="text-price-sale text-3xl">$6.45</span>
          </p>
          <Link to="/products">
            <Button
              variant="contained"
              color="primary"
              className="text-white! rounded-4xl! py-2! px-8!"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <Categories />
      <SpecialOffers />
      <div className="w-full flex flex-row items-center justify-center flex-wrap lg:flex-nowrap gap-4 my-10">
        <div className=" flex flex-col justify-center items-start gap-3 bg-[url('/imgs/bread_image.png')] bg-cover bg-center bg-no-repeat p-10 rounded">
          <h1 className="text-4xl font-bold">Organic Breakfast</h1>
          <h3 className="text-price-sale">Only this week. Don't miss...</h3>
          <Link to="/products">
            <Button
              variant="contained"
              color="secondary"
              className="text-white! bg-[#FF6048]! rounded-4xl! py-2! px-8!"
            >
              Shop Now
            </Button>
          </Link>
        </div>
        <div className=" flex flex-col justify-center items-start gap-3 bg-[url('/imgs/organic_baby_food.png')] bg-cover bg-center bg-no-repeat p-10 rounded">
          <h1 className="text-4xl font-bold">Organic Baby Food</h1>
          <h3 className="text-price-sale">Only this week. Don't miss...</h3>
          <Link to="/products">
            <Button
              variant="contained"
              color="secondary"
              className="text-white! bg-[#FF6048]! rounded-4xl! py-2! px-8!"
            >
              Shop Now
            </Button>
          </Link>
        </div>
        <div className=" flex flex-col justify-center items-start gap-3 text-white bg-[url('/imgs/tomato_image.png')] bg-cover bg-center bg-no-repeat p-10 rounded">
          <h1 className="text-4xl font-bold">Organic Tomato</h1>
          <h3>Only this week. Don't miss...</h3>
          <Link to="/products">
            <Button
              variant="contained"
              color="primary"
              className="text-white! rounded-4xl! py-2! px-8!"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      {/* add best sellers */}
      <BestSeller />
    </main>
  );
}
