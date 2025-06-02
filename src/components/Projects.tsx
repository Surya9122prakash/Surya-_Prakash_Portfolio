import React from 'react';
import { Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Connectro",
      techStack: "Single-Spa, React JS, VueJS, Node JS, MongoDB, Socket.io",
      description: "Developed Connectro, a microfrontend social media app with Single-SPA, integrating React & Vue for real-time engagement, messaging, file sharing, notifications, and user tagging.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Ecom Platform",
      techStack: "MERN, Next JS, Stripe, Nuxt JS, Vue JS",
      description: "Developed an e-commerce platform for electronic items with secure transactions, product listings, and shopping cart functionality.",
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/Surya9122prakash/ecom-next",
      website: "https://ecom-next-io.vercel.app/"
    },
    {
      name: "Pothole Cost Estimation",
      techStack: "MERN, Python, ML, DL, Fast API",
      description: "Using ML and DL models to estimate the cost and creation of web portal for connecting the Public, Road Construction Companies, and Government.",
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/Surya9122prakash/potbid-fyp/"
    },
    {
      name: "Otaku Blogs",
      techStack: "MERN",
      description: "A dedicated anime blog platform sharing insights, reviews, and news on all things anime culture and entertainment.",
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/Surya9122prakash/Otaku-Blogs",
      website: "https://otaku-blogs.vercel.app/"
    },
    {
      name: "Engage",
      techStack: "MERN",
      description: "It is a Real-time chat website facilitating instant communication and connection between users through live messaging.",
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/Surya9122prakash/Engage",
      website: "https://engage-chat.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className={`h-4 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 text-slate-600 hover:text-black transition" />
                      </a>
                    )}
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-5 h-5 text-slate-600 hover:text-green-600 transition" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 mb-2">Tech Stack:</p>
                  <p className="text-sm text-slate-600">{project.techStack}</p>
                </div>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
