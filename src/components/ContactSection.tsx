
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { useToast } from './ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Construct mailto URL with form data
      const mailtoUrl = `mailto:shivakumarkasula07@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      
      // Open the user's email client
      window.location.href = mailtoUrl;
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Success!",
        description: "Your email client has been opened. Please send the email to complete your message.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-tech-blue">Let's Connect</h3>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out using the form or via my contact details.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-tech-softGray p-3 rounded-full text-tech-purple mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">shivakumarkasula07@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-softGray p-3 rounded-full text-tech-purple mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 9014059770</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-softGray p-3 rounded-full text-tech-purple mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Hyderabad, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/K-Shivakumar07" 
                  className="bg-tech-softGray p-3 rounded-full text-tech-purple hover:bg-tech-purple hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/kasula-shiva-kumar" 
                  className="bg-tech-softGray p-3 rounded-full text-tech-purple hover:bg-tech-purple hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:shivakumarkasula07@gmail.com" 
                  className="bg-tech-softGray p-3 rounded-full text-tech-purple hover:bg-tech-purple hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=kjdcmvo" 
                  className="bg-tech-softGray p-3 rounded-full text-tech-purple hover:bg-tech-purple hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-tech-blue">Send Me a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="How can I help you?"
                      className="w-full"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..."
                      className="min-h-[150px] w-full"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-purple hover:bg-tech-accent"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
