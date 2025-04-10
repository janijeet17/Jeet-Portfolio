
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jeet Jani</h3>
            <p className="text-gray-300 mb-4">Professional web developer creating beautiful, functional websites and applications.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: janijeet50@gmail.com</p>
            <p className="text-gray-300 mb-2">Location: Mehsana, Gujarat</p>
 
            <div className="flex space-x-4">
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Twitter</a> */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Jeet Jani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
