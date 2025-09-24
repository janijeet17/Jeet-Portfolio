import { Code, Palette, Zap, Calendar, MapPin, Heart, Gamepad2, Camera, Music } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern patterns.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful user interfaces with attention to detail and user experience.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver exceptional user experiences.'
    }
  ];

  const timeline = [
    // {
    //   year: '2024',
    //   title: 'Senior Full-Stack Developer',
    //   company: 'Tech Innovations Inc.',
    //   description: 'Leading development of enterprise applications and mentoring junior developers.'
    // },
    {
      year: '2024',
      title: 'Led SIH Team of 6 members',
      company: 'Ganpat University',
      description: 'Selected among top 10 teams for SIH 2024 internal college round under the Agriculture domain.'
    },
    {
      year: '2021',
      title: 'Php Developer (Intern)',
      company: 'CreArt Solution Pvt Ltd.',
      description: 'Worked on PHP and PhpMyAdmin, Gained hands on experience in MySQL.'
    },
    {
      year: '2019',
      title: 'Started Coding Journey',
      company: 'Self-Taught',
      description: 'Began learning programming through online courses and building personal projects.'
    }
  ];

  const interests = [
    { icon: Gamepad2, title: 'Gaming', description: 'Strategy games and indie titles' },
    { icon: Camera, title: 'Photography', description: 'Street and landscape photography' },
    { icon: Music, title: 'Music', description: 'Electronic and ambient music' },
    { icon: Heart, title: 'Open Source', description: 'Contributing to community projects' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve complex problems.'
    },
    {
      title: 'Quality',
      description: 'Committed to writing clean, maintainable code that stands the test of time.'
    },
    {
      title: 'Collaboration',
      description: 'Believing that the best solutions come from diverse perspectives and teamwork.'
    },
    {
      title: 'Growth',
      description: 'Continuously learning and helping others grow in their development journey.'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* First Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I am a passionate full-stack developer who loves building impactful digital solutions by combining technical skills with creative design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Started as a self-taught developer, I've evolved into a full-stack engineer who loves 
                turning complex problems into simple, elegant solutions. My background in both design 
                and development gives me a unique perspective on creating user-centered experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or mentoring aspiring developers in the community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="gradient-primary p-8 rounded-2xl card-shadow"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h4 className="text-xl font-semibold text-primary-foreground mb-4">
                  Technologies I Love
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'MySQL', 'Power BI', 'Tailwind', 'Figma', 'Selenium', ].map((tech, index) => (
                    <motion.span 
                      key={tech} 
                      className="px-3 py-1 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-shadow cursor-pointer group h-full">
                  <motion.div 
                    className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
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
            <Link to="/skills">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mr-4"
              >
                <Button className="gradient-primary text-primary-foreground">
                  View My Skills
                </Button>
              </motion.div>
            </Link>
            <Link to="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  See My Work
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My <span className="gradient-text">Story</span>
          </motion.h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              My journey into technology started during my academic years, where curiosity drove me to explore how software shapes the world around us. As I progressed through my diploma and B.Tech studies, I gained hands-on exposure to various programming languages, databases, and design tools, which strengthened both my technical and problem-solving skills.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Along the way, I’ve had the opportunity to intern, collaborate with peers, and participate in national-level hackathons, each experience adding new perspectives to my growth.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Today, I’m focused on honing my expertise as a full-stack developer, Data analysis with a vision to create solutions that are not only technically sound but also intuitive and impactful.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional <span className="gradient-text">Journey</span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year} 
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Card className="p-6 card-shadow">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.year}
                          </Badge>
                          {item.company !== 'Self-Taught' && (
                            <Badge variant="outline" className="text-xs">
                              <MapPin className="w-3 h-3 mr-1" />
                              {item.company}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Core <span className="gradient-text">Values</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Beyond <span className="gradient-text">Code</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center card-shadow group cursor-pointer">
                  <motion.div 
                    className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <interest.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;