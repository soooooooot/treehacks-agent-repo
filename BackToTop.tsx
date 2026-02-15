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
 * - Clean, modern styling
 */
const BackToTop: React.FC = () => {
  // State to track whether the button should be visible
  const [isVisible, setIsVisible] = useState<boolean>(false);

  /**
   * Effect hook to add/remove scroll event listener
   * Monitors scroll position and updates button visibility
   */
  useEffect(() => {
    // Function to check scroll position and update visibility
    const toggleVisibility = (): void => {
      // Show button when user scrolls down more than 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array means this runs once on mount

  /**
   * Scrolls the page smoothly to the top
   */
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling animation
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Scroll back to top"
          title="Back to top"
          type="button"
        >
          {/* Upward arrow icon */}
          <span aria-hidden="true">↑</span>
        </button>
      )}

      {/* Inline styles for the component */}
      <style>{`
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

          /* Styling */
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
        }

        .back-to-top:hover {
          /* Hover effects */
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .back-to-top:active {
          /* Click feedback */
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .back-to-top:focus-visible {
          /* Keyboard focus indicator for accessibility */
          outline: 3px solid #667eea;
          outline-offset: 3px;
        }

        /* Fade-in animation when button appears */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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

        /* Reduced motion for users who prefer it (accessibility) */
        @media (prefers-reduced-motion: reduce) {
          .back-to-top {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default BackToTop;
