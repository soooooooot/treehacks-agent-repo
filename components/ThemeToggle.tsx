'use client';

import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme-preference';

/**
 * ThemeToggle Component
 * 
 * A production-ready theme toggle component that switches between light and dark modes.
 * Features:
 * - Persists theme preference to localStorage
 * - Respects system color scheme preference on first load
 * - Smooth transitions and animations
 * - Fully accessible with ARIA attributes
 * - TypeScript type safety
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme: Theme = prefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
      applyTheme(systemTheme);
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a manual preference
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (!savedTheme) {
        const newTheme: Theme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [mounted]);

  /**
   * Apply theme to document and store preference
   */
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove old theme class
    root.classList.remove('light', 'dark');
    
    // Add new theme class
    root.classList.add(newTheme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        newTheme === 'dark' ? '#1a1a1a' : '#ffffff'
      );
    }
  };

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    
    setTheme(newTheme);
    applyTheme(newTheme);
    
    // Persist preference
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  // Prevent flash of incorrect theme on initial render
  if (!mounted) {
    return (
      <button
        className="theme-toggle"
        disabled
        aria-label="Toggle theme"
        style={{ opacity: 0 }}
      >
        <span className="theme-toggle-icon">
          <SunIcon />
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
    >
      <span className="theme-toggle-icon">
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </span>
      
      <style jsx>{`
        .theme-toggle {
          position: relative;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease-in-out;
          outline: none;
        }

        .theme-toggle:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        :global(.dark) .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .theme-toggle:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 2px;
        }

        .theme-toggle:active {
          transform: scale(0.95);
        }

        .theme-toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          transition: color 0.2s ease-in-out;
        }

        :global(.dark) .theme-toggle-icon {
          color: #fbbf24;
        }

        .theme-toggle-icon :global(svg) {
          width: 1.25rem;
          height: 1.25rem;
          animation: iconFadeIn 0.3s ease-in-out;
        }

        @keyframes iconFadeIn {
          from {
            opacity: 0;
            transform: rotate(-45deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        /* Smooth theme transition */
        :global(html) {
          transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        :global(*) {
          transition-property: background-color, border-color, color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 200ms;
        }
      `}</style>
    </button>
  );
}

/**
 * Sun icon for light mode
 */
function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
}

/**
 * Moon icon for dark mode
 */
function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
}
