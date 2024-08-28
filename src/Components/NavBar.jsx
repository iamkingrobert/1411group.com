import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed md:top-8 left-0 w-full z-40 text-white transition-colors duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-40 md:text-[#4fc4cb]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always on the left */}
          <div className="flex-1">
            <Link to="/">
              <img
                src="/src/assets/1411group.png"
                className="h-[26px] w-[120px]"
                alt="1411 Group"
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6 text-[#171b2c]" />
              ) : (
                <FaBars className="h-6 w-6 text-[#171b2c]" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
                    <img src="/src/assets/1411-icon.png" alt="1411 Icon" />
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact-us" className="hover:text-gray-300 text-[16px]">
              Contact Us
            </Link>
          </div>

          {/* Right Section - Hire Talent Button */}
          <div className="hidden md:flex flex-1 justify-end">
            <Link to="/hire-talent">
              <button className="bg-[#171B2C] hover:bg-[#4FC4CB] text-white font-normal py-2 px-4 rounded-md">
                Hire Talent
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-[#4fc4cb] md:hidden p-4 rounded-lg">
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/why-choose-us" className="hover:text-gray-700">
                Why 1411 Group
              </Link>
              <Link to="/about-us" className="hover:text-gray-700">
                About Us
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className="text-left w-full focus:outline-none"
                >
                  Solutions
                </button>
                {isMegaMenuOpen && (
                  <div className="flex flex-col mt-2 bg-[#171B2C] rounded-md p-4 space-y-3">
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
                )}
              </div>
              <Link to="/contact-us" className="hover:text-gray-700">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
