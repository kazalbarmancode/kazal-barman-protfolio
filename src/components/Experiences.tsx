import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work <span className="text-teal-400">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-xl border border-slate-700 flex gap-4">
          <div className="text-teal-400 text-3xl pt-1">
            <FaBriefcase />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Frontend Web Developer (Personal & Open Source Projects)</h3>
            <p className="text-teal-400 text-sm">Self-Employed / Freelance (2024 - Present)</p>
            <p className="text-gray-300 text-sm">
              Built dynamic web applications using React, Next.js, and MongoDB. Integrated authentication workflows, dynamic market tracking systems, and responsive layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;