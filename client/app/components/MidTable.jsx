import React from 'react';
import QuoteSection from './quoteSection';

const MidTable = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-24 lg:ml-[330px] 2xl:ml-[730px]">
        <div className="grid gap-8 sm:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* Left Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-sm font-bold text-gray-800">
              <span className="text-blue-500">|</span> Our Mission
            </h2>
            <p className="text-xs text-gray-950 mt-4">
              To empower seniors and their (ICs) <br />
              with information, tools, and <br />
              resources to improve their health <br />
              outcomes and quality of life (QOL)
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-sm font-bold text-gray-800">
              <span className="text-red-500">|</span> Our Vision
            </h2>
            <p className="text-xs text-gray-950 mt-4">
              Our companions provide <br />
              socialization and companionship, <br />
              light household tasks, trips around <br />
              town, accompany on errands and <br />
              events and pet care.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-sm font-bold text-gray-800">
              <span className="text-blue-500">|</span> Our Core Values
            </h2>
            <p className="text-xs text-gray-950 mt-4">
              The focus of Interactive Caregiving is <br />
              doing things with our clients instead <br />
              of just doing things for them. While <br />
              our caregivers provide assistance <br />
              with the daily.
            </p>
          </div>
        </div>
      </div>
      <QuoteSection />
    </section>
  );
};

export default MidTable;
