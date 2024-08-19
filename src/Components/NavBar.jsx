import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  return (
    <nav className="fixed top-8 left-0 w-full z-40 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo */}
          <div className="flex-1">
            <Link to="/">
              <img
                src="/src/assets/1411group.png"
                className="h-[26px] w-[120px]"
              />
            </Link>
          </div>

          {/* Center Section - Menu Items */}
          <div className="flex items-center space-x-8">
            <Link to="/why-choose-us" className="hover:text-gray-300">
              Why 1411 Group
            </Link>
            <Link to="/about-us" className="hover:text-gray-300">
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <a href="#services" className="hover:text-gray-300">
                Solutions
              </a>
              {isMegaMenuOpen && (
                <div className="absolute -left-[120px] flex flex-row space-x-4 bg-[#171B2C] mt-[5px] w-[300px]  text-white rounded-md p-4">
                  <div className="flex flex-col space-y-3">
                    <Link
                      to="/training"
                      className="hover:text-gray-300 text-[14px]"
                    >
                      Training
                    </Link>
                    <Link
                      to="/consulting"
                      className="hover:text-gray-300 text-[14px]"
                    >
                      Consulting
                    </Link>
                    <Link
                      to="/our-solutions"
                      className="hover:text-gray-300 text-[13px]"
                    >
                      Tech Solutions
                    </Link>
                    <Link
                      to="/careers"
                      className="hover:text-gray-300 text-[14px]"
                    >
                      Careers
                    </Link>
                    <Link
                      to="/connect-lagos"
                      className="hover:text-gray-300 text-[14px]"
                    >
                      ConnectLagos
                    </Link>
                  </div>
                  <div className="my-auto">
                    <img src="/src/assets/1411-icon.png" />
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact-us" className="hover:text-gray-300 text-[16px]">
              Contact Us
            </Link>
          </div>

          {/* Right Section - HR Button */}
          <div className="flex-1 flex justify-end">
            <Link to="/hire-talent">
              <button className="bg-[#171B2C] hover:bg-[#4FC4CB] text-white font-normal py-2 px-4 rounded-md">
                Hire Talent
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
