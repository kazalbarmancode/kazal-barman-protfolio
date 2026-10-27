'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Education', href: '/#education' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider text-teal-400">
          KAZAL<span className="text-white">.DEV</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-teal-400 transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-teal-400 border border-teal-400/50 hover:bg-teal-400 hover:text-slate-900 rounded-lg transition-all shadow-sm"
          >
            <BsDownload size={14} />
            <span>Resume</span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setNavOpen(!navOpen)} className="text-2xl text-teal-400 cursor-pointer">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700 px-6 py-4 space-y-4">
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setNavOpen(false)}
                  className="block text-gray-300 hover:text-teal-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-slate-700">
            <a
              href="/resume.pdf"
              download
              onClick={() => setNavOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-semibold text-teal-400 border border-teal-400/50 hover:bg-teal-400 hover:text-slate-900 rounded-lg transition-all"
            >
              <BsDownload size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;