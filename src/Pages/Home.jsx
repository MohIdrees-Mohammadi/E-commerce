import React from "react";
import heroBanner from "../images/hero-image.jpg";
// import womenBanner from "../images/women-category-C5Ba_yVW.jpg";
// import menBanner from "../images/men-category-kks6z1Lv.jpg";
// import accessories from "../images/accessories-category-B24ti-2S.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Feature from "@/components/Feature";
import { products } from "../utils/data";
import Shop from "@/components/Shop";
import { shopProducts } from "@/utils/newData";

const Home = () => {
  return (
    <>
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute">
          <img
            src={heroBanner}
            alt="Heritage Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-linear-to-r from-red-900/80 to-red-100/20" />
        </div>

        <div className="relative  h-full w-3xl flex flex-col justify-center items-center">
          <div className="w-[600px] ml-100 ">
            <h1 className="text-6xl text-white  font-bold font-serif">
              Celebrate Heritage Through Fashion
            </h1>
            <p className="text-2xl mt-7 text-gray-100">
              Discover authentic national dresses and cultural attire that blend
              tradition with modern elegance.
            </p>
            <div className="mt-5 flex">
              <button className="bg-yellow-500 cursor-pointer flex px-4 py-2 rounded items-center gap-3 font-semibold">
                Shop Collection
                <FaArrowRight />
              </button>

              <button className="bg-white cursor-pointer flex px-4 py-2 rounded items-center gap-3 ml-3 font-semibold">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-200/30 sm:w-full md:w-full h-[1400px] md:h-[600px] px-[120px]  md:mt-0 overflow-hidden">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl text-red-950  font-bold font-serif justify-center items-center flex mt-19">
            Shop By Category
          </h1>
          <p className="text-red-950 text-[17px] flex justify-center md:justify-center ">
            Explore our curated collections of traditional attire and
            accessories
          </p>
          <Shop shopProducts={shopProducts} />
        </div>
      </section>

      <section className="h-[80vh]">
        <h1>Featured Collection</h1>
        <p>Handpicked pieces celebrating cultural craftsmanship</p>

        <Feature products={products} />
      </section>
    </>
  );
};

export default Home;
