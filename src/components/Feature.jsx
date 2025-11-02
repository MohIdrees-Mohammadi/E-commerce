import React from "react";

const Feature = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10">
      {products.map((product) => (
        <div className="bg-white rounded-2xl w-[300px] h-140" key={product.Id}>
          <img
            className="w-full rounded-t-2xl h-[390px] hover:scale-105 transition-transform duration-500"
            src={product.imageUrl}
            alt={product.name}
          />
          <div className="p-4">
            <h2 className="font-family-serif font-bold text-[18px] text-[#450817]">
              {product.name}
            </h2>
            <p className="font-family-serif text-[18px] text-[#8A5C67]">
              {product.description}
            </p>
            <p className="font-family-serif text-[24px text-white">
              Price: ${product.price}
            </p>
            <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
