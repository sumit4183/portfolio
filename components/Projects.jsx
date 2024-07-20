"use client"

import React from 'react'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import SectionWrapper from "./SectionWrapper.jsx"
import { projects } from "@/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  read_more,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full flex flex-col'
      >
        <h3 className='mt-3 text-white text-center font-bold text-[26px]'>{name}</h3>

        <div className="flex justify-center space-x-2 mt-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className='text-[14px] text-[#d1e4ff]'
            >
              {tag.name}
            </p>
          ))}
        </div>
        
        <div className='w-2/4 mt-3 mb-3 mx-auto border-t-2 border-gray-700'></div>

        <p className='mt-2 text-secondary text-[14px] text-center'>{description}</p>

        {read_more && (
          <div
            onClick={() => window.open(read_more, "_blank")}
            className='rounded-full cursor-pointer items-center flex justify-center mt-2'
          >
            <span className="pl-1 text-[#bdb2ff]">Read More</span>
            <img
                src="/rightArrow.svg"
                alt="External Link Symbol"
                className="ml-1 w-5 h-5 pb-2/3"
              />
          </div>
        )}
        
        <div className='flex-grow'></div>

        <div className='mt-4 flex flex-wrap gap-2 justify-center'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='rounded-full items-center justify-center cursor-pointer flex'
          >
            <img
              src="/github.png"
              alt="External Link Symbol"
              className="w-8 h-8 pb-2/3"
            />
          </div>
          {website_link && (
            <div
              onClick={() => window.open(website_link, "_blank")}
              className='rounded-full items-center justify-center cursor-pointer flex'
            >
              <img
                src="/externlink.png"
                alt="External Link Symbol"
                className="w-7 h-7 pb-2/3 filter-white"
              />
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");