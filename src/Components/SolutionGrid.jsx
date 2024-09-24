import React from "react";
import { SiAlwaysdata } from "react-icons/si";
import { SiBmcsoftware } from "react-icons/si";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowCircleUp } from "react-icons/fa";
import { MdStars } from "react-icons/md";

const SolutionGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16 -mb-12">
      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-center items-center gap-4 md:mx-[80px] mx-[15px] relative md:-top-[60px] -top-[70px]">
        <div className="bg-green-500 rounded-2xl p-[26px] md:w-[30%]">
          <div className="flex flex-row items-center  space-x-2 mt-4">
            <SiAlwaysdata className="text-white text-[20px]" />
            <h1 className="text-white text-2xl font-mono">Consulting</h1>
          </div>
          <p className="text-white mt-4 text-[15px] font-mono">
            Tailored for businesses seeking to unlock growth through strategic
            technology optimization, from Product and Process Analysis, Digital
            Transformation and more
          </p>
          <div className="mt-8 flex space-x-2 items-center">
            <img
              src="/src/assets/Google.png"
              alt="Business Consultation"
              className="rounded-full w-12 h-12"
            />

            <div className="flex flex-row space-x-2 items-center">
              <Link
                to="/our-solutions"
                className="hover:text-[#171b2c] text-start text-white font-thin"
              >
                Business Consultancy
              </Link>
              <GoArrowUpRight className="text-[14px] text-white" />
            </div>
          </div>
        </div>
        <div className="bg-[#171b2c] rounded-2xl p-4 md:w-[70%] flex flex-row space-x-4">
          <div>
            <div className="flex flex-row items-center  space-x-2 mt-4">
              <SiBmcsoftware className="text-white text-[20px]" />
              <h1 className="text-white text-2xl font-mono">
                Application Development
              </h1>
            </div>

            <p className="text-white mt-4 text-[16px] font-mono">
              Create custom websites that are visually appealing, user-friendly,
              and optimized for performance.
            </p>
            <p className="text-white mt-2 text-[16px] font-mono">
              Our team of engineers develop mobile apps that enhance customer
              engagement and accessibility.
            </p>
            <div className="mt-8 flex items-center space-x-2">
              <img
                src="/src/assets/1411-white.png"
                alt="1411 Group"
                className="rounded-full w-12 h-12"
              />

              <div className="flex flex-row space-x-2 items-center">
                <Link
                  to="/our-solutions"
                  className="hover:text-[#171b2c] text-start text-white font-thin"
                >
                  Tech Solutions
                </Link>
                <GoArrowUpRight className="text-[14px] text-white" />
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/src/assets/SD-1411.jpg"
              className=" h-[300px] w-[550px] object-cover rounded-md shadow-sm shadow-[#4fc4cb]"
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row-reverse mt-[55px] flex-col space-y-5 md:space-y-0  justify-center items-center gap-4 md:mx-[80px] mx-[15px] relative md:-top-[60px] -top-[70px]">
        <div className="bg-green-500 rounded-2xl p-[26px] md:w-[30%]">
          <div className="flex flex-row items-center  space-x-2 mt-4">
            <MdStars className="text-white text-[24px]" />
            <h1 className="text-white text-2xl font-mono">Careers</h1>
          </div>
          <p className="text-white mt-4 text-[15px] font-mono">
            Careers focuses on positioning our clients uniquely to attract
            desired recruiters and employers, ensuring they stand out and make a
            lasting impression.
          </p>
          <div className="mt-8 flex space-x-2 items-center">
            <img
              src="/src/assets/career.png"
              alt="Business Consultation"
              className="rounded-full w-12 h-12"
            />

            <div className="flex flex-row space-x-2 items-center">
              <Link
                to="/careers"
                className="hover:text-[#171b2c] text-start text-white font-thin"
              >
                Career Development
              </Link>
              <GoArrowUpRight className="text-[14px] text-white" />
            </div>
          </div>
        </div>
        <div className="bg-[#171b2c] rounded-2xl p-4 md:w-[70%] flex flex-row space-x-4">
          <div>
            <div className="flex flex-row items-center  space-x-2 mt-4">
              <FaArrowCircleUp className="text-white text-[24px]" />
              <h1 className="text-white text-2xl font-mono">
                Start-Up Acceleration
              </h1>
            </div>

            <p className="text-white mt-4 text-[16px] font-mono">
              Get assistance with developing robust business plans, financial
              models, and go-to-market strategies.
            </p>
            <p className="text-white mt-2 text-[16px] font-mono">
              Support in developing a Minimum Viable Product (MVP) to validate
              your ideas and attract early adopters.
            </p>
            <div className="mt-8 flex items-center space-x-2">
              <img
                src="/src/assets/startup-icon.png"
                alt="1411 Group"
                className="rounded-full w-12 h-12"
              />

              <div className="flex flex-row space-x-2 items-center">
                <Link
                  to="/startup-accelerator"
                  className="hover:text-[#171b2c] text-start text-white font-thin"
                >
                  Start-up Acceleration
                </Link>
                <GoArrowUpRight className="text-[14px] text-white" />
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/src/assets/Google-Founders.jpg"
              className=" h-[300px] w-[550px] object-cover rounded-md shadow-[#4fc4cb] shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionGrid;
