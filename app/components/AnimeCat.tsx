"use client";

import { useEffect, useState } from "react";

export default function AnimeCat() {
  const [blink, setBlink] = useState(false);
  const [heartBeat, setHeartBeat] = useState(false);

  useEffect(() => {
    // Random blinking animation
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3000 + Math.random() * 2000);

    // Heart beat animation trigger
    const heartInterval = setInterval(() => {
      setHeartBeat(true);
      setTimeout(() => setHeartBeat(false), 1200);
    }, 4000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(heartInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <div className="relative">
        {/* Floating heart */}
        <div
          className={`absolute -right-2 -top-8 text-2xl transition-all duration-300 ${
            heartBeat ? "animate-heart-beat opacity-100" : "opacity-0"
          }`}
        >
          💕
        </div>

        {/* Cat SVG */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          {/* Shadow */}
          <ellipse cx="60" cy="105" rx="35" ry="8" fill="#2d1b2e" opacity="0.2" />

          {/* Tail */}
          <path
            d="M 85 75 Q 100 70 105 60 Q 108 50 105 45"
            stroke="#8b2942"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            className="origin-[85%_75%]"
            style={{
              animation: "tail-wag 2s ease-in-out infinite",
            }}
          />
          <path
            d="M 85 75 Q 100 70 105 60 Q 108 50 105 45"
            stroke="#c45c7a"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            className="origin-[85%_75%]"
            style={{
              animation: "tail-wag 2s ease-in-out infinite",
            }}
          />

          {/* Body */}
          <ellipse cx="60" cy="75" rx="28" ry="25" fill="#d4a574" />
          <ellipse cx="60" cy="75" rx="20" ry="18" fill="#f8e8ec" />

          {/* Left Ear */}
          <path
            d="M 30 35 L 20 10 L 40 30 Z"
            fill="#c45c7a"
            stroke="#8b2942"
            strokeWidth="2"
          />
          <path d="M 28 28 L 24 16 L 35 28 Z" fill="#fdf6f8" />

          {/* Right Ear */}
          <path
            d="M 70 35 L 80 10 L 60 30 Z"
            fill="#c45c7a"
            stroke="#8b2942"
            strokeWidth="2"
          />
          <path d="M 72 28 L 76 16 L 65 28 Z" fill="#fdf6f8" />

          {/* Head */}
          <circle cx="50" cy="45" r="22" fill="#d4a574" />
          <circle cx="50" cy="48" r="18" fill="#f8e8ec" />

          {/* Right cheek */}
          <circle cx="68" cy="50" r="16" fill="#d4a574" />
          <circle cx="70" cy="52" r="13" fill="#f8e8ec" />

          {/* Blush marks */}
          <ellipse cx="38" cy="52" rx="6" ry="4" fill="#c45c7a" opacity="0.4" />
          <ellipse cx="75" cy="54" rx="6" ry="4" fill="#c45c7a" opacity="0.4" />

          {/* Left Eye */}
          <g>
            {blink ? (
              <path
                d="M 38 46 Q 42 48 46 46"
                stroke="#2d1b2e"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            ) : (
              <>
                <ellipse cx="42" cy="46" rx="5" ry="7" fill="#2d1b2e" />
                <circle cx="43" cy="44" r="2" fill="white" />
                <circle cx="41" cy="48" r="1" fill="white" opacity="0.6" />
              </>
            )}
          </g>

          {/* Right Eye */}
          <g>
            {blink ? (
              <path
                d="M 60 48 Q 64 50 68 48"
                stroke="#2d1b2e"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            ) : (
              <>
                <ellipse cx="64" cy="48" rx="5" ry="7" fill="#2d1b2e" />
                <circle cx="65" cy="46" r="2" fill="white" />
                <circle cx="63" cy="50" r="1" fill="white" opacity="0.6" />
              </>
            )}
          </g>

          {/* Nose */}
          <path d="M 53 54 L 51 56 L 55 56 Z" fill="#8b2942" />

          {/* Mouth */}
          <path
            d="M 53 56 Q 48 60 44 58"
            stroke="#8b2942"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 53 56 Q 58 59 62 57"
            stroke="#8b2942"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Whiskers */}
          <line
            x1="32"
            y1="50"
            x2="18"
            y2="48"
            stroke="#8b2942"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="32"
            y1="54"
            x2="18"
            y2="56"
            stroke="#8b2942"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="78"
            y1="52"
            x2="92"
            y2="50"
            stroke="#8b2942"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="78"
            y1="56"
            x2="92"
            y2="58"
            stroke="#8b2942"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Front Paws */}
          <ellipse cx="50" cy="95" rx="8" ry="10" fill="#d4a574" />
          <ellipse cx="70" cy="95" rx="8" ry="10" fill="#d4a574" />
          <ellipse cx="50" cy="96" rx="6" ry="7" fill="#f8e8ec" />
          <ellipse cx="70" cy="96" rx="6" ry="7" fill="#f8e8ec" />

          {/* Paw pads */}
          <circle cx="50" cy="98" r="2" fill="#c45c7a" opacity="0.5" />
          <circle cx="70" cy="98" r="2" fill="#c45c7a" opacity="0.5" />
        </svg>

        {/* Decorative sparkles */}
        <span
          className="absolute -left-3 top-8 text-lg opacity-60"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          ✨
        </span>
        <span
          className="absolute -right-1 top-16 text-sm opacity-60"
          style={{ animation: "float 3s ease-in-out 1s infinite" }}
        >
          ✨
        </span>
      </div>
    </div>
  );
}
