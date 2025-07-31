import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center px-8 m-4 rounded-2xl"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/2158226013/photo/business-people-working-with-a-digital-tablet-in-a-meeting.jpg?s=2048x2048&w=is&k=20&c=Dfonie2Xlq0R2aDoKVq5ObgTk5u-NnPZxQmUVCY9Ze8=')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          30+ Years of Building Technology <br /> that move the world
        </h1>
        <p className="mt-4 text-lg text-white max-w-2xl">
          Reinvent your core systems with intelligent, scalable solutions that
          prepare your business for tomorrow's challenges.
        </p>
        <button className="mt-6 bg-white text-black px-4 py-2 mb-8 rounded-full flex items-center gap-2 shadow-md hover:bg-gray-100">
          About Us
          <span className="bg-green-700 rounded-full p-1">
            <MdArrowOutward />
          </span>
        </button>
      </div>

      <div className="absolute bottom-6 left-0 w-full flex justify-evenly text-white text-sm md:text-base px-6">
        {[
          "Who We Are",
          "Find The Right Solutions",
          "Product Innovations",
          "The Kumaran Impact",
        ].map((text, index) => (
          <div key={index} className="flex flex-col  cursor-pointer group">
            <div className="w-48 border-t border-white/40 mb-2 group-hover:border-white transition-all"></div>
            <span className="opacity-90 group-hover:opacity-100">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
