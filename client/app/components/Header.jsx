import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const HeaderSection = () => {
  return (
    <header className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/wise3.jpeg" // Replace with your image path
          alt="Header Background"
          layout="fill"
          objectFit="cover" // Ensures the image covers the container
          priority
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-[#FF616133] mix-blend-multiply"></div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-6">
        {/* Text Section */}
        <p className="text-white text-xs sm:text-xs md:text-xs lg:text-sb 2xl:text-sm leading-relaxed mb-6">
          WISE offers services designed to support survivors from entry to
          stabilization to <br /> independence. All services are individualized,
          relationship-based, strengths- <br />based, trauma-informed,
          self-determination, empowerment, and holistic.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Blue Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-xs sm:text-xs md:text-xs lg:text-xs">
            Find Companion
            <MdArrowOutward size={13} />
          </button>

          {/* White Button */}
          <button className="bg-white text-blue-800 border border-blue-500 px-4 py-2 rounded-xl flex items-center gap-2 text-xs sm:text-xs md:text-base lg:text-xs">
            Register As Companion
            <MdArrowOutward size={13} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
