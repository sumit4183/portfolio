"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { contactLinks } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      {/* Container */}
      <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between px-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 text-md justify-center">
          <Link href="#projects" className="hover:text-blue-400 transition-all">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-blue-400 transition-all">
            Skills
          </Link>
          <Link href="#experience" className="hover:text-blue-400 transition-all">
            Experience
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-blue-400 transition-all"
              title={link.name}
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={24}
                height={24}
                className="w-8 h-8"
              />
            </a>
          ))}
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="text-md text-blue-400 hover:text-white transition-all"
        >
          Scroll to Top ↑
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Copyright */}
      <div className="text-center text-xs mt-4">
        © {currentYear}. Made by Sumit Patel
      </div>
    </footer>
  );
};

export default Footer;
