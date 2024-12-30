import React from 'react';
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

const HeroTherapySection = () => {
  return (
    <div className="bg-gray-50 flex flex-col w-full">
      <section className="flex items-center justify-center w-full py-6 mx-auto max-w-screen-xl mt-[40px] sm:mt-[50px] md:mt-[100px] mb-16">
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 px-4 sm:px-6 lg:gap-8 lg:ml-[267px] lg:mr-[28px]">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left lg:self-center mb-8 sm:mb-0 lg:mt-auto">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-4 leading-snug"
              style={{ fontFamily: 'Inter', fontWeight: 800, lineHeight: '1.1' }}
            >
              Connecting families to <br /> trusted compassionate <br /> care companions in their <br /> community.
            </h2>
            <p className="text-gray-800 text-xs leading-[1.75] mb-6">
              WISEHealth provides a companion care program with vetted, <br />
              trained, and compassionate care companions to help with <br />
              socialization, meal preparation, and light housework.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Button 1 */}
              <Link href="/login">
                <button className="bg-blue-500 text-white px-4 py-2 lg:px-6 lg:py-3 2xl:px-6 2xl:py-4  text-xs sm:text-xs rounded-lg flex items-center gap-2 w-full sm:w-auto">
                  Find Compassion
                  <MdArrowOutward size={13} />
                </button>
              </Link>

              {/* Button 2 */}
              <Link href="/login">
                <button className="bg-white border-blue-500 text-blue-500 border px-4 py-2 lg:px-6 lg:py-3 2xl:px-6 2xl:py-4 text-xs sm:text-xs rounded-lg flex items-center gap-2 w-full sm:w-auto">
                  Register As Companion
                  <MdArrowOutward size={13} />
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex-1 flex justify-center lg:justify-end lg:self-center h-full">
            <div className="relative w-full h-[300px] sm:w-full sm:h-[300px] md:w-[800px] md:h-[400px] lg:w-[460px] lg:h-[502px] lg:mr-12 2xl:w-[460px] 2xl:h-[660px] ">
              <Image
                src="/wise1.jpeg" // Ensure the path is correct
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroTherapySection;
