import React from "react";

const About = () => {
  return (
    <section className="border">
      <div className="grid md:grid-cols-2 border-b">
        <div className="flex flex-col justify-center items-center border-r p-8">
          <p className="text-green-600 mb-2">• Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-center">
            We fuel innovation with <br /> cutting-edge solutions
          </h2>
        </div>
        <div className="flex flex-col justify-between p-24">
          <p className="text-gray-700 leading-relaxed mb-6 text-center md:text-left">
            We are your trusted IT partner, delivering innovative solutions,
            from warehouse-to-analytics to data security, ensuring agility and
            scalability, to meet your evolving business needs.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 w-fit mx-auto md:mx-0">
            About Us
            <span className="bg-green-500 w-2 h-2 rounded-full"></span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="relative flex flex-col justify-center items-center border-r p-8 border-b-4 border-b-emerald-500 overflow-hidden group">
          <span className="absolute bottom-0 left-0 w-full h-0 bg-emerald-500 transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

          <p className="text-6xl font-bold relative z-10 transition-colors duration-300">
            1992
          </p>
          <p className="text-gray-800 mt-2 relative z-10 transition-colors duration-300">
            The legacy of excellence begins
          </p>
        </div>

        <div className="grid grid-cols-2 border-t md:border-t-0">
          <div className="relative flex flex-col justify-center items-center border-r p-6 border-b-4 border-b-amber-500 overflow-hidden group">
            <span className="absolute bottom-0 left-0 w-full h-0 bg-amber-400 transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

            <p className="text-4xl font-bold relative z-10 transition-colors duration-300">
              2000+
            </p>
            <p className="text-gray-800 mt-2 relative z-10 transition-colors duration-300">
              Projects delivered
            </p>
          </div>

          <div className="relative flex flex-col justify-center items-center p-6 border border-b-4 border-b-teal-500 overflow-hidden group">
            <span className="absolute bottom-0 left-0 w-full h-0 bg-teal-500 transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

            <img
              src="https://www.psbmars.com/wp-content/uploads/2023/06/SOC-2-Type2-certified-logo.png"
              alt="SOC2"
              className="h-20 mb-2 relative z-10 transition-all duration-300"
            />
            <p className="text-gray-800 text-sm relative z-10 transition-colors duration-300">
              SOC 2 type II certified
            </p>
          </div>

          <div className="relative flex flex-col justify-center items-center border-r p-6 border-b-4 border-b-blue-400 overflow-hidden group">
            <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>
            <p className="text-4xl font-bold relative z-10 transition-colors duration-300">
              40+
            </p>
            <p className="text-gray-800 mt-2 relative z-10 transition-colors duration-300">
              Countries served
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center border-r p-6 border-b-4 border-b-red-600 overflow-hidden group">
            <span className="absolute bottom-0 left-0 w-full h-0 bg-red-600 transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

            <img
              src="https://www.arohan.in/wp-content/themes/arohan/images/press-bsi.jpg"
              alt="ISO"
              className="h-20 mb-2 relative z-10 transition-all duration-300"
            />
            <p className="text-gray-800 mt-2 relative z-10 transition-colors duration-300">
              ISO/IEC 27001 certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
