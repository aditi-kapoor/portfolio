import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollIndicator = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize and initial mobile check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Show chevron only for first 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    const startAnimation = async () => {
      while (true) {
        if (isVisible) {
          await controls.start({
            y: [0, -8, 0],
            transition: {
              duration: 1,
              ease: "easeInOut"
            }
          });
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        await new Promise(resolve => setTimeout(resolve, isVisible ? 0 : 1000));
      }
    };

    startAnimation();

    return () => {
      clearTimeout(timer);
    };
  }, [controls, isVisible]);

  if (!isVisible || !isMobile) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-50">
      <motion.div animate={controls} className="text-white/80">
        <FaChevronUp size={24} />
      </motion.div>
      <motion.div animate={controls} className="text-white/80 -mt-1">
        <FaChevronUp size={24} />
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 100; // Adjust this value to change the scroll offset
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-[100dvh] flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.white/10)_1px,transparent_0)] bg-[size:20px_20px] opacity-20"></div>
      <div className="container mx-auto px-4 relative py-12 sm:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <div className="space-y-1">
                <h1 className="text-white/90">
                  From Automating Processes to
                  <br className="hidden sm:block" />
                  Driving Business Impact:
                  <span className="block mt-1 text-white">
                    My Journey into Product Thinking
                  </span>
                </h1>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-white/40 rounded-full"></div>
                    <h2 className="text-white/95">
                      Where It All Started
                    </h2>
                  </div>
                  <p className="text-white/80">
                    I started as an automation specialist, solving technical problems. But over the years, I found myself asking deeper questions—not just how to automate but why things should be done a certain way. That curiosity led me toward business strategy, stakeholder collaboration, and decision-making. Today, I help businesses optimize processes, align technology with business goals, and create meaningful impact.
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#connect"
                  onClick={(e) => handleScroll(e, 'connect')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Get in Touch
                </a>
                <a 
                  href="#experience"
                  onClick={(e) => handleScroll(e, 'experience')}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all text-center backdrop-blur-sm"
                >
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
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center backdrop-blur-sm"
            >
              <span className="text-4xl sm:text-6xl text-white font-bold">AK</span>
            </motion.div>
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </section>
  );
};