import React, { useEffect, useState } from "react";
import ContactForm from "../Components/CustomerForm";
import Footer from "../Components/Footer";

function ContactUs() {
  useEffect(() => {
    document.title = "Get Started | Tomorrow's Tech, Today's Innovation";
  }, []);

  const [geeks, setGeeks] = useState("possible");
  const techGeek = ["possible", "we can"];

  useEffect(() => {
    const interval = setInterval(() => {
      setGeeks((prevGeek) => {
        const currentIndex = techGeek.indexOf(prevGeek);
        const nextIndex = (currentIndex + 1) % techGeek.length;
        return techGeek[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <div className="relative w-full overflow-hidden bg-[#171b2c]">
        <div className="bg-[#171b2c] md:mt-[150px] mt-[110px] h-[55vh] mb-0">
          <div className="md:mx-[400px] lg:mx-[200px]">
            <h2 className="text-[#4fc4cb] md:text-[70px] text-[40px] tracking-[10px] font-extralight text-center pb-6">
              08063414676
            </h2>
            <p className="text-center text-white text-[18px] font-light">
              Our team is ready to help you, tell us about yourself and or your
              business. We will get in touch as soon as{" "}
              <span className="text-[#4fc4cb]">{geeks}.</span>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center mt-10 mx-3 md:mx-5">
            <div className="h-[80px] w-[80px]">
              <img src="/src/assets/Logomark.png" className="object-contain" />
            </div>

            <div className="h-[80px] w-[80px]">
              <img src="/src/assets/Logomark.png" className="object-contain" />
            </div>

            <div className="h-[80px] w-[80px]">
              <img src="/src/assets/Logomark.png" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
