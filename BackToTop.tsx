import React, { useState, useEffect } from 'react';

/**
 * BackToTop Component
 * 
 * A floating button that appears when the user scrolls down more than 300px.
 * Clicking the button smoothly scrolls the page back to the top.
 * 
 * Features:
 * - Scroll position tracking with visibility threshold
 * - Smooth scroll animation
 * - Fixed positioning in bottom-right corner
 * - Hover effects and transitions
 * - Full accessibility support
 */
const BackToTop: React.FC = () => {
  // State to track whether the button should be visible
  const [isVisible, setIsVisible] = useState<boolean>(false);

  /**
   * Toggles button visibility based on scroll position
   * Shows button when user scrolls down more than 300px
   */
  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Smoothly scrolls the page to the top
   * Uses the native scrollTo API with smooth behavior
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
          className="back-to-top"
          aria-label="Scroll back to top"
          title="Back to top"
          type="button"
        >
          <span aria-hidden="true">↑</span>
        </button>
      )}

      <style jsx>{`
        .back-to-top {
          /* Positioning */
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;

          /* Size and shape */
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;

          /* Visual styling */
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          cursor: pointer;

          /* Typography */
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 1;

          /* Layout */
          display: flex;
          align-items: center;
          justify-content: center;

          /* Transitions */
          transition: all 0.3s ease-in-out;
          opacity: 0;
          animation: fadeIn 0.3s ease-in-out forwards;
        }

        .back-to-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }

        .back-to-top:active {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .back-to-top:focus {
          outline: 3px solid #667eea;
          outline-offset: 2px;
        }

        .back-to-top:focus:not(:focus-visible) {
          outline: none;
        }

        .back-to-top:focus-visible {
          outline: 3px solid #667eea;
          outline-offset: 2px;
        }

        /* Fade in animation */
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
            width: 3rem;
            height: 3rem;
            bottom: 1.5rem;
            right: 1.5rem;
            font-size: 1.25rem;
          }
        }

        /* Reduced motion support for accessibility */
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
