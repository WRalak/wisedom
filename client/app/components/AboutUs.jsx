import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="relative py-10 lg:py-16 flex justify-center items-center">
      {/* Image Container */}
      <div className="relative w-full max-w-[800px] h-[276px] sm:h-[350px] lg:h-[300px] 2xl:w-[900px] 2xl:h[450px]: mt-8 lg:mt-0 lg:ml-48">
        {/* Background Image */}
        <Image
          src="/wise1.jpeg" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-[15px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#B5737380] backdrop-blur-sm rounded-[15px]"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white px-4 sm:px-6 lg:px-12">
          <h4 className="text-xs sm:text-xs md:text-base font-semibold mb-2">ABOUT US</h4>
          {/* Red Divider */}
          <div className="w-[28px] h-[2px] bg-red-500 mb-6 lg:mb-8"></div>
          <p className="text-xs sm:text-xs md:text-sm leading-relaxed mb-4">
            WISECompanion Care (WCC) is a platform and a movement connecting <br className="hidden sm:block" />
            families to trusted, compassionate Companions in their community.
          </p>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            WISECompanion’s easy-to-use platform provides assistance with socialization, <br className="hidden sm:block" />
            light housekeeping, meal preparation, pet care, and more – alleviating stress on <br className="hidden sm:block" />
            families and allowing clients to live life on their terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
