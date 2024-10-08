import React from "react";
import { motion } from "framer-motion";
import "./Courses.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import LogoMark from '../assets/Logomark.png';

//Array of Object of courses which also includes the path for routing
const courses = [
  {
    title: "Full Stack Software Engineering",
    content:
      "Learn HTML, CSS, JavaScript, and MERN Stack tech to build modern websites and applications.",
    color: "#fbe8d8",
    path: "/courses/software-engineering",
  },
  {
    title: "Data Analysis",
    content:
      "Master data analysis with tools industry leading tools like, Power BI , Excel, and SQL for business insights.",
    color: "#d1e7dd",
    path: "/courses/data-analysis",
  },
  {
    title: "UI/UX Design",
    content:
      "Design user-friendly interfaces and experiences with Figma, Sketch, and more.",
    color: "#cfe2f3",
    path: "/courses/ui-ux",
  },
  {
    title: "Product Management",
    content:
      "Get certified and manage projects effectively using Agile, Scrum, and PMP.",
    color: "#e2d9f3",
    path: "/courses/product-management",
  },
  {
    title: "Community Management",
    content:
      "Get certified and manage projects effectively using Agile, Scrum, and PMP.",
    color: "#f9e4d4",
    path: "/courses/community-management",
  },
  {
    title: "Cyber Security",
    content:
      "Get certified and manage projects effectively using Agile, Scrum, and PMP.",
    color: "#d8f3dc",
    path: "/courses/cyber-security",
  },
];

const CourseSection = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen mx-4 lg:mx-[50px] -mt-3 md:mt-[100px] mb-[190px] md:mb-0">
      {/* Left Section - Fixed Circular Image */}
      <div
        className="lg:w-1/3 w-full h-full p-10 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${LogoMark})` }}
      >
        <h2 className="pt-[54px] text-[14px] italic font-thin">
          Kick Start your Career<br></br>{" "}
          <span className=" not-italic font-extralight text-[33px] uppercase">
            Individual & Coporate Training
          </span>
        </h2>
        <p className="text-start text-[18px] pt-5 text-gray-500 font-thin rounded-full">
          Elevate your skills with our expert-led training programs, carefully
          crafted by industry leaders to deliver practical knowledge and
          exceptional results. Our top-tier instructors bring real-world
          experience and passion to the classroom, ensuring you receive the
          highest quality training that sets you up for success.
        </p>
      </div>

      {/* Right Section - Scrolling Content */}
      <div className="lg:w-2/3 w-full overflow-y-auto p-6 space-y-16 hide-scrollbar">
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
              <Link to={course.path}>
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
