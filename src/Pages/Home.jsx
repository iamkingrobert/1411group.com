import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners";
import AboutSection from "../Components/AboutSection";
import CourseSection from "../Components/Courses";
import Footer from "../Components/Footer";
import StartupAcceleration from "../Components/StartUp";
import TheHub from "../Components/TheHub";
import GetStarted from "../Components/GetStarted";
import Reviews from "../Components/Reviews";

function Home() {
  useEffect(() => {
    document.title = "1411 Group | Tomorrow's Tech, Today's Innovation";
  }, []);
  return (
    <>
      <Hero />
      <Partners />
      <AboutSection />
      <CourseSection />
      <StartupAcceleration />
      <TheHub />
      <Reviews />
      <GetStarted />
      <Footer />
    </>
  );
}

export default Home;
