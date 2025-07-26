import React from "react";

const About = () => {
  return (
    <section className="px-6 md:px-16 py-16">
      <div className="grid md:grid-cols-2 gap-8 border-b pb-12">
        <div>
          <p className="text-green-600 text-sm mb-2">• Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            We fuel innovation with <br /> cutting-edge solutions
          </h2>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-700 leading-relaxed mb-4">
            We are your trusted IT partner, delivering innovative solutions,
            from warehouse-to-analytics to data security, ensuring agility and
            scalability, to meet your evolving business needs.
          </p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 w-fit">
            About Us <span className="bg-green-500 w-2 h-2 rounded-full"></span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12 text-center">
        <div>
          <p className="text-6xl font-bold">1992</p>
          <p className="text-gray-500 mt-2">The legacy of excellence begins</p>
        </div>

        <div className="grid md:grid-cols-2">
          <div>
            <div className="border p-4">
              <p className="text-4xl font-bold">2000+</p>
              <p className="text-gray-500 mt-2">Projects delivered</p>
            </div>

            <div className="border border-t-2 border-t-orange-600 p-4">
              <p className="text-4xl font-bold">40+</p>
              <p className="text-gray-500 mt-2">Countries served</p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col border p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/ISO_27001.svg/200px-ISO_27001.svg.png"
                alt="SOC2"
                className="mx-auto h-12"
              />
              <p className="text-gray-500">SOC 2 type II certified</p>
            </div>
            <div className="border border-t-2 border-t-green-300 p-4">
              <img
                src="https://dummyimage.com/100x50/ccc/fff&text=ISO+Cert"
                alt="Certification"
                className="mx-auto mb-1"
              />
              <p className="text-gray-500 text-sm">
                ISO/IEC 27001:2013 certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
