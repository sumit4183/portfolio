"use client"

import React from 'react';

import SectionWrapper from "./SectionWrapper.jsx"
import Breadcrumb from './Breadcrumb.jsx';
import { projectDetails } from '@/constants';

const ProjectList = () => {
  return (
    <div className="mt-5 px-4 sm:px-6 lg:px-8">
      <Breadcrumb />
      <h1 className="sectionHeadText mb-6">All Projects</h1>
      <table className="min-w-full table-auto mr-4">
        <thead>
          <tr className="text-white border-b border-gray-700">
            <th className="px-4 py-2 text-left">Year</th>
            <th className="px-4 py-2 text-left">Project</th>
            <th className="hidden sm:table-cell px-4 py-2 text-left">Built with</th>
            <th className="hidden sm:table-cell px-4 py-2 text-left">Link</th>
          </tr>
        </thead>
        <tbody className=" text-gray-300">
          {projectDetails.map((project, index) => (
            <tr
              key={index}
              className={`${index !== projectDetails.length - 1 ? 'border-b border-gray-700' : ''}`}
            >
              {/* Year Column */}
              <td className="px-4 py-2">{project.year}</td>
              {/* Name column which go to the read more page */}
              <td className="px-4 py-2 font-semibold">
                {project.read_more && (
                  <div>
                    <a
                      href={`/projects/${project.read_more}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 text-hover inline-flex items-center space-x-2"
                    >
                      {/* Project Name with Arrow icon */}
                      <span className="inline-block">
                        {project.name}
                        <svg xmlns="http://www.w3.org/2000/svg"
                          width="16" height="16" fillRule="currentColor"
                          className="bi bi-arrow-right inline-block ml-2" viewBox="0 0 16 16"
                          strokeWidth="1" stroke="currentColor"
                        >
                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                )}
              </td>
              {/* Tech Stack Column */}
              <td className="hidden sm:table-cell px-4 py-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-100 text-[#0B1B2D] inline-block my-1 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </td>
              {/* Source Code and Website Link Column */}
              <td className="hidden sm:table-cell align-middle px-4 py-2">
                {/* Display Source Code Link if exist */}
                {project.source_code_link && (
                  <div>
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-blue-400 text-hover inline-flex items-center space-x-2"
                    >
                      {/* Source Code Link with Github Icon */}
                      <span className="inline-block">
                        {/* <span className="sm:hidden"> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16" height="16"
                          fill="currentColor"
                          className="bi bi-github mr-2 hidden md:inline-block"
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
                      className="text-secondary hover:text-blue-400 text-hover inline-flex items-center space-x-2mt-1"
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionWrapper(ProjectList, "");
// export default ProjectList;
