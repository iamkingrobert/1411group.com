import React from "react";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners";
import AboutSection from "../Components/AboutSection";
import CourseSection from "../Components/Courses";
import Footer from "../Components/Footer";
import StartupAcceleration from "../Components/StartUp";

function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <AboutSection />
      <CourseSection />
      <StartupAcceleration/>
      <Footer />
    </>
  );
}

export default Home;
