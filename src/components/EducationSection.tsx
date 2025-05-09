
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      specialization: 'Artificial Intelligence and Machine Learning',
      institution: 'Chaitanya Deemed To Be University',
      location: 'Hyderabad, India',
      period: '2023 - 2027',
      description: 'Specializing in AI and ML with a focus on practical applications and research projects.'
    },
    {
      degree: 'Intermediate Education (10+2)',
      specialization: 'Science (Mathematics, Physics, Chemistry)',
      institution: 'Sri Chaitanya Junior College',
      location: 'Hyderabad, India',
      period: '2021 - 2023',
      description: 'Focused on core science subjects with strong foundations in mathematics and physics.'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      specialization: 'General Education',
      institution: 'Saraswathi Vidhyanikethan High School',
      location: 'Hyderabad, India',
      period: '2008 - 2021',
      description: 'Completed secondary education with a strong foundation in all core subjects.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-tech-softGray">
      <div className="section-container">
        <h2 className="section-title mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-tech-purple">{edu.degree}</CardTitle>
                    <span className="text-sm font-medium text-gray-500 bg-tech-softGray px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{edu.specialization}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tech-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="font-medium">{edu.institution}, {edu.location}</p>
                  </div>
                  <p className="text-gray-600">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
