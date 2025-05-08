
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';

const SkillsSection = () => {
  const programmingSkills = [
    { name: 'C/C++', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Java', level: 75 },
    { name: 'JavaScript', level: 80 },
  ];

  const technicalSkills = [
    { name: 'Data Structures & Algorithms', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'Frontend Development', level: 75 },
    { name: 'AI & Machine Learning', level: 70 },
  ];

  const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 
    'Python', 'Java', 'C/C++', 'MySQL', 
    'DSA', 'AI/ML', 'Git', 'UI/UX Design'
  ];

  return (
    <section id="skills" className="py-20 bg-tech-softGray">
      <div className="section-container">
        <h2 className="section-title mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-tech-blue">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-200" indicatorClassName="bg-tech-purple" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-tech-blue">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-200" indicatorClassName="bg-tech-purple" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-tech-blue">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Card key={tech} className="card-hover bg-white">
                <CardContent className="py-4 px-6">
                  <span className="font-medium">{tech}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
