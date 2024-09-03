import React from "react";

const MissionVision = () => {
  return (
    <div className="bg-[#171b2c] py-16 px-4 md:px-8 lg:px-16 relative -top-[50px]">
      <h2 className="text-3xl md:text-4xl font-mono text-center text-[#4fc4cb] mb-[60px] tracking-[20px]">
        Mission & Vision 
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mx-[200px]">
        <div className="bg-white text-[#171b2c] p-6 md:p-8 lg:p-12 rounded-[25px] shadow-lg flex-1 h-[400px] bg-cover bg-center hover:shadow-[#4fc4cb]"
            style={{
              backgroundImage: "url('/src/assets/Logomark.png')",
            }}>
          <p className="text-lg md:text-xl lg:text-3xl font-mono">
            Empowering individuals, startups, and businesses to harness
            technology, solve real-world problems, and build a sustainable
            future.
          </p>
        </div>
        <div className="bg-white text-[#090a31] p-6 md:p-8 lg:p-12 rounded-[25px] shadow-lg flex-1 h-[400px] bg-cover bg-center hover:shadow-[#4fc4cb]"
            style={{
              backgroundImage: "url('/src/assets/Logomark.png')",
            }}>
          <p className="text-lg md:text-xl lg:text-3xl font-mono">
            We aspire to create a world where technology is seamlessly
            integrated into everyday life, providing solutions that make a
            difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
