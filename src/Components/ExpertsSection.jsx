import React from "react";
import { Link } from "react-router-dom";
import Alumni from "../assets/1411-icon.png";

const ExpertsSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 -mt-[80px]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h3 className="md:text-sm text-lg font-semibold text-gray-600 uppercase">
            Vetted, Certified Experts
          </h3>
          <h2 className="text-3xl font-bold">
            Access a pool of skilled engineers to match — your product
            requirements
          </h2>
          <p className="text-lg text-gray-700">
            We transform talented individuals into world-class tech stars.
          </p>
          <Link
            to="/training"
            className="inline-block font-semibold text-[#4fc4cb]"
          >
            Learn more &rarr;
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-xl font-semibold">You’re Next-Gen</h4>
              <p className="text-gray-600">
                Whether you’re aiming to become a software engineer, data
                analyst, project manager, or UI/UX designer, our programs can
                elevate your career.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Career Workshops</h4>
              <p className="text-gray-600">
                You will be actively designing the technologies of tomorrow
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Shape tomorrow’s world</h4>
              <p className="text-gray-600">
                Make it safer, comfortable and easy to navigate for users.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Interactive • Practical</h4>
              <p className="text-gray-600">
                live classes • small groups • 1 to 1 mentoring
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 rounded-lg p-4 hidden sm:block">
          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="text-lg font-semibold mb-4">Top Graduate</h4>
            <div className="space-y-4">
              {[
                {
                  name: "Sarah B.",
                  skills: ["React", "Node.js", "Angular"],
                  title: "Software Engineer",
                  imageUrl: Alumni,
                },
                {
                  name: "William T.",
                  skills: ["React", "Node.js", "Vue"],
                  title: "Data Analyst",
                  imageUrl: Alumni,
                },
                {
                  name: "Samuel A.",
                  skills: ["React", "Node.js", "Angular"],
                  title: "Backend Engineer",
                  imageUrl: Alumni,
                },
                {
                  name: "Chikelue O.",
                  skills: ["React", "Node.js", "Angular", "iOS", "Android"],
                  title: "Project Manager",
                  imageUrl: Alumni,
                },
                {
                  name: "Chikelue O.",
                  skills: ["React", "Node.js", "Angular", "iOS", "Android"],
                  title: "Project Manager",
                  imageUrl: Alumni,
                },
                {
                  name: "Chikelue O.",
                  skills: ["React", "Node.js", "Angular", "iOS", "Android"],
                  title: "Project Manager",
                  imageUrl: Alumni,
                },
              ].map((talent, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {/* Image Section */}
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={talent.imageUrl}
                      alt={talent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Information Section */}
                  <div className="flex-1">
                    <h5 className="font-semibold">{talent.name}</h5>
                    <p className="text-sm text-gray-500">
                      Skills: {talent.skills.join(", ")}
                    </p>
                  </div>

                  {/* Title Section */}
                  <p className=" text-[#171b2c] text-right px-4 py-2 rounded-md">
                    {talent.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
