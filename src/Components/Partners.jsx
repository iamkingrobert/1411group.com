import React, { useEffect, useRef } from "react";

function Partners() {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      logosRef.current.style.animation = "slideInfinite 10s linear infinite";
    }
  }, []);

  return (
    <div className="flex flex-row space-x-5 justify-center mt-[50px] mx-auto">
      <div className="w-[300px]">
        <p className="text-[24px] font-light text-pretty">
          Meet our trusted partners and clients, together, we drive success and
          make a lasting impact in the tech industry.
        </p>
      </div>

      <div className="relative overflow-hidden w-[400px] h-[120px] my-10">
      <style>{`
          @keyframes slideInfinite {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
        <div
          className="absolute right-0 flex space-x-8"
          ref={logosRef}
          style={{ animation: "slideInfinite 10s linear infinite" }}
        >
          <img
            src="https://via.placeholder.com/100x50?text=Logo1"
            alt="Logo 1"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo2"
            alt="Logo 2"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo3"
            alt="Logo 3"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo4"
            alt="Logo 4"
            className="w-[100px] h-[50px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
