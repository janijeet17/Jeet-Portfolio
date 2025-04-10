import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store built with React, Node.js, and MongoDB. Features include product listings, shopping cart, user authentication, and payment processing.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'An interactive dashboard with real-time data visualization using D3.js. Allows users to monitor key performance indicators and analyze trends over time.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600',
      technologies: ['React', 'TypeScript', 'D3.js', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Fitness Tracker App',
      description: 'A React Native mobile app for tracking workouts and nutrition. Includes features like workout planning, progress tracking, and diet management.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600',
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true,
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'A Kanban-style task management application for teams. Features include drag-and-drop interfaces, task assignments, deadlines, and project metrics.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600',
      technologies: ['Vue.js', 'Vuex', 'Node.js', 'PostgreSQL'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'A weather forecast application that provides current conditions and 5-day forecasts for cities worldwide using the OpenWeatherMap API.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600',
      technologies: ['JavaScript', 'HTML/CSS', 'API Integration'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills. Built with React and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="portfolio-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-dark">My Projects</h1>
            <p className="text-xl text-gray-600">
              Explore my portfolio of work spanning web development, design, and mobile applications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="portfolio-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-600 mb-12">
            Here are some of my most notable projects, showcasing my best work and technical abilities.
          </p>
          
          <div className="space-y-20">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg shadow-xl mx-auto animate-fadeIn"
                  />
                </div>
                <div className="animate-slideUp">
                  <h3 className="text-2xl font-bold mb-4 text-portfolio-dark">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-primary" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowUpRight size={16} className="ml-1" />
                      </a>
                    </Button>
                    <Button className="btn-outlined" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        View Code <ArrowUpRight size={16} className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-gray-50">
        <div className="portfolio-container">
          <h2 className="section-title text-center">Other Projects</h2>
          <p className="section-subtitle text-center">Additional work from my portfolio</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.filter(project => !project.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-portfolio-primary font-medium text-sm flex items-center hover:text-portfolio-secondary transition-colors"
                    >
                      Live Demo <ArrowUpRight size={14} className="ml-1" />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-portfolio-primary font-medium text-sm flex items-center hover:text-portfolio-secondary transition-colors"
                    >
                      View Code <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
