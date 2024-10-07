import React from "react";
import { Link } from "react-router-dom";

function StartUpAccelerator() {
  return(
    <div
    className="flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: "url('/src/assets/Logomark.png')" }}
  >
    <div className="md:hidden">
      <img src="/src/assets/1411-logo.png" className="h-10 w-auto" />
    </div>
    <div className="flex flex-col items-center justify-center rounded-tl-[150px] md:rounded-tl-[0px] rounded-tr-[150px] md:rounded-tr-[0px] bg-[#171b2c] rounded-lg shadow-md p-[100px] relative -bottom-[100px] md:-bottom-0">
      <h1 className="text-[100px] font-extrabold text-[#4fc4cb] -mt-[50px]">
        Coming Soon
      </h1>
      <p className="md:text-[30px] text-[22px] text-white mt-2 font-extrabold">
        Oops! Page Under Maintenance
      </p>
      <p className="text-white text-center font-mono text-[12px]">
        Sorry, this page currently under maintenance.
      </p>
      <Link to="/">
        <button className="bg-[#4fc4cb] hover:bg-white hover:text-[#171b2c] text-white font-bold py-2 px-4 rounded-md mt-6 font-mono text-[12px]">
          Go back to home
        </button>
      </Link>
    </div>
  </div>
  )
}

export default StartUpAccelerator;
