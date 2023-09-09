"use client"
/// ActionSection.js
import React from 'react';
import login from '../../assets/login.png'
import Image from 'next/image';
const ActionSection = () => {
  return (
    <section
     className=" bg-cover bg-center text-white bg-purple-600 py-0">
       <div className="container mx-auto text-center py-4 ">    
        <h2 className="text-4xl font-bold mb-4 mt-4">Get Started Today</h2>
        <p className="text-lg mb-8">
           Start managing your tasks efficiently with our task manager app.
        </p>
         <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg">
          Sign Up Now
        </button>
        {/* <div className='absolute top-0 left-0 w-full opacity-30'>
        <Image className="w-full  object-cover " src={login}/>  
       </div> */}
       </div>
      
  
    </section>
  );
};

export default ActionSection;
