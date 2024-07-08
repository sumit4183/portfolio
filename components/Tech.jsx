"use client"

import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "./SectionWrapper.jsx"
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="my-5 justify-center flex">
        <span className="sectionSubText">Skills</span>
      </motion.div>
      <motion.div variants={textVariant()} className='flex flex-row flex-wrap justify-center gap-6'>
        {technologies.map((technology, index) => (
          <div key={index} className='w-28 h-28 flex flex-wrap justify-center gap-2 text-lg my-4'>
            <div className="flex flex-col items-center px-1 py-5 hover:zoom">
              <img 
                src={technology.icon}
                className="w-30 h-20"
              />
              {technology.name}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");