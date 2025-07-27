// src/pages/About.js
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

function Card({ title, content }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-indigo-600 text-white text-sm sm:text-md">
      <span className="block text-indigo-400 font-semibold mb-1">{title}</span>
      {content}
    </div>
  );
}

  return (
  <section
  id="about"
  className="relative min-h-screen flex items-center justify-center bg-black px-6 py-12 sm:py-24 overflow-hidden"
>
  {/* Background Blobs */}
  <div className="absolute top-10 left-0 w-72 h-72 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-2xl"></div>

  {/* Container for both blocks */}
<div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Left: About Content */}
  <div
    className={`transition-all duration-1000 ease-out transform ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-6 text-center lg:text-left">
      About
    </h2>
    <p className="text-gray-300 text-md sm:text-lg leading-relaxed">
Results-driven Software Engineer with 1.7 years of diverse experience Tata Consultancy Services (TCS), 
blending support and full-stack development roles.A strong problem-solver with deep understanding of Data Structures and Algorithms, having solved
  500+ coding problems on platforms like LeetCode, GFG, and CodeChef. Proven ability to tackle algorithmic challenges
   and write optimized code under time constraints.    </p>
    <p className="mt-6 text-sm text-gray-400 italic">
      “Code is poetry. Build things that make people smile.”
    </p>

    {/* Cards on small screen under text */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 lg:hidden">
      <Card title="🎓 Education" content="B.Tech in Information Technology (2023)" />
      <Card title="💡 Interests" content="UI/UX, Problem Solving, DevOps" />
    </div>
  </div>

  {/* Right: Skills + Learning + Cards */}
  <div className="flex flex-col items-center lg:items-start">
    {/* Currently Learning */}
    <div className="w-full mb-8">
      <h3 className="text-indigo-400 font-semibold text-md mb-4 text-center lg:text-left">
        Currently Learning
      </h3>
      <div className="overflow-hidden relative h-10">
        <div className="flex animate-scroll gap-4">
          {["NodeJS", "AWS", "CI/CD", "System Design", "DSA"].map((topic, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-900 border border-indigo-500 rounded-full text-sm text-white whitespace-nowrap"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Cards on large screen */}
    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <Card title="🎓 Education" content="B.Tech in Information Technology (2023)" />
      <Card title="💡 Interests" content="UI/UX, Problem Solving, DevOps" />
    </div>
  </div>
</div>


</section>

  );
}
