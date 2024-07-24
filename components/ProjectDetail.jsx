"use client";

import React from 'react';
import { useParams } from 'next/navigation';

import SectionWrapper from "./SectionWrapper.jsx"
import Breadcrumb from './Breadcrumb.jsx';
import { projects, projectDetails } from "@/constants";


const ProjectDetail = () => {
  const { read_more } = useParams();

  // Find the project details using the read_more parameter
  const project = projectDetails.find(proj => proj.read_more === read_more);

  // If project is not found, return a message
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      
      {/* <div className="container mx-auto p-5"> */}

        <Breadcrumb />
        <h1 className="projectHeadText">{project.name}</h1>
        
        <div className="mb-4">
          <p>{project.description}</p>
        </div>
        {/*<div className="mb-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <ul>
            {project.tags.map((tag, index) => (
              <li key={index}>{tag.name}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Implementation Steps</h2>
          <p>{projectDetail.implementation}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Additional Information</h2>
          <p>{projectDetail.additionalInfo}</p>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Source Code</button>
          </a>
          {project.website_link && (
            <a href={project.website_link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary">Live Demo</button>
            </a>
          )}
        </div> */}
      {/* </div> */}
    </>
  );
};

export default SectionWrapper(ProjectDetail, "");
