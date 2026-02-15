"use client";

import { useState, useCallback, useEffect, useMemo } from "react";

const VALENTINES = [
  "You make my heart skip a beat",
  "Roses are red, violets are blue, you're the best thing that ever happened to me",
  "I'm so lucky to have you",
  "You're my favorite person",
  "Forever yours",
  "Be mine?",
  "You're my sunshine",
  "You had me at hello",
  "XOXO",
  "My heart belongs to you",
  "You're my cupid",
  "I love you more than coffee",
  "You're my favorite notification",
  "You make my world go round",
  "You're the sweetest",
  "I'm yours",
  "You're a keeper",
  "You're my happy place",
  "You're my favorite adventure",
  "You light up my life",
  "You're my dream come true",
  "You're my person",
  "You're my favorite human",
  "You're my forever",
  "You're my favorite mistake",
  "You're my favorite everything",
  "You're my favorite kind of chaos",
  "You're my favorite distraction",
  "You're my favorite reason to smile",
  "You're my favorite person to annoy",
];

const HEART_EMOJIS = ["💕", "💖", "💗", "💓", "💝", "💘", "💞", "❤️", "💜", "💗"];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPosition() {
  return {
    x: Math.random() * 70 + 15,
    y: Math.random() * 60 + 10,
    rotation: (Math.random() - 0.5) * 20,
    delay: Math.random() * 300,
  };
}

export default function Home() {
  const [popups, setPopups] = useState<Array<{
    id: number;
    message: string;
    emoji: string;
    x: number;
    y: number;
    rotation: number;
    delay: number;
  }>>([]);
  const [nextId, setNextId] = useState(0);

  const addPopup = useCallback(() => {
    const pos = getRandomPosition();
    const id = nextId;
    setNextId((n) => n + 1);
    setPopups((prev) => [
      ...prev,
      {
        id,
        message: randomItem(VALENTINES),
        emoji: randomItem(HEART_EMOJIS),
        x: pos.x,
        y: pos.y,
        rotation: pos.rotation,
        delay: pos.delay,
      },
    ]);
  }, [nextId]);

  const removePopup = useCallback((id: number) => {
    setPopups((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        addPopup();
      }
    },
    [addPopup]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("[data-popup]")) return;
    addPopup();
  };

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        left: 10 + i * 8,
        top: 15 + (i % 5) * 18,
        emoji: HEART_EMOJIS[i % HEART_EMOJIS.length],
        duration: 4 + (i % 3),
        delay: i * 0.3,
      })),
    []
  );

  return (
    <main
      className="relative min-h-screen cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      {/* Valentine's Day Banner */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 overflow-hidden">
        <div className="relative bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 py-4 px-6 shadow-lg">
          {/* Decorative hearts */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl animate-heart-beat opacity-90">
            💖
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl animate-heart-beat opacity-90" style={{ animationDelay: '0.3s' }}>
            💕
          </div>
          <div className="absolute left-16 top-1/2 -translate-y-1/2 text-xl opacity-70 animate-float">
            💝
          </div>
          <div className="absolute right-16 top-1/2 -translate-y-1/2 text-xl opacity-70 animate-float" style={{ animationDelay: '0.5s' }}>
            💗
          </div>
          
          {/* Banner text */}
          <h2 
            className="text-center text-4xl md:text-5xl font-[family-name:var(--font-display)] text-white drop-shadow-lg animate-pulse-glow"
            style={{ fontFamily: 'var(--font-display)', textShadow: '2px 2px 4px rgba(139, 41, 66, 0.3)' }}
          >
            Happy Valentine's Day! 💘
          </h2>
          
          {/* Sparkle effects */}
          <div className="absolute top-2 left-1/4 text-yellow-200 text-sm animate-float">✨</div>
          <div className="absolute bottom-2 right-1/3 text-yellow-200 text-sm animate-float" style={{ animationDelay: '0.8s' }}>✨</div>
        </div>
        
        {/* Bottom border decoration */}
        <div className="h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>
      </div>

      {/* Floating hearts background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animation: `float ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
            }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>

      {/* Hero area */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-8 pt-28">
        <h1
          className="mb-4 text-6xl font-[family-name:var(--font-display)] text-[#8b2942] md:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Random Valentines
        </h1>
        <p className="mb-12 text-center text-xl text-[#c45c7a] md:text-2xl">
          Click anywhere or press space for a valentine
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addPopup();
          }}
          className="rounded-full bg-[#8b2942] px-8 py-4 text-white font-medium transition-all hover:bg-[#c45c7a] hover:scale-105 active:scale-95"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Send a Valentine
        </button>
      </div>

      {/* Popup cards */}
      {popups.map((popup) => (
        <div
          key={popup.id}
          data-popup
          className="absolute z-50"
          style={{
            left: `${popup.x}%`,
            top: `${popup.y}%`,
            transform: `translate(-50%, -50%) rotate(${popup.rotation}deg)`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="animate-pop-in rounded-2xl border-2 border-[#d4a574]/50 bg-[#fdf6f8] p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              animationDelay: `${popup.delay}ms`,
              boxShadow: "0 10px 40px rgba(139, 41, 66, 0.2)",
            }}
          >
          <button
            onClick={() => removePopup(popup.id)}
            className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#8b2942] text-white text-sm hover:bg-[#c45c7a]"
          >
            ×
          </button>
          <p
            className="max-w-[280px] text-center text-xl text-[#2d1b2e]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {popup.message}
          </p>
          <span className="mt-2 block text-center text-2xl">
            {popup.emoji}
          </span>
          </div>
        </div>
      ))}
    </main>
  );
}
