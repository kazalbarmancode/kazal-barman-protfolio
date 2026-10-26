import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "B.Sc. in Computer Science / Higher Education",
      institution: "Your University Name",
      duration: "Running / Completed",
      description: "Focusing on software engineering, data structures, algorithm design, and modern computing fundamentals."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Your College Name",
      duration: "Completed",
      description: "Science background with strong foundation in mathematics and technology."
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Educational <span className="text-teal-400">Qualification</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <div key={index} className="flex gap-4 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="text-teal-400 text-3xl pt-1">
                <FaGraduationCap />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <p className="text-teal-400 text-sm">{item.institution} ({item.duration})</p>
                <p className="text-gray-400 text-sm pt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;