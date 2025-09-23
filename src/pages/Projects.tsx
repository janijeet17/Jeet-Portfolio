import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import cityfinder from '../assets/City Finder.png';
import agrosence from '../assets/AgroSence.png';
import pashumitra from '../assets/PashuMitra.png';
import EasyBlood from '../assets/EasyBlood.png';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'AgroSence',
      description: 'AgroSence is a smart agriculture system that connects farmers, buyers, and admins on a single platform. It allows farmers to list crops, buyers to search and purchase, and admins to manage users and crop verification.',
      image: agrosence,
      tags: ['React', 'Tailwind', 'Mongodb', 'Node.js'],
      github: '#',
      live: '#'
    },
    {
      title: 'Easy Blood',
      description: 'Easy Blood is a smart blood donation platform that connects donors, hospitals, and recipients in one place. It allows users to schedule donations and hospitals to manage blood availability, ensuring timely support and hassle-free healthcare.',
      image: EasyBlood,
      tags: ['Typescript', 'Node.js', 'Mongodb'],
      github: '#',
      live: '#'
    },
    {
      title: 'City Finder',
      description: 'City Finder is a smart platform that helps users quickly locate trusted local professionals and services within their city, ensuring convenience and accessibility. It streamlines the process of finding reliable service providers, saving time and effort for users.',
      image: cityfinder,
      tags: ['Php', 'PhpMyAdmin', 'HTML5', 'Css'],
      github: '#',
      live: '#'
    },
    {
      title: 'PashuMitra',
      description: 'PashuMitra is a digital platform that improves veterinary healthcare for farmers by streamlining medicine supply, expert consultations, and emergency support, helping reduce livestock mortality and boost agriculture.',
      image: pashumitra,
      tags: ['React', 'Mongodb', 'Tailwind', 'Node.js'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="py-10 px-500 bg-card/500">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise across different technologies and domains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden card-shadow group">
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" variant="outline" className="bg-background/90 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" className="gradient-primary text-primary-foreground">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-semibold mb-3"
                      whileHover={{ color: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + tagIndex * 0.02 }}
                          viewport={{ once: true }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Let's Work Together
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;