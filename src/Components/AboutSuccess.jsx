import React from "react";
import { Link } from "react-router-dom";

function AboutSuccess() {
  return (
    <div className="bg-[#171b2c] p-8 md:p-16 lg:p-24 relative md:-top-[80px] -top-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#4fc4cb] mb-6">
            -Tomorrow's Tech, <br /> Today's Innovation
          </h1>
          <p className="text-lg lg:text-lg font-normal text-gray-200 mb-6">
            We are a forward-thinking organization dedicated to empowering
            individuals and businesses to excel in the rapidly changing
            technology landscape. Our mission is to bridge the gap between ideas
            and achievements through a comprehensive suite of services tailored
            to meet the unique needs of our clients.
          </p>
          <p className="text-lg lg:text-[18px] font-thin text-gray-200 mb-8">
            Our solutions encompass tech training, consulting, and comprehensive
            support in areas such as software development, data analytics,
            start-up acceleration, digital transformation, and more.
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-[#4fc4cb] text-[#171b2c] text-center text-lg lg:text-lg py-3 px-4 rounded-md shadow-md hover:bg-white transition-colors w-[140px]"
          >
            Get Started
          </Link>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center bg-[#d8f3dc] text-[#171b2c] text-center text-2xl font-bold py-8 px-4 rounded-md">
            9,142 <br /> Companies
          </div>
          <div
            className="flex items-center justify-center bg-blue-600 text-white text-center text-2xl font-bold py-8 px-4 bg-cover bg-center rounded-md"
            style={{ backgroundImage: "url('/src/assets/work.jpg')" }}
          ></div>
          <div
            className="flex items-center justify-center bg-blue-600 text-white text-center text-2xl font-bold py-8 px-4 bg-cover bg-center rounded-md"
            style={{
              backgroundImage: "url('/src/assets/People-and-Tech.jpg')",
            }}
          ></div>
          <div className="flex items-center justify-center bg-[#4fc4cb] text-[#171b2c] text-center text-2xl font-bold py-8 px-4">
            9,142 <br /> Companies
          </div>
          <div className="flex items-center justify-center bg-[#fbe8d8] text-[#171b2c] text-center text-2xl font-bold py-8 px-4">
            162 <br /> Industries
          </div>
          <div className="flex items-center justify-center bg-[#171b2c] ">
            <img
              src="/src/assets/fashionprenuer.jpg"
              alt="Placeholder"
              className="h-40 w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row gap-3 justify-center items-center mt-[60px] md:mt-[100px] mb-[60px] md:mb-0 bg-gray-500 p-6 h-[70px] rounded-full md:mx-auto w-[380px] md:w-full relative right-7 md:right-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/6271d311cc4b3f485bac3bfd/172b403f-6337-4991-8d68-a43f23bfb43f/logoAsset+1.png?format=750w"
          alt="Logo 1"
          className="md:w-[80px] w-[40px] md:h-[60px] object-contain"
        />

        <img
          src="https://www.axamansard.com/images/axa-logo.png"
          alt="Logo 1"
          className="md:w-[80px] w-[40px] h-[40px] object-contain"
        />

        <img
          src="https://nigerianhcaccra.org/wp-content/uploads/2021/08/NHC-Logo.png"
          alt="Logo 1"
          className="md:w-[80px] w-[40px] h-[45px] object-contain"
        />

        <img
          src="https://elimesoutfit.com/assets/images/logo.png"
          alt="Logo 1"
          className="md:w-[80px] w-[40px] h-[40px] object-contain"
        />

        <img
          src="https://images.squarespace-cdn.com/content/v1/655ecf2d0b80f547bd8c613b/79fcfd9a-ce25-43be-9cc5-c5f196bdfa33/the_gallery_logo_cropped.png?format=750w"
          alt="Logo 1"
          className="md:w-[80px] w-[40px] h-[40px] object-contain"
        />

        <img
          src="https://vidaecaffe.com/wp-content/uploads/2023/03/Asset-6.png"
          alt="Logo 1"
          className="md:w-[80px] w-[40px] h-[40px] object-contain"
        />

        <img
          src="https://www.zaio.io/_next/static/media/logo.5f04c07c.png"
          alt="Logo 1"
          className="md:w-[80px] w-[40px] h-[40px] object-contain"
        />
      </div>
    </div>
  );
}

export default AboutSuccess;
