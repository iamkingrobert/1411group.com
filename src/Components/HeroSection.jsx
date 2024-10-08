import React from "react";
import { Link } from "react-router-dom";
import Choose from "./Choose";
import SolutionGrid from "./SolutionGrid";
import Footer from "./Footer";
import ExpertsSection from "./ExpertsSection";
import GetStarted from "./GetStarted";
import logoMark from "../assets/Logomark.png";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="bg-[#171b2c] text-white flex items-center justify-between md:p-10 p-4 h-[80vh] relative md:mt-10 mt-[70px]">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="absolute md:relative top-[10px] md:top-0">
          <h4 className="text-[#4fc4cb] text-[40px] md:text-[20px] font-bold px-1 pb-4 md:pb-0 lg:mt-[60px]">NEXT-GEN SWE</h4>
          <h1 className="md:text-6xl text-3xl lg:text-5xl font-bold px-1 md:px-0 pb-5 md:pb-0 md:pt-7">
            Transforming people and businesses through technology.
          </h1>
          <p className="text-lg py-1 md:pt-7">
            Our immersive, hands-on training combined with real-world project
            execution, enabling trainees to build a robust portfolio. Tailored
            for both individuals and corporate teams, our programs ensure
            participants can translate their knowledge into industry-relevant
            solutions. We also provide career support, helping trainees secure
            internships and optimize their LinkedIn profiles.
          </p>
          </div>

          <div className="relative md:hidden -top-[200px] left-[270px]">
          <img
            src={logoMark}
            alt="People working"
            className="w-[25%] h-auto object-cover rounded-lg"
          />
        </div>

          <button className="bg-[#4fc4cb] text-black py-3 px-6 rounded-lg font-thin hover:bg-white hidden sm:block ">
            <Link to="/training">Get Started</Link>
          </button>
        </div>

        {/* Image on the right */}
        <div className="w-1/2 relative hidden sm:block">
          <img
            src={logoMark}
            alt="People working"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="relative md:bottom-[110px] bottom-[30px] md:-right-[976px] xl:-right-[976px] lg:-right-[776px] mx-10 md:mx-0 w-[300px] h-[220px] rounded-lg bg-white p-5 shadow-lg shadow-[#4fc4cb]">
        <p className="text-[#171b2c] text-left">
          Whether your goal is to accelerate your career trajectory or elevate
          your organization’s skill set, our training provides the cutting-edge
          expertise, personalized guidance, and real-world application essential
          for sustained growth and success.
        </p>
      </div>

      <div className="text-center px-6 md:px-12 lg:px-24 mt-10 md:mt-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#171b2c] mb-4 pb-[50px] md:pb-0">
          boost time-to-market, cut down expense with
          <br />
          our effective{" "}
          <span className="text-[#4fc4cb]">software practices</span>
        </h1>
        <p className="text-[14px] md:text-[14px] text-gray-500 hidden sm:block">
          We deliver tech solutions designed to meet the unique needs of
          businesses across various industries
        </p>
      </div>
      <Choose />
      <SolutionGrid />
      <GetStarted/>
      <ExpertsSection />
      <Footer />
    </div>
  );
};

export default HeroSection;
