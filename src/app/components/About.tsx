import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <FaUser className="text-blue-600 text-2xl sm:text-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            About Me – The Turning Point
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 text-gray-700 backdrop-blur-sm border border-gray-100"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            How I Discovered My Passion for Business & Product Thinking
          </h3>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              For years, I focused on making businesses more efficient through automation. I built solutions, reduced manual effort, and improved accuracy. But as I worked on more projects, I realized something: solving technical challenges was great, but the real challenge—and the real opportunity—was in understanding the business itself.
            </p>

            <p className="text-lg leading-relaxed">
              Why were certain processes even in place? Could we eliminate unnecessary steps instead of just automating them? What features should we prioritize? These questions led me toward a more strategic role—one where I wasn't just executing solutions but helping define the problems themselves.
            </p>

            <p className="text-lg leading-relaxed">
              That shift—from automation specialist to strategic problem solver—is what led me to focus on business analysis, stakeholder collaboration, and product thinking. Today, I don't just optimize workflows; I help businesses make smarter, data-driven decisions that lead to better products, better processes, and better outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 