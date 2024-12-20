"use client";

import React, { useState } from "react";
import { projects } from "@/constants";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

// Define a type for categories
type Category = "All" | string; 

// Define the colors with correct typing
export const categoryColors: Record<Category, string> = {
  All: "text-gray-500", // Tailwind gray for "All" category
  Frontend: "text-green-500 bg-green-500", // Tailwind green
  Backend: "text-blue-500 bg-blue-500", // Tailwind blue
  "Full-Stack": "text-yellow-500 bg-yellow-500", // Tailwind yellow
  "ML/AI": "text-pink-500 bg-pink-500", // Tailwind pink
  // Mobile: "text-purple-500 bg-purple-500", // Tailwind purple
  Database: "text-red-500 bg-red-500", // Tailwind red
};

const ProjectArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.some((cat) => cat === selectedCategory)
        );

  return (
    <>
    <section id="project-archive" className="bg-gray-900 text-white py-12 px-6 min-h-screen">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
            Project Archive
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Filter and explore projects by categories.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center gap-4 mb-10">
          {Object.keys(categoryColors).map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setSelectedCategory(category as Category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? `text-white ${categoryColors[category as Category].split(" ")[1]}` // Active: White text and category background color
                  : `${categoryColors[category as Category].split(" ")[0]} bg-gray-800 hover:bg-gray-700` // Inactive: Gray background and category text color
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.name}-${index}`}
              layout
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform border-2"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${tag}-${project.name}`}
                    className="px-2 py-1 text-sm rounded-lg font-medium bg-gray-700 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ProjectArchive;
