import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-teal-400">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Lets talk about everything!</h3>
            <p className="text-gray-400">
              Feel free to reach out to me for project inquiries, collaboration, or just a friendly chat.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 text-teal-400 rounded-lg"><FaEnvelope /></div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm font-medium">kazal9010@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 text-teal-400 rounded-lg"><FaPhoneAlt /></div>
                <div>
                  <p className="text-xs text-gray-400">Phone / WhatsApp</p>
                  <p className="text-sm font-medium">+880 1614173598</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 text-teal-400 rounded-lg"><FaMapMarkerAlt /></div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm font-medium">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
            <div>
              <label className="text-sm text-gray-400">Your Name</label>
              <input type="text" className="w-full mt-1 p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400" placeholder="John Doe" />
            </div>
            <div>
              <label className="text-sm text-gray-400">Your Email</label>
              <input type="email" className="w-full mt-1 p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400" placeholder="john@example.com" />
            </div>
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea  className="w-full mt-1 p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400" placeholder="Write your message..."></textarea>
            </div>
            <button type="button" className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;