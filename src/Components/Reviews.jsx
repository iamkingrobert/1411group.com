import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Logo from '../assets/1411.png';

const Reviews = () => {
  const reviews = [
    {
      name: "Maxi Millz",
      title: "Software Engineer",
      image: Logo, 
      review:
        "GoNomad has been absolutely helpful with my journey as an entrepreneur GoNomad has been absolutely helpful with my journey as an entrepreneur",
    },
    {
      name: "Adebusola Adu",
      title: "Data Analyst",
      image: Logo,
      review:
        "GoNomad has been absolutely helpful with my journey as an entrepreneur GoNomad has been absolutely helpful with my journey as an entrepreneur",
    },
    {
      name: "Ada Okeke",
      title: "Data Analyst",
      image: Logo,
      review:
        "GoNomad has been absolutely helpful with my journey as an entrepreneur GoNomad has been absolutely helpful with my journey as an entrepreneur",
    },
    {
      name: "Yemisi Vese",
      title: "Graphic Designer",
      image: Logo,
      review:
        "GoNomad has been absolutely helpful with my journey as an entrepreneur GoNomad has been absolutely helpful with my journey as an entrepreneur",
    },
    {
      name: "Etieno Akpan",
      title: "Software Engineer",
      image: Logo,
      review:
        "GoNomad has been absolutely helpful with my journey as an entrepreneur GoNomad has been absolutely helpful with my journey as an entrepreneur",
    },
    {
      name: "Milton Tutu",
      title: "Data Analyst",
      image: Logo,
      review:
        "GoNomad has been absolutely helpful with my journey as an entrepreneur GoNomad has been absolutely helpful with my journey as an entrepreneur",
    },
  ];

  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the interval to automatically slide the cards
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [reviews.length]);

  return (
    <div className="py-20 px-10 md:mb-[60px] -mb-[20px] md:-mt-[60px] -mt-[120px]">
      {/* Large screen reviews grid */}
      <div className="-mt-[70px] hidden sm:block">
        <h2 className="text-[28px] md:text-[40px] font-mono md:mb-8 mb-[80px] text-[#4fc4cb] text-center">
          Training Success
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile screen sliding review card */}
      <div className="block sm:hidden">
        <h2 className="text-[28px] font-mono mb-4 text-[#4fc4cb] text-center">
          Training Success
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div className="w-full flex-shrink-0" key={index}>
                <ReviewCard review={review} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
