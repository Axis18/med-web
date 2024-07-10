import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 shadow-lg bg-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold lg:text-3xl text-lg text-sky-500">
            <h2>VIDYAMEDIC</h2>
        </div>
        <div className="md:flex lg:text-lg text-sm font-medium hidden space-x-4">
                <a href='' className="hover:text-sky-700">Home</a>
                <a href='' className="hover:text-sky-700">Abut Us</a>
                <a href='' className="hover:text-sky-700">Contact Us</a>
              </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black hover:text-sky-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white p-4">
        <a href='' className="hover:text-white rounded-lg hover:bg-sky-300 block border-b-2"><p className='p-2'>Home</p></a>
        <a href='' className="hover:text-white rounded-lg hover:bg-sky-300 block border-b-2"><p className='p-2'>About Us</p></a>
        <a href='' className="hover:text-white rounded-lg hover:bg-sky-300 block border-b-2"><p className='p-2'>Contact Us</p></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;