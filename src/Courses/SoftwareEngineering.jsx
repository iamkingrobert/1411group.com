import React from "react";
import "./Software.css";
import { IoCodeSlash } from "react-icons/io5";
import { DiJsBadge } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { SiTask } from "react-icons/si";
import { FaRegStar } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Footer from "../Components/Footer";

function SoftwareEngineering() {
  return (
    <div className="bg-white">
      <div className="relative w-full overflow-hidden bg-[#171b2c]">
        <section className="text-white py-12 px-6 md:px-16 lg:px-[110px] md:mt-[50px] mt-3">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8 space-y-8 lg:space-y-0">
            {/* Left Content */}
            <div className="lg:w-2/3 space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                Software Engineering Bootcamp
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                This course equips you with the essential skills to become a
                proficient developer. Covering both front-end and back-end
                development, you'll learn to build responsive, dynamic web
                applications using frameworks like React.js and Node.js. This
                hands-on, project-driven program ensures you gain real-world
                experience and prepares you for a successful tech career.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Throughout the course, you'll engage with a range of tools and
                technologies, including HTML, CSS, TailwindCSS, JavaScript, Git,
                MongoDB, and more. With a strong focus on practical
                implementation, our curriculum allows you to work on capstone
                projects that simulate industry-level tasks. Whether you are a
                beginner or looking to enhance your development skills, this
                course will help you build a solid foundation, develop
                problem-solving abilities, and emerge as a well-rounded full
                stack developer.
              </p>

              <div className="flex flex-row items-center space-x-3 ">
                <button className="bg-[#4fc4cb] text-[#171b2c] py-3 px-6 mt-4 cursor-text shadow-md font-[500]">
                  6 Modules
                </button>
                <div className="flex flex-row items-center space-x-2 mt-4">
                  <DiMongodb className="text-white text-[38px]" />
                  <SiExpress className="text-white text-[38px]" />
                  <FaReact className="text-white text-[38px]" />
                  <FaNodeJs className="text-white text-[38px]" />
                </div>
              </div>
            </div>

            {/* Right Icon Section */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="flex space-x-8 md:mt-[100px]">
                <div className="bg-gray-800 p-6 rounded-lg">
                  {/* Icon 1 */}
                  <IoCodeSlash className="text-white text-[100px]" />
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  {/* Icon 2 */}
                  <DiJsBadge className="text-white text-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 px-6 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Learning Objectives */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">
                <span className="mr-2">🎯</span>Learning Objectives
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Gain a deep understanding of front-end technologies such as
                    HTML, CSS, and JavaScript to build responsive and dynamic
                    web pages.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Develop proficiency in React.js for creating interactive
                    user interfaces and manage application state effectively.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Familiarity with software development methodologies from the
                    traditional Waterfall model to Agile practices.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Hands-on programming skills in writing efficient, readable,
                    and reusable code leveraging object-oriented principles.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Master back-end development using Node.js and Express.js,
                    including building RESTful APIs and connecting with
                    databases like MongoDB.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    An understanding of web architecture and hands-on skills in
                    frontend, backend, and full-stack web development using the
                    MERN stack.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Learn to use version control systems like Git and GitHub to
                    collaborate on projects and manage code efficiently.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Content - Offer */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="bg-[#171b2c] text-white text-center py-2 rounded-lg mb-4">
                <span className="text-xl font-semibold">🎉 10% OFF</span>
              </div>
              <h3 className="text-4xl font-bold mb-4 text-center text-gray-800">
                <span className="line-through text-gray-400">$333.00</span>{" "}
                <span className="text-[#171b2c]">$300.00</span>
                <p className="text-base text-gray-500">Down Payment ($200)</p>
              </h3>
              <p className="text-green-600 text-center mb-4">Discount ON</p>
              <button className="bg-[#4fc4cb] hover:bg-[#171b2c] text-white font-bold py-3 w-full rounded-lg mb-4">
                Register Now
              </button>
              <button className="border-2 border-[#4fc4cb] text-[#171b2c] font-bold py-3 w-full rounded-lg cursor-progress">
                Next Cohort: January 2025
              </button>
            </div>
          </div>
        </section>

        <div className="bg-white px-6 md:px-16 lg:px-32 pb-4">
          <p className="text-[30px] font-semibold text-center md:text-left">
            Course Module
          </p>
        </div>
      </div>

      {/* STARTS FROM HERE */}
      <div className="min-h-screen flex flex-col lg:flex-row mx-auto max-w-screen-xl mb-10">
        {/* Left Side: Scrollable Course Modules */}
        <div className="w-full lg:h-screen overflow-y-auto bg-gray-50 p-6 scrollbar-hide">
          {/* Placeholder for course modules */}
          <div className="space-y-6">
            {/* Module 1 */}
            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                Website Development Basics (6 Weeks)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Introduction to website development
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Basic HTML</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Advanced HTML and Semantic tags</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Cascading Style Sheets (CSS) and advanced selectors
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">CSS FlexBox</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">CSS Grid</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Responsive Web Design</span>
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                Modern Web Design with TailwindCSS (2 Weeks)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Introduction to TailwindCSS</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">TailwindCSS FlexBox</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">TailwindCSS Grid</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Responsive Design (The Breakpoints)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Capstone Project</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                Version Control (2 Weeks)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Introduction to Git</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">GitHub</span>
                </li>

                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Capstone Project - Multi-Page E-commerce Website (2 Weeks)
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                Introduction to Programming (8 Weeks)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">JavaScript programming</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Object Oriented Programming (OOPs)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Advanced JavaScript</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Problem Solving</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Data Structure & Algorithms</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                Frontend Development with React.JS (6 Weeks)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Understanding React.JS</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Understand React State and Event Management
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Redux Toolkit</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">React Router DOM</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Axios & JS Fetch</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                Backend Development with Node.JS (4 Weeks)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Build a backend server with NodeJs & ExpressJS
                  </span>
                </li>

                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Create and connect database with MongoDB
                  </span>
                </li>

                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Postman</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                Capstone: Final Project - Full Stack (4 Weeks)
              </h2>
            </div>

            {/* Add more modules here */}
          </div>
        </div>

        {/* Right Side: Fixed Course Details */}
        <div className="w-full lg:w-[40%] lg:h-screen bg-white p-6 lg:sticky lg:top-0">
          <h2 className="text-2xl font-bold mb-4">Training Details</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <MdAvTimer className="text-[25px]" />
              </span>
              <span className="ml-2">112 hours</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <AiOutlineTeam className="text-[25px]" />
              </span>
              <span className="ml-2">Team Work</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <FaRegStar className="text-[25px]" />
              </span>
              <span className="ml-2">3 Portfolio Projects</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <MdOutlineOnlinePrediction className="text-[25px]" />
              </span>
              <span className="ml-2">100% online learning</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <MdVerifiedUser className="text-[25px]" />
              </span>
              <span className="ml-2">48 Live Classes</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <SiTask className="text-[25px]" />
              </span>
              <span className="ml-2">28 Weekly Tasks</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <IoBriefcase className="text-[25px]" />
              </span>
              <span className="ml-2">2 Interview Readiness</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <FaProjectDiagram className="text-[25px]" />
              </span>
              <span className="ml-2">Project-based Learning</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SoftwareEngineering;
