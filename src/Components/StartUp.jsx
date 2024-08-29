import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import "./StartUp.css";
import { Link } from "react-router-dom";

const StartupAcceleration = () => {
  return (
    <div className="w-full bg-[#171b2c] text-white flex flex-col lg:flex-row items-center justify-center py-14 relative overflow-hidden -top-[180px]">
      {/* Left Section - Dot Animation & Content */}
      <div className="lg:w-1/2 w-full px-8 relative">
        {/* Content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-[28px] lg:text-[36px] font-semibold mb-4 text-[#4fc4cb]">
            Start-Up Accelerator
          </h2>
          <p className="text-md lg:text-lg font-thin leading-relaxed mb-6">
            Through our comprehensive acceleration program, we empower startups
            to navigate the complexities of early-stage development and set a
            strong foundation for long-term success. We will develop a robust
            sales strategy to drive revenue growth and expand your customer base
          </p>
          <Link className="mt-4" to="/startup-accelerator">
            <button className="flex flex-row items-center bg-[#4fc4cb] hover:bg-[#ffff] text-[#171b2c] font-thin py-2 px-5 rounded-md transition-all duration-300 ease-in-out">
              <p>Learn More</p>
              <GoArrowUpRight className="text-[14px]" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        className="lg:w-1/2 w-full h-[380px] lg:h-[380px] mt-8 lg:mt-0 relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          src="https://nexusla.org/wp-content/uploads/2023/12/NLAFeatured_Startup-Resources-in-Louisiana-Opportunities-for-Growth-.jpeg"
          alt="Startup Acceleration"
          className="w-[100%] h-[100%] object-cover rounded-lg shadow-lg shadow-[#4fc4cb]"
        />
      </motion.div>
    </div>
  );
};

export default StartupAcceleration;
