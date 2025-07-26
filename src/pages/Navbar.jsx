import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow relative">
      <div className="text-2xl font-bold">
        KUMARAN<span className="text-green-600">X</span>
      </div>

      <ul className="hidden md:flex gap-6 text-gray-700">
        <li>Industry</li>
        <li>Solutions & Services</li>
        <li>Products</li>
        <li>Company</li>
        <li>Careers</li>
        <li>Resources</li>
      </ul>

      <button className="hidden md:block bg-green-700 text-white px-4 py-2 rounded-xl">
        Get in Touch
      </button>

      <button
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-gray-700 text-lg">
            <li>Industry</li>
            <li>Solutions & Services</li>
            <li>Products</li>
            <li>Company</li>
            <li>Careers</li>
            <li>Resources</li>
          </ul>
          <button className="bg-green-700 text-white px-4 py-2 rounded-xl">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


