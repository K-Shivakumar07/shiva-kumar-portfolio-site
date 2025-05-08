
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      specialization: 'Artificial Intelligence and Machine Learning',
      institution: 'Chaitanya Deemed To Be University',
      location: 'Hyderabad, India',
      period: '2020 - 2024',
      description: 'Specializing in AI and ML with a focus on practical applications and research projects.'
    },
    {
      degree: 'Intermediate Education (10+2)',
      specialization: 'Science (Mathematics, Physics, Chemistry)',
      institution: 'Sri Chaitanya Junior College',
      location: 'Hyderabad, India',
      period: '2018 - 2020',
      description: 'Focused on core science subjects with strong foundations in mathematics and physics.'
    }
  ];

  const achievements = [
    'Dean\'s List for academic excellence (2021-2022)',
    'Winner of university-level coding competition (2022)',
    'Published research paper on AI applications in healthcare',
    'Completed 30+ Python programming tasks with excellent feedback',
    'Recipient of merit-based scholarship for academic performance'
  ];

  return (
    <section id="education" className="py-20 bg-tech-softGray">
      <div className="section-container">
        <h2 className="section-title mb-12">Education & Achievements</h2>
        
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-tech-blue">Academic Background</h3>
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
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-tech-blue">Achievements</h3>
            <Card className="card-hover bg-gradient-to-br from-tech-purple/10 to-tech-softGray border-0">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-tech-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-tech-blue">Certifications</h3>
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-tech-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span>Python for Data Science and ML (Coursera)</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-tech-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span>Web Development Bootcamp (Udemy)</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-tech-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span>Advanced DSA (GeeksforGeeks)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
