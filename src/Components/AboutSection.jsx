import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="container mx-auto md:mt-10 px-4 lg:px-20 -mt-9">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: false, amount: 0.5 }} // `once: false` ensures the animation repeats
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/src/assets/Traning-01-scaled.jpg"
            alt="1411 Group"
            className="w-full lg:w-[500px] object-cover md:rounded-br-[105px] md:rounded-tl-[140px] shadow-md"
          />
        </motion.div>

        {/* Right Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: false, amount: 0.5 }} // `once: false` ensures the animation repeats
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#171b2c] mb-4">
            Tomorrow's Tech, Today's Innovation
          </h2>
          <p className="text-lg text-gray-600 pb-3">
            Innovation is at the heart of what we do. We offer a range of
            services to support startups and businesses, helping them to launch,
            grow, and scale.
          </p>
          <p className="text-[16px] text-gray-600 mb-5">
            Our solutions encompass tech training, consulting, and comprehensive
            support in areas such as software development, data analytics,
            start-up acceleration, digital transformation, and more.
          </p>
          <div className="flex flex-row space-x-2 items-center">
            <Link
              to="/why-choose-us"
              className="hover:text-[#171b2c] text-start text-[#4fc4cb] font-thin"
            >
              Why Choose Us
            </Link>
            <GoArrowUpRight className="text-[14px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
