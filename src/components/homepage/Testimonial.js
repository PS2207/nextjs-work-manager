"use client"
// TestimonialSection.js
import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend eros.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    content: 'Duis aliquam, lectus a volutpat feugiat, felis odio dictum odio, id euismod enim eros eu justo.',
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto max-w-3xl px-4">
        {/* remove relative here */}
        <div className=" bg-white p-8 rounded-lg shadow-lg">
          <p className="text-xl italic mb-6">{testimonialsData[currentTestimonial].content}</p>
          <p className="text-lg font-bold">{testimonialsData[currentTestimonial].name}</p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handlePreviousTestimonial}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-4"
          >
            Previous
          </button>
          <button
            onClick={handleNextTestimonial}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;






