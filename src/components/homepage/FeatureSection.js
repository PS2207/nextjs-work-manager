// "use client"
// FeatureSection.js
import React from 'react';
import { FiCheckCircle, FiList, FiCalendar } from 'react-icons/fi';//FiList, FiCalendar,   FiFileEarmarkText, FiClockHistory

const FeatureSection = () => {
  return (
    <section className="py-12 bg-purple-600">
         <h1 className='text-center mb-4 font-extrabold text-3xl text-white'>Features of Task Manager</h1>
      <div className="container mx-auto grid gap-8 md:grid-cols-3 ">
        {/* Feature 1 */}
       
        <div className="flex items-center space-x-4 ">
          <div className="rounded-full p-3 bg-white">
            <FiCheckCircle className="text-green-500 text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Task Management</h3>
            <p>Efficiently manage your tasks and stay organized.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center space-x-4">
          <div className="rounded-full p-3 bg-white">
            {/* <BsFileEarmarkText className="text-blue-500 text-3xl" /> */}
            <FiList className="text-blue-500 text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Notes & Comments</h3>
            <p>Add notes and comments to your tasks for better collaboration.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center space-x-4">
          <div className="rounded-full p-3 bg-white">
            {/* <BsClockHistory className="text-purple-500 text-3xl" /> */}
            <FiCalendar className="text-purple-500 text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Track Progress</h3>
            <p>Monitor the progress of your tasks and achieve your goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
