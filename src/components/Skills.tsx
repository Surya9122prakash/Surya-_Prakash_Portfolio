
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python"],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "Vue JS", "Single-Spa (Microfrontend)", "NextJS", "NuxtJS"],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Back-End Development",
      skills: ["Express JS", "Node JS"],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Database",
      skills: ["MongoDB"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      category: "APIs & Tools",
      skills: ["REST APIs", "Socket.io", "Stripe API", "Postman", "FastAPI"],
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Cloud & Version Control",
      skills: ["AWS", "Git"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${category.color} text-white text-center py-3 px-4 rounded-lg mb-6`}>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white rounded-lg py-2 px-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
