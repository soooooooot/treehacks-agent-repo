import React, { useState, useEffect } from 'react';

/**
 * BackToTop Component
 * 
 * A fixed-position button that appears when the user scrolls down more than 300px.
 * Clicking the button smoothly scrolls the page back to the top.
 * 
 * Features:
 * - Automatic show/hide based on scroll position
 * - Smooth scroll animation
 * - Accessible with ARIA labels
 * - Responsive hover effects
 * - Clean, minimal styling
 */
const BackToTop: React.FC = () => {
  // State to track whether the button should be visible
  const [isVisible, setIsVisible] = useState<boolean>(false);

  /**
   * Toggle button visibility based on scroll position
   * Shows button when user scrolls down more than 300px
   */
  const toggleVisibility = (): void => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Smoothly scroll to the top of the page
   */
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Set up scroll event listener on component mount
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <span aria-hidden="true">↑</span>
        </button>
      )}

      <style jsx>{`
        .back-to-top {
          /* Positioning */
          position: fixed;
          bottom: 40px;
          right: 40px;
          z-index: 1000;

          /* Size and shape */
          width: 50px;
          height: 50px;
          border-radius: 50%;

          /* Visual styling */
          background-color: #007bff;
          color: white;
          border: none;
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
          cursor: pointer;

          /* Typography */
          font-size: 24px;
          font-weight: bold;
          line-height: 1;

          /* Flexbox for centering */
          display: flex;
          align-items: center;
          justify-content: center;

          /* Smooth transitions */
          transition: all 0.3s ease-in-out;

          /* Remove default button styles */
          outline: none;
        }

        .back-to-top:hover {
          /* Hover effects */
          background-color: #0056b3;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 123, 255, 0.4);
        }

        .back-to-top:active {
          /* Click effect */
          transform: translateY(-1px);
          box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
        }

        .back-to-top:focus-visible {
          /* Accessibility: visible focus indicator for keyboard navigation */
          outline: 3px solid #80bdff;
          outline-offset: 3px;
        }

        /* Animation for button appearance */
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

        .back-to-top {
          animation: fadeIn 0.3s ease-in-out;
        }

        /* Responsive design for smaller screens */
        @media (max-width: 768px) {
          .back-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default BackToTop;
