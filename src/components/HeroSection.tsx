
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-tech-softGray">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
            {/* Left side - Text content */}
            <div className="animate-fade-in text-center lg:text-left">
              <p className="text-tech-purple font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                K. Shiva Kumar
              </h1>
              <div className="bg-gradient-to-r from-tech-purple to-tech-accent text-white px-4 py-2 rounded-md inline-block mb-6">
                <p className="text-sm md:text-base font-medium">CSE Student | AI & ML Enthusiast</p>
              </div>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                Passionate about building real-world applications and continuously exploring new technologies to enhance my skills and expertise.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('about')}
                  className="bg-tech-purple hover:bg-tech-accent text-white"
                >
                  Explore My Work <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white"
                >
                  Get In Touch
                </Button>
              </div>
              
              <div className="flex space-x-4 mt-8 justify-center lg:justify-start">
                <a 
                  href="https://github.com/K-Shivakumar07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-tech-softGray p-3 rounded-full text-tech-purple hover:bg-tech-purple hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/kasula-shiva-kumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-tech-softGray p-3 rounded-full text-tech-purple hover:bg-tech-purple hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:shivakumarkasula07@gmail.com" 
                  className="bg-tech-softGray p-3 rounded-full text-tech-purple hover:bg-tech-purple hover:text-white transition-all"
                  aria-label="Email Contact"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right side - Profile photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-tech-purple shadow-2xl">
                  <img 
                    src="/lovable-uploads/5b189953-dda6-4631-a5cd-14b0a43d501a.png" 
                    alt="K. Shiva Kumar Profile Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-tech-purple rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="#6E59A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12L12 19L5 12" stroke="#6E59A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
