import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { TfiMedallAlt } from "react-icons/tfi";
import { IoMdContacts } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#B02D4E] flex flex-col gap-4 h-[255px] text-center pt-15">
        <h1 className="text-[#FBF3E9] text-6xl font-family-serif font-bold">
          Our Story
        </h1>
        <p className="text-[#FBF3E9] text-[20px] font-semibold font-sans">
          Preserving cultural heritage through authentic traditional fashion
        </p>
      </div>
      {/* OUR MISSION  */}
      <div className="bg-stone-200 flex flex-col text-center items-center h-[500px] pt-20 pb-20 pl-4 pr-4 ">
        <h1 className="text-5xl text-[#450817] mb-10 font-serif font-bold ">
          Our Mission
        </h1>
        <p className="w-[50%] text-[18px] mb-8 text-[#450817] font-serif">
          At Heritage Threads, we believe that traditional attire is more than
          just clothing—it's a celebration of cultural identity, craftsmanship,
          and history. Our mission is to preserve and promote authentic national
          dresses by connecting skilled artisans with customers who appreciate
          the beauty of cultural heritage.
        </p>
        <p className="w-[50%] text-[18px] mb-15 text-[#450817] font-serif">
          Every piece in our collection tells a story, crafted with meticulous
          attention to detail by master artisans who have inherited
          centuries-old techniques. We are committed to maintaining the
          authenticity of traditional designs while adapting them for modern
          elegance and comfort.
        </p>
      </div>
      {/* OUR VALUES  */}
      <div className="pt-20 bg-[#E8E1D94C]">
        <h1 className="text-center text-[36px] font-bold font-serif text-[#450817]">
          Our Values
        </h1>
        <div className="flex ">
          <div className="flex flex-col gap-2 text-center items-center m-10 w-[285px] h-[164px]">
            <h1 className="bg-[#c22c51] text-white text-center text-[40px] w-16 h-16 rounded-full">
              <FaRegHeart className="ml-3 mt-3" />
            </h1>
            <h1 className="text-[20px] font-serif text-[#450817] font-bold">
              Cultural Preservation
            </h1>
            <p className="text-[16px] font-sans text-[#8A5C67]">
              Honoring and preserving traditional craftsmanship for future
              generations
            </p>
          </div>

          <div className="flex flex-col gap-2 text-center items-center m-10 w-[285px] h-[164px]">
            <h1 className="bg-[#c22c51] text-white text-center text-[40px] w-16 h-16 rounded-full">
              <TfiMedallAlt className="ml-3 mt-3" />
            </h1>
            <h1 className="text-[20px] font-serif font-bold text-[#450817]">
              Quality Excellence
            </h1>
            <p className="text-[16px] font-sans text-[#8A5C67]">
              Premium materials and expert craftsmanship in every piece
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center items-center m-10 w-[285px] h-[164px]">
            <h1 className="bg-[#c22c51] text-white text-center text-[40px] w-16 h-16 rounded-full">
              <IoMdContacts className="ml-3 mt-3" />
            </h1>
            <h1 className="text-[20px] font-serif text-[#450817] font-bold">
              Artisan Support
            </h1>
            <p className="text-[16px] font-sans text-[#8A5C67]">
              Empowering local artisans and preserving traditional techniques
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center items-center m-10 w-[285px] h-[164px]">
            <h1 className="bg-[#c22c51] text-white text-center text-[40px] w-16 h-16 rounded-full">
              <RiGlobalLine className="ml-3 mt-3" />
            </h1>
            <h1 className="text-[20px] font-serif text-[#450817] font-bold">
              Global Reach
            </h1>
            <p className="text-[16px] font-sans text-[#8A5C67]">
              Sharing cultural heritage with the world through authentic fashion
            </p>
          </div>
        </div>
      </div>
      {/* OUR COMMITMENT TO QUALITY  */}
      <div className="bg-neutral-200/60 pb-30">
        <h1 className="text-center pt-15 text-[#450817] text-[34px] font-serif font-bold">
          Our Commitment to Quality
        </h1>
        {/* CARDS  */}
        <div className="bg-[#FFFFFF] w-[875px] h-[138px] mb-10 p-6 ml-70 rounded-2xl">
          <h1 className="pb-3 text-[22px] text-[#450817] font-serif font-bold">
            Authentic Materials
          </h1>
          <p className="text[#8A5C67] text-[18px] font-sans">
            We use only premium fabrics including silk, cotton, and fine blends,
            ensuring both comfort and durability. Every material is carefully
            selected to match traditional standards.
          </p>
        </div>
        <div className="bg-[#FFFFFF] w-[875px] h-[138px] mb-10 p-6 ml-70 rounded-2xl">
          <h1 className="pb-3 text-[22px] text-[#450817] font-serif font-bold">
            Authentic Materials
          </h1>
          <p className="text[#8A5C67] text-[18px] font-sans">
            We use only premium fabrics including silk, cotton, and fine blends,
            ensuring both comfort and durability. Every material is carefully
            selected to match traditional standards.
          </p>
        </div>
        <div className="bg-[#FFFFFF] w-[875px] h-[138px] p-6 ml-70 rounded-2xl">
          <h1 className="pb-3 text-[22px] text-[#450817] font-serif font-bold">
            Authentic Materials
          </h1>
          <p className="text[#8A5C67] text-[18px] font-sans">
            We use only premium fabrics including silk, cotton, and fine blends,
            ensuring both comfort and durability. Every material is carefully
            selected to match traditional standards.
          </p>
        </div>
      </div>
      {/* JOIN OUR JOURNEY  */}
      <div className="flex  flex-col items-center gap-5 bg-[#B02D4E] h-[368px] pt-20 pb-20">
          <h1 className="text-[48px] font-family-serif text-[#FBF3E9] font-bold">
            Join Our Cultural Journey
          </h1>
          <p className="text-[20px] font-family-serif text-center w-[40%] text-[#FBF3E9E6]">
            Experience the beauty of traditional fashion and become part of our mission to preserve cultural heritage through authentic attire.</p>
        </div>
    </>
  );
};

export default AboutUs;
