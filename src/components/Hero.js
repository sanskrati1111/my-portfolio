// src/components/Hero.js

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute -top-40 -left-20 w-[400px] h-[400px] bg-purple-600 opacity-30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 -right-10 w-[300px] h-[300px] bg-indigo-500 opacity-20 rounded-full filter blur-2xl"></div>
      <div className="absolute top-20 right-20 w-[150px] h-[150px] bg-pink-500 opacity-25 rounded-full filter blur-2xl"></div>

      {/* Hero Content */}
      <motion.div
        className={`relative z-10 max-w-3xl text-center`}
        initial={{ opacity: 0, y: 20 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight drop-shadow-xl">
          Sanskrati Arya
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-300 font-medium max-w-xl mx-auto">
          <Typewriter
            words={[
              "Frontend Developer",
              "React Enthusiast",
              "DevOps Explorer",
              "UI/UX Designer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
          >
            🚀 View Projects
          </a>

          <a
            href="/sanskrati-resume.pdf"
            download
            className="px-8 py-3 border border-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow hover:shadow-lg transition"
          >
            📄 Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
