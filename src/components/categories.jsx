// import react router components
import { Link } from "react-router";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, resetFilter } from "../features/filterSlice";

// import MUI icons
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FragranceIcon from "@mui/icons-material/Spa";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import HomeIcon from "@mui/icons-material/Home";

export default function Categories() {
  const items = useSelector((state) => state.api.value);
  const filter = useSelector((state) => state.filter.filter);
  const itemsCountPerCategory = (category) => {
    return items.filter((item) => item.category === category).length;
  };

  const dispatch = useDispatch();

  const handleCategory = (category) => {
    // Reset filter before applying new category filter
    dispatch(resetFilter());
    // Apply new category filter
    dispatch(
      changeFilter({
        ...filter,
        category: [category],
      })
    );
  };

  const categories = [
    {
      name: "groceries",
      icon: LocalGroceryStoreIcon,
      itemCount: itemsCountPerCategory("groceries"),
    },
    {
      name: "fragrances",
      icon: FragranceIcon,
      itemCount: itemsCountPerCategory("fragrances"),
    },
    {
      name: "smartphones",
      icon: SmartphoneIcon,
      itemCount: itemsCountPerCategory("smartphones"),
    },
    {
      name: "laptops",
      icon: LaptopIcon,
      itemCount: itemsCountPerCategory("laptops"),
    },
    {
      name: "skin-care",
      icon: FaceRetouchingNaturalIcon,
      itemCount: itemsCountPerCategory("skin-care"),
    },
    {
      name: "home-decoration",
      icon: HomeIcon,
      itemCount: itemsCountPerCategory("home-decoration"),
    },
  ];
  return (
    // modify once you have dynamic data
    <section className="my-10 w-full flex flex-row flex-wrap justify-center rounded">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <Link
            to="/products"
            key={category.name}
            onClick={() => handleCategory(category.name)}
          >
            <div className="flex flex-col border-2 border-gray-300 justify-center items-center p-4 gap-2 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer w-48">
              <div className="flex justify-center items-center h-32 w-full">
                <IconComponent sx={{ fontSize: 80 }} className="text-primary" />
              </div>
              <h3 className="font-bold text-text-primary capitalize">
                {category.name}
              </h3>
              <p>{category.itemCount} items</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
