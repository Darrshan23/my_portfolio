import { Palette, Code, Shield, Laptop } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with modern design principles',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Building responsive and performant web applications with modern technologies',
      features: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Implementing robust security measures to protect digital assets',
      features: ['Security Audits', 'Network Security', 'Penetration Testing', 'Security Training'],
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Technical Consulting',
      description: 'Providing expert advice on technology solutions and best practices',
      features: ['Architecture Design', 'Tech Stack Selection', 'Performance Optimization', 'Best Practices'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs, from design to development and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;