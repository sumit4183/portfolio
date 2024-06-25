"use client";

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-10">
        <div className="flex flex-col justify-center items-center mt-5 xs-max:hidden">
          <img src="me.png" 
            alt="me"
            className="rounded-full border-4 border-theme sm:w-40 sm:h-38 md:w-52 md:h-50 lg:w-52 lg:h-50 xl:w-52 xl:h-50"
          />
          <div className="w-5 h-5 rounded-full bg-theme" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="xs-max:text-center xs-max:mt">
          <h1 className="heroHeadText text-white">
            Hi, I'm <span className="text-theme">Sumit</span>
          </h1>
          <p className="heroSubText xs-max:my-5 my-2 text-white-100">
            A Passionate Developer & Designer.<br />
            Transforming User Experiences with Code, Data, and AI
          </p>
          <div className="flex flex-col items-start">
            <div
              onClick={() => window.open("https://www.linkedin.com/in/sumit4183/", "_blank")}
              className='my-3 inline-flex items-center gap-2 px-4 text-lg font-medium cursor-pointer'
            >
              <img 
                src="/linkedin.jpg"
                className='w-8 h-8'
              />
              LinkedIn
            </div>

            <div
              onClick={() => window.open("https://github.com/sumit4183", "_blank")}
              className='my-3 inline-flex items-center gap-2 px-4 text-lg font-medium cursor-pointer'
            >
              <img 
                  src="/github.png"
                  className='w-8 h-8'
              />
              Github
            </div>

            <div
              onClick={() => window.open("SumitPatelResume.pdf", "_blank")}
              className='my-3 inline-flex items-center gap-2 px-4 text-lg font-medium'
            >
              <span className="border border-white rounded-lg px-2 py-1 cursor-pointer">
                Resume
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero