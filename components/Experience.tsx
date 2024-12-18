"use client";

import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { experiences } from "@/constants";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="bg-gray-900 text-white">
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

        {/* Experience Scrollable Section */}
        <div className="relative overflow-hidden">
          {/* Horizontal Timeline */}
          <div className="flex space-x-8 overflow-x-auto no-scrollbar pb-4">
            {experiences.map((experience, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 w-64 h-64 p-4 rounded-xl transition-all duration-500 cursor-pointer shadow-lg 
                  ${activeIndex === index ? "bg-blue-500 scale-[1.1] -translate-y-2 mx-4" : "bg-gray-800 mx-0"}`}
              >
                <div className="relative flex flex-col items-center justify-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                    <Image
                      src={experience.icon}
                      alt={experience.company_name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-semibold">{experience.title}</h3>
                  <h4 className="text-sm text-gray-300">{experience.company_name}</h4>
                  {/* Date */}
                  <p className="text-xs text-gray-400 mt-2">{experience.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Details Section */}
          <div className="mt-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                {experiences[activeIndex].title}
              </h3>
              <h4 className="text-sm text-gray-300">
                {experiences[activeIndex].company_name}
              </h4>
              <p className="text-xs text-gray-400 mb-4">{experiences[activeIndex].date}</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                {experiences[activeIndex].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Experience;
