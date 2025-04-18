import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => isMobile && setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="portfolio-container flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-heading font-bold text-portfolio-primary"
        >
          Jeet Jani
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}Jeet_Jani_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary">Resume</Button>
            </a>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}
      </div>
      

      {/* Mobile Navigation */}
      {isMobile && isOpen && (
        <div className="md:hidden mt-4 py-2 bg-white">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-portfolio-primary font-medium py-2 transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}Jeet_Jani_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary w-full mt-2">
                Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
