import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CiShoppingCart } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const [isEmpty, setIsEmpty] = React.useState(true);

  return (
    <header className="bg-red-200/30 flex align items-center justify-between px-[120px] py-5">
      <h1 className='font-serif text-2xl font-bold'>Heritage Threads</h1>

      <nav className='flex gap-5'>
        <NavLink className={({ isActive }) =>
          isActive ? "font-semibold text-gray-900" : "text-gray-900"
        } to="/">Home</NavLink>


        <NavLink className={({ isActive }) =>
          isActive ? "font-semibold text-gray-900" : "text-gray-900"
        } to="/about-us">About</NavLink>


        <NavLink className={({ isActive }) =>
          isActive ? "font-semibold text-gray-900" : "text-gray-900"
        } to="/shop">Shop</NavLink>


        <NavLink className={({ isActive }) =>
          isActive ? "font-semibold text-gray-900" : "text-gray-900"
        } to="/contact">Contact</NavLink>
      </nav>


      <div className='flex gap-4'>
        <Sheet>
          <SheetTrigger>
            <div className="p-2 hover:bg-red-200 rounded cursor-pointer transition">
              <CiShoppingCart  size={25} />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>
                {isEmpty ? (
                  <div className="flex flex-col gap-4 items-center justify-center h-[90vh]">
                    <FiShoppingBag size={70} className='text-red-700/60'/>
                    <h1 className="text-4xl">Your Cart is Empty</h1>
                    <p>Discover our beautiful collection of traditional attire</p>
                    <button className="px-7 py-2 text-white rounded shadow bg-red-500">
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div>Cart</div>
                )}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className='flex gap-2 items-center'>
          <button className='px-3 py-2 bg-red-900/10 border border-red-100 font-bold text-red-900 rounded-md'>
            <div className='flex gap-3 items-center'>
              <IoLogOutOutline size={20} />
              Sign in
            </div>

          </button>
          <button className='px-3 py-2 bg-red-900 font-bold text-white rounded-md'>
            <div className='flex gap-3 items-center'>
              <FiUserPlus size={20} />
              Sign up
            </div>

          </button>
        </div>
      </div>



    </header>
  );
};

export default Header;
