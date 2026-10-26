import React, { useState } from 'react';
import { projectsData } from '@/data/ProjectsData';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

// Project ডেটার জন্য TypeScript Interface
interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  stack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  futurePlans: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-teal-400">Projects</span>
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project: Project) => (
            <div 
              key={project.id} 
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-teal-500/50 transition flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 bg-teal-500/10 text-teal-400 border border-teal-500/30 rounded-lg hover:bg-teal-500 hover:text-slate-950 font-medium transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 text-white rounded-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl p-2 bg-slate-700/50 rounded-full transition z-10"
              >
                <FaTimes />
              </button>

              <h3 className="text-2xl font-bold text-teal-400 mb-4">{selectedProject.title}</h3>
              
              <div className="relative w-full h-56 rounded-lg mb-4 overflow-hidden border border-slate-700">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="space-y-3 text-sm text-gray-300">
                <p><strong className="text-white">Description:</strong> {selectedProject.description}</p>
                
                <div>
                  <strong className="text-white block mb-1.5">Tech Stack:</strong>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700 text-teal-300 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p><strong className="text-white">Challenges Faced:</strong> {selectedProject.challenges}</p>
                <p><strong className="text-white">Future Improvements:</strong> {selectedProject.futurePlans}</p>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700 mt-4">
                  <a 
                    href={selectedProject.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-950 px-4 py-2.5 rounded-lg font-semibold transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2.5 rounded-lg font-semibold transition"
                  >
                    <FaGithub /> Client Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;