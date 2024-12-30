import React from "react";
import { IoMdPeople } from "react-icons/io";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { BiBone } from "react-icons/bi";

const HeroTwo = () => {
  return (
    <section className="w-full bg-blue-500 py-6 lg:py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <p className="text-sm sm:text-xs font-medium text-white mb-6 lg:mb-8 lg:ml-[300px] text-center lg:text-left">
          What type of therapy are you looking for?
        </p>

        {/* Icons and Descriptions */}
        <div className="lg:ml-[300px]">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white">
            {/* Icon 1 */}
            <div className="flex items-center gap-2">
              <IoMdPeople size={15} />
              <p className="text-xs sm:text-xs">Socialization</p>
            </div>

            {/* Divider */}
            <span className="hidden sm:block text-white text-xs">|</span>

            {/* Icon 2 */}
            <div className="flex items-center gap-2">
              <TbToolsKitchen3 size={15} />
              <p className="text-xs sm:text-xs">Light Household Chores</p>
            </div>

            {/* Divider */}
            <span className="hidden sm:block text-white text-xs">|</span>

            {/* Icon 3 */}
            <div className="flex items-center gap-2">
              <FaTruck size={15} />
              <p className="text-xs sm:text-xs">Transportation</p>
            </div>

            {/* Divider */}
            <span className="hidden sm:block text-white text-xs">|</span>

            {/* Icon 4 */}
            <div className="flex items-center gap-2">
              <BiBone size={15} />
              <p className="text-xs sm:text-xs">Pet Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
