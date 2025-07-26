import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white h-[500px] flex items-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-3xl px-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          30+ years of building technology that move the world
        </h1>
        <p className="mt-4 text-lg">
          Powering your ecosystems with intelligent, scalable solutions that
          grow your business for tomorrow.
        </p>
        <button className="mt-6 bg-green-600 px-6 py-2 rounded-full">
          About Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
