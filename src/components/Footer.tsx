'use client';

import { BsArrowUp, BsGithub, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-12 pb-8 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white tracking-wide">
            Kazal Chandra Barman
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Full-Stack Web Developer specialized in Next.js, React, and Node.js. 
            Building scalable and modern web applications.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-base font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-base font-semibold text-white">Connect</h4>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              <BsGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              <LiaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              <BsTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>
          © {currentYear} Kazal Chandra Barman. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-white transition-colors text-xs font-medium cursor-pointer"
        >
          <span>Back to Top</span>
          <BsArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}