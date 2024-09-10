import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Ad() {
  const location = useLocation();

  // If the current path is the home page
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full text-center flex md:flex-row justify-center items-center md:space-x-[10px] py-2 hidden md:flex ${
        isHomePage ? "bg-[#171B2C]" : "bg-[#4fc4cb]"
      }`}
    >
      <p
        className={`text-[13px] ${
          isHomePage ? "text-gray-300" : "text-[#171b2c]"
        }`}
      >
        We empower individuals and organizations through cutting-edge tech
        training.
      </p>

      <div className="flex flex-row justify-center items-center space-x-1">
        <span
          className={`text-[13px] ${
            isHomePage ? "text-white" : "text-[#171b2c]"
          }`}
        >
          <Link to="/training" className="cursor-pointer">
            Get Started
          </Link>
        </span>
        <FaArrowRightLong className="text-[13px] cursor-pointer text-white" />
      </div>
    </div>
  );
}

export default Ad;
