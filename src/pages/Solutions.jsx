import React from "react";

const solutions = [
  {
    title: "Legacy modernization",
    desc: "AI-driven solutions that ensure seamless transition to modern platforms.",
    icon: "⚙️",
  },
  {
    title: "AI Solutions",
    desc: "We deliver high-quality automated solutions, enhancing efficiency and insights.",
    icon: "🤖",
  },
  {
    title: "Regulatory and compliance",
    desc: "Leveraging the latest technologies for compliance and regulatory needs.",
    icon: "📜",
  },
  {
    title: "Mobile - native to hybrid app",
    desc: "Developing mobile experiences that ensure scalability and security.",
    icon: "📱",
  },
];

const Solutions = () => {
  return (
    <section className="bg-blue-950 text-white py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">
        Scalable solutions that drive meaningful results
      </h2>
      <div className="grid md:grid-cols-1 gap-8">
        {solutions.map((sol, i) => (
          <div
            key={i}
            className="py-6 border-t"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              <div className="text-4xl mb-2 md:mb-0">{sol.icon}</div>
              <h3 className="text-xl font-semibold">{sol.title}</h3>
              <p className="mt-2 text-gray-300">{sol.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Solutions;
