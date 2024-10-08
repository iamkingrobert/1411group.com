import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";
import mapImage from "../assets/map.svg";

const GetStarted = () => {
  return (
    <div className="bg-[#4fc4cb] text-white rounded-lg p-8 flex items-center justify-between relative overflow-hidden h-[40vh] w-[80%] mx-auto mb-[80px] -top-5 md:-top-0">
      {/* Background Map */}
      <img
        src={mapImage}
        alt="map"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Text Section */}
      <div className="relative z-10">
        <p className="text-[#171b2c]">Ready to get started?</p>
        <h2 className="text-3xl font-bold mt-2 mb-4">
          Join us and scale your business globally
        </h2>
        <Link to='/contact-us'>
          <button className="bg-[#171b2c] hover:bg-white hover:text-[#171b2c] text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
