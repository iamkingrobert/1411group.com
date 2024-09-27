import React from "react";
import Footer from "../Components/Footer";
import "../Components/Courses.css";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

function TechSolution() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create a spring animation that interpolates based on the scroll position
  const parallaxStyle = useSpring({
    transform: `translateY(${scrollY * 0.5}px)`, // Adjust the multiplier for parallax effect strength
  });
  return (
    <div className="bg-white">
      <div className="relative w-full overflow-hidden bg-[#171b2c]">
        {/* background Image Photo by <a href="https://unsplash.com/@boliviainteligente?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">BoliviaInteligente</a> on <a href="https://unsplash.com/photos/background-pattern-1LIejZpmxek?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}

        <section
          className="bg-[#171b2c] py-16 md:py-24 md:px-4 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/bg-01.jpg')",
          }}
        >
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-8 overflow-hidden">
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
                <button className="bg-teal-400 hover:bg-teal-500 text-teal-900 font-semibold py-3 px-6 rounded-lg mt-8">
                  Get Started
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 md:mt-8 lg:mt-0 mt-10"></div>
          </div>
        </section>
      </div>

      <div className="relative md:bottom-[110px] bottom-[30px] md:-right-[976px] xl:-right-[976px] lg:-right-[776px] mx-10 md:mx-0 w-[300px] h-[220px] rounded-lg bg-white p-5 shadow-lg shadow-[#4fc4cb]">
        <p className="text-[#171b2c] text-left">
          Whether your goal is to accelerate your career trajectory or elevate
          your organization’s skill set, our training provides the cutting-edge
          expertise, personalized guidance, and real-world application essential
          for sustained growth and success.
        </p>
      </div>

      <section className="relative h-screen w-full">
        {/* Parallax background with spring */}
        <animated.div
          style={parallaxStyle}
          className="absolute inset-0 bg-gradient-to-r from-purple-800 via-indigo-700 to-pink-600"
        >
          <img
            src="/src/assets/bg-01.jpg" // Replace with the correct image path
            alt="wave background"
            className="w-full h-full object-cover"
          />
        </animated.div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-24">
          <div className="text-left lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Cloud
            </h1>
            <p className="text-white text-lg sm:text-xl lg:text-2xl mb-6">
              Experience ARO’s prowess in Microsoft and Cloud Services,
              bolstered by world-class accreditation. We also specialise in
              Cyber Security, Hybrid Cloud Infrastructure, Next-Gen Networking,
              and Backup Solutions. Elevate your enterprise with ARO’s proven
              expertise.
            </p>
            <button className="bg-transparent border border-white text-white text-lg px-8 py-2 hover:bg-white hover:text-black transition duration-300">
              Explore Cloud &gt;
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TechSolution;
