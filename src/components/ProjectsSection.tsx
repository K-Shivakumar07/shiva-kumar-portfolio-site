
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Image Recognition System',
      description: 'Developed a machine learning model to recognize and classify images using Python and TensorFlow.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      techs: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
      github: '#',
      liveDemo: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Built a responsive e-commerce website with product catalog, cart functionality, and user authentication.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      techs: ['React', 'Node.js', 'MySQL', 'CSS'],
      github: '#',
      liveDemo: '#'
    },
    {
      title: 'Data Structure Visualizer',
      description: 'Interactive web application to visualize various data structures and algorithms in real-time.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      techs: ['JavaScript', 'HTML5', 'CSS3', 'D3.js'],
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
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white"
          >
            View All Projects <Github size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
