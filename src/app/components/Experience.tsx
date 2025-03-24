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
            The Proof - Where I Applied This New Thinking
          </h2>
        </motion.div>
        
        <div className="space-y-12">
          {/* Present Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            {/* Company Header */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Senior Consultant | Process Optimization & Business Strategy</h3>
                  <p className="text-blue-600 font-medium mt-1">Intelligent Automation Firm</p>
                </div>
                <span className="flex-shrink-0 text-xs sm:text-sm px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium whitespace-nowrap">Jun'21-Present</span>
              </div>
            </div>

            {/* Experience Cards Container */}
            <div className="p-6 space-y-6">
              {/* First Experience */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  Workflow Optimization: Redesigning Financial Reconciliation for a Fintech Client
                </h4>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm sm:text-base">
                    One of my first big realizations came while working with a fintech client struggling with financial reconciliation delays. Initially, my role was to automate parts of the process. But when I took a step back, I saw a bigger opportunity:
                  </p>
                  
                  <div className="pl-4 border-l-2 border-blue-200 space-y-3">
                    <p className="text-sm sm:text-base">
                      Instead of just automating, I worked with stakeholders to identify inefficiencies in the entire workflow.
                    </p>
                    <p className="text-sm sm:text-base">
                      We restructured the process, eliminating redundant steps before introducing automation.
                    </p>
                    <p className="text-sm sm:text-base">
                      The result? A 30% reduction in processing time and smoother compliance reporting.
                    </p>
                  </div>

                  <p className="text-sm sm:text-base">
                    This was a turning point for me—I wasn't just writing scripts; I was helping define business strategies that drove real impact.
                  </p>
                </div>
              </div>

              {/* Second Experience */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  Beyond Automation: Redesigning Operations to Build Smarter Solutions
                </h4>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm sm:text-base">
                    I saw a common challenge: process inefficiencies masked as automation opportunities.
                  </p>
                  
                  <p className="text-sm sm:text-base">
                    Many teams wanted automation because it seemed like a quick fix. But often, the real solution was rethinking the process itself.
                  </p>

                  <div className="pl-4 border-l-2 border-blue-200 space-y-3">
                    <p className="text-sm sm:text-base">
                      I helped businesses analyze workflows, eliminate inefficiencies, and redesign operations before applying automation.
                    </p>
                    <p className="text-sm sm:text-base">
                      By shifting the focus from "how do we automate?" to "how do we optimize?", I helped clients achieve sustainable efficiency improvements beyond just automation.
                    </p>
                    <p className="text-sm sm:text-base">
                      I worked closely with business teams, tech teams, and leadership, ensuring that solutions were not just technically sound but also strategically aligned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Previous Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            {/* Company Header */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Associate Consultant</h3>
                  <p className="text-purple-600 font-medium mt-1">IT Services and Consulting</p>
                </div>
                <span className="flex-shrink-0 text-xs sm:text-sm px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-medium whitespace-nowrap">Dec'18-Jun'21</span>
              </div>
            </div>

            {/* Experience Cards Container */}
            <div className="p-6 space-y-6">
              {/* First Experience */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  Financial Accuracy: Fixing Credit Card Reconciliation for a Leading Hotel Chain
                </h4>

                <div className="space-y-4 text-gray-700">
                  <p className="text-sm sm:text-base">
                    In the hospitality industry, financial reconciliation is a make-or-break process—errors can lead to misplaced revenue, compliance risks, and operational disruptions.
                  </p>

                  <p className="text-sm sm:text-base">
                    A leading hotel chain was facing ongoing issues with credit card reconciliation. Their financial team struggled with data mismatches, manual errors, and delayed reporting, which impacted decision-making and compliance.
                  </p>

                  <div className="pl-4 border-l-2 border-purple-200 space-y-3">
                    <p className="text-sm sm:text-base font-medium">
                      Instead of just automating the reconciliation process, I focused on:
                    </p>
                    <p className="text-sm sm:text-base">
                      Standardizing data inputs across multiple systems to ensure consistency.
                    </p>
                    <p className="text-sm sm:text-base">
                      Identifying recurring sources of errors and implementing preventive controls.
                    </p>
                    <p className="text-sm sm:text-base">
                      Redesigning reporting workflows to enable quicker financial adjustments.
                    </p>
                  </div>

                  <p className="text-sm sm:text-base">
                    The result? A 30% reduction in errors, improved accuracy, and a streamlined reconciliation process that reduced manual effort.
                  </p>
                </div>
              </div>

              {/* Second Experience */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  Driving Adoption: Ensuring Clients Were Ready for Change
                </h4>

                <div className="space-y-4 text-gray-700">
                  <p className="text-sm sm:text-base">
                    No process improvement is successful unless people adopt it. One of the most overlooked challenges in process transformation is operational readiness—ensuring that users not only understand the new system but feel confident using it.
                  </p>

                  <div className="pl-4 border-l-2 border-purple-200 space-y-3">
                    <p className="text-sm sm:text-base font-medium">
                      To bridge this gap, I led client training sessions focusing on:
                    </p>
                    <p className="text-sm sm:text-base">
                      System Workflows – Educating teams on the new solutions.
                    </p>
                    <p className="text-sm sm:text-base">
                      Result Monitoring – Teaching teams how to track KPIs and identify anomalies early.
                    </p>
                    <p className="text-sm sm:text-base">
                      Issue Resolution – Empowering users with troubleshooting guides and escalation frameworks.
                    </p>
                  </div>

                  <p className="text-sm sm:text-base">
                    The outcome? Seamless implementation, faster user adoption, and reduced dependency on support teams.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 