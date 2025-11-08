import ResponsiveDrawer from "./sideCategory";

// MUI Components
import Pagination from "@mui/material/Pagination";

export default function Products() {
  return (
    <main className="flex flex-col gap-10 text-center my-10 mx-12">
      <ResponsiveDrawer />
      <div className="flex flex-col justify-center items-center bg-[url('/imgs/image.png')] bg-cover bg-center bg-no-repeat p-10 h-64 ">
        <h3 className="text-2xl">Organic Meals Prepared</h3>
        <h3 className="font-bold text-2xl">
          Delivered to <span className="text-primary">your Home</span>
        </h3>
        <p className="text-gray-400">Fully prepared & delivered nationwide.</p>
      </div>
      <Pagination count={10} color="primary" className="mx-auto"/>
    </main>
  );
}
