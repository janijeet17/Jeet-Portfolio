
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="portfolio-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-dark">About Me</h1>
            <p className="text-xl text-gray-600">
              Get to know my background, experience, and what drives me as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="portfolio-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600" 
                alt="Alex Morgan portrait" 
                className="rounded-lg shadow-xl mx-auto animate-fadeIn"
              />
            </div>
            
            <div className="animate-slideUp">
              <h2 className="text-3xl font-bold mb-6 text-portfolio-dark">Who I Am</h2>
              <p className="text-gray-600 mb-4">
              I'm Jeet Jani, a passionate full-stack web developer with a strong foundation in crafting clean, user-friendly, and responsive web experiences. I love turning ideas into real, functional interfaces that users enjoy.
              </p>
              <p className="text-gray-600 mb-4">
              My journey in tech began with a curiosity for how things work on the web and that curiosity quickly turned into a passion for building full-fledged applications. Along the way, I've mastered tools like React.js, TypeScript, MongoDB, and SQL, while also gaining experience in PHPMyAdmin and UI/UX design using Figma.
              </p>
              <p className="text-gray-600 mb-4">
              I specialize in designing intuitive user experiences, building scalable frontend systems, and managing backend logic and databases. Whether it's prototyping in Figma or deploying a full-stack app, I'm always excited to bring value through technology.
              </p>
              {/* <p className="text-gray-600 mb-6">
                When I'm not coding, you'll find me hiking, reading science fiction, or experimenting with new cooking recipes.
              </p> */}
              
              <Button className="btn-primary" asChild>
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="portfolio-container">
          <h2 className="section-title text-center">My Experience</h2>
          <p className="section-subtitle text-center">Places I've worked and skills I've developed</p>
          
          <div className="space-y-12 mt-12 max-w-4xl mx-auto">
            {/* Experience Item 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-portfolio-dark">Project Intern</h3>
                <p className="text-portfolio-primary font-medium">June 2021 - May 2022</p>
              </div>
              <p className="text-lg font-medium text-gray-600 mb-4">CreArt Solution Solutions</p>
              <p className="text-gray-600 mb-4">
                Led the frontend development team in building a complex SaaS application used by over 50,000 users. Implemented new features, improved performance, and mentored junior developers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">React</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">phpmyadmin</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Php</span>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-portfolio-dark">UI/UX Designer & Backend Developer (Mongodb Atlas)</h3>
                <p className="text-portfolio-primary font-medium">Augest 2024 - Present</p>
              </div>
              <p className="text-lg font-medium text-gray-600 mb-4">Ganpat University, Mehsana</p>
              <p className="text-gray-600 mb-4">
                Developed and maintained web applications for clients in various industries. Built RESTful APIs, integrated third-party services, and implemented responsive designs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Figma</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Reactjs</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">MongoDB</span>
              </div>
            </div>
            
            {/* Experience Item 3 */}
            {/* <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-portfolio-dark">Junior Web Developer</h3>
                <p className="text-portfolio-primary font-medium">2016 - 2018</p>
              </div>
              <p className="text-lg font-medium text-gray-600 mb-4">WebCraft Studios</p>
              <p className="text-gray-600 mb-4">
                Started my professional career building websites for small businesses. Worked with HTML, CSS, JavaScript, and WordPress to create responsive and accessible websites.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">HTML/CSS</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">WordPress</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">PHP</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
