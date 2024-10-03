import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className={`transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center bg-[#5a4bb0] text-white px-7 py-3 rounded-[6px] shadow-lg transform rotate-[-3deg]"
          style={{
            background: '#5a4bb0',
            color: '#fff',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
            transform: 'rotate(-3deg)',
            clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
          }}
        >
          <FaChevronUp className="text-[1.5rem]" />
        </button>
      </div>
    </div>
  );
};

export default BackToTop;
