import React from 'react';

interface NavigationProps {
  scrollToTop: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrollToTop }) => {
  return (
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
  );
}; 