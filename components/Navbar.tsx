"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="navbar-head">
              Sumit Patel
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-blue-400 navbar-link">
              About
            </Link>
            <Link href="#projects" className="hover:text-green-400 navbar-link">
              Projects
            </Link>
            <Link href="/under-development" className="hover:text-purple-400 navbar-link">
              Skills
            </Link>
            <Link href="/under-development" className="hover:text-pink-400 navbar-link">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              title="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-md border-t border-gray-700">
          <a href="#about" onClick={() => setIsOpen(false)} className="navbar-mobile-link">
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="navbar-mobile-link">
            Projects
          </a>
          <a href="/under-development" onClick={() => setIsOpen(false)} className="navbar-mobile-link">
            Skills
          </a>
          <a href="/under-development" onClick={() => setIsOpen(false)} className="navbar-mobile-link">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
