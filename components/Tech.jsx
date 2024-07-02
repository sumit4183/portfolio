"use client"

import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "./SectionWrapper.jsx"
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="my-5 justify-center flex">
        <span className="sectionSubText">Skills</span>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <div key={index} className='w-28 h-28 flex flex-wrap justify-center gap-2 text-lg my-4'>
            <div className="flex flex-col items-center px-1 py-5 hover:zoom">
              <img 
                src={technology.icon}
                className="w-36 h-24"
              />
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");