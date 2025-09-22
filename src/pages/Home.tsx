import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Code2, Users, Trophy, Coffee, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks and best practices.',
      gradient: 'gradient-primary',
      features: ['React & Vue.js', 'TypeScript', 'Responsive Design', 'Performance Optimization']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building scalable server-side applications with robust APIs and database integration.',
      gradient: 'gradient-secondary',
      features: ['Node.js & Python', 'REST & GraphQL APIs', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile apps that provide seamless user experiences.',
      gradient: 'gradient-primary',
      features: ['React Native', 'Progressive Web Apps', 'App Store Optimization', 'Native Performance']
    }
  ];
  
  const recentWork = [
    {
      title: 'Healthcare Data Analysis',
      description: 'Analyze a dataset of patients to identify disease patterns and most common health risks',
      tech: ['Data Cleaning', 'Pandas', 'Power BI'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'LocalFixer',
      description: 'connects local service providers (electricians, plumbers, carpenters etc.) with newcomers or residents in a city who need reliable services.',
      tech: ['React', 'Tailwind', 'Mongodb', 'Node.js'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'E-commerce Sales Analysis',
      description: 'Analyze sales transaction data (product, price, category, region, time) also find Best-selling products, seasonal trends.',
      tech: ['Data cleaning', 'Power BI', 'Pandas'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 gradient-primary rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-32 w-24 h-24 gradient-secondary rounded-full opacity-30"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Jeet Jani
              </motion.span>
              
              <br />
              <motion.span 
                className="text-foreground"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
               Developer
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Crafting beautiful, performant web experiences with modern technologies. 
              Passionate about clean code and innovative solutions.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link to="/projects">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(var(--primary), 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="gradient-primary text-primary-foreground px-8 py-6 text-lg">
                  View My Work
                </Button>
              </motion.div>
            </Link>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
                  Get In Touch
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10">
                  <Icon className="w-6 h-6" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              What I <span className="gradient-text">Do</span>
            </h2>
            <p className="text-muted-foreground">Comprehensive development services tailored to your needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center card-shadow group cursor-pointer h-full">
                  <motion.div 
                    className={`w-16 h-16 ${service.gradient} rounded-lg flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold mb-4"
                    whileHover={{ color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={feature}
                        className="flex items-center justify-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Upcoming <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into some of my upcoming projects that showcase creativity and technical expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recentWork.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-shadow group cursor-pointer overflow-hidden">
                  <motion.div 
                    className={`w-full h-32 bg-gradient-to-br ${project.color} rounded-lg mb-4`}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h3 
                    className="text-xl font-semibold mb-2"
                    whileHover={{ color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={tech} 
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gradient-primary text-primary-foreground">
                  View All Projects
                  <motion.div
                    className="inline-block ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="gradient-text">Collaborate</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your next project and bring your ideas to life with cutting-edge technology
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="gradient-primary text-primary-foreground">
                  Start a Project
                </Button>
              </motion.div>
            </Link>
            <Link to="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More About Me
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;