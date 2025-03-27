import React from 'react';

interface NavigationProps {
  scrollToTop: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrollToTop }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 100;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-start items-center">
          <button 
            onClick={scrollToTop}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text cursor-pointer hover:opacity-80 transition-opacity"
          >
            Aditi Kapoor
          </button>
        </div>
      </div>
    </nav>
  );
}; 