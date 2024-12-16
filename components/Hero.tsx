"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen pt-16 relative">
      <div className="text-center px-4">
        {/* Introduction */}
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
            Hi, I&apos;m Sumit Patel
          </span>
          {/* Animated border */}
          <div className="absolute inset-0 -z-10 mx-auto w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 opacity-20 blur-3xl animate-pulse"></div>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          A passionate <span className="text-blue-400">Software Developer</span> crafting modern web experiences.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-medium text-white transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-md text-lg font-medium text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-400 transition-all">
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
          <p className="text-sm mt-1">Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
