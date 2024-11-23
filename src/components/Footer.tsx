import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4">
              Darrshan.dev
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Creating exceptional digital experiences through design, development, and security.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/darrshan-erettai-muniandy-a690b7187/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@darrshan.dev"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">UI/UX Design</li>
              <li className="text-gray-600 dark:text-gray-300">Frontend Development</li>
              <li className="text-gray-600 dark:text-gray-300">Cybersecurity</li>
              <li className="text-gray-600 dark:text-gray-300">Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Darrshan.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;