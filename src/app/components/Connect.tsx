import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa';

export const Connect = () => {
  return (
    <section id="connect" className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <FaHandshake className="text-blue-600 text-2xl sm:text-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            The Next Chapter: Let's Connect
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 border-b border-gray-100">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              I'm always excited to connect with like-minded professionals who care about solving problems, optimizing processes, and driving impact. Whether you're a fellow strategist, a hiring manager, or just someone interested in process and product thinking, let's chat!
            </p>
          </div>
          <div className="p-6 sm:p-8 flex justify-center">
            <a 
              href="https://www.linkedin.com/in/aditi-kapoor06/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 