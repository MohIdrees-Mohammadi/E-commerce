import React from 'react'

const HeroBanner = ({title, description}) => {
  return (
    <div className='p-20 bg-linear-to-r from-red-700 to-red-900 flex justify-between items-center flex-col'>
        <h1 className='font-serif font-bold text-6xl text-white'>{title}</h1>
        <p className='text-xl text-center mt-5 text-gray-100 w-[700px]'>{description}</p>
    </div>
  )
}

export default HeroBanner