import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/aditi-kapoor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditi-kapoor06"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:aditikapoor612@gmail.com"
              className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 