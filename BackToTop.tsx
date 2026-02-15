import React, { useState, useEffect } from 'react';

/**
 * BackToTop Component
 * 
 * A floating button that appears when the user scrolls down more than 300px.
 * Clicking the button smoothly scrolls the page back to the top.
 * 
 * Features:
 * - Auto-hide/show based on scroll position
 * - Smooth scroll animation
 * - Accessible with ARIA labels
 * - Responsive hover effects
 * - Fixed positioning in bottom-right corner
 */
const BackToTop: React.FC = () => {
  // State to track whether the button should be visible
  const [isVisible, setIsVisible] = useState<boolean>(false);

  /**
   * Handles scroll events to determine button visibility
   * Shows button when user scrolls down more than 300px
   */
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Smoothly scrolls the page back to the top
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Set up scroll event listener on component mount
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top-button"
          aria-label="Scroll back to top"
          title="Back to top"
          type="button"
        >
          <span aria-hidden="true">↑</span>
        </button>
      )}

      <style>{`
        /* Back to Top Button Styles */
        .back-to-top-button {
          /* Positioning */
          position: fixed;
          bottom: 40px;
          right: 40px;
          z-index: 1000;

          /* Size and shape */
          width: 50px;
          height: 50px;
          border-radius: 50%;

          /* Colors and borders */
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

          /* Typography */
          font-size: 24px;
          font-weight: bold;
          line-height: 1;

          /* Cursor and interaction */
          cursor: pointer;
          outline: none;

          /* Animation */
          transition: all 0.3s ease-in-out;
          animation: fadeIn 0.3s ease-in-out;

          /* Flexbox for centering content */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Hover effect */
        .back-to-top-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }

        /* Active/Click effect */
        .back-to-top-button:active {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        /* Focus effect for accessibility */
        .back-to-top-button:focus {
          outline: 3px solid #667eea;
          outline-offset: 3px;
        }

        /* Fade-in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .back-to-top-button {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 20px;
          }
        }

        /* Reduced motion preference support */
        @media (prefers-reduced-motion: reduce) {
          .back-to-top-button {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default BackToTop;
