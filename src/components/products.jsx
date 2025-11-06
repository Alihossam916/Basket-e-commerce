import ResponsiveDrawer from "./sideCategory";

export default function Products() {
    return (
        <div className="text-center my-10">
            <ResponsiveDrawer />
            <h1 className="text-4xl font-bold">Products Page</h1>
            <p className="mt-4 text-lg">Welcome to our Products page. Here you will find a variety of items to choose from.</p>
        </div>
    );
}