"use client";

import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { experiences } from "@/constants/experience";

export default function Experience () {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="bg-[#111218] text-white">
      <SectionWrapper>
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
            Experience
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Discover my professional journey and contributions.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side Company List */}
          <div className={`flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-2/5 w-full custom-scrollbar md:max-h-[400px] pb-2 md:pr-2`}>
            {experiences.map((experience, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`min-w-[200px] md:min-w-0 text-left p-4 transition-all duration-300 md:border-l-4 ${
                  activeIndex === index
                    ? "border-blue-500 bg-gray-700 text-white"
                    : "border-transparent text-gray-300 hover:bg-gray-700"
                }`}
              >
                <h3 className="font-semibold text-base whitespace-normal break-words">
                  {experience.title}
                </h3>
                <p className="text-sm text-gray-400 whitespace-normal break-words">
                  {experience.company}
                </p>
              </button>
            ))}
          </div>

          {/* Right Side Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:h-auto self-start">
            {/* Header Row */}
            <div className="flex items-center gap-4 mb-4">
              {/* Company Icon */}
              <div className="min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={experiences[activeIndex].logo}
                  alt={experiences[activeIndex].company}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Title Info */}
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {experiences[activeIndex].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {experiences[activeIndex].company}
                </p>
                  <p className="text-sm text-gray-400">
                    <span className="text-xs">📍</span>{experiences[activeIndex].location}
                  </p>
                <p className="text-xs text-gray-400 mt-1">
                  {experiences[activeIndex].date}
                </p>
              </div>
            </div>

            {/* Description */}
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              {experiences[activeIndex].bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            
            {/* Optional: Tags */}
            {experiences[activeIndex]?.tags && experiences[activeIndex]?.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {experiences[activeIndex].tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700/50 text-white text-xs font-medium px-3 py-1 rounded-full border border-gray-600 hover:bg-blue-600 hover:border-blue-400 transition duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};