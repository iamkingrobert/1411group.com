import React, { useEffect } from "react";
import AboutSuccess from "../Components/AboutSuccess";
import GetStarted from "../Components/GetStarted";
import Footer from "../Components/Footer";
import MissionVision from "../Components/MissionVision";
import CEOQuote from "../Components/CEOQuote";

function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Tomorrow's Tech, Today's Innovation";
  }, []);
  return (
    <div className="relative w-full overflow-hidden bg-[#171b2c]">
      <div className="bg-[#171b2c] flex items-center justify-center mt-[60px] h-[45vh]">
        <div className="text-center px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            a thriving ecosystem that drives <br />
            positive <span className="text-[#4fc4cb]">change</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 pb-4 md:pb-0">
            Empowering individuals, startups, and businesses to unlock their
            full potential in the dynamic tech world.
          </p>
        </div>
      </div>
      <AboutSuccess />
      <CEOQuote />
      <MissionVision />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default AboutUs;
