"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/wise8.jpg",
      name: "Jane Doe",
      country: "Parent - Kenya",
      description:
        "Our accredited and vetted tutors are driven to help our students flourish and thrive. They inspire, instill confidence, encourage, know, and believe in their students.",
    },
    {
      image: "/wise9.jpg",
      name: "John Smith",
      country: "Parent - Kenya",
      description:
        "Our accredited and vetted tutors are driven to help our students flourish and thrive. They inspire, instill confidence, encourage, know, and believe in their students.",
    },
    {
      image: "/wise7.jpg",
      name: "Alice Brown",
      country: "Parent - Kenya",
      description:
        "Our accredited and vetted tutors are driven to help our students flourish and thrive. They inspire, instill confidence, encourage, know, and believe in their students.",
    },
  ];

  // State to track the current testimonial index
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="w-full flex items-start bg-white mt-10 py-12 px-8 lg:px-24">
      {/* Title Section */}
      <div className="flex flex-col max-w-md space-y-4 w-1/4 mr-12 2xl:ml-[400px]">
        <h2 className="text-4xl font-bold text-gray-950 leading-tight">
          What Our People <br /> Are Saying
        </h2>
        <p className="text-gray-950 text-sm leading-relaxed">
          Don’t just take our word for it. Hear it from more than 20+ families.
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-orange-500 text-base" />
            ))}
          </div>
          <p className="text-sm font-bold text-gray-800 whitespace-nowrap">
            (20+ testimonials)
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex w-full space-x-8 overflow-x-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 flex-shrink-0 flex flex-col items-start max-w-xs rounded-lg bg-white"
          >
            {/* Stars */}
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-orange-500 text-xs mx-1" />
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">{testimonial.description}</p>

            {/* Image and Info */}
            <div className="flex items-center mt-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} Image`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-sm">{testimonial.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
