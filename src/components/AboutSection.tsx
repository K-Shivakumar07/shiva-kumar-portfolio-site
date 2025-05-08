
import React from 'react';
import { Code, User, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6">
              Hello, I'm <span className="font-bold text-tech-purple">K. Shiva Kumar</span>, a <span className="font-semibold">Computer Science and Engineering</span> student specializing in <span className="font-semibold">Artificial Intelligence and Machine Learning</span> at <span className="font-semibold">Chaitanya Deemed To Be University</span> in Hyderabad.
            </p>
            
            <p className="mb-6">
              I am deeply passionate about <span className="font-semibold">building real-world applications</span> and continuously exploring new technologies to enhance my <span className="font-semibold">skills and expertise</span>.
            </p>
            
            <p className="mb-6">
              With a strong foundation in <span className="font-semibold">C, C++, Python, Java, Data Structures & Algorithms (DSA), MySQL, and Frontend Development</span>, I thrive on solving complex problems and developing <span className="font-semibold">innovative solutions</span>. My hands-on experience with <span className="font-semibold">30+ Python tasks and real-world projects</span> has strengthened my ability to write efficient, scalable, and optimized code.
            </p>
            
            <p>
              My goal is to leverage my skills in <span className="font-semibold">AI/ML and Software Development</span> to create impactful applications and contribute to cutting-edge technologies. I am always eager to <span className="font-semibold">learn, grow, and collaborate</span> with like-minded professionals in the tech industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-hover border-l-4 border-tech-purple">
              <CardContent className="pt-6">
                <div className="tech-icon">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Developer</h3>
                <p className="text-gray-600">
                  Passionate about coding and building software that solves real-world problems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-tech-purple">
              <CardContent className="pt-6">
                <div className="tech-icon">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Enthusiast</h3>
                <p className="text-gray-600">
                  Exploring AI/ML technologies to build intelligent and automated solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-tech-purple md:col-span-2">
              <CardContent className="pt-6">
                <div className="tech-icon">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Aspiring Professional</h3>
                <p className="text-gray-600">
                  Dedicated to continuous learning and professional growth in the technology domain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
