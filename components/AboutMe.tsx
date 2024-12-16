"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white px-6 py-16 md:px-16 md:py-24"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
          About Me
        </h2>
        <p className="mt-2 text-gray-400 text-lg">
          Learn more about who I am and what I do.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
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
            I’m a passionate <strong>Frontend Developer</strong> focused on
            crafting modern and scalable web applications. I specialize in
            building user-friendly experiences using technologies like{" "}
            <span className="text-blue-400">React</span>,{" "}
            <span className="text-green-400">Next.js</span>, and{" "}
            <span className="text-purple-400">TypeScript</span>.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Beyond coding, I enjoy learning new tools, collaborating with teams,
            and exploring innovative solutions that drive success. Let’s build
            something amazing together!
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            <Link
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              className="hover:text-blue-400"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/your-profile"
              target="_blank"
              className="hover:text-blue-400"
            >
              GitHub
            </Link>
            <Link
              href="mailto:youremail@example.com"
              className="hover:text-blue-400"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
