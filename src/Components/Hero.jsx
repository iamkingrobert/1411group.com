import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import videoHero from "../assets/v005.mp4";
import bgImage from '../assets/bg.jpg';

const Hero = () => {
  const [geeks, setGeeks] = useState("World");
  const techGeek = ["Life", "People", "Business"];

  useEffect(() => {
    const interval = setInterval(() => {
      setGeeks((prevGeek) => {
        const currentIndex = techGeek.indexOf(prevGeek);
        const nextIndex = (currentIndex + 1) % techGeek.length;
        return techGeek[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#171b2c]">
      <video
        className="absolute top-0 left-0 w-full h-[90%] object-cover"
        src={videoHero}
        autoPlay
        loop
        muted
      />
      <Layout />
      <div className="relative z-10 flex flex-col space-y-[20px] items-center justify-center md:pl-[100px] h-[90%] w-full md:w-[850px] md:-bottom-[60px] -bottom-0 p-5 ">
        <h1 className="text-[#ffffff] text-[36px] md:text-[50px] font-extrabold leading-[38px] md:leading-[60px] tracking-[-3px] md:tracking-[-2px] text-left md:text-left pt-8">
          People and Technology, Perfectly Aligned. The Future Is You.
        </h1>
        <p className="text-white text-[18px] text-left pt-2">
          We're empowering individuals, startups, and businesses unlock their
          full potential in the dynamic tech world. We create environment where
          technology is leveraged to solve real-world problems, enhance lives,
          and build a sustainable future.
        </p>

        <div className="flex flex-row self-start items-center space-x-5 pt-3">
          <Link to="/our-solutions">
            <p className="bg-[#171B2C] hover:bg-[#4FC4CB] text-[#4FC4CB] hover:text-[#171B2C] p-3 rounded-md text-[18px] cursor-pointer">
              Our Solutions
            </p>
          </Link>

          <div className="flex flex-row space-x-2 justify-center items-center cursor-pointer">
            <Link to="/training">
              <p className="text-white text-[18px] hover:text-gray-300">
                1411 Training
              </p>
            </Link>
            <FaArrowRightLong className="text-[#4FC4CB] text-[18px] pt-1" />
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#171b2c] h-[12vh] bottom-0">
        <div className="flex flex-row justify-center items-center mx-auto">
          {/* Visible only on mobile screens */}
          <div className="py-2 md:hidden relative">
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50"
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex flex-col">
                <p className="text-gray-200 text-[15px] text-center font-extralight">
                  We are creating a world where technology is seamlessly
                  integrated into everyday{" "}
                  <span className="text-[#4fc4cb]">{geeks}</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Hidden on mobile screens */}
          <div className="hidden md:flex flex-row justify-center items-center space-x-10 mx-auto">
            <div className="py-4">
              <div className="flex flex-row justify-center items-center space-x-3">
                <div className="md:h-8 md:w-[2px] bg-[#4fc4cb]"></div>
                <div className="flex flex-col">
                  <p className="text-white md:text-[18px] md:font-thin">
                    Dicover 1411
                  </p>
                  <p className="text-white md:text-[16px] md:font-normal">
                    Innovative tech programs
                  </p>
                </div>
              </div>
            </div>

            <div className="py-2">
              <div className="flex flex-row justify-center items-center space-x-3">
                <div className="md:h-8 md:w-[2px] bg-[#4fc4cb]"></div>
                <div className="flex flex-col">
                  <p className="text-white md:text-[12px] md:font-thin">
                    Tech Solutions
                  </p>
                  <p className="text-white md:text-[16px] md:font-normal">
                    Custom software solutions<br></br>for your business
                  </p>
                </div>
              </div>
            </div>

            <div className="py-4">
              <div className="flex flex-row justify-center items-center space-x-3">
                <div className="md:h-8 md:w-[2px] bg-[#4fc4cb]"></div>
                <div className="flex flex-col">
                  <p className="text-white md:text-[18px] md:font-thin">
                    Work Placement
                  </p>
                  <p className="text-white md:text-[16px] md:font-normal">
                    In-demand skills for global tech career
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
