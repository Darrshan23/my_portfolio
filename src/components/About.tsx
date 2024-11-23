import React from 'react';
import { Download, CheckCircle, Award } from 'lucide-react';

const About = () => {
  const skills = [
    'UI/UX Design',
    'Frontend Development',
    'Cybersecurity',
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Network Security',
    'CCNA Certified',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate UI/UX Designer and Frontend Developer with expertise in cybersecurity. 
              With a CCNA certification and years of experience, I blend creative design with secure 
              development practices to create exceptional digital experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Certifications</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span>CCNA Certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Advanced Web Development</span>
                </div>
              </div>
            </div>
            <a
              href="/resume.pdf"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80"
                alt="Working on projects"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;