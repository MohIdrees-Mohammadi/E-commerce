import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/utils/data";
import Feature from "@/components/Feature";

const Shop = () => {
  const [categoryActive, setCategoryActive] = React.useState("All products");
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const [sortBy, setSortBy] = React.useState("Featured");

  const handleReset = () => {
    setCategoryActive("All products");
    setPriceRange([0, 100]);
    setSortBy("Featured");
  };

  console.log(products);
  return (
    <div>
      <HeroBanner
        title="Our Collection"
        description="Shop our collection of authentic national dresses and cultural attire that blend tradition with modern elegance."
      />
      <div className=" flex justify-center gap-6 min-h-[70vh]">
        {/* left */}
        <div className="w-[20%] ">
          {/* card */}
          <div className="bg-white sticky top-22  m-10 p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h1 className="font-serif text-xl font-bold">Filter</h1>

            <div className="mt-5">
              <span className="font-semibold">category</span>

              <div
                onClick={() => setCategoryActive("All products")}
                className={
                  categoryActive == "All products"
                    ? "border text-white px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white bg-red-800"
                    : "border px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white"
                }
              >
                All products
              </div>
              <div
                onClick={() => setCategoryActive("women")}
                className={
                  categoryActive == "women"
                    ? "border px-4 py-2 font-semibold cursor-pointer rounded-md mt-2  hover:bg-green-400 hover:text-white bg-red-800 text-white"
                    : "border px-4 py-2 font-semibold cursor-pointer rounded-md mt-2  hover:bg-green-400 hover:text-white"
                }
              >
                Women's
              </div>
              <div
                onClick={() => setCategoryActive("men")}
                className={
                  categoryActive == "men"
                    ? "border text-white px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white bg-red-800"
                    : "border px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white"
                }
              >
                Men's
              </div>
              <div
                onClick={() => setCategoryActive("accessories")}
                className={
                  categoryActive == "accessories"
                    ? "border text-white px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white bg-red-800"
                    : "border px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white"
                }
              >
                Accessories
              </div>
            </div>

            {/* price range */}
            <div className="mt-10 p-2 flex flex-col gap-4">
              <span className="font-semibold">
                Price Range: ${priceRange[0]} - {priceRange[1]}
              </span>
              <Slider
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
                min={0}
                max={100}
                step={1}
              />
            </div>

            <button
              onClick={handleReset}
              className="mt-10 bg-red-100 border border-red-300 px-4 py-2 rounded-md w-full"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* right  */}
        <div className="w-[68%]  py-13">
          {/* sort header  */}
          <div className="flex justify-between">
            <span>Showing 8 products</span>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Sort By: </span>
              <Select onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LW">Price: Low to High</SelectItem>
                  <SelectItem value="HL">Price: High to Low</SelectItem>
                  <SelectItem value="AZ">Name: A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="pt-10">
            {/* products grid  */}

            <Feature products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
