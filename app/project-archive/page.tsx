import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/constants";

const ProjectArchive = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
          Project Archive
        </h1>
        <p className="mt-2 text-gray-400 text-lg">
          Explore a comprehensive list of my projects, showcasing my experience and skills across various domains.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={`archive-${index}`}
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex mt-4 gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={`${project.name}-${tag}`}
                  className="px-2 py-1 text-sm bg-gray-700 text-gray-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectArchive;
