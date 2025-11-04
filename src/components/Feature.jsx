import React from "react";
import { CiShoppingCart } from "react-icons/ci";


const Feature = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ">
      {products.map((product) => (
        <div className="bg-white border border-gray-100 shadow rounded-2xl w-[300px] " key={product.Id}>
          <img
            className="w-full rounded-t-2xl h-[390px] hover:scale-105 transition-transform duration-500 object-cover"
            src={product.imageUrl}
            alt={product.name}
          />
          <div className="p-4">
            <h2 className="font-family-serif font-bold text-[18px] mb-3 text-[#450817]">
              {product.name}
            </h2>
            <p className="font-family-serif text-[18px] mb-3 text-[#8A5C67]">
              {product.description}
            </p>
            <div className="flex justify-between text-amber-400">
            <p className="font-sans text-[15px]">
              Price: {product.price}$
            </p>

            <h1 className="mb-3">
              {product.category}
            </h1>
            </div>
            <button className="mt-10 flex justify-center gap-5 items-center bg-red-500 w-full  hover:text-amber-400 hover:bg-amber-50 text-white py-2 px-4 rounded-md">
              Add to Cart <CiShoppingCart className="text-[30px] " />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
