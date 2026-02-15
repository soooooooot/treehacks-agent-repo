"use client";

import { useEffect, useState } from "react";

export default function AnimeCat() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [earWiggle, setEarWiggle] = useState(false);

  useEffect(() => {
    // Random blinking animation
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000 + Math.random() * 2000);

    // Random ear wiggle
    const wiggleInterval = setInterval(() => {
      setEarWiggle(true);
      setTimeout(() => setEarWiggle(false), 500);
    }, 5000 + Math.random() * 3000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(wiggleInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 pointer-events-none animate-drift md:bottom-6 md:right-6">
      <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-lg"
        >
          {/* Left ear */}
          <g
            className={`origin-[65px_60px] transition-transform duration-300 ${
              earWiggle ? "rotate-[-8deg]" : ""
            }`}
          >
            <path
              d="M50 60 L65 25 L80 55 Z"
              fill="#d4a574"
              stroke="#8b2942"
              strokeWidth="2"
            />
            <path
              d="M58 52 L65 35 L72 50 Z"
              fill="#f8e8ec"
            />
          </g>

          {/* Right ear */}
          <g
            className={`origin-[135px_60px] transition-transform duration-300 ${
              earWiggle ? "rotate-[8deg]" : ""
            }`}
          >
            <path
              d="M120 55 L135 25 L150 60 Z"
              fill="#d4a574"
              stroke="#8b2942"
              strokeWidth="2"
            />
            <path
              d="M128 50 L135 35 L142 52 Z"
              fill="#f8e8ec"
            />
          </g>

          {/* Head */}
          <ellipse
            cx="100"
            cy="100"
            rx="55"
            ry="60"
            fill="#d4a574"
            stroke="#8b2942"
            strokeWidth="2.5"
          />

          {/* Face white patch */}
          <ellipse
            cx="100"
            cy="110"
            rx="42"
            ry="45"
            fill="#fdf6f8"
          />

          {/* Pink cheek blushes */}
          <ellipse
            cx="65"
            cy="115"
            rx="12"
            ry="8"
            fill="#c45c7a"
            opacity="0.5"
          />
          <ellipse
            cx="135"
            cy="115"
            rx="12"
            ry="8"
            fill="#c45c7a"
            opacity="0.5"
          />

          {/* Left eye */}
          <g>
            <ellipse
              cx="80"
              cy="95"
              rx="12"
              ry={isBlinking ? "2" : "16"}
              fill="#2d1b2e"
              className="transition-all duration-150"
            />
            {!isBlinking && (
              <>
                <ellipse
                  cx="78"
                  cy="90"
                  rx="5"
                  ry="6"
                  fill="white"
                  opacity="0.8"
                />
                <circle
                  cx="83"
                  cy="98"
                  r="2"
                  fill="white"
                  opacity="0.6"
                />
              </>
            )}
          </g>

          {/* Right eye */}
          <g>
            <ellipse
              cx="120"
              cy="95"
              rx="12"
              ry={isBlinking ? "2" : "16"}
              fill="#2d1b2e"
              className="transition-all duration-150"
            />
            {!isBlinking && (
              <>
                <ellipse
                  cx="118"
                  cy="90"
                  rx="5"
                  ry="6"
                  fill="white"
                  opacity="0.8"
                />
                <circle
                  cx="123"
                  cy="98"
                  r="2"
                  fill="white"
                  opacity="0.6"
                />
              </>
            )}
          </g>

          {/* Nose */}
          <path
            d="M100 110 L95 118 L100 120 L105 118 Z"
            fill="#8b2942"
          />

          {/* Mouth - cute smile */}
          <path
            d="M100 120 Q90 128 85 125"
            stroke="#8b2942"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M100 120 Q110 128 115 125"
            stroke="#8b2942"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Whiskers - left */}
          <line
            x1="50"
            y1="105"
            x2="30"
            y2="100"
            stroke="#2d1b2e"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="50"
            y1="112"
            x2="28"
            y2="112"
            stroke="#2d1b2e"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="52"
            y1="119"
            x2="32"
            y2="124"
            stroke="#2d1b2e"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Whiskers - right */}
          <line
            x1="150"
            y1="105"
            x2="170"
            y2="100"
            stroke="#2d1b2e"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="150"
            y1="112"
            x2="172"
            y2="112"
            stroke="#2d1b2e"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="148"
            y1="119"
            x2="168"
            y2="124"
            stroke="#2d1b2e"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Little heart on forehead */}
          <g className="animate-heart-beat origin-center" style={{ transformOrigin: "100px 75px" }}>
            <path
              d="M100 78 C100 75 102 73 104 73 C106 73 107 74 107 76 C107 74 108 73 110 73 C112 73 114 75 114 78 C114 82 107 87 107 87 C107 87 100 82 100 78 Z"
              fill="#c45c7a"
              opacity="0.8"
            />
          </g>
        </svg>
        
        {/* Floating hearts around cat */}
        <div className="absolute -top-8 -left-4 text-xl opacity-70 animate-float" style={{ animationDelay: "0s" }}>
          💕
        </div>
        <div className="absolute -top-6 -right-2 text-lg opacity-60 animate-float" style={{ animationDelay: "0.5s" }}>
          💖
        </div>
        <div className="absolute top-2 -left-6 text-base opacity-50 animate-float" style={{ animationDelay: "1s" }}>
          ✨
        </div>
      </div>
    </div>
  );
}
