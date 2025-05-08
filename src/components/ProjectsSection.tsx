
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'TO-DO-LIST',
      description: 'A task management application with features to add, edit, delete, and mark tasks as complete.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
      techs: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      github: '#',
      liveDemo: '#'
    },
    {
      title: 'GUESS NUMBER',
      description: 'An interactive number guessing game where users have to guess a randomly generated number within a range.',
      image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=800&q=80',
      techs: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
      github: '#',
      liveDemo: '#'
    },
    {
      title: 'CALCULATOR',
      description: 'A fully functional calculator web application that can perform basic arithmetic operations.',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=80',
      techs: ['JavaScript', 'HTML', 'CSS', 'Math Operations'],
      github: '#',
      liveDemo: '#'
    },
    {
      title: 'STATIC AMAZON WEBSITE INTERFACE',
      description: 'A clone of the Amazon website interface with static content, focusing on the UI components.',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80',
      techs: ['HTML', 'CSS', 'Responsive Design', 'UI/UX'],
      github: '#',
      liveDemo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title mb-12">Recent Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-tech-softGray text-tech-purple">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="bg-tech-purple hover:bg-tech-accent" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
