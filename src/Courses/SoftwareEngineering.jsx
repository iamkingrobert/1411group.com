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
                In our rapidly advancing digital era, the need for computer
                science professionals has reached unprecedented heights.
                Businesses across diverse sectors increasingly rely on
                technology to fuel innovation, making expertise in computers,
                logical reasoning, problem-solving, and programming skills more
                crucial than ever. Possessing such skills positions you at the
                forefront of this demand, unlocking many rewarding career
                opportunities.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                This Skill Path is meticulously crafted to provide a
                comprehensive introduction to computer science, catering
                especially to those without a background in the discipline.
                Starting with the fundamentals of problem-solving and logical
                thinking in computing, this Skill Path will guide you through
                coding using data structures, database design and management,
                web application development, and professional adaptation to
                various software development models.
              </p>

              <div className="flex flex-row items-center space-x-3 ">
                <button className="bg-[#4fc4cb] text-[#171b2c] py-3 px-6 mt-4 cursor-text shadow-md font-[500]">
                  30 Modules
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
                    The ability to think logically, analyze, design, and
                    implement algorithms to solve computational problems.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    A working knowledge of data modeling and design using NoSQL
                    databases like MySQL and MongoDB, respectively.
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
                    Familiarity with renowned data structures like lists,
                    arrays, stacks, queues, linked lists, trees, and graphs.
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
                    The ability to think ethically and critically in the context
                    of computing.
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
                <span className="text-blue-600">$300.00</span>
                <p className="text-base text-gray-500">
                  Down Payment ($200)
                </p>
              </h3>
              <p className="text-green-600 text-center mb-4">
                Discount ON 
              </p>
              <button className="bg-[#4fc4cb] hover:bg-[#171b2c] text-white font-bold py-3 w-full rounded-lg mb-4">
                Register Now
              </button>
              <button className="border-2 border-[#4fc4cb] text-[#171b2c] font-bold py-3 w-full rounded-lg cursor-progress">
                Next Cohort: January 2025 
              </button>
            </div>
          </div>
        </section>
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
                2. Measuring Quantities with a Bottom-Up Approach
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Understanding the Problem</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Solution</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Carrying Out the Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Exercise</span>
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                3. Solving the Farmer’s Dilemma by Embracing a Top-Down Approach
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Understanding the Problem</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Solution</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Carrying Out the Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Exercise</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                3. Solving the Farmer’s Dilemma by Embracing a Top-Down Approach
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Understanding the Problem</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Solution</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Carrying Out the Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                  <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Exercise</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                3. Solving the Farmer’s Dilemma by Embracing a Top-Down Approach
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Understanding the Problem</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Solution</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Carrying Out the Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Exercise</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                3. Solving the Farmer’s Dilemma by Embracing a Top-Down Approach
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Understanding the Problem</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Devising a Plan: Solution</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Carrying Out the Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]"/>
                  </span>
                  <span className="ml-2">Exercise</span>
                </li>
              </ul>
            </div>

            {/* Add more modules here */}
          </div>
        </div>

        {/* Right Side: Fixed Course Details */}
        <div className="w-full lg:w-[40%] lg:h-screen bg-white p-6 lg:sticky lg:top-0">
          <h2 className="text-2xl font-bold mb-4">Course Details</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <MdAvTimer className="text-[25px]" />
              </span>
              <span className="ml-2">110 hours</span>
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
              <span className="ml-2">5 Portfolio Projects</span>
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
              <span className="ml-2">20 Weekly Tasks</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <IoBriefcase className="text-[25px]" />
              </span>
              <span className="ml-2">5 Interview Readiness</span>
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
