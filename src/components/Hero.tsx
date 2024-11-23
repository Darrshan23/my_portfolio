import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-gray-800 dark:text-white">Hi, I'm Darrshan</span>
                <motion.span 
                  className="block mt-2 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  UI/UX Designer & Developer
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Crafting beautiful digital experiences through design, code, and security.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#portfolio"
                className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/darrshan-erettai-muniandy-a690b7187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Darrshan Erettai Muniandy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;