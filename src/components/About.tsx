
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Crafting Digital Experiences
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer currently working as Software Engineer III at Payoda Technologies. 
              With a strong foundation in modern web technologies, I specialize in building scalable, user-centric applications.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              My expertise spans across the MERN stack, Vue.js ecosystem, and modern frontend frameworks. I'm particularly 
              passionate about creating seamless user experiences and writing clean, maintainable code.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Frontend Focus</h4>
                <p className="text-sm text-slate-600">React, Vue.js, Nuxt.js, Single-SPA</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Backend Skills</h4>
                <p className="text-sm text-slate-600">Node.js, Express.js, MongoDB</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Interests & Hobbies
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                🎮 Gaming Enthusiast
              </h4>
              <p className="text-slate-600">
                Passionate console gamer with a keen interest in competitive e-sports titles
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                🧩 Speed Cubing
              </h4>
              <p className="text-slate-600">
                Experienced in solving Rubik's Cube under 1 minute - a testament to my problem-solving skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
