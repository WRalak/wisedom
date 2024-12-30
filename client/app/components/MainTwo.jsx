import React from 'react';

export default function MainTwo() {
  return (
    <section className="w-full px-6 py-14">
      <div className="lg:ml-[330px] lg:mr-20">
        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Value Items */}
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="flex flex-col text-left">
              <h6 className="text-sm font-semibold mb-2 leading-6 sm:leading-7">
                Our Core Values
              </h6>
              <p className="text-xs sm:text-sm text-gray-950 leading-relaxed">
                The focus of Interactive Caregiving is doing things with our
                clients instead of just doing things for them.
                {index % 2 === 1 && (
                  <>
                    <br />
                    While our caregivers.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  