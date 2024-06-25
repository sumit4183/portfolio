// components/About.tsx
"use client"

import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
// import ServiceCard from "./ServiceCard";
import { services } from "@/constants";
import SectionWrapper from "./SectionWrapper.jsx"
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col'>
        <h3 className='text-[#6096ba] text-[20px] font-bold text-center'>{title}</h3>
        <p className="text-[#fbfbf2] text-[16px]">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">Get to know me!</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to my portfolio! I'm Sumit Patel, a senior at Arizona State University 
        majoring in Computer Science with a minor in Data Science. As a dedicated software 
        and full-stack developer with a strong focus on creating dynamic and responsive 
        web applications. My technical toolkit includes proficiency in front-end and 
        back-end development. Additionally, my interest in machine learning drives me to 
        explore and implement intelligent solutions that enhance user experiences and drive 
        innovation.
      </motion.p>
      
      <motion.div variants={textVariant()} className="mt-20 mb-5 justify-center flex">
        <span className="sectionSubText">My Expertise</span>
      </motion.div>
      <div className='justify-evenly flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
