import HeroBanner from '@/components/HeroBanner'
import React from 'react'

const Shop = () => {
  const [categoryActive, setCategoryActive] = React.useState('All products');
  return (
    <div>
      <HeroBanner title="Our Collection" description="Shop our collection of authentic national dresses and cultural attire that blend tradition with modern elegance." />
      <div className=' flex justify-center gap-6 min-h-[70vh]'>
        {/* left */}
        <div className='w-[20%] '>
          {/* card */}
          <div className='bg-white m-10 p-5 rounded-2xl border border-gray-100 shadow-sm'>
            <h1 className='font-serif text-xl font-bold'>Filter</h1>

            <div className='mt-5'>
              <span className='font-semibold'>category</span>

              <div onClick={() => setCategoryActive("All products")} className= {categoryActive == "All products" ? 'border text-white px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white bg-red-800': 'border px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white' } >All products</div>
              <div onClick={() => setCategoryActive("women")} className= {categoryActive == "women" ? 'border px-4 py-2 font-semibold cursor-pointer rounded-md mt-2  hover:bg-green-400 hover:text-white bg-red-800 text-white'  : 'border px-4 py-2 font-semibold cursor-pointer rounded-md mt-2  hover:bg-green-400 hover:text-white'}>Women's</div>
              <div onClick={() => setCategoryActive("men")} className={categoryActive == "men" ? 'border text-white px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white bg-red-800': 'border px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white' }>Men's</div>
              <div onClick={() => setCategoryActive("accessories")} className={categoryActive == "accessories" ? 'border text-white px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white bg-red-800': 'border px-4 py-2 font-semibold cursor-pointer rounded-md mt-3 hover:bg-green-400 hover:text-white' }>Accessories</div>
            </div>

            {/* price range */}
            <div className='mt-10'>Price</div>

            <button className='mt-10 bg-red-100 border border-red-300 px-4 py-2 rounded-md w-full'>Reset Filters</button>
          </div>
        </div>

        {/* right  */}
        <div className='w-[68%] bg-amber-500'>
          {/* sort header  */}
          <div> sort</div>
          <div>products</div>
        </div>


      </div>
    </div>
  )
}

export default Shop