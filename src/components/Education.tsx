
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "B.E. Computer Science",
      institute: "Kumaraguru College of Technology, Coimbatore",
      marks: "84.30%",
      year: "2020-24"
    },
    {
      degree: "XII Std",
      institute: "SSM Lakshmi Ammal Matriculation Higher Secondary School, TN",
      marks: "69.83%",
      year: "2020"
    },
    {
      degree: "X Std",
      institute: "SSM Lakshmi Ammal Matriculation Higher Secondary School, TN",
      marks: "82.80%",
      year: "2018"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                  <p className="text-slate-600">{edu.institute}</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg py-3 px-4 shadow-md">
                    <p className="text-2xl font-bold text-blue-600">{edu.marks}</p>
                    <p className="text-sm text-slate-500">Score</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg py-3 px-4 shadow-md">
                    <p className="text-xl font-semibold text-slate-800">{edu.year}</p>
                    <p className="text-sm text-slate-500">Year</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
