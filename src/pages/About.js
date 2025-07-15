// src/pages/About.js
import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-black px-6 py-24 overflow-hidden"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-3xl text-center transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <img
        src="/profile.jpg"
        alt="Sanskrati Arya"
        className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-6">
          About 
        </h2>
        <p className="text-gray-300 text-md sm:text-lg leading-relaxed">
          I'm <span className="text-indigo-300 font-semibold">Sanskrati Arya</span>, a
          passionate developer who crafts smooth, interactive UIs and loves
          bringing designs to life with code. I focus on performance, clarity,
          and creating joyful user experiences. Currently building my portfolio
          to showcase projects, skills, and growth journey. 💻🌟
        </p>
      </div>
    </section>
  );
}
