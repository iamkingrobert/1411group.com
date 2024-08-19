import React from "react";
import { motion } from "framer-motion";
import "./Courses.css";
import { GoArrowUpRight } from "react-icons/go";

const courses = [
  {
    title: "Full Stack Software Engineering",
    content:
      "Learn HTML, CSS, JavaScript, and more to build modern websites and applications.",
    color: "#fbe8d8", 
  },
  {
    title: "Data Analysis",
    content:
      "Master data analysis with tools like Python, Excel, and SQL for business insights.",
    color: "#d1e7dd", 
  },
  {
    title: "UI/UX Design",
    content:
      "Design user-friendly interfaces and experiences with Figma, Sketch, and more.",
    color: "#cfe2f3", 
  },
  {
    title: "Project Management",
    content:
      "Get certified and manage projects effectively using Agile, Scrum, and PMP.",
    color: "#e2d9f3", 
  },
  {
    title: "Community Management",
    content:
      "Get certified and manage projects effectively using Agile, Scrum, and PMP.",
    color: "#f9e4d4", 
  },
  {
    title: "Cyber Security",
    content:
      "Get certified and manage projects effectively using Agile, Scrum, and PMP.",
    color: "#d8f3dc", 
  },
];

const CourseSection = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen mx-4 lg:mx-[50px] mt-4">
      {/* Left Section - Fixed Circular Image */}
      <div className="lg:w-1/3 w-full h-full p-10 relative overflow-hidden">
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <h2 className="pt-10 text-[14px] italic font-thin">
          1411 Group<br></br>{" "}
          <span className=" not-italic font-thin text-[44px] uppercase">
            Training.
          </span>
        </h2>
        <p className="text-start italic text-[18px] pt-5 text-[#171b2c] rounded-full">
          We take great pride in our exceptional instructors. Our cutting-edge
          curriculum is crafted and delivered by top-tier IT experts, ensuring
          you receive the highest quality and pratical training from industry leaders
        </p>
      </div>

      {/* Right Section - Scrolling Content */}
      <div className="lg:w-2/3 w-full overflow-y-auto p-6 space-y-16 hide-scrollbar">
        {/* Course Section Heading */}
        {/* <h2 className="text-[16px] text-end lg:text-[24px] font-thin text-gray-800 mb-8 max-w-prose mx-auto">
          Our Courses
        </h2> */}

        {/* Course Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between hover:shadow-2xl hover:scale-105 transform transition-transform duration-300"
                style={{ backgroundColor: course.color }}
              >
                <div>
                  <h3 className="text-[20px] font-normal mb-4 text-[#171b2c]">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-3 mt-3">{course.content}</p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <button className="hover:text-[#171b2c] text-start text-[#4fc4cb] font-thin">
                    See Detail
                  </button>
                  <GoArrowUpRight className="text-[14px]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
