import React from 'react';
import {  FaRocket } from 'react-icons/fa';

const Experience = () => {
  const projects = [
    {
      title: "Frontend Web Developer (Personal & Open Source Projects)",
      period: "2026 - Present",
      description: "Built dynamic web applications using React, Next.js, and MongoDB. Integrated authentication workflows, dynamic market tracking systems, and responsive layouts.",
      techStack: ["React.js", "Next.js", "Tailwind CSS", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-teal-400">Projects & Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {projects.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex gap-4 transition-all hover:border-teal-400/50">
              <div className="text-teal-400 text-3xl pt-1">
                <FaRocket />
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-teal-400 text-xs bg-teal-400/10 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs bg-slate-700 text-gray-300 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;