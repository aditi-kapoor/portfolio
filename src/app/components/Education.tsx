import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

export const Education = () => {
  return (
    <section id="education" className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <FaGraduationCap className="text-blue-600 text-2xl sm:text-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Education
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 sm:p-8 border border-gray-100"
        >
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">B.Tech. Computer Science and Engineering</h3>
            <div className="flex items-center justify-between">
              <p className="text-blue-600 font-medium">Dr. A. P. J. Abdul Kalam Technical University</p>
              <span className="flex-shrink-0 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 bg-blue-50 text-blue-600 rounded-full font-medium whitespace-nowrap">2014-2018</span>
            </div>
          </div>
          <ul className="space-y-3 sm:space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
              <p className="text-sm sm:text-base">Key subjects: Data Structures, Algorithms, Database Management, Computer Networks</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}; 