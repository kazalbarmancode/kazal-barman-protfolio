'use client';

import { BsDownload, BsEye } from 'react-icons/bs';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">My Resume</h1>
            <p className="text-sm text-slate-400 mt-1">Full-Stack Web Developer</p>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors border border-slate-700"
            >
              <BsEye size={16} />
              <span>Preview</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/20"
            >
              <BsDownload size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        <div className="w-full h-[75vh] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Kazal Chandra Barman Resume"
          />
        </div>

      </div>
    </main>
  );
}