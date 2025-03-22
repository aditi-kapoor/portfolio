import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

export const Skills = () => {
  return (
    <section id="skills" className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <FaTools className="text-blue-600 text-3xl" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Product Management</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Stakeholder Management",
                "Product Lifecycle",
                "Requirements Gathering",
                "Roadmap Prioritization",
                "Cross-Functional Collaboration",
                "Feedback Collection",
                "PRDs",
                "Product Strategy",
                "Feature Prioritization",
                "A/B Testing"
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Business Analysis</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Process Optimization",
                "Data-Driven Decision Making",
                "Agile & Scrum",
                "User Story Development",
                "Root Cause Analysis",
                "Business Process Analysis",
                "Project Management",
                "KPI Tracking",
                "Competitive Analysis"
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Jira",
                "Confluence",
                "SQL",
                "Figma",
                "Postman",
                "API",
                "Python",
                "Github"
              ].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Industries</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Fintech",
                "Asset management",
                "Investment management",
                "Banking",
                "Supply chain",
                "FMCG",
                "Hospitality"
              ].map((industry) => (
                <span key={industry} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 