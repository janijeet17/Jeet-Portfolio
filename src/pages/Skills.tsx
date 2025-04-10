
import React from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React.js', level: 70 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Figma', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'SQL', level: 80 },
  ];

  const softSkills = [
    { name: 'Problem Solving', description: 'Analytical approach to breaking down complex issues into manageable parts.' },
    { name: 'Communication', description: 'Clear and effective communication with clients and team members.' },
    { name: 'Time Management', description: 'Efficient planning and prioritization to meet project deadlines.' },
    { name: 'Teamwork', description: 'Collaborative mindset with experience in agile development teams.' },
    { name: 'Adaptability', description: 'Quick to learn new technologies and adapt to changing requirements.' },
    { name: 'Attention to Detail', description: 'Meticulous focus on code quality and user experience.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="portfolio-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-dark">My Skills</h1>
            <p className="text-xl text-gray-600">
              A comprehensive overview of my technical abilities and professional competencies.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20">
        <div className="portfolio-container">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-gray-600 mb-12">
            I've worked with a variety of programming languages, frameworks, and tools throughout my career.
            Here's a breakdown of my technical proficiency:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <span className="text-portfolio-primary">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 mb-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="portfolio-container">
          <h2 className="section-title text-center">Tools & Technologies</h2>
          <p className="section-subtitle text-center">Software and platforms I work with</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto mt-12">
            {/* Tool 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-100 rounded-full">
                <span className="text-portfolio-primary text-2xl font-bold">VS</span>
              </div>
              <h3 className="font-medium">VS Code</h3>
            </div>
            
            {/* Tool 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-100 rounded-full">
                <span className="text-portfolio-primary text-2xl font-bold">Git</span>
              </div>
              <h3 className="font-medium">Git/GitHub</h3>
            </div>
            
            {/* Tool 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-100 rounded-full">
                <span className="text-portfolio-primary text-2xl font-bold">Db</span>
              </div>
              <h3 className="font-medium">Phpmyadmin</h3>
            </div>
            
            {/* Tool 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-100 rounded-full">
                <span className="text-portfolio-primary text-2xl font-bold">Fg</span>
              </div>
              <h3 className="font-medium">Figma</h3>
            </div>
            
            {/* Tool 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-100 rounded-full">
                <span className="text-portfolio-primary text-2xl font-bold">Db</span>
              </div>
              <h3 className="font-medium">MongoDB</h3>
            </div>
            
            {/* Tool 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-100 rounded-full">
                <span className="text-portfolio-primary text-2xl font-bold">AWS</span>
              </div>
              <h3 className="font-medium">AWS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20">
        <div className="portfolio-container">
          <h2 className="section-title">Soft Skills</h2>
          <p className="text-gray-600 mb-12">
            Technical skills are important, but soft skills are what enable successful collaboration and project delivery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold text-portfolio-primary mb-3">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
