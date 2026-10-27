'use client';

import Link from 'next/link';
import { 
  BsCodeSlash, 
  BsServer, 
  BsDatabase, 
  BsTools, 
  BsBriefcase, 
  BsMortarboard, 
  BsDownload 
} from 'react-icons/bs';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-25 px-10 sm:px-6 lg:px-14">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <section className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            I am a passionate Full-Stack Web Developer dedicated to crafting high-performance, responsive, and user-centric web applications.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white">Who I Am</h2>
            <p className="text-slate-300 leading-relaxed">
              Hello! I am <span className="text-white font-semibold">Kazal Chandra Barman</span>. I focus on building scalable web products from scratch using modern frontend and backend technologies. 
            </p>
            <p className="text-slate-400 leading-relaxed">
              My core expertise lies in the React and Next.js ecosystem, alongside robust API design with Node.js and database management using MongoDB. I enjoy turning complex problems into clean, efficient, and maintainable code.
            </p>
            <div className="pt-2">
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition-colors shadow-lg shadow-blue-500/20"
              >
                <BsDownload size={16} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/50 space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">Quick Stats</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-slate-400">Role:</span>
                <span className="text-white font-medium">Full-Stack Developer</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-white font-medium">Bangladesh</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Focus:</span>
                <span className="text-white font-medium">Next.js & Node.js</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Availability:</span>
                <span className="text-green-400 font-medium">Open to Work</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Technical Skills</h2>
            <p className="text-slate-400 text-sm mt-1">Technologies and tools I work with regularly</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg w-fit">
                <BsCodeSlash size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">Frontend</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS / DaisyUI</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg w-fit">
                <BsServer size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">Backend</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>Better Auth</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg w-fit">
                <BsDatabase size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">Database</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>MongoDB Atlas</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg w-fit">
                <BsTools size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">Tools & Others</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Vercel / Netlify</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">My Journey</h2>
            <p className="text-slate-400 text-sm mt-1">Education and experience timeline</p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg h-fit">
                <BsBriefcase size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Project Experience</span>
                <h3 className="text-lg font-semibold text-white">Full-Stack Web Projects</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Developed various production-ready web applications focusing on clean code architecture, user authentication, interactive features, and responsive layouts.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg h-fit">
                <BsMortarboard size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Education</span>
                <h3 className="text-lg font-semibold text-white">Computer Science & Development Training</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Focused on modern web software development practices, data structures, algorithms, and full-stack application development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center p-8 bg-gradient from-blue-900/30 via-slate-900 to-indigo-900/30 rounded-2xl border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold text-white">Lets Work Together!</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Have a project in mind or looking for a developer to join your team? Feel free to reach out.
          </p>
          <div>
            <Link 
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-slate-950 font-semibold text-sm rounded-lg hover:bg-slate-200 transition-colors shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}