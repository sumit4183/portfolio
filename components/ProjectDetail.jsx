"use client";

import React from 'react';
import { useParams } from 'next/navigation';

import SectionWrapper from "./SectionWrapper.jsx"
import Breadcrumb from './Breadcrumb.jsx';
import { projectDetails } from "@/constants";


const ProjectDetail = () => {
  const { read_more } = useParams();

  // Find the project details using the read_more parameter
  const project = projectDetails.find(proj => proj.read_more === read_more);

  return (
    <>
      <Breadcrumb />
      <h1 className="projectHeadText">{project.name}</h1>
      
      <div className="flex flex-wrap justify-center md:justify-start">
        <div className="w-full p-4 pl-0 projectDescText md:w-1/2 md:order-1 order-1">
          <p>{project.description}</p>
        </div>
        <div className="w-full py-4 md:pl-10 md:w-1/2 md:order-2 order-2 hidden md:flex flex-col items-start">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tech Stack */}
            <div className="w-full">
              <span className="projectSubText w-full"> Tech Stack </span>
              <div className="flex flex-wrap mt-2">
                {project.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="bg-blue-100 text-[#0B1B2D] inline-block my-1 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            {/* Website Links */}
            <div className="w-full mt-4 lg:mt-0 projectDescText">
              <span className="projectSubText w-full"> Website Links </span>
              {/* Display Source Code Link if exist */}
              {project.source_code_link && (
                <div className="mt-2">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 text-hover projectText inline-flex items-center space-x-2"
                  >
                    {/* Source Code Link with Github Icon */}
                    <span className="inline-flex items-center">
                      {/* <span className="sm:hidden"> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20" height="20"
                        fill="currentColor"
                        className="bi bi-github mr-2"
                        viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                      Source Code
                    </span>
                  </a>
                </div>
              )}
              {/* Display Web Link if exist */}
              {project.website_link && (
                <div className="mt-2">
                  <a
                    href={project.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 projectText text-hover inline-flex items-center space-x-2mt-1"
                  >
                    {/* Website Link with Arrow icon */}
                    <span className="inline-block">Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fillRule="currentColor"
                        className="bi bi-arrow-up-right hidden md:inline-block ml-2"
                        viewBox="0 0 16 16"
                        strokeWidth="1" stroke="currentColor"
                      >
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.75.75 0 0 0 0 1h4.793L2.146 13.146a.75.75 0 0 0 .708.708L13 3.707V8.5a.75.75 0 0 0 1 0z"/>
                      </svg>
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {project.features && project.features.length > 0 && (
        <div className="my-6 w-full lg:w-2/3">
          <h2 className="projectSubText mb-2">Features</h2>
          <ul className="list-none list-inside">
            {project.features.map((feature, index) => (
              <li key={index} className="feature mb-3">{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack on small screens or smaller */}
      <div className="w-full md:hidden my-6">
        <span className="projectSubText w-full"> Tech Stack </span>
        <div className="flex flex-wrap mt-2">
          {project.tags.map((tag, i) => (
            <p
              key={i}
              className="bg-blue-100 text-[#0B1B2D] inline-block my-1 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {tag}
            </p>
          ))}
        </div>
      </div>

      {project.architecture && project.architecture.length > 0 && (
        <div className="my-6 w-full lg:w-2/3">
          <h2 className="projectSubText mb-2">Architecture</h2>
          <ul className="list-none list-inside">
            {project.architecture.map((item, index) => (
              <li key={index} className="mb-3">
                <strong className="text-[#40a0dc]">{item.title}:</strong>
                <span className="feature ml-1">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Website Links on small screens or smaller */}
      <div className="w-full md:hidden my-6">
        <span className="projectSubText w-full"> Website Links </span>
        {/* Display Source Code Link if exist */}
        {project.source_code_link && (
          <div className="mt-2">
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 text-hover projectText inline-flex items-center space-x-2"
            >
              {/* Source Code Link with Github Icon */}
              <span className="inline-flex items-center">
                {/* <span className="sm:hidden"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20"
                  fill="currentColor"
                  className="bi bi-github mr-2"
                  viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                Source Code
              </span>
            </a>
          </div>
        )}
        {/* Display Web Link if exist */}
        {project.website_link && (
          <div className="mt-2">
            <a
              href={project.website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 projectText text-hover inline-flex items-center space-x-2mt-1"
            >
              {/* Website Link with Arrow icon */}
              <span className="inline-block">Live Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16"
                  fillRule="currentColor"
                  className="bi bi-arrow-up-right hidden md:inline-block ml-2"
                  viewBox="0 0 16 16"
                  strokeWidth="1" stroke="currentColor"
                >
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.75.75 0 0 0 0 1h4.793L2.146 13.146a.75.75 0 0 0 .708.708L13 3.707V8.5a.75.75 0 0 0 1 0z"/>
                </svg>
              </span>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(ProjectDetail, "");
