import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { HiArrowLongLeft } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [SignUp, setSignUp] = React.useState();

  return (
    <>
      <div className="flex flex-col items-center bg-[#F5F1ED] min-h-screen px-4">
        {/* HEADER */}
        <div className="w-full sm:w-60 h-9 mt-10 mb-10 flex justify-center items-center font-[30px] font-serif text-center">
          <NavLink to="/">
            <button className="cursor-pointer text-3xl font-bold w-[280px] h-[60px] hover:text-[#b92449]">Heritage Threads</button>
          </NavLink>
        </div>

        {/* BUTTONS SIGNIN SIGN UP */}
        <div className="bg-[#E8E1D9] w-full sm:w-[450px] h-10 flex justify-around items-center font-[20px] font-serif rounded p-1">
          <NavLink to="/signin">
            <button className="text-[#450817] w-[45%] sm:w-[220px] h-8 rounded-2xl font-[14px] py-1.5 px-3">
              Sign In
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button
              className={
                SignUp == "Sign In"
                  ? "bg-[#F8F5F2] text-[#450817] w-[45%] sm:w-[220px] h-8 rounded-2xl font-[14px] py-1.5 px-3"
                  : "text-[#8A5C67] w-[45%] sm:w-[220px] h-8 bg-[#F8F5F2] rounded-2xl font-[14px] py-1.5 px-3"
              }
            >
              Sign Up
            </button>
          </NavLink>
        </div>

        {/* CREATE ACCOUNT */}
        <div className="w-full sm:w-[443px] mt-10 shadow-2xl shadow-[#AC1F3C]/20">
          <div className="bg-white p-6 rounded-t-lg text-center sm:text-left">
            <h1 className="text-[#450817] text-[24px] font-serif font-semibold">
              Create Account
            </h1>
            <p className="text-[#8A5C67] text-[14px] mt-1.5 font-serif font-semibold">
              Join Heritage Threads and discover authentic fashion
            </p>
          </div>
        </div>

        {/* FORM AREA */}
        <div className="w-full sm:w-[443px] pb-6 px-6 bg-[#FFFFFF] rounded-b-lg shadow-2xl shadow-[#AC1F3C]/20">
          {/* FULL NAME */}
          <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-[#450817] text-[14px] font-sans font-semibold">
              Full Name
            </h1>
            <div className="relative w-full h-10">
              <GoPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8A5C67] text-xl" />
              <input
                required
                type="text"
                placeholder="Enter your name"
                className="w-full h-full bg-[#F8F5F2] rounded-2xl pl-12 pr-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-4 mt-5">
            <h1 className="text-[#450817] text-[14px] font-sans font-semibold">
              Email
            </h1>
            <div className="relative w-full h-10">
              <MdOutlineMailOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8A5C67] text-xl" />
              <input
                required
                type="email"
                placeholder="your@example.com"
                className="w-full h-full bg-[#F8F5F2] rounded-2xl pl-12 pr-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-4 mt-5">
            <h1 className="text-[#450817] text-[14px] font-sans font-semibold">
              Password
            </h1>
            <div className="relative w-full h-10">
              <IoLockClosedOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8A5C67] text-xl" />
              <input
                required
                type="password"
                placeholder="Enter your password"
                className="w-full h-full bg-[#F8F5F2] rounded-2xl pl-12 pr-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="flex flex-col gap-4 mt-5">
            <h1 className="text-[#450817] text-[14px] font-sans font-semibold">
              Confirm your Password
            </h1>
            <div className="relative w-full h-10">
              <IoLockClosedOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8A5C67] text-xl" />
              <input
                required
                type="password"
                placeholder="Confirm Password"
                className="w-full h-full bg-[#F8F5F2] rounded-2xl pl-12 pr-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* TERMS CHECKBOX */}
          <div className="mt-5 flex flex-wrap items-center">
            <input type="checkbox" id="remember-me" className="w-4 h-4 mr-3" />
            <label
              htmlFor="remember-me"
              className="text-[14px] font-sans cursor-pointer"
            >
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          {/* SIGN UP BUTTON */}
          <button className="w-full h-11 bg-[#AD3050] text-[#FBF3E9] rounded-2xl px-8 mt-4 font-sans font-semibold text-[16px] cursor-pointer">
            Sign In
          </button>

          {/* OR CONTINUE WITH */}
          <div className="flex items-center justify-center mt-4 w-full text-xs">
            <hr className="flex-1 border-t-2 border-t-[#450817]" />
            <span className="px-2 text-[#8A5C67] font-sans bg-[#FFFFFF]">
              OR CONTINUE WITH
            </span>
            <hr className="flex-1 border-t-2 border-t-[#450817]" />
          </div>

          {/* GOOGLE / GITHUB */}
          <div className="w-full flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <button className="flex items-center justify-center gap-3 border rounded-xl w-full sm:w-48 h-10 text-[16px] font-semibold font-serif text-[#450817] bg-[#F8F5F2] py-2 px-4 cursor-pointer hover:bg-[#28BD98] hover:text-white">
              <FcGoogle className="text-[25px]" />
              <span>Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 border rounded-xl w-full sm:w-48 h-10 text-[16px] font-semibold font-serif text-[#450817] bg-[#F8F5F2] py-2 px-4 cursor-pointer hover:bg-[#28BD98] hover:text-white">
              <RxGithubLogo className="text-[25px]" />
              <span>GitHub</span>
            </button>
          </div>
        </div>

        {/* BACK TO HOME */}
        <div className="flex justify-center sm:justify-start w-full max-w-[443px] pt-4 mb-10">
          <NavLink to="/">
            <button className="flex items-center justify-center text-[16px] font-semibold font-sans text-[#AC1F3C] cursor-pointer">
              <HiArrowLongLeft className="text-[25px] mr-2" />
              <span className="hover:border-b-2 border-red-900">
                Back to Home
              </span>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Signup;
