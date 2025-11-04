import React from "react";
import heroBanner from "../images/hero-image.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Feature from "@/components/Feature";
import { products } from "../utils/data";
import Shop from "@/components/Shop";
import { shopProducts } from "@/utils/newData";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import TrustedPartenars from "@/components/TrustedPartenars";
import { partenars } from "@/utils/partenar";
import { FaStar } from "react-icons/fa";
import PeopleComment from "@/components/PeopleComment";
import { comments } from "@/utils/comments";
import { CiShoppingCart } from "react-icons/ci";


const Home = () => {
  return (
    <>
      <section className="relative h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Heritage Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-linear-to-r from-red-900/80 to-red-100/20" />
        </div>

        <div className="relative  h-full w-3xl flex flex-col justify-center items-center">
          <div className="w-[600px]">
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

      {/* SHOP BY CATAGORIES  */}
      <section className="bg-red-200/30 w-full h-[1400px] md:h-[600px] px-[120px]  md:mt-0 overflow-hidden">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl text-red-950  font-bold font-serif justify-center items-center flex mt-19">
            Shop By Category
          </h1>
          <p className="text-red-950 text-center text-[17px] flex justify-center md:justify-center ">
            Explore our curated collections of traditional attire and
            accessories
          </p>
          <Shop shopProducts={shopProducts} />
        </div>
      </section>
 {/* FEATURED COLLECTIONS  */}
<section className="pt-10 bg-[#E8E1D94C] flex flex-col justify-center items-center text-center px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold pb-2">
    Featured Collection
  </h1>
  <p className="text-base sm:text-lg md:text-xl font-serif text-[#8A5C67] pb-10 max-w-2xl">
    Handpicked pieces celebrating cultural craftsmanship
  </p>

  <Feature products={products} />

  {/* BUTTON VIEW ALL PRODUCTS */}
  <Link to="/shop">
    <button className="flex bg-[#b02d4e] text-[#FBF3E9] px-8 py-3 mt-6 mb-10 rounded-2xl cursor-pointer text-sm sm:text-base hover:bg-[#8A223D] transition">
      View All Products
      <IoArrowForward className="ml-3 size-5" />
    </button>
  </Link>
</section>

{/* OUR TRUSTED PARTNERS  */}
<section className="bg-[#c2b2a233] pb-16 px-4">
  <div className="flex flex-col justify-center items-center text-center">
    <h1 className="pb-2 pt-10 text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
      Our Trusted Partners
    </h1>
    <p className="text-sm sm:text-base md:text-lg max-w-2xl text-[#8A5C67] font-serif mb-8">
      We collaborate with renowned traditional artisans and cultural
      fashion houses worldwide
    </p>
  </div>

  <TrustedPartenars partenars={partenars} />

  {/* PARTNERING WITH US  */}
  <div className="flex flex-col items-center gap-5 mt-10">
    <h1 className="text-[#8A5C67] text-sm sm:text-base md:text-lg font-serif">
      Interested in partnering with us?
    </h1>
    <Link to="/contact">
      <button className="flex border border-[#450817] text-sm sm:text-base font-bold font-serif text-[#450817] px-6 py-2 rounded-2xl cursor-pointer hover:bg-[#28BD98] hover:text-[#FFFFFF] transition">
        Become a Partner
        <IoArrowForward className="ml-3 size-5" />
      </button>
    </Link>
  </div>
</section>

{/* WHAT OUR CUSTOMERS SAY  */}
<section className="pt-10 bg-[#f5f3f3] pb-10 px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-10">
    What Our Customers Say
  </h1>

  <PeopleComment comments={comments} />

  {/* JOIN OUR CULTURE JOURNEY  */}
  <div className="flex flex-col items-center gap-5 bg-[#b02d4e] text-center rounded-2xl mx-4 mt-16 px-6 py-10">
    <h1 className="text-3xl sm:text-4xl font-serif text-[#FBF3E9] font-bold">
      Join Our Cultural Journey
    </h1>
    <p className="text-base sm:text-lg font-serif text-[#FBF3E9E6] max-w-xl">
      Subscribe to receive updates on new collections, exclusive offers, and cultural fashion inspiration.
    </p>
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
      <input
        type="text"
        placeholder="Enter your email"
        className="bg-[#FFFFFF] w-[250px] sm:w-[300px] h-12 px-4 rounded-2xl text-sm sm:text-base"
      />
      <button className="bg-[#F1B527] text-[#450817] text-sm sm:text-base font-serif px-6 py-2 rounded-2xl hover:bg-[#915463] transition">
        Subscribe
      </button>
    </div>
  </div>
</section>
    </>
  );
};

export default Home;
