"use client";

import React, { useState } from "react";
import { projects } from "@/constants";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi"; // Import an icon for visual cue

// Define a type for categories
type Category = "All" | string;

// Define the colors with correct typing
export const categoryColors: Record<Category, string> = {
  All: "text-gray-500", // Tailwind gray for "All" category
  Frontend: "text-green-500 bg-green-500", // Tailwind green
  Backend: "text-blue-500 bg-blue-500", // Tailwind blue
  "Full-Stack": "text-yellow-500 bg-yellow-500", // Tailwind yellow
  "ML/AI": "text-pink-500 bg-pink-500", // Tailwind pink
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
              Explore projects filtered by categories.
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
                    ? `text-white ${categoryColors[category as Category].split(" ")[1]} shadow-lg` // Active: White text and category background color
                    : `${categoryColors[category as Category].split(" ")[0]} bg-gray-800 hover:bg-gray-700` // Inactive: Gray background and category text color
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Table View */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left bg-gray-800 rounded-lg shadow-lg">
              <thead className="sticky top-0 bg-gray-700 text-gray-300">
                <tr>
                  <th className="px-4 py-3">Year</th>
                  <th className="px-4 py-3">Project</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Built With</th>
                  <th className="px-4 py-3">Links</th>
                </tr>
              </thead>
              <motion.tbody layout>
                {filteredProjects.map((project, index) => (
                  <motion.tr
                    key={`${project.name}-${index}`}
                    layout
                    className={`border-t border-gray-600 hover:bg-gray-700 transition-transform ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                    }`}
                  >
                    {/* Year */}
                    <td className="px-4 py-3 text-gray-400">{project.year}</td>

                    {/* Project Name */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {project.read_more ? (
                          <Link
                            href={`/projects/${project.name
                              .toLowerCase()
                              .replace(/ /g, "-")}`} // Generate dynamic URL
                            className="text-white font-medium flex items-center gap-1 hover:text-purple-500"
                          >
                            {project.name}
                            <FiExternalLink className="hover:text-purple-500" />
                          </Link>
                        ) : (
                          <span className="text-white font-medium">{project.name}</span>
                        )}
                      </div>
                    </td>

                    {/* Category Badge */}
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-sm rounded-lg font-medium ${
                          categoryColors[selectedCategory]?.split(" ")[1] || "bg-gray-700"
                        } text-white`}
                      >
                        {selectedCategory === "All"
                          ? project.category[0] // Default to first category
                          : selectedCategory}
                      </span>
                    </td>

                    {/* Built With */}
                    <td className="px-4 py-3">
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
                    </td>

                    {/* Links */}
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-4">
                        {project.source_code_link && (
                          <a
                            href={project.source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500 font-medium"
                          >
                            Source Code
                          </a>
                        )}
                        {project.website_link && (
                          <a
                            href={project.website_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-500 font-medium"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>

          {/* No projects fallback */}
          {filteredProjects.length === 0 && (
            <div className="text-center text-gray-400 mt-10">
              <p>No projects match the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProjectArchive;
