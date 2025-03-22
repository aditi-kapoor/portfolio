import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

export const Experience = () => {
  return (
    <section id="experience" className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <FaBriefcase className="text-blue-600 text-2xl sm:text-3xl" />
          <h2 id="experience-title" className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Work Experience
          </h2>
        </motion.div>
        
        <div className="space-y-6 sm:space-y-8">
          {/* Present Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 sm:p-8 border border-gray-100"
          >
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Sr. Consultant</h3>
              <div className="flex items-center justify-between">
                <p className="text-blue-600 font-medium">Intelligent Automation Firm</p>
                <span className="flex-shrink-0 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 bg-blue-50 text-blue-600 rounded-full font-medium whitespace-nowrap">Jun'21-Present</span>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <p className="text-sm sm:text-base">Drove innovation initiatives by presenting AI-powered solutions to the AI Governance team, addressing security concerns and ensuring compliance with data protection standards.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <p className="text-sm sm:text-base">Prioritized features based on KPIs and long-term ROI. Refining scope to up to 50% and implementing phased rollouts to improve delivery timelines and user experience.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <p className="text-sm sm:text-base">Led the analysis and strategy for an AI-driven loan amendment processing system, improving decision-making efficiency and saving 600+ man-hours annually.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <p className="text-sm sm:text-base">Designed and launched a financial reconciliation solution, optimizing fee reversals, tax calculations, and currency exchanges, driving operational efficiency and reducing costs.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <p className="text-sm sm:text-base">Defined the product strategy and roadmap for a scalable testing platform, enabling faster app releases and reducing testing time by 65% for one of India's leading bank.</p>
              </li>
            </ul>
          </motion.div>

          {/* Previous Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 sm:p-8 border border-gray-100"
          >
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Associate Consultant</h3>
              <div className="flex items-center justify-between">
                <p className="text-purple-600 font-medium">IT Services and Consulting</p>
                <span className="flex-shrink-0 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 bg-purple-50 text-purple-600 rounded-full font-medium whitespace-nowrap">Dec'18-Jun'21</span>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-purple-600 flex-shrink-0"></span>
                <p>Optimized P2P and AP workflows for a top FMCG company, leveraging dashboards to eliminate redundancies and enhance efficiency by 23%.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-purple-600 flex-shrink-0"></span>
                <p>Enhanced credit card reconciliation for a leading hotel chain, cutting errors by 30% and improving financial accuracy and efficiency.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-purple-600 flex-shrink-0"></span>
                <p>Drove customer adoption and operational readiness by training clients on system workflows, result monitoring, and issue resolution, ensuring seamless implementation.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 