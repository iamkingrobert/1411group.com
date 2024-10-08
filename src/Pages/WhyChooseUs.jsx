import React, {useEffect} from "react";
import HeroSection from "../Components/HeroSection";

function WhyChooseUs() {
  useEffect(() => {
    document.title = "Why Choose Us | Tomorrow's Tech, Today's Innovation";
  }, []);
  return (
    <div className="relative w-full overflow-hidden bg-[#171b2c]">
      <HeroSection />
    </div>
  );
}

export default WhyChooseUs;
