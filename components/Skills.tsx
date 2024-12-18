"use client";

import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { technologies } from "@/constants";

const categories = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");

  return (
    <section id="skills" className="bg-gray-900 text-white">
      <SectionWrapper>
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="section-head">
            Skills
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Explore the technologies and tools I specialize in.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
        {technologies
          .filter((tech) => tech.category === activeCategory)
          .map((technology, index) => (
            <div
              key={`${technology.name}-${index}`}
              className={`skills-card ${
                technology.name === "Extra" ? "invisible opacity-0 pointer-events-none" : "hover:scale-105"
              }`}
            >
              <Image
                src={technology.icon}
                alt={`${technology.name} Icon`}
                width={30}
                height={30}
                className="w-12 h-12"
              />
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;
