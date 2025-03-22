'use client';

import { FaBriefcase, FaGraduationCap, FaTools, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={scrollToTop}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="hidden sm:inline">Aditi Kapoor</span>
              <span className="sm:hidden">AK</span>
            </button>
            <div className="flex gap-3 sm:gap-6 text-sm sm:text-base">
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[100dvh] flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.white/10)_1px,transparent_0)] bg-[size:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 relative py-12 sm:py-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">Senior Consultant</h1>
                <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                  Hello, I am Aditi Kapoor. I am a result-driven Senior Consultant with 6+ years of experience in business process optimization, workflow transformation, and AI-driven solutions across diverse industries.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="#contact" className="w-full sm:w-auto px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors text-center">
                    Get in Touch
                  </a>
                  <a href="#experience" className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors text-center">
                    View Experience
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-1/2 flex justify-center">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center"
              >
                <span className="text-4xl sm:text-6xl text-white font-bold">AK</span>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-white/80 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
              <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8 sm:mb-12"
          >
            <FaBriefcase className="text-blue-600 text-2xl sm:text-3xl" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
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

      {/* Education Section */}
      <section id="education" className="py-20">
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">B.Tech., Computer Science and Engineering</h3>
              <div className="flex items-center justify-between">
                <p className="text-blue-600 font-medium">Dr. A. P. J. Abdul Kalam Technical University</p>
                <span className="flex-shrink-0 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 bg-blue-50 text-blue-600 rounded-full font-medium whitespace-nowrap">2014-2018</span>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <p className="text-sm sm:text-base">Graduated with First Class with Distinction</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <p className="text-sm sm:text-base">CGPA: 8.5/10</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <p className="text-sm sm:text-base">Key subjects: Data Structures, Algorithms, Database Management, Computer Networks</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
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

      {/* Contact Section */}
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
    </div>
  );
}
