"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const AboutMe = () => {
  return (
    <section id="about" className="aboutme-section">
      <SectionWrapper>
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="aboutme-head">
            About Me
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Learn more about who I am and what I do.
          </p>
        </div>

        {/* Content */}
        <div className="aboutme-content">
          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              src="/me.png"
              alt="Profile"
              width={240}
              height={240}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right: About Me Text */}
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Hi, I&apos;m <span className="text-blue-400">Sumit Patel</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hi there 👋, I’m <strong>Sumit Patel</strong>, a passionate{" "} <strong>Frontend Developer</strong> currently pursuing my{" "} <strong>Bachelor’s in Computer Science</strong> with a Minor in Data Science at <span className="text-blue-400">Arizona State University</span>.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              I specialize in building modern, responsive, and user-friendly web applications using technologies like{" "} <span className="text-blue-400">React</span>,{" "} <span className="text-green-400">Next.js</span>, and{" "} <span className="text-purple-400">TypeScript</span>. With hands-on experience, I focus on writing clean, scalable code and delivering exceptional user experiences.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Beyond coding, I enjoy problem-solving, learning new tools, and collaborating to push the boundaries of what’s possible. Let’s connect and build something amazing together!
            </p>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default AboutMe;
