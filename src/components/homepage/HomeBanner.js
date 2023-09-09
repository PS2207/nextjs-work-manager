
  // BannerSection.js
  "use client"
import React from 'react';
import bannerImg from '../../assets/bannerImg.png'
import Image from 'next/image';
const BannerSection = () => {
  return (
    <section className="bg-purple-600 text-white py-12">
      <div className="container mx-auto flex items-center justify-around">
       <div>
       <Image
          src={bannerImg}
          alt="Banner Image"
          className="w-64 h-64 rounded-full border-4 border-white"
        />
       </div>
        <div className="ml-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Task Manager</h2>
          <p className="text-lg mb-6">
            Organise your tasks efficiently with our task manager app.
          </p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

  
  