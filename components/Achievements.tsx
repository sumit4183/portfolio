'use client';

import React from 'react';
import { achievements } from '@/constants/achievements';
import SectionWrapper from './SectionWrapper';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#111218] text-white">
      <SectionWrapper>
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="section-head">Achievements & Certifications</h2>
          {/* <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-2 rounded-full"></div> */}
          <p className="mt-2 text-gray-400 text-lg mx-auto w-2/3">
            A curated list of certifications and achievements that showcase my commitment to continuous learning and technical growth.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={`achievement-${idx}`}
              className="rounded-xl bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-[#1f1f28] shadow-md p-6">
                {/* <div className="bg-[#111218] rounded-xl p-6 h-full"> */}
              {/* Title */}
              <h3 className="text-lg md:text-xl mb-2 font-bold text-white">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className="text-xs px-2 py-1 bg-gray-700 text-gray-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Certificate Link */}
              {item.certificate_link && (
                <div className="mt-auto pt-4">
                  <a
                    href={item.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-blue-400 hover:text-blue-500 transition"
                  >
                    View Certificate →
                  </a>
                </div>
              )}
              </div>
            // </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Achievements;
