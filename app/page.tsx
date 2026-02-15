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
      className="relative min-h-screen cursor-pointer overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#FFE4E1] to-[#FFC0CB]"
      onClick={handleClick}
    >
      {/* Floating hearts background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-30"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animation: `float ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
              filter: 'hue-rotate(320deg) saturate(1.5)',
            }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>

      {/* Hero area */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-8">
        <h1
          className="mb-4 text-6xl font-[family-name:var(--font-display)] md:text-8xl pink-gradient-text"
          style={{ 
            fontFamily: "var(--font-display)",
            background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 50%, #E91E63 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Random Valentines
        </h1>
        <p className="mb-12 text-center text-xl md:text-2xl text-[#FF69B4] font-semibold">
          Click anywhere or press space for a valentine
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addPopup();
          }}
          className="rounded-full bg-gradient-to-r from-[#FF1493] via-[#FF69B4] to-[#E91E63] px-8 py-4 text-white font-bold text-lg transition-all hover:scale-110 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            fontFamily: "var(--font-body)",
            boxShadow: "0 4px 20px rgba(255, 20, 147, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)",
          }}
        >
          Send a Valentine 💖
        </button>
        
        {/* Additional decorative elements */}
        <div className="mt-8 flex gap-4">
          <div className="h-3 w-3 rounded-full bg-[#FF1493] animate-pulse"></div>
          <div className="h-3 w-3 rounded-full bg-[#FF69B4] animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-3 w-3 rounded-full bg-[#FFB6C1] animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
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
            className="animate-pop-in rounded-2xl border-4 bg-gradient-to-br from-[#FFF0F5] to-[#FFE4E1] p-6 transition-all hover:scale-105"
            style={{
              animationDelay: `${popup.delay}ms`,
              boxShadow: "0 10px 40px rgba(255, 20, 147, 0.5), 0 0 20px rgba(255, 105, 180, 0.4), inset 0 0 20px rgba(255, 192, 203, 0.2)",
              borderColor: "#FF69B4",
              borderImage: "linear-gradient(135deg, #FF1493, #FF69B4, #FFB6C1) 1",
            }}
          >
          <button
            onClick={() => removePopup(popup.id)}
            className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF1493] to-[#E91E63] text-white text-xl font-bold hover:scale-110 transition-transform shadow-lg"
            style={{
              boxShadow: "0 2px 10px rgba(255, 20, 147, 0.6)",
            }}
          >
            ×
          </button>
          <p
            className="max-w-[280px] text-center text-xl font-semibold"
            style={{ 
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg, #C71585 0%, #DB7093 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {popup.message}
          </p>
          <span className="mt-2 block text-center text-3xl animate-heart-beat">
            {popup.emoji}
          </span>
          </div>
        </div>
      ))}

      {/* Pink decorative corners */}
      <div className="fixed top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#FF69B4] to-transparent opacity-30 rounded-br-full pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF1493] to-transparent opacity-30 rounded-bl-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#FFB6C1] to-transparent opacity-30 rounded-tr-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#E91E63] to-transparent opacity-30 rounded-tl-full pointer-events-none"></div>
    </main>
  );
}
