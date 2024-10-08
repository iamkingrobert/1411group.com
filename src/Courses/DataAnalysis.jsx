import React, { useEffect } from "react";
import "./Software.css";
import { SiPowerbi } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
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

function DataAnalysis() {
  useEffect(() => {
    document.title =
      "Data Analysis Bootcamp | Tomorrow's Tech, Today's Innovation";
  }, []);
  return (
    <div className="bg-white">
      <div className="relative w-full overflow-hidden bg-[#171b2c]">
        <section className="text-white py-12 px-6 md:px-16 lg:px-[110px] md:mt-[50px] mt-3">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8 space-y-8 lg:space-y-0">
            {/* Left Content */}
            <div className="lg:w-2/3 space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                Data Analysis Bootcamp
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Unlock the power of data with our comprehensive Data Analytics
                Track, designed to equip you with the skills to analyze,
                visualize, and interpret complex datasets using industry-leading
                tools like Power BI and SQL. Whether you're new to data analysis
                or looking to sharpen your expertise, this hands-on course
                guides you through essential techniques in data transformation,
                DAX formulas, and advanced visualization. With real-world case
                studies and capstone projects, you'll learn to make data-driven
                decisions that fuel business success.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Our 16-week course goes beyond the basics, offering an immersive
                experience that delves deep into data modeling, SQL
                fundamentals, and Exploratory Data Analysis (EDA). From
                analyzing various complex dataset, you'll apply your knowledge
                to practical, real-world scenarios. By the end of the course,
                you'll have mastered key analytical tools and techniques, ready
                to take on the challenges of a data-driven world and create
                impactful, interactive reports that drive insights.
              </p>

              <div className="flex flex-row items-center space-x-3 ">
                <button className="bg-[#4fc4cb] text-[#171b2c] py-3 px-6 mt-4 cursor-text shadow-md font-[500]">
                  11 Modules
                </button>
                <div className="flex flex-row items-center space-x-2 mt-4">
                  <FaFileExcel className="text-white text-[38px]" />
                  <FaDatabase className="text-white text-[38px]" />
                  <IoMdAnalytics className="text-white text-[38px]" />
                </div>
              </div>
            </div>

            {/* Right Icon Section */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="flex space-x-8 md:mt-[100px]">
                <div className="bg-gray-800 p-6 rounded-lg">
                  {/* Icon 1 */}
                  <SiPowerbi className="text-white text-[100px]" />
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  {/* Icon 2 */}
                  <SiMysql className="text-white text-[100px]" />
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
                  <p>Understand the basics of data analysis and Power BI.</p>
                </li>

                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Develop proficiency in transforming and visualizing data.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Gain foundational knowledge of DAX (Data Analysis
                    Expressions).
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>Master data modeling techniques in Power BI.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>Develop SQL skills for data manipulation.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Apply analytical skills through real-world case studies and
                    projects.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#171b2c] mr-3">✔</span>
                  <p>
                    Design professional and interactive reports in Power BI.
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
                1. What is Data Analysis? (Week 1)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Introduction to Power BI</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Getting Started with Power BI</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Components of Power BI</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Power BI licensing Model</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Power BI Desktop - User Interface
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Data Sources in Power BI</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Transforming Data</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Visualizing Data</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Filtering</span>
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                2. Introduction to DAX in Power BI (Week 2)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Getting Started with DAX (Calculated Columns Vs. Measure)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Context in DAX Formulas</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Working with Dates</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Data Visualization in Power BI</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Case Study – Analysing Customer Churn in Power BI
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                3. Data Cleaning using Power Query (Week 3)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Introduction to Power Query</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Data Preview features in Power Query
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Data Manipulation</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Numerical Transformation in Power Query
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Reshaping Data</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Combining Data in Power Query</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Custom columns</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Advanced Editor</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                4. Data Modelling (Week 4)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Defining Tables</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Shaping Tables</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Dimensional Modeling</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Star and Snowflakes Schemas</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Date Dimensions and Relationships
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Granularity, Measures and Hierarchies
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Advanced Data Modeling Techniques
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Common Performance Problems</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Case Study: HR Analytics in Power BI
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                5. DAX Functions in Power BI (Week 5)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Setting up Data Models with DAX</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">DAX and Measures</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Filtering and Counting with DAX</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Iterating Functions</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                6. SQL Fundamentals (Week 6)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Introduction to SQL</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Selecting Data</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Filtering records</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Aggregate functions</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Sorting and Grouping</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Joining Data in SQL – Inner, Outer, Cross Joins and Self
                    Joins
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Mini Project – Analyzing Student Mental Health
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                7. Capstone Project- PWC Data Analysis simulation (Week 7 - 8)
              </h2>
              {/* <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Understanding the Problem</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Devising a Plan: Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Devising a Plan: Solution</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Carrying Out the Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Exercise</span>
                </li>
              </ul> */}
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                9. Recap DAX Functions in Power BI (Week 9)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Setting up Data Models with DAX</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">DAX and Measures</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Filtering and Counting with DAX</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Iterating Functions</span>
                </li>
              </ul>
            </div>

            {/* <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                10. SQL Mini Project – Analyzing Student Mental Health (Week 10)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Understanding the Problem</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Devising a Plan: Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Devising a Plan: Solution</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Carrying Out the Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Exercise</span>
                </li>
              </ul>
            </div> */}

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                11. Intermediate DAX in Power BI (Week 11)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Logical Functions</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Row-Level Security</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Table Manipulation Functions</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Time Intelligence functions</span>
                </li>
                {/* <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Exercise</span>
                </li> */}
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                12. Exploratory Data Analysis in Power BI (Week 12)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Initial EDA</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Distribution and Outliers</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">EDA with Categorical Variables</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Relationship Between continuous Variables
                  </span>
                </li>
                {/* <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Exercise</span>
                </li> */}
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                13. Trend Analysis in Power BI (Week 13)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Exploring Time Series Data</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">
                    Analyzing Time Series in Power BI
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Decomposition Trees</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Key Influencers</span>
                </li>
                {/* <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Exercise</span>
                </li> */}
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                14. Report Design In Power BI (Week 14)
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Progressive Disclosure</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Customizing the View</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Design for Mobile Devices</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                15. Capstone Project (Week 15 - 16)
              </h2>
              {/* <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Understanding the Problem</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Devising a Plan: Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Devising a Plan: Solution</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Carrying Out the Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-500">
                    <FaLock className="text-[15px] text-[#171b2c]" />
                  </span>
                  <span className="ml-2">Exercise</span>
                </li>
              </ul> */}
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
              <span className="ml-2">100 hours</span>
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
              <span className="ml-2">32 Live Classes</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <SiTask className="text-[25px]" />
              </span>
              <span className="ml-2">16 Weekly Tasks</span>
            </div>

            <div className="flex items-center">
              <span className="material-icons text-[#171b2c]">
                <IoBriefcase className="text-[25px]" />
              </span>
              <span className="ml-2">1 Interview Readiness</span>
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

export default DataAnalysis;
