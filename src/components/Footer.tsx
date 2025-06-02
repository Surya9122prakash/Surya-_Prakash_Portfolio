
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Surya Prakash S</h3>
          <p className="text-slate-300 mb-8">Full Stack Developer</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Surya9122prakash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors duration-200"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/surya-prakash-740a3222a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2024 Surya Prakash S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
