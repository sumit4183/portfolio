"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function AboutMe () {
  return (
    <section id="about" className="aboutme-section">
      <SectionWrapper>
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
            About Me
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Learn more about who I am and what I do.
          </p>
        </div>

        {/* Main Flex Container: Left (Image + Text) + Right (Education) */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* LEFT COLUMN (Image + About Me Text) */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 lg:w-2/3">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-28 md:w-40 aspect-square rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 shadow-md">
                <Image
                  src="/me.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* About Me Text */}
            <div className="text-gray-300 leading-relaxed text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                Hi, I&apos;m <span className="text-blue-400">Sumit Patel</span>
              </h3>
              <p>
                I’m a software engineer who loves building thoughtful, practical tools especially the kind that make complex systems feel simple. I’m drawn to the backend side of things, but I also care deeply about design and user experience, especially when it comes to AI-powered applications.
              </p>
              <p className="mt-4">
                Lately, I’ve been focused on building internal tools, LLM-integrated dashboards, and systems that blend automation with real user needs. Whether it’s collaborating with a team or tinkering on something solo, I enjoy figuring out how everything fits together and turning ideas into working software that actually helps people.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN (Education) */}
          <div className="lg:w-1/2 space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Education</h3>

            {/* Bachelors */}
            <div className="flex items-start gap-4">
              <Image
                src="/company/asu.png"
                alt="ASU Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <h4 className="text-white font-semibold">Arizona State University</h4>
                <p className="text-gray-400">Ira A. Fulton Schools of Engineering</p>
                <p className="text-gray-300">B.S. in Computer Science</p>
                <p className="text-gray-500">2021 – 2025</p>
              </div>
            </div>

            {/* Minor */}
            <div className="flex items-start gap-4">
              <Image
                src="/company/asu.png"
                alt="ASU Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <h4 className="text-white font-semibold">Arizona State University</h4>
                <p className="text-gray-400">School of Mathematical and Statistical Sciences</p>
                <p className="text-gray-300">Minor in Data Science</p>
                <p className="text-gray-500">2021 – 2025</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};
