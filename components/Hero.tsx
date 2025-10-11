"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-center bg-[#111218] text-white min-h-screen pt-16 px-6 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-30 blur-2xl animate-pulse z-0"></div>

      {/* Glass Card */}
      <div className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl shadow-xl">
        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
          Hi, I&apos;m <span className="text-blue-400">Sumit Patel</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 text-center">
          A passionate <span className="text-blue-400">Software Developer</span> crafting modern web experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg text-base font-medium transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg text-base font-medium transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-10 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-blue-400 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p className="text-sm mt-1">Scroll</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
