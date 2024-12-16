"use client";

import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string; // For optional custom styles
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`w-full max-w-7xl px-6 md:px-12 py-16 md:py-24 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
