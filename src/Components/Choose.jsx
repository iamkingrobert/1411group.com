import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { SiBmcsoftware } from "react-icons/si";

const Choose = () => {
  return (
    <div className="container mx-auto md:mt-[100px] px-4 lg:px-20 -mt-9 md:mb-[70px]">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10 bg-white">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: false, amount: 0.5 }} // `once: false` ensures the animation repeats
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/src/assets/Project-01.webp"
            alt="1411 Group"
            className="w-full lg:w-[500px] object-cover shadow-md md:rounded-tl-[140px]"
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
            Automation, AI & Bespoke Solutions
          </h2>
          <p className="text-lg text-gray-600 pb-3">
            We create custom software solutions tailored to your business needs,
            ensuring optimal performance and scalability, seamlessly integrate
            new software with your existing systems to improve functionality and
            efficiency.
          </p>
          <p className="text-[16px] text-gray-600 mb-5">
            Develop data driven strategy that maximizes the value of your data
            assets, implement advanced data analytics solutions to provide
            actionable insights and support data-driven decision-making.
          </p>
          <p className="text-[16px] text-gray-600 mb-5">
            We stay ahead of industry trends to offer the latest and most
            effective technologies, ensuring comprehensive support from strategy
            development to implementation. With a client-centric
            approach, we prioritize your business goals and work closely with
            you to achieve them.
          </p>
          <div className="flex flex-row space-x-2 items-center">
            <Link
              to="/contact-us"
              className="hover:text-[#171b2c] text-start text-[#4fc4cb] font-thin"
            >
              Start your project
            </Link>
            <GoArrowUpRight className="text-[14px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Choose;
