import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isEmpty, setIsEmpty] = React.useState(false);

  return (
    <header className="bg-gray-50 flex align items-center justify-between px-[120px] py-5">
      <h1>Heritage Threads</h1>

      <nav className='flex gap-2'>
        <NavLink className={({ isActive}) =>
          isActive ? "font-semibold text-gray-900" : "text-gray-900"
        } to="/">Home</NavLink>


        <NavLink className={({ isActive}) =>
          isActive ? "font-semibold text-gray-900" : "text-gray-900"
        } to="/about-us">About</NavLink>


        <NavLink className={({ isActive}) =>
          isActive ? "font-semibold text-gray-900" : "text-gray-900"
        } to="/shop">Shop</NavLink>


        <NavLink className={({ isActive}) =>
          isActive ? "font-semibold text-gray-900" : "text-gray-900"
        } to="/contact">Contact</NavLink>
      </nav>


      <div className='flex gap-4'>
        <Sheet>
          <SheetTrigger>
            <div className="p-2 hover:bg-gray-200 rounded cursor-pointer transition">
      <MdOutlineShoppingCart size={25} />
    </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>
                {isEmpty ? (
                  <div className="flex flex-col gap-4 items-center justify-center h-[90vh]">
                    <BsCartFill size={70} color="red" />
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
          <button className='px-5 py-2 bg-green-400 rounded'>Sign in</button>
        </div>
      </div>



    </header>
  );
};

export default Header;
