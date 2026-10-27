'use client'
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: "90%" },
        { name: "Next.js", level: "85%" },
        { name: "JavaScript (ES6+)", level: "88%" },
        { name: "TypeScript", level: "75%" },
        { name: "Tailwind CSS / DaisyUI", level: "95%" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", level: "80%" },
        { name: "Express.js", level: "85%" },
        { name: "MongoDB", level: "82%" },
        { name: "Better Auth / REST API", level: "80%" },
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: "90%" },
        { name: "VS Code / PowerShell", level: "95%" },
        { name: "Vercel Deployment", level: "90%" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-2 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical <span className="text-teal-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-6 border-b border-slate-700 pb-2">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-teal-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-teal-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: sIdx * 0.1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;