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
    <div className="relative h-[62vh] md:h-screen text-white flex flex-col items-center justify-center mb-8 -top-[120px]">
      <div className="text-center mb-[300px] md:mb-[500px] w-full md:w-[70%] mx-auto mt-[100px] md:mt-0">
        <h1 className="text-xl text-[#171b2c] font-extrabold md:text-5xl md:font-semibold">
          Fostering innovative{" "}
          <span className="relative inline-block">
            <span className="country-transition text-[#4fc4cb]">{geeks}</span>{" "}
            community.
          </span>
          <br />
          Drive forward-thinking discussions.
        </h1>
        <div className="md:w-[50%] mx-auto">
          <p className="mt-4 md:text-[17px] text-[14px] text-gray-400">
            Our conferences serves as a dynamic platform where developers,
            creatives, start-ups, and venture capitalists come together to share
            knowledge, collaborate, and drive development.
          </p>
        </div>
        <div className="flex justify-center">
          <Link className="mt-8 mb-2" to="/connect-lagos">
            <button className="flex flex-row items-center bg-[#4fc4cb] hover:bg-[#171b2c] hover:text-white text-[#171b2c] font-thin py-2 px-5 rounded-md transition-all duration-300 ease-in-out">
              <p>Learn More</p>
              <GoArrowUpRight className="text-[14px]" />
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute md:bottom-0 -bottom-[272px] md:left-0 md:right-0">
        <div className="relative md:w-[80%] h-[60vh] border-transparent border-opacity-50 mx-auto">
          <video
            className="md:w-full md:h-full object-cover rounded-tl-[25px] rounded-tr-[25px] shadow-[#4fc4cb] shadow-2xl"
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
