import React, { useEffect, useState } from "react";
import "./TheHub.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const TheHub = () => {
  const [geeks, setGeeks] = useState("Digital Normad");
  const techGeek = [
    "Entreprenuer",
    "Freelance",
    "Developers",
    "Creatives",
    "Writers",
    "Designers",
    "Bloggers",
    "Vloggers",
  ];

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
    <div className="relative h-screen bg-[#171b2c] text-white flex flex-col items-center justify-center mb-8 -top-[50px]">
      <div className="text-center mb-[300px] md:mb-[500px] w-full md:w-[70%] mx-auto">
        <h1 className="text-3xl md:text-5xl md:font-semibold">
          Fostering innovative{" "}
          <span className="relative inline-block">
            <span className="country-transition text-[#4fc4cb]">{geeks}</span>{" "}
            community.
          </span>
          <br />
          Drive forward-thinking discussions.
        </h1>
        <div className="w-[50%] mx-auto">
          <p className="mt-4 text-[17px] text-gray-300">
            Our conferences serves as a dynamic platform where developers,
            creatives, start-ups, and venture capitalists come together to share
            knowledge, collaborate, and drive development.
          </p>
        </div>
        <div className="flex justify-center">
          <Link className="mt-8 mb-2" to="/startup-accelerator">
            <button className="flex flex-row items-center bg-[#4fc4cb] hover:bg-[#ffff] text-[#171b2c] font-thin py-2 px-5 rounded-md transition-all duration-300 ease-in-out">
              <p>Learn More</p>
              <GoArrowUpRight className="text-[14px]" />
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative w-[80%] h-[60vh] border-transparent border-opacity-50 mx-auto">
          <video
            className="w-full h-full object-cover rounded-tl-[25px] rounded-tr-[25px]"
            src="/src/assets/BG.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default TheHub;
