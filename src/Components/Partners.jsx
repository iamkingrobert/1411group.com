import React, { useEffect, useRef } from "react";
import Axa from '../assets/axa-logo.png';
import NHC from '../assets/NHC-Logo.png';
import Vidae from '../assets/Videa.png';
import Zaio from '../assets/Zaio.png';
import Vfd from '../assets/VFD-Tech-Logo.webp';

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
            src={Axa}
            alt="Axa Mansard"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src={NHC}
            alt="Nigeria High Commission, Ghana"
            className="w-[100px] h-[55px] object-contain"
          />
          <img
            src={Vidae}
            alt="Vidae Caffe"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src={Zaio}
            alt="Zaio Tech"
            className="w-[100px] h-[50px] object-contain"
          />
          <img
            src={Vfd}
            alt="VFD Tech"
            className="w-[100px] h-[75px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
