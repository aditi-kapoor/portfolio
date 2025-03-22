import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollIndicator = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
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
    const checkVisibility = () => {
      const experienceTitle = document.getElementById('experience-title');
      if (experienceTitle) {
        const rect = experienceTitle.getBoundingClientRect();
        const buffer = 150; // Increased buffer for better visibility
        setIsVisible(rect.top > (window.innerHeight - buffer));
      }
    };

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

    window.addEventListener('scroll', checkVisibility);
    startAnimation();
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [controls, isVisible]);


  // useEffect(() => {
  //   if (!isMobile || hasScrolled) return;
  
  //   let scrollCount = 0;
  //   let intervalId;
  
  //   const performScrollPreview = () => {
  //     if (scrollCount >= 2) return; // Limit to two cycles
  
  //     setTimeout(() => {
  //       const experienceTitle = document.getElementById('experience-title');
  //       if (!experienceTitle) return;
  
  //       const titleRect = experienceTitle.getBoundingClientRect();
  //       const targetScroll = window.scrollY + titleRect.top - 700; // Scroll just to show the title
  
  //       console.log(" window.scrollY: "+ window.scrollY+"; titleRect.top: "+titleRect.top);

  //       window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  
  //       setTimeout(() => {
  //         window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll back to home
  //         scrollCount++;
  //       }, 2000); // Stay at experience title for 2 seconds before scrolling back
  //     }, 2000); // Initial delay before first scroll
  //   };
  
  //   // Start the preview twice
  //   performScrollPreview();
  //   setTimeout(performScrollPreview, 5000); // Repeat once after 5s
  
  //   // Restart preview every 30s unless the user navigates
  //   intervalId = setInterval(() => {
  //     if (scrollCount >= 2) {
  //       scrollCount = 0;
  //       performScrollPreview();
  //       setTimeout(performScrollPreview, 5000); // Repeat once more
  //     }
  //   }, 30000);
  
  //   return () => clearInterval(intervalId); // Clean up on unmount
  // }, [hasScrolled, isMobile]);

  useEffect(() => {
    if (!isMobile || hasScrolled) return;
  
    let scrollCount = 0;
    let intervalId;
  
    const performScrollPreview = () => {
      if (scrollCount >= 2) return; // Limit to two cycles
  
      setTimeout(() => {
        const experienceTitle = document.getElementById('experience-title');
        if (!experienceTitle) return;
  
        const titleRect = experienceTitle.getBoundingClientRect();
        //const targetScroll = window.scrollY + titleRect.top - 700; // Scroll just to show the title
        const targetScroll = 150;
  
        console.log(" window.scrollY: "+ window.scrollY+"; titleRect.top: "+titleRect.top+"; targetScroll: "+targetScroll);
  
        // Apply the bounce effect (scroll down a little, then back up)
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  
        setTimeout(() => {
          window.scrollTo({ top: targetScroll - 200, behavior: 'smooth' }); // Move slightly up
          console.log("A targetScroll: "+(targetScroll-200));
        }, 300); 
  
        setTimeout(() => {
          window.scrollTo({ top: targetScroll, behavior: 'smooth' }); // Move back down
          console.log("B targetScroll: "+(targetScroll));
        }, 1000); 
  
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll back to home
          scrollCount++;
        }, 1000); // Stay at experience title for 1 seconds before scrolling back
      }, 2000); // Initial delay before first scroll
    };
  
    // Start the preview twice
    performScrollPreview();
    setTimeout(performScrollPreview, 2000); // Repeat once after 2s
  
    return () => clearInterval(intervalId); // Clean up on unmount
  }, [hasScrolled, isMobile]);
  

  if (!isVisible || !isMobile) return null;

  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-50">
      <motion.div animate={controls} className="text-white/80">
        <FaChevronUp size={20} />
      </motion.div>
      <motion.div animate={controls} className="text-white/80 -mt-1">
        <FaChevronUp size={20} />
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
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
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;