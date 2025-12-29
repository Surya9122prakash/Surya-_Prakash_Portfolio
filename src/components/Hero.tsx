import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Surya Prakash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4 animate-fade-in">
            Surya Prakash S
          </h1>

          <p className="text-2xl md:text-3xl text-blue-600 mb-8 font-medium animate-fade-in">
            Full Stack Developer
          </p>

          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Passionate software engineer with expertise in MERN stack, Vue.js, and modern web technologies. 
            Currently building scalable applications at Payoda Technologies with a focus on user experience and code quality.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Surya9122prakash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/surya-prakash-740a3222a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
