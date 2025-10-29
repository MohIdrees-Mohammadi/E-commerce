import React from 'react'
import heroBanner from '../images/hero-image.jpg'
import { FaArrowRight } from "react-icons/fa6";
const Home = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
        <div className="absolute">
          <img
            src={heroBanner}
            alt="Heritage Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-gradient-to-r from-red-900/80 to-red-100/20" />
         
        </div>

        <div className='relative  h-full w-3xl flex flex-col justify-center items-center'>
          
          <div className='w-[600px] ml-100 '>
            <h1 className='text-6xl text-white  font-bold font-serif'>Celebrate Heritage Through Fashion</h1>
            <p className='text-2xl mt-7 text-gray-100'>Discover authentic national dresses and cultural attire that blend tradition with modern elegance.</p>
            <div className='mt-5 flex'>
              <button className='bg-yellow-500 cursor-pointer flex px-4 py-2 rounded items-center gap-3 font-semibold'>
                Shop Collection
                <FaArrowRight  />
              </button>

              <button className='bg-white cursor-pointer flex px-4 py-2 rounded items-center gap-3 ml-3 font-semibold'>Our Story</button>
            </div>
          </div>
        </div>
        
      </section>

  )
}

export default Home