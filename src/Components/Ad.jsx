import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Ad() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full text-center bg-[#171B2C] flex flex-row justify-center items-center space-x-[10px] py-2">
      <p className="text-gray-300 text-[13px]">
        We empower individuals and organizations with cutting-edge tech
        training.
      </p>

      <div className="flex flex-row justify-center items-center space-x-1">
        <span className="text-white text-[13px]">
          <Link to="/training" className="cursor-pointer">
            Get Started
          </Link>
        </span>
        <FaArrowRightLong className="text-[#4fc4cb] text-[13px] cursor-pointer" />
      </div>
    </div>
  );
}

export default Ad;
