import Image from 'next/image';
import HeroPic from '../../public/Kazal.jpeg'
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="text-teal-400 font-mono text-sm tracking-wider uppercase">Welcome to my portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I am <span className="text-teal-400">Kazal Chandra Barman</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
            Full Stack Web Developer
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Passionate about building modern, scalable web applications with React, Next.js, Express, and MongoDB.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/resume.pdf"
              download="Kazal_Barman_Resume.pdf"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg shadow-teal-500/20"
            >
              <FaDownload /> Download Resume
            </a>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/kazalbarmancode" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-teal-400 rounded-lg transition">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/kazal-barman11" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-teal-400 rounded-lg transition">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://www.facebook.com/share/14tMj8SQQD4/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-teal-400 rounded-lg transition">
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400/30 shadow-2xl">
            <Image
              src={HeroPic}
              alt="Kazal Chandra Barman" 
              className="w-full h-full object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;