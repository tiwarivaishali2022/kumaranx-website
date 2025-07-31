import React from "react";
import { MdArrowOutward } from "react-icons/md";

const solutions = [
  {
    title: "Legacy modernization",
    desc: "AI-driven solutions that ensure seamless transition to modern platforms and drive growth and innovation.",
    icon: "⚙️",
  },
  {
    title: "AI Solutions",
    desc: "We deliver high-quality automated testing solutions, improving efficiency and ensuring optimal value.",
    icon: "🤖",
  },
  {
    title: "Regulatory and compliance",
    desc: "Leveraging the latest technologies for compliance and regulatory changes and ensure industry compliance.",
    icon: "📜",
  },
  {
    title: "Mobile - native to hybrid app",
    desc: "Developing mobile experiences that ensure scalability, security and seamless functionality.",
    icon: "📱",
  },
  {
    title: "Cognitive document processing",
    desc: "Harnessing AI technology , we streanline document processing and enhance customer experiance",
    icon: "🧠",
  },
];

const Solutions = () => {
  return (
    <section className="bg-blue-950 text-white py-16 px-8">
      <p className="text-sm text-gray-300 mb-2">• Solutions</p>
      <h2 className="text-3xl font-bold mb-8">
        Scalable solutions that drive meaningful results
      </h2>
      <div className="grid md:grid-cols-1 gap-8">
        {solutions.map((sol, i) => (
          <div key={i} className="py-6 border-t">
            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="text-4xl mb-2 md:mb-0">{sol.icon}</div>
              <h3 className="text-xl font-semibold">{sol.title}</h3>
              <p className="mt-2 text-gray-300">{sol.desc}</p>
              <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center bg-white text-black transition md:ml-auto mr-8">
                <MdArrowOutward size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Solutions;
