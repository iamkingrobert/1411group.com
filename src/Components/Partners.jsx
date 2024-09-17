import React, { useEffect, useRef } from "react";

function Partners() {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      logosRef.current.style.animation = "slideInfinite 10s linear infinite";
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:space-x-5 justify-center mt-8 md:mt-[50px] mx-auto">
      <div className="md:w-[300px] self-center mx-auto md:mx-0">
        <p className="md:text-[24px] text-center text-[20px] px-5 md:font-light text-pretty md:pl-3 text-gray-400 md:text-left">
          Our trusted partners and clients, together, we drive success and make
          a lasting impact in the tech industry.
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
            src="/src/assets/axa-logo.png"
            alt="Axa Mansard"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src="/src/assets/NHC-Logo.png"
            alt="Nigeria High Commission, Ghana"
            className="w-[100px] h-[55px] object-contain"
          />
          <img
            src="/src/assets/Videa.png"
            alt="Vidae Caffe"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src="/src/assets/Zaio.png"
            alt="Zaio"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src="/src/assets/VFD-Tech-Logo.webp"
            alt="VFD Tech"
            className="w-[100px] h-[75px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
