"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import SectionWrapper from "./SectionWrapper.jsx"
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 532);
    };

    handleResize(); // Check initial width

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()} className="my-5 justify-center flex">
        <span className="sectionSubText">Skills</span>
      </motion.div>
      {isMobile ? (
        <motion.div variants={textVariant()} className='flex flex-wrap justify-center gap-3'>
          {technologies.map((technology, index) => (
            <div key={index} className='bg-tertiary text-white px-3 py-2 rounded-lg text-center'>
              {technology.name}
            </div>
          ))}
        </motion.div>
        ) : (
        <motion.div variants={textVariant()} className='flex flex-row flex-wrap justify-center gap-3'>
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
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");