import React from "react";
import Footer from "../Components/Footer";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GetStarted from "../Components/GetStarted";
import { SiPowerbi } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";
import "../Components/Courses.css";

//Array of Object of courses which also includes the path for routing
const courses = [
  {
    title: "Full Stack Software Engineering",
    content:
      "Learn HTML, CSS, JavaScript, and more to build modern websites and applications.",
    color: "#fbe8d8",
    path: "/courses/software-engineering",
  },
  {
    title: "Data Analysis",
    content:
      "Master data analysis with tools like Python, Excel, and SQL for business insights.",
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

function Training() {
  return (
    <div className="bg-white">
      <div className="relative w-full overflow-hidden bg-[#171b2c]">
        <section className="bg-[#171b2c] py-16 md:py-24 md:px-4">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-8 overflow-hidden">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-4xl font-[900] text-white leading-1">
                Unlock Your Potential In Tech Today!
                <br />
                Work Placement Opportunities
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mt-4">
                We believe in learning by doing, our training programs include
                hands-on projects and exercises that allow you to apply what
                you’ve learned in real-world scenarios.
              </p>
              <p className="text-lg font-thin md:text-xl text-gray-200 mt-4">
                Designed to cater to individuals and corporates at different
                stages of their careers.
              </p>
              <div className="">
                {/* <button className="bg-teal-400 hover:bg-teal-500 text-teal-900 font-semibold py-3 px-6 rounded-lg mt-8">
                  Request A Demo
                </button> */}
                <div className="flex flex-row items-center pt-6 gap-6">
                  <SiPowerbi className="text-[#4fc4cb] text-[28px]" />
                  <DiJsBadge className="text-[#4fc4cb] text-[28px]" />
                  <DiMongodb className="text-[#4fc4cb] text-[28px]" />
                  <SiExpress className="text-[#4fc4cb] text-[28px]" />
                  <FaReact className="text-[#4fc4cb] text-[28px]" />
                  <FaCss3 className="text-[#4fc4cb] text-[28px]" />
                  <RiTailwindCssFill className="text-[#4fc4cb] text-[28px]" />
                </div>

                <div className="flex flex-row items-center pt-5 gap-6">
                  <FaNodeJs className="text-[#4fc4cb] text-[28px]" />
                  <FaDatabase className="text-[#4fc4cb] text-[28px]" />
                  <FaFileExcel className="text-[#4fc4cb] text-[28px]" />
                  <SiMysql className="text-[#4fc4cb] text-[28px]" />
                  <FaGithub className="text-[#4fc4cb] text-[28px]" />
                  <FaAws className="text-[#4fc4cb] text-[28px]" />
                  <FaPython className="text-[#4fc4cb] text-[28px]" />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 md:mt-8 lg:mt-0 mt-10">
              <img
                src="/src/assets/faces.jpg"
                alt="1411 Training"
                className="rounded-lg shadow-2xl max-w-full"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-green-50 py-12 overflow-hidden -mb-[90px] md:-mb-[70px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#171b2c] text-center mb-6">
            Develop essential IT skills. Secure the future, today.
          </h2>
          <p className="text-center mb-10 text-gray-600">
            Project-based learning, build an impressive portfolio.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
            {/* Left Side (Image Section) */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://img.freepik.com/premium-photo/man-african-ethnicity-using-conference-webcam-communication_482257-10975.jpg" // Update with your image path
                alt="Team management"
                className="w-full h-auto"
              />
            </div>

            {/* Right Side (Text Section) */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl text-[#171b2c] font-semibold mb-2">
                  Join our career changing-bootcamp
                </h3>
                <p className="text-gray-600">
                  Our transformative training courses have helped hundreds like
                  yourself launch new careers in tech. Get job ready for working
                  in code, learn Software Engineering, Data Science or Cloud
                  Computing in 6 months or less
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium">Get solid foundations</h4>
                  <p className="text-gray-600">
                    Learn with supportive teachers and change your career in
                    months.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">Work life balance</h4>
                  <p className="text-gray-600">
                    Over 89% of tech employees say they have support for a
                    better work-life balance.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">Start earning more</h4>
                  <p className="text-gray-600">
                    The annual wage of a tech expert in the US is $91,420
                    compared to non-tech jobs.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">
                    Learn with global Community
                  </h4>
                  <p className="text-gray-600">
                    Community is at the heart of career in tech, developed with
                    industry experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[#171b2c] text-center mb-2">
            Become a Global Citizen, Work Remotely.
          </h2>
          <p className="text-center mb-2 text-gray-600">
            Trusted partners and clients
          </p>
        </div>

        <div className="mx-auto flex justify-center">
          <div className="flex md:flex-row gap-3 justify-center items-center mt-[15px] md:mt-[25px] mb-[40px] md:mb-0 bg-gray-500 p-6 h-[70px] rounded-full w-[700px]">
            <img
              src="/src/assets/clifton.png"
              alt="Clifton Homes"
              className="md:w-[80px] w-[40px] md:h-[60px] object-contain"
            />

            <img
              src="/src/assets/axa-logo.png"
              alt="Axa Mansard"
              className="md:w-[80px] w-[40px] h-[40px] object-contain"
            />

            <img
              src="/src/assets/NHC-Logo.png"
              alt="Nigeria High Commission, Ghana"
              className="md:w-[80px] w-[40px] h-[45px] object-contain"
            />

            <img
              src="/src/assets/elime.png"
              alt="Elimes Outfit"
              className="md:w-[80px] w-[40px] h-[40px] object-contain"
            />

            <img
              src="/src/assets/the_gallery_logo_cropped.png"
              alt="The Gallery"
              className="md:w-[80px] w-[40px] h-[40px] object-contain"
            />

            <img
              src="/src/assets/Videa.png"
              alt="Videa Caffe"
              className="md:w-[80px] w-[40px] h-[40px] object-contain"
            />

            <img
              src="/src/assets/Zaio.png"
              alt="Zaio"
              className="md:w-[80px] w-[40px] h-[40px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-screen mx-4 lg:mx-[50px] -mt-[60px] md:mt-[60px] mb-[50px] md:-mb-[240px]">
          {/* Left Section - Fixed Circular Image */}
          <div className="lg:w-1/3 w-full h-full p-10 relative overflow-hidden">
            <h2 className="pt-[54px] text-[14px] italic font-thin">
              Kick Start your Career<br></br>{" "}
              <span className=" not-italic font-extralight text-[33px] uppercase">
                Individual & Coporate Training
              </span>
            </h2>
            <p className="text-start text-[18px] pt-5 text-gray-500 font-thin rounded-full">
              Elevate your skills with our expert-led training programs,
              carefully crafted by industry leaders to deliver practical
              knowledge and exceptional results. Our top-tier instructors bring
              real-world experience and passion to the classroom, ensuring you
              receive the highest quality training that sets you up for success.
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
                        <p className="text-gray-600 mb-3 mt-3">
                          {course.content}
                        </p>
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

        <section className="pt-3 md:pt-6 pb-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
            {/* Left side (Text) */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Cloud Computing on AWS
              </h2>
              <p className="text-[12px] text-gray-600 mb-6">CLOUD LABS</p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Payment-free cloud computing hands-on training
              </h3>
              <ul className="text-gray-600 mb-6 space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">🧪</span> Learn Cloud Computing
                  Concepts and AWS Basics
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌐</span> Master AWS Fundamentals and
                  Hands-on Skills on Amazon Web Services (AWS)
                </li>
              </ul>

              <div className="flex items-center space-x-4 mb-6">
                {/* Placeholder logos for AWS, Google Cloud, and Azure */}
                <FaAws className="text-[#171b2c] text-[28px]" />
                <GrCloudComputer className="text-[#171b2c] text-[28px]" />
              </div>

              <button className=" text-[#171b2c] font-light italic py-1 rounded-lg text-lg cursor-wait">
                Coming Soon..
              </button>
            </div>

            {/* Right side (Image) */}
            <div className="w-full lg:w-1/2">
              {/* Placeholder for the Image */}
              <img
                src="/src/assets/AWS.avif"
                alt="Cloud services illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <GetStarted />
      </section>
      <Footer />
    </div>
  );
}

export default Training;
