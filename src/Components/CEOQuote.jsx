import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { SiAlwaysdata } from "react-icons/si";

const CEOQuote = () => {
  return (
    <div className="flex gap-4 mx-[100px] relative -top-[60px]">
      <div className="bg-green-500 rounded-2xl p-8 w-1/2">
      <div className="flex flex-row items-center  space-x-2 mt-4">
        <SiAlwaysdata className="text-white text-[20px]"/>
        <h1 className="text-white text-2xl font-mono">Data Analyst</h1>
        </div>
        <p className="text-white mt-4 text-[16px] font-mono">
          We bring the technical knowledge, experience and resourcefulness to the table.
        </p>
        <div className="mt-8 flex items-center">
          <img
            src="/src/assets/Violet-Johnson.png"
            alt="Violet Johnson"
            className="rounded-full w-12 h-12"
          />
          <p className="text-white ml-4 font-semibold">
              Violet Johnson <br></br>{" "}
              <span className="text-[10px] font-mono relative -top-2">
                Head, Innovation & Partnerships - 1411 Group
              </span>
            </p>
        </div>
      </div>
      <div className="bg-[#265457] rounded-2xl p-4 w-1/2 flex flex-row space-x-4">
        <div>
        <div className="flex flex-row items-center  space-x-2 mt-4">
        <IoCodeSlash className="text-white text-[20px]"/>
        <h1 className="text-white text-2xl font-mono">Software Engineer</h1>
        </div>
          
          <p className="text-white mt-4 text-[16px] font-mono">
            Bridging the gap between technology and people is the core of what
            we do.
          </p>
          <div className="mt-8 flex items-center">
            <img
              src="/src/assets/1411.png"
              alt="1411 Group"
              className="rounded-full w-12 h-12"
            />
            <p className="text-white ml-4 font-semibold">
              Robert Kehinde <br></br>{" "}
              <span className="text-[10px] font-mono relative -top-2">
                CEO 1411 Group
              </span>
            </p>
          </div>
        </div>

        <div className="">
          <img
            src="/src/assets/Robert.jpeg"
            className=" h-[250px] w-[350px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CEOQuote;
