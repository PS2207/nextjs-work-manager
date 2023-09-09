"use client"
// components/Header.js
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-purple-800 p-4 sticky top-0">
      
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">Work Manager</Link>
        </div>
        {/* <div className='flex items-center'>
         <Link href="/">Home</Link>
          <Link href="/add-task">Add Task</Link>
          <Link href="/show-tasks">Show Tasks</Link>
        </div> */}
        <div className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'} text-white`}>
          <Link href="/">Home</Link>
          <Link href="/add-task">Add Task</Link>
          <Link href="/show-tasks">Show Tasks</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      
        {/* Mobile menu */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
     
      </div>
     
      {/* Mobile menu */}
      <div className={`md:hidden mt-2 ${isMobileMenuOpen ? 'block' : 'hidden'} text-white`}>
        <ul className="space-y-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/add-task">Add Task</Link>
          </li>
          <li>
            <Link href="/show-tasks">Show Tasks</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
