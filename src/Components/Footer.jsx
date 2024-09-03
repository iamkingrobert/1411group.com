import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  // If the current path is the homepage the the footer background should bg-[#171B2C] else bg-[#265457]
  const isHomePage = location.pathname === "/";

  return (
    <footer
      className={`${
        isHomePage ? "bg-[#171B2C]" : "bg-[#265457]"
      } text-gray-200 pt-10 pb-3 rounded-tl-[55px] rounded-tr-[55px]`}
    >
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 lg:px-20 mb-5">
        <div className="flex flex-wrap justify-between">
          {/* Column 1: About */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4 uppercase text-center md:text-left">
              1411 Group
            </h2>
            <p className="text-sm font-light mb-4 text-center md:text-left">
              We are a dynamic organization passionate about empowering
              individuals and businesses to thrive in the ever-evolving
              technology landscape.
            </p>
            <div className="flex justify-center">
              <img
                src="/src/assets/1411-training.png"
                alt="1411 Group Logo"
                className="w-[70px] h-auto mt-4"
              />
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4 uppercase">Contact Us</h2>
            <div className="flex flex-row space-x-1 mb-3 self-center">
              <FaLocationDot className="text-white" />
              <p className="text-sm">
                Ahmadu Bello Way, Victoria Island, <br></br>Lagos, NG{" "}
              </p>
            </div>

            <div className="flex flex-row space-x-1 mb-3">
              <BsTelephoneFill />
              <p className="text-sm">Tel: 234 (0) 806 341 4676 </p>
            </div>
            <div className="flex flex-row space-x-1 mb-4">
              <MdOutlineAlternateEmail />
              <p className="text-sm">Email: hello@1411group.com</p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://twitter.com/1411group"
                target="_blank"
                className="text-gray-200 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/1411-group/"
                target="_blank"
                className="text-gray-200 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/the1411group"
                target="_blank"
                className="text-gray-200 hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-y-2 -gap-x-1 text-gray-400">
              <li>
                <Link to="/about-us" className="text-sm hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-sm hover:text-white">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-sm hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-sm hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-sm hover:text-white">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/our-solutions" className="text-sm hover:text-white">
                  Tech Solution
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/connect-lagos" className="text-sm hover:text-white">
                  ConLagos
                </Link>
              </li>
              <li>
                <Link
                  to="/startup-accelerator"
                  className="text-sm hover:text-white"
                >
                  StartUp Accelerator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Courses Links */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">1411 COURSES</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/courses/software-engineering"
                  className="text-sm hover:text-white"
                >
                  Full Stack Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/data-analysis"
                  className="text-sm hover:text-white"
                >
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link to="/courses/ui-ux" className="text-sm hover:text-white">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/project-management"
                  className="text-sm hover:text-white"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/community-management"
                  className="text-sm hover:text-white"
                >
                  Community Management
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/cyber-security"
                  className="text-sm hover:text-white"
                >
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="pt-2">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col md:flex-row md:justify-between space-y-4 items-center text-sm pb-3">
          <p className="font-light text-center text-[16px]">
            &copy; 1411 International Limited. All Right Reserved.
          </p>
          <p className="font-extralight text-[10px]">
            Tomorrow's Tech, Today's Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
