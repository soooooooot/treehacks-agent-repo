"use client";

import { useState } from "react";

export default function ValentineBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-[#ff69b4] via-[#ff85c1] to-[#ff69b4] overflow-hidden shadow-lg">
      {/* Animated floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-2 left-[10%] text-2xl animate-float opacity-60" style={{ animationDelay: '0s' }}>💕</span>
        <span className="absolute top-4 left-[25%] text-xl animate-float opacity-50" style={{ animationDelay: '0.3s' }}>💖</span>
        <span className="absolute top-3 left-[40%] text-2xl animate-float opacity-60" style={{ animationDelay: '0.6s' }}>💗</span>
        <span className="absolute top-2 left-[55%] text-xl animate-float opacity-50" style={{ animationDelay: '0.9s' }}>💝</span>
        <span className="absolute top-4 left-[70%] text-2xl animate-float opacity-60" style={{ animationDelay: '1.2s' }}>💘</span>
        <span className="absolute top-3 left-[85%] text-xl animate-float opacity-50" style={{ animationDelay: '1.5s' }}>💞</span>
        <span className="absolute top-5 left-[5%] text-lg animate-float opacity-40" style={{ animationDelay: '0.4s' }}>❤️</span>
        <span className="absolute top-2 left-[95%] text-lg animate-float opacity-40" style={{ animationDelay: '1.8s' }}>💓</span>
      </div>

      {/* Main banner content */}
      <div className="relative z-10 flex items-center justify-center py-4 px-6">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-3xl md:text-4xl animate-heart-beat">💖</span>
          <h2 
            className="text-3xl md:text-5xl font-[family-name:var(--font-display)] text-white drop-shadow-lg text-center"
            style={{ 
              fontFamily: "var(--font-display)",
              textShadow: "2px 2px 4px rgba(139, 41, 66, 0.4)"
            }}
          >
            Happy Valentine's Day
          </h2>
          <span className="text-3xl md:text-4xl animate-heart-beat" style={{ animationDelay: '0.6s' }}>💖</span>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xl transition-all hover:scale-110"
          aria-label="Close banner"
        >
          ×
        </button>
      </div>

      {/* Decorative sparkle effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-[15%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 left-[30%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 left-[50%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-[70%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 left-[85%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
    </div>
  );
}
