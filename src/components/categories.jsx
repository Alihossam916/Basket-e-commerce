// import react router components
import { Link } from "react-router";

export default function Categories() {
    const categories = [
            { name: "Category 1", imgSrc: "../../public/imgs/image_2025-10-24_152603136(1).png", itemCount: 10 },
            { name: "Category 2", imgSrc: "../../public/imgs/image_2025-10-24_152719839.png", itemCount: 8 },
            { name: "Category 3", imgSrc: "../../public/imgs/image_2025-10-24_152603136(1).png", itemCount: 15 },
            { name: "Category 4", imgSrc: "../../public/imgs/image_2025-10-24_152719839.png", itemCount: 12 },
            { name: "Category 5", imgSrc: "../../public/imgs/image_2025-10-24_152719839.png", itemCount: 20 },
        ];
    return (
        // modify once you have dynamic data
        <section className="my-10 w-full flex flex-row flex-wrap justify-center rounded">
            {categories.map((category) => (
                <Link to={`/category/${category.name}`} key={category.name}>
                    <div className="flex flex-col border-2 border-gray-300 justify-center items-center p-4 gap-2 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer">
                        <img className="w-full h-32 object-cover" src={category.imgSrc} alt={category.name} />
                        <h3 className="font-bold text-text-primary">{category.name}</h3>
                        <p>{category.itemCount} items</p>
                    </div>
                </Link>
            ))}
        </section>
    )
}