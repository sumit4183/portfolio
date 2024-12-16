"use client";

import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        404
      </h1>
      <h2 className="text-2xl mt-4">Oops! Page not found</h2>
      <p className="text-gray-400 mt-2 text-lg">The page you’re looking for doesn’t exist or has been moved.</p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-medium text-white transition-all duration-300"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
