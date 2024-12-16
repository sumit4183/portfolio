"use client";

import Link from "next/link";

const UnderDevelopment: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        🚧 Page Under Development 🚧
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-300">
        This page is currently under construction. Check back soon!
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-medium text-white transition-all duration-300"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default UnderDevelopment;
