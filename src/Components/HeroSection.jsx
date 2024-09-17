import React from "react";
import { Link } from "react-router-dom";
import Choose from "./Choose";
import SolutionGrid from "./SolutionGrid";
import Footer from "./Footer";
import ExpertsSection from "./ExpertsSection";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="bg-[#171b2c] text-white flex items-center justify-between p-10 h-[80vh] relative mt-10">
        {/* Text Content */}
        <div className="w-1/2 space-y-6">
          <h4 className="text-[#4fc4cb] text-[20px] font-bold">NEXT-GEN SWE</h4>
          <h1 className="text-6xl font-bold">
            Transforming people and businesses through technology.
          </h1>
          <p className="text-lg py-1">
            Our immersive, hands-on training combined with real-world project
            execution, enabling trainees to build a robust portfolio. Tailored
            for both individuals and corporate teams, our programs ensure
            participants can translate their knowledge into industry-relevant
            solutions. We also provide career support, helping trainees secure
            internships and optimize their LinkedIn profiles.
          </p>

          <button className="bg-[#4fc4cb] text-black py-3 px-6 rounded-lg font-thin hover:bg-white">
            <Link to="/training">Get Started</Link>
          </button>
        </div>

        {/* Image on the right */}
        <div className="w-1/2 relative">
          <img
            src="/src/assets/Logomark.png"
            alt="People working"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="relative bottom-[110px] -right-[976px] w-[300px] h-[220px] rounded-lg bg-white p-5 shadow-lg shadow-[#4fc4cb]">
        <p className="text-[#171b2c] text-left">
          Whether your goal is to accelerate your career trajectory or elevate
          your organization’s skill set, our training provides the cutting-edge
          expertise, personalized guidance, and real-world application essential
          for sustained growth and success.
        </p>
      </div>

      <div className="text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#171b2c] mb-4">
          boost time-to-market, cut down expense with
          <br />
          our effective{" "}
          <span className="text-[#4fc4cb]">software practices</span>
        </h1>
        <p className="text-[14px] md:text-[14px] text-gray-500">
          We deliver tech solutions designed to meet the unique needs of
          businesses across various industries
        </p>
      </div>
      <Choose />
      <SolutionGrid />
      <ExpertsSection />
      <Footer />
    </div>
  );
};

export default HeroSection;
