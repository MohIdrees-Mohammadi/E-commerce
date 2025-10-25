import React from 'react'


const App = () => {

  console.log('App component rendered')
  console.log('App component rendered_2')


  return (
    <header class="bg-gray-200">
      <div class="container mx-auto flex p-5 justify-between items-center">
          <span class="ml-3 text-xl">Heritage Threads</span>
      
        <nav class="hidden lg:flex  items-center text-base justify-center">
          <a href="/" class="mr-5 hover:text-gray-900">First Link</a>
          <a href="/" class="mr-5 hover:text-gray-900">Second Link</a>
          <a href="/" class="mr-5 hover:text-gray-900">Third Link</a>
          <a href="/" class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>

        <div className='hidden lg:flex gap-2 justify-center items-center '>
          <span>cart icon</span>

        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </div>


       <div className='flex gap-4'>
         <div className='bg-amber-600 w-[50px] h-[50px] flex justify-center items-center lg:hidden'>
          cart
        </div>
        <div className='bg-amber-300 w-[50px] h-[50px] flex justify-center items-center lg:hidden'>
          hum
        </div>
       </div>
      </div>
    </header>
  )
}

export default App