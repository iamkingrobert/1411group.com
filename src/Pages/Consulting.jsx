import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import { SiAlwaysdata } from "react-icons/si";
import { SiGooglemybusiness } from "react-icons/si";
import "../Components/Courses.css";

function Consulting() {
  useEffect(() => {
    document.title = "Business Consulting | Tomorrow's Tech, Today's Innovation";
  }, []);
  const cards = [
    {
      title: "Your business administration …",
      type: "Roles",
      description:
        "Streamline your business operations with efficient administrative support and management strategies.",
      bgColor: "#fbe8d8",
    },
    {
      title: "The day-to-day Operations …",
      type: "Managed",
      description:
        "Optimize processes and workflows to boost productivity and operational efficiency.",
      bgColor: "#d1e7dd",
    },
    {
      title: "Your business Finance …",
      type: "Managed",
      description:
        "Ensure financial stability and growth with expert budgeting, forecasting, and cash flow management.",
      bgColor: "#cfe2f3",
    },
    {
      title: "Your business Marketing …",
      type: "Roles",
      description:
        "Elevate your brand with data-driven marketing strategies that drive visibility and engagement.",
      bgColor: "#e2d9f3",
    },
    {
      title: "HR and talent Management …",
      type: "Managed",
      description:
        "Build and retain a skilled workforce through strategic recruitment, our training, and employee engagement.",
      bgColor: "#f9e4d4",
    },
    {
      title: "Technology and Innovation …",
      type: "Roles",
      description:
        "Empower your business with cutting-edge technology solutions and innovative practices to stay competitive.",
      bgColor: "#d8f3dc",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative w-full overflow-hidden bg-[#171b2c]">
        <section className="bg-[#171b2c] py-16 md:py-24 md:px-4">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-8 overflow-hidden">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-4xl font-[900] text-white leading-1">
                Unveiling Insights, Accelerating
                <br />
                Growth. A Trusted Partner For Businesses
              </h1>
              <p className="text-[16px] md:text-xl text-gray-200 mt-4">
                Driven by technology and consumer analytics, we are a market
                research company that provides access to the experiences and
                life moments of consumers.
              </p>
              <p className="text-lg font-thin md:text-xl text-gray-200 mt-4">
                Bridging the gap between the brand and the consumer to unravel
                the answers to ‘Who, What, When, Where, Why and How?’
              </p>
              <div className="">
                <button className="bg-[#4fc4cb] hover:bg-white text-teal-900 font-semibold py-3 px-6 rounded-lg mt-8">
                  Get Started
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 md:mt-8 lg:mt-0 mt-10">
              <img
                src="/src/assets/business-consultant.avif"
                alt="1411 Consultant"
                className="rounded-lg shadow-2xl max-w-full"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-green-50 py-12 overflow-hidden -mb-[90px] md:-mb-[70px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#171b2c] text-center mb-6">
            We Connect your Brand to Consumers, Fast.
          </h2>
          <p className="text-center mb-10 text-gray-600">
            We support SMEs with a dynamic, fun & insight driven approach
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
            {/* Left Side (Image Section) */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              {/* <img
                src="/src/assets/BC-01.png" // Update with your image path
                alt="Team management"
                className="w-full h-auto"
              /> */}
              <video
                className="md:w-full md:h-full object-cover rounded-tl-[25px] rounded-tr-[25px] shadow-[#4fc4cb] shadow-2xl"
                src="/src/assets/BG.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>

            {/* Right Side (Text Section) */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl text-[#171b2c] font-semibold mb-2">
                  Start leveraging our data solution
                </h3>
                <p className="text-gray-600">
                  In today’s rapidly changing world, data is more crucial than
                  ever. Our mission is to create a world where organisational
                  decision-making is based on real-time, reliable, and
                  sustainable data. We help our clients to become more
                  data-driven with human insights and end-to-end data analytics
                  solutions. Whatever your (data)challenge is, we’ll solve it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium">Sustainability</h4>
                  <p className="text-gray-600">
                    Driven by increasing regulation and more environmentally
                    conscious consumer behaviour, sustainability is moving up
                    the agenda for business leaders.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">
                    Operational performance
                  </h4>
                  <p className="text-gray-600">
                    Assess the current as-is state, Clarify the future to-be
                    state, Create the transformational roadmap Identify and
                    diagnose the challenges and improvement opportunities to be
                    addressed along the way.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">Digital and IT</h4>
                  <p className="text-gray-600">
                    Combination of our technical expertise, operational
                    experience, business knowledge and common sense help our
                    clients solve digital and IT issues and deliver lasting
                    results.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">
                    Transformation management
                  </h4>
                  <p className="text-gray-600">
                    Transformation management is the coveted journey to
                    continued higher performance and the basis for sustained
                    competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-3 md:pt-6 pb-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
            {/* Left side (Text) */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Channels To Market
              </h2>
              <p className="text-[16px] text-gray-600 mb-6">
                Defining the channels to market strategy is now imperative for a
                company or business to be able to survive and grow. There are
                four dimensions that must be addressed:
              </p>
              {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Payment-free cloud computing hands-on training
              </h3> */}
              <ul className="text-gray-600 mb-6 space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">🧪</span> Defining the access strategy
                  to the final consumer – how to develop new sales channels
                  without cannibalising the old ones or ensure a smooth
                  transition
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🧪</span> Optimise e-commerce
                  operations – how to control costs and inventory in a service
                  inflation environment
                </li>

                <li className="flex items-center">
                  <span className="mr-2">🧪</span> Optimising the planning and
                  management of the offer by sales channel – what are the
                  process and tools which make it possible to plan budgets,
                  prices and assortments between channels to generate more
                  turnover
                </li>

                <li className="flex items-center">
                  <span className="mr-2">🧪</span> For bricks and mortar
                  retailers – how to reinvent the store’s role in an end-to-end
                  approach
                </li>
              </ul>

              <div className="flex items-center space-x-4 mb-4">
                {/* Placeholder logos for AWS, Google Cloud, and Azure */}
                <SiGooglemybusiness className="text-[#171b2c] text-[28px]" />
                <SiAlwaysdata className="text-[#171b2c] text-[28px]" />
              </div>

              <button className="bg-[#4fc4cb] hover:bg-[#171b2c] hover:text-white text-teal-900 font-semibold py-3 px-6 rounded-lg mt-3">
                Get In Touch
              </button>
            </div>

            {/* Right side (Image) */}
            <div className="w-full lg:w-1/2">
              {/* Placeholder for the Image */}
              <img
                src="/src/assets/BC-02.jpg"
                alt="Business Consulting"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className=" py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">
              Let us build the pillars of your business success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: card.bgColor }}
                  className={`shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300`}
                >
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <div className="mb-2">
                    <span className="font-bold text-sm">Answer:</span>
                  </div>
                  <div className="font-bold mb-4 text-lg">{card.type}</div>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-2">
          <h2 className="text-3xl font-bold text-[#171b2c] text-center mb-2">
            Become a Global Citizen, Work Remotely.
          </h2>
          <p className="text-center mb-2 text-gray-600">
            Trusted partners and clients
          </p>
        </div>

        <div className="mx-auto flex justify-center mb-[70px]">
          <div className="flex md:flex-row gap-3 justify-center items-center mt-[15px] md:mt-[25px] mb-[40px] md:mb-0 bg-gray-500 p-6 h-[70px] rounded-full w-[700px]">
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
      </section>
      <Footer />
    </div>
  );
}

export default Consulting;
