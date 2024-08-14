import React, { useState } from "react";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  return (
    <nav className="fixed top-8 left-0 w-full z-40 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo or empty div to balance */}
          <div className="flex-1">
            <img
              src="/src/assets/1411group.png"
              className="h-[26px] w-[120px]"
            />
          </div>

          {/* Center Section - Menu Items */}
          <div className="flex items-center space-x-8">
            <a href="#home" className="hover:text-gray-300">
              Why 1411 Group
            </a>
            <a href="#about" className="hover:text-gray-300">
              About Us
            </a>
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
                    <a href="#training" className="hover:text-gray-300 text-[14px]">
                      Training
                    </a>
                    <a href="#consulting" className="hover:text-gray-300 text-[14px]">
                      Consulting
                    </a>
                    <a href="#tech-solution" className="hover:text-gray-300 text-[14px]">
                      Tech Solution
                    </a>
                    <a href="#careers" className="hover:text-gray-300 text-[14px]">
                      Careers
                    </a>
                    <a href="#connectlagos" className="hover:text-gray-300 text-[14px]">
                      ConnectLagos
                    </a>
                  </div>
                  <div className="my-auto">
                    <img src="/src/assets/1411-icon.png"/>
                  </div>
                </div>
              )}
            </div>
            <a href="#contact" className="hover:text-gray-300 text-[16px]">
              Contact Us
            </a>
          </div>

          {/* Right Section - HR Button */}
          <div className="flex-1 flex justify-end">
            <button className="bg-[#171B2C] hover:bg-[#4FC4CB] text-white font-normal py-2 px-4 rounded-md">
              Hire Talent
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
