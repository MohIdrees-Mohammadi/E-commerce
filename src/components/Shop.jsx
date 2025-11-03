import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ shopProducts }) => {
  return (
    <div className="flex flex-col md:flex-row mt-8 gap-7  md:gap-9 justify-center ">
      {shopProducts.map((product) => (
        <Link to={Home}>
          <div className="relative  md:w-[400px] md:h-80 rounded-2xl md:rounded-2xl  overflow-hidden  transition-all">
            <div className="overflow-hidden w-full h-full  aspect-4/3 hover:scale-105 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                src={product.imgUrl}
                alt={product.name}
              />
              <div className="absolute inset-0  bg-linear-to-t from-red-800/80 to-red-100/20 " />
            </div>
            <div className="absolute flex flex-col mt-55 md:mt-55 gap-2 ml-5 inset-1">
              <h1 className="text-2xl text-gray-100  font-bold font-serif flex">
                {product.descraptions}
              </h1>
              <p className=" text-[14px] text-gray-100 flex  ">
                {product.catagory}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Shop;
