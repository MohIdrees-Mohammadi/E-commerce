import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { TfiMedallAlt } from "react-icons/tfi";
import { IoMdContacts } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-[#B02D4E] flex flex-col gap-4 text-center pt-15 px-6 md:px-10 lg:px-20 xl:px-40 py-16 md:py-20">
        <h1 className="text-[#FBF3E9] text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
          Our Story
        </h1>
        <p className="text-[#FBF3E9] text-base sm:text-lg md:text-xl font-semibold font-sans">
          Preserving cultural heritage through authentic traditional fashion
        </p>
      </div>

      {/* OUR MISSION */}
      <div className="bg-stone-200 flex flex-col text-center items-center py-16 md:py-20 px-4 md:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#450817] mb-8 font-serif font-bold">
          Our Mission
        </h1>
        <p className="w-full md:w-3/4 lg:w-1/2 text-base sm:text-lg md:text-xl mb-6 text-[#450817] font-serif">
          At Heritage Threads, we believe that traditional attire is more than
          just clothing—it's a celebration of cultural identity, craftsmanship,
          and history. Our mission is to preserve and promote authentic national
          dresses by connecting skilled artisans with customers who appreciate
          the beauty of cultural heritage.
        </p>
        <p className="w-full md:w-3/4 lg:w-1/2 text-base sm:text-lg md:text-xl mb-6 text-[#450817] font-serif">
          Every piece in our collection tells a story, crafted with meticulous
          attention to detail by master artisans who have inherited
          centuries-old techniques. We are committed to maintaining the
          authenticity of traditional designs while adapting them for modern
          elegance and comfort.
        </p>
      </div>

      {/* OUR VALUES */}
      <div className="pt-20 bg-[#E8E1D94C] px-4 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-center text-3xl sm:text-4xl md:text-[36px] font-bold font-serif text-[#450817]">
          Our Values
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
          {/* VALUE 1 */}
          <div className="flex flex-col gap-3 text-center items-center w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] p-4">
            <div className="bg-[#c22c51] text-white text-[40px] w-16 h-16 rounded-full flex items-center justify-center">
              <FaRegHeart />
            </div>
            <h1 className="text-lg sm:text-xl font-serif text-[#450817] font-bold">
              Cultural Preservation
            </h1>
            <p className="text-sm sm:text-base font-sans text-[#8A5C67]">
              Honoring and preserving traditional craftsmanship for future
              generations
            </p>
          </div>

          {/* VALUE 2 */}
          <div className="flex flex-col gap-3 text-center items-center w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] p-4">
            <div className="bg-[#c22c51] text-white text-[40px] w-16 h-16 rounded-full flex items-center justify-center">
              <TfiMedallAlt />
            </div>
            <h1 className="text-lg sm:text-xl font-serif text-[#450817] font-bold">
              Quality Excellence
            </h1>
            <p className="text-sm sm:text-base font-sans text-[#8A5C67]">
              Premium materials and expert craftsmanship in every piece
            </p>
          </div>

          {/* VALUE 3 */}
          <div className="flex flex-col gap-3 text-center items-center w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] p-4">
            <div className="bg-[#c22c51] text-white text-[40px] w-16 h-16 rounded-full flex items-center justify-center">
              <IoMdContacts />
            </div>
            <h1 className="text-lg sm:text-xl font-serif text-[#450817] font-bold">
              Artisan Support
            </h1>
            <p className="text-sm sm:text-base font-sans text-[#8A5C67]">
              Empowering local artisans and preserving traditional techniques
            </p>
          </div>

          {/* VALUE 4 */}
          <div className="flex flex-col gap-3 text-center items-center w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] p-4">
            <div className="bg-[#c22c51] text-white text-[40px] w-16 h-16 rounded-full flex items-center justify-center">
              <RiGlobalLine />
            </div>
            <h1 className="text-lg sm:text-xl font-serif text-[#450817] font-bold">
              Global Reach
            </h1>
            <p className="text-sm sm:text-base font-sans text-[#8A5C67]">
              Sharing cultural heritage with the world through authentic fashion
            </p>
          </div>
        </div>
      </div>

      {/* OUR COMMITMENT TO QUALITY */}
      <div className="bg-neutral-200/60 py-20 px-4 md:px-10 lg:px-20">
        <h1 className="text-center text-2xl sm:text-3xl md:text-[34px] font-serif font-bold text-[#450817] mb-12">
          Our Commitment to Quality
        </h1>

        <div className="flex flex-col items-center gap-8">
          {/* CARD 1 */}
          <div className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[875px] p-6 rounded-2xl shadow-sm">
            <h1 className="pb-2 text-lg sm:text-xl md:text-[22px] text-[#450817] font-serif font-bold">
              Authentic Materials
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#8A5C67] font-sans">
              We use only premium fabrics including silk, cotton, and fine
              blends, ensuring both comfort and durability. Every material is
              carefully selected to match traditional standards.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[875px] p-6 rounded-2xl shadow-sm">
            <h1 className="pb-2 text-lg sm:text-xl md:text-[22px] text-[#450817] font-serif font-bold">
              Timeless Craftsmanship
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#8A5C67] font-sans">
              Every design is handcrafted by skilled artisans using
              generations-old techniques passed down through families.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[875px] p-6 rounded-2xl shadow-sm">
            <h1 className="pb-2 text-lg sm:text-xl md:text-[22px] text-[#450817] font-serif font-bold">
              Sustainable Practices
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#8A5C67] font-sans">
              We source responsibly and ensure fair working conditions to keep
              heritage alive in an ethical and sustainable way.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN OUR JOURNEY */}
      <div className="flex flex-col items-center gap-6 bg-[#B02D4E] py-20 px-4 md:px-10 lg:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FBF3E9] font-bold text-center">
          Join Our Cultural Journey
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center text-[#FBF3E9E6] w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
          Experience the beauty of traditional fashion and become part of our
          mission to preserve cultural heritage through authentic attire.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
