
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer III",
      company: "Payoda Technologies Pvt Ltd",
      period: "Mar'24 - Present",
      achievements: [
        "Designed and developed Nuxt.js SSR applications with advanced routing, route guards, and middleware to support scalable, modular architecture",
        "Collaborated closely with the API development team to align frontend and backend expectations, ensuring efficient integration",
        "Spearheaded the Appointment Scheduler module, delivering seamless booking experiences for patients and providers",
        "Proactively initiated Chatbot Integration, prototyping a conversational interface to automate scheduling workflows",
        "Implemented configurable options (timezone, date_format, time_format) to offer robust localization support",
        "Conducted training sessions and KT (Knowledge Transfer) for new team members to support agile ramp-up"
      ]
    }
  ];

  const responsibilities = [
    {
      role: "Placement Representative",
      organization: "Dept. of Computer Science",
      description: "Coordinated recruitment activities and served as the key communication link between students and the placement cell. Organized and facilitated resume-building workshops and mock interviews."
    },
    {
      role: "Student Software Developer",
      organization: "KCT Leed Club",
      description: "Maintained and enhanced the official KCT Leed Club website using ReactJS, NodeJS, Firebase, and MongoDB. Collaborated on feature development and performance optimization."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                <p className="text-xl text-blue-600 font-semibold mb-1">{exp.company}</p>
                <p className="text-slate-500 font-medium">{exp.period}</p>
              </div>
              
              <div className="grid gap-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Roles & Responsibilities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {responsibilities.map((resp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold text-slate-800 mb-2">{resp.role}</h4>
                <p className="text-blue-600 font-semibold mb-4">{resp.organization}</p>
                <p className="text-slate-600 leading-relaxed">{resp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
