
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="portfolio-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-dark">
                Hello, I'm <span className="text-portfolio-primary">Jeet Jani</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Full-stack Web Developer & UI/UX Designer
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                I create beautiful, functional websites and applications that help businesses grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary" asChild>
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button className="btn-outlined" asChild>
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600" 
                alt="Professional portrait of Alex Morgan" 
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="portfolio-container">
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="section-subtitle text-center">Some of my recent work</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600" 
                alt="E-commerce project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">A full-featured online store built with React, Node.js, and MongoDB.</p>
                <Link to="/projects" className="text-portfolio-primary font-medium flex items-center hover:text-portfolio-secondary transition-colors">
                  View Details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600" 
                alt="Dashboard project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">An interactive dashboard with real-time data visualization using D3.js.</p>
                <Link to="/projects" className="text-portfolio-primary font-medium flex items-center hover:text-portfolio-secondary transition-colors">
                  View Details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600" 
                alt="Mobile app project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fitness Tracker App</h3>
                <p className="text-gray-600 mb-4">A React Native mobile app for tracking workouts and nutrition.</p>
                <Link to="/projects" className="text-portfolio-primary font-medium flex items-center hover:text-portfolio-secondary transition-colors">
                  View Details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-primary" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-portfolio-primary text-white">
        <div className="portfolio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work. If you have a project that needs some creative work, I'd love to hear about it.
          </p>
          <Button className="bg-white text-portfolio-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors duration-200" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
