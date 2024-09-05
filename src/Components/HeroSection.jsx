import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="bg-[#171b2c] text-white flex items-center justify-between p-10 h-[80vh] relative">
        {/* Text Content */}
        <div className="w-1/2 space-y-6">
          <h4 className="text-[#37d4c7] font-bold">WHY 1411 GROUP?</h4>
          <h1 className="text-4xl font-bold">
            We Connect Brilliance with Opportunity So Everyone Wins
          </h1>
          <p className="text-lg">
            Competition for top digital talent is more fierce than ever. But you
            don’t have to limit your search by geographic location. With our
            vast global marketplace of skilled technologists and proprietary,
            AI-driven matching technology, we help you hire the world's best ...
            as much as 66% faster.
          </p>
          <button className="bg-[#37d4c7] text-black py-3 px-6 rounded-lg font-semibold hover:bg-[#2bb39e]">
            Learn More
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
        <p className="text-[#171b2c]">
          Certified B Corporations are leaders in the global movement for an
          inclusive, equitable, and regenerative economy. Unlike other
          certifications for businesses, B Lab is unique in our ability to
          measure a company’s entire social and environmental impact.{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
