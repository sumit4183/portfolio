"use client";

import React from "react";
import Image from "next/image";

import SectionWrapper from "./SectionWrapper";
import { projects } from "@/constants";

// Project Card Component
const ProjectCard = ({
  name,
  description,
  tags,
  read_more,
  source_code_link,
  website_link,
}: ProjectCardProps) => {
  return (
    <div className='project-card' >
      {/* Project Title */}
      <h3 className='project-card-title'>
        {name}
      </h3>

      {/* Tech Tags */}
      <div className="flex justify-center flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag}`}
            className='project-card-tag'
          >
            {tag}
          </p>
        ))}
      </div>
      
      {/* Divider */}
      <div className='w-1/2 mx-auto border-t border-gray-600 mb-4'></div>

      {/* Description */}
      <p className="project-card-description">
        {description}
      </p>

      {/* Read More */}
      {read_more && (
        <div
          onClick={() => window.open(`/projects/${read_more}`, '_blank')}
          className='project-card-readmore'
        >
          <span className="pl-1 text-lg font-medium text-[#bdb2ff]">Read More</span>
          <Image
            src="/rightArrow.svg"
            alt="External Link Symbol"
            width={20}
            height={20}
            className="ml-1 w-5 h-5 pb-2/3"
          />
        </div>
      )}
      
      <div className='flex-grow'></div>

      {/* Links */}
      <div className='mt-6 flex justify-center gap-4'>
        {/* Source Code Link */}
        {source_code_link && (
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='project-card-sourcecode'
          >
            <Image
              src="/github.png"
              alt="External Link Symbol"
              width={32}
              height={32}
              className="pb-2/3"
            />
          </div>
        )}

        {/* Live Demo Link */}
        {website_link && (
          <div
            onClick={() => window.open(website_link, "_blank")}
            className='project-card-livedemo'
          >
            <Image
              src="/externlink.png"
              alt="External Link Symbol"
              width={28}
              height={28}
              className="invert"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const navigateToArchive = () => {
    window.open("/project-archive", "_blank");
  };

  return (
    <section id="projects" className="bg-gray-900 text-white">
      <SectionWrapper>
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="section-head">
            Projects
          </h2>
          <p className="mt-2 text-gray-400 text-lg mx-auto w-2/3">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>


        <div className="mt-12 flex items-center justify-center">
          <button
            onClick={navigateToArchive}
            className="px-6 py-3 text-lg font-medium text-white rounded-lg flex items-center gap-2 transition-all hover:scale-110 group"
          >
            <span className="group-hover:text-blue-500 transition-all">
              View Projects Archive
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white group-hover:text-blue-500 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 19l14-14M5 5h14v14"
              />
            </svg>
          </button>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
