import React from "react";
import Footer from "../Components/Footer";
import "../Components/Courses.css";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

function TechSolution() {
  useEffect(() => {
    document.title = "Our Solutions | Tomorrow's Tech, Today's Innovation";
  }, []);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Spring animation
  const parallaxStyle = useSpring({
    transform: `translateY(${scrollY * 0.1}px)`,
  });
  return (
    <div className="bg-white">
      <div className="relative w-full overflow-hidden bg-[#171b2c]">
        <section
          className="bg-[#171b2c] py-16 md:py-24 md:px-4 overflow-hidden bg-cover bg-center md:h-[80vh]"
          style={{
            backgroundImage: "url('/src/assets/bg-01.jpg')",
          }}
        >
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between md:mt-12 mt-8 overflow-hidden">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-4xl font-[900] text-white leading-1">
                Innovative, Experiential Solutions
                <br />
                Technology, Only Better.
              </h1>
              <p className="text-[16px] md:text-xl text-gray-200 mt-4">
                Our solutions can transform the way you do business, making you
                more effective, insightful and productive while future-proofing
                your business in the digital marketplace.
              </p>
              <p className="text-lg font-thin md:text-xl text-gray-200 mt-4">
                We build end-to-end software solutions for businesses and
                consumer applications. Web apps to help business optimize,
                engage and grow.
              </p>
              <div className="">
                <button className="bg-[#4fc4cb] hover:text-[#171b2c] hover:bg-white text-white  py-3 px-6 rounded-lg mt-8">
                  Get Started
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 md:mt-8 lg:mt-0 mt-10"></div>
          </div>
        </section>
      </div>

      <div className="relative md:bottom-[110px] bottom-[40px] md:-right-[976px] xl:-right-[976px] lg:-right-[776px] mx-10 md:mx-0 w-[300px] h-[220px] rounded-lg bg-white p-5 shadow-lg shadow-[#4fc4cb]">
        <p className="text-[#171b2c] text-left">
          Let our Agile experts can create bespoke applications, platforms and
          products to meet the requirements of your business or new venture.
          Engage customers, streamline operations with our native and
          cross-platform IOS, Android apps.
        </p>
      </div>

      <section className="bg-white pb-12 overflow-hidden -mb-[120px] md:-mb-[75px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#171b2c] text-center mb-6">
            Bespoke Software Product Development.
          </h2>
          <p className="text-center mb-10 text-gray-600">
            High-quality solutions that propel business growth, enhance customer
            experiences, and streamline operations.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
            {/* Left Side (Image Section) */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="/src/assets/automation.jpg"
                alt="Team management"
                className="w-full h-auto"
              />
            </div>

            {/* Right Side (Text Section) */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl text-[#171b2c] font-semibold mb-2">
                  Cost-effective workflows. Delivering value to your customer
                </h3>
                <p className="text-gray-600">
                  Technology can either elevate your organization by automating
                  tasks or become a burden that slows down operations. Managing
                  the complex ecosystem of applications and infrastructure is
                  overwhelming, with unclear ROI, leading to a costly and
                  challenging cycle of constant maintenance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium">
                    Streamline Business Operations
                  </h4>
                  <p className="text-gray-600">
                    We transform businesses by providing process automation
                    solutions for those operating manual or semi-manual
                    workflows.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">
                    Enhance Efficiency Through Process Automation
                  </h4>
                  <p className="text-gray-600">
                    We help you eliminate repetitive tasks, improve accuracy,
                    and enhance productivity, allowing your team to focus on
                    delivering outstanding service to your clients.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">Perfect Solution</h4>
                  <p className="text-gray-600">
                    Whether you're looking to automate financial processes,
                    streamline HR, or optimize your customer service.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">Better ROI</h4>
                  <p className="text-gray-600">
                    Our tailored solutions are designed to meet the unique needs
                    of your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] w-full -mt-[50px]">
        <animated.div
          style={parallaxStyle}
          className="absolute inset-0 bg-gradient-to-r from-purple-800 via-indigo-700 to-pink-600"
        >
          <img
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="wave background"
            className="w-full h-full object-cover"
          />
        </animated.div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-24">
          <div className="text-left lg:w-1/2 mt-[180px]">
            <p className="text-xl sm:text-5xl font-semibold tracking-wide lg:text-xl text-[#4fc4cb] mb-4">
              WEB & MOBILE APP
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Software Development
            </h1>
            <p className="text-white text-lg sm:text-xl lg:text-2xl mb-6">
              We guarantee greater speed, efficiency, fewer errors and greater
              ROI by customizing, integrating, and optimizing your applications.
              Let our team build a tailored solution that’s perfect for your
              business and organization.
            </p>
            <button className="bg-transparent border border-[#4fc4cb] text-white text-lg px-8 py-2 hover:bg-[#4fc4cb] hover:text-black transition duration-300">
              Get Started &gt;
            </button>
          </div>
        </div>
      </section>

      <div className="mt-[310px]">
        <h2 className="text-3xl font-bold text-[#171b2c] text-center mb-2">
          Become a Global Citizen, Work Remotely.
        </h2>
        <p className="text-center mb-2 text-gray-600">
          Trusted partners and clients
        </p>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="flex md:flex-row gap-3 justify-center items-center mt-[15px] md:mt-[25px] mb-[70px] bg-gray-500 p-6 h-[70px] rounded-full w-[700px]">
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

      <Footer />
    </div>
  );
}

export default TechSolution;
