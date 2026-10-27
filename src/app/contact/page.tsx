'use client';

import React, { useState } from 'react';
import { 
  BsEnvelope, 
  BsGeoAlt, 
  BsTelephone, 
  BsSend, 
  BsGithub, 
  BsTwitter 
} from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <section className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Have a project in mind, a question, or just want to say hi? Feel free to send a message!
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-6">
              <h2 className="text-xl font-bold text-white">Contact Information</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                    <BsEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-400">Email</h3>
                    <a href="mailto:kazal@example.com" className="text-white hover:text-blue-400 transition-colors">
                      kazal@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                    <BsTelephone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-400">Phone</h3>
                    <p className="text-white">+880 1700-000000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
                    <BsGeoAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-400">Location</h3>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-base font-semibold text-white">Follow Me</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  aria-label="GitHub"
                >
                  <BsGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LiaLinkedin size={22} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  aria-label="Twitter"
                >
                  <BsTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Kazal Barman"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer shadow-lg shadow-blue-500/20"
              >
                <span>Send Message</span>
                <BsSend size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}