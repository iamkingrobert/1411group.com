import React from "react";
import Ad from "./Ad";
import Navbar from "./NavBar";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#4fc4cb]">
      <video
        className="absolute top-0 left-0 w-full h-[90%] object-cover"
        src="https://s3-eu-central-1.amazonaws.com/sae-edu-gsa-wp-2022/wp-media-folder-sae-germany/wp-content/uploads/sites/2/2022/03/Software-Engineering_H.264.mp4"
        autoPlay
        loop
        muted
      />
      <Ad />
      <Navbar />
      <div className="relative z-10 flex flex-col space-y-[20px] items-center justify-center pl-[100px] h-[90%] w-[850px] -bottom-[60px]">
        <h1 className="text-[#4fc4cb] text-[45px] font-bold leading-[50px] tracking-[-1px]">
          We Are Bridging The Gap Between Technology And People Is The <br />
          Core Of What We Do
        </h1>

        <p className="text-white text-[17px]">
          Empowering individuals, startups, and businesses to unlock their full
          potential in the dynamic tech world. We aim to create an environment
          where technology is leveraged to solve real-world problems, enhance
          lives, and build a sustainable future.
        </p>

        <div className="flex flex-row self-start items-center space-x-5">
          <p className="bg-[#171B2C] hover:bg-[#4FC4CB] text-white p-3 rounded-md text-[18px] cursor-pointer">
            Hire Talent
          </p>

          <div className="flex flex-row space-x-2 justify-center items-center cursor-pointer">
            <p className="text-white text-[18px] hover:text-gray-300">1411 Training</p>
            <FaArrowRightLong className="text-[#4FC4CB] text-[18px] pt-1" />
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#171b2c] h-[10vh] bottom-0 rounded-bl-[105px] rounded-tr-[105px]">
        <div className="flex flex-row justify-center items-cente space-x-10">
          <div className="py-4">
          <div className="flex flex-row justify-center items-center space-x-3">
            <div className="h-8 w-[2px] bg-[#4fc4cb]"></div>
            <div className="flex flex-col">
            <p className="text-white text-[18px] font-thin">200 +</p>
            <p className="text-white text-[16px] font-normal">Trained Alumni and counting</p>
            </div>
          </div>
          </div>

          <div className="py-2">
          <div className="flex flex-row justify-center items-center space-x-3">
            <div className="h-8 w-[2px] bg-[#4fc4cb]"></div>
            <div className="flex flex-col">
            <p className="text-white text-[12px] font-thin">Start-Up Acceleration</p>
            <p className="text-white text-[16px] font-normal">Tailored solutions for your<br></br>business success</p>
            </div>
          </div>
          </div>

          <div className="py-4">
          <div className="flex flex-row justify-center items-center space-x-3">
            <div className="h-8 w-[2px] bg-[#4fc4cb]"></div>
            <div className="flex flex-col">
            <p className="text-white text-[18px] font-thin">1411 Training</p>
            <p className="text-white text-[16px] font-normal">In-demand skills for global career in tech</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
