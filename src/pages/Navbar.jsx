import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = ({ isHero = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isHero ? "absolute top-0 left-0 w-full mx-10 z-20" : "relative w-full"
      } `}
    >
      <nav
        className={`${isHero ? "absolute top-0 left-0 " : "px-20 w-full"} 
        bg-white rounded-b-2xl shadow-md px-4 py-4 flex justify-between items-center w-[95%]`}
      >
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm1SMjZNJakVK78GTmv97vvRAZc_0JL7-Xg&s"
            alt="Kumaran Systems Logo"
            className="h-16 w-auto object-contain "
          />
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-green-400">Industry</li>
          <li className="cursor-pointer hover:text-green-400">
            Solutions & Services
          </li>
          <li className="cursor-pointer hover:text-green-400">Products</li>
          <li className="cursor-pointer hover:text-green-400">Company</li>
          <li className="cursor-pointer hover:text-green-400">Careers</li>
          <li className="cursor-pointer hover:text-green-400">Resources</li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white">
            <FiSearch size={18} />
          </button>
          <button className="group flex items-center gap-2 bg-black hover:bg-green-500 text-white hover:text-black px-4 py-2 rounded-full">
            Get In Touch
            <span className="relative bg-green-700 rounded-full p-1 w-7 h-7 flex items-center justify-center overflow-hidden">
              <MdArrowOutward className="absolute inset-0 m-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0 text-black" />
              <IoIosArrowRoundForward
                className="absolute inset-0 m-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-white"
                size={18}
              />
            </span>
          </button>
        </div>

        <button
          className="md:hidden text-white"
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
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
              Get In Touch
              <span className="bg-green-700 rounded-full p-1">
                <MdArrowOutward />
              </span>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
