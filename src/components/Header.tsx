
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-tech-blue">
              <span className="text-tech-purple">K.</span>Shiva Kumar
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-tech-purple font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-tech-purple font-medium">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-tech-purple font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-tech-purple font-medium">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-tech-purple font-medium">
              Contact
            </button>
          </nav>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-tech-purple hover:bg-tech-accent text-white"
          >
            Let's Connect
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-tech-purple rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-tech-purple rounded-md"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-tech-purple rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-tech-purple rounded-md"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-tech-purple rounded-md"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-tech-purple hover:bg-tech-accent text-white mt-2"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
