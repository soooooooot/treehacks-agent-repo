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

      {/* Prominent Interaction Company Banner */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-[#8b2942] via-[#c45c7a] to-[#8b2942] py-4 px-6 shadow-lg animate-pulse-glow">
        <div className="mx-auto max-w-6xl">
          <h2 
            className="text-center text-3xl md:text-5xl font-bold text-white tracking-wide animate-heart-beat"
            style={{ 
              textShadow: "0 2px 10px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.4)",
              fontFamily: "var(--font-display)"
            }}
          >
            ✨ We love Interaction Company ✨
          </h2>
        </div>
      </div>

      {/* Hero area */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-8 pt-32">
        <div className="mb-8 text-center">
          <div className="mb-2 inline-block rounded-full bg-[#8b2942]/10 px-6 py-2 border-2 border-[#8b2942]/30">
            <span className="text-sm md:text-base font-semibold text-[#8b2942] tracking-wider uppercase">
              TreeHacks 2026
            </span>
          </div>
        </div>
        
        <h1
          className="mb-2 text-5xl font-bold text-[#8b2942] md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ian's Personal Site
        </h1>
        
        <div className="mb-8 flex items-center gap-3">
          <span className="text-3xl animate-heart-beat">💖</span>
          <p 
            className="text-2xl md:text-3xl text-[#c45c7a] font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Fast-paced. Solid. Creative.
          </p>
          <span className="text-3xl animate-heart-beat" style={{ animationDelay: "0.3s" }}>💕</span>
        </div>

        <p className="mb-12 max-w-2xl text-center text-lg md:text-xl text-[#8b2942]/80 leading-relaxed">
          Click anywhere or press space for a valentine message
        </p>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            addPopup();
          }}
          className="rounded-full bg-[#8b2942] px-10 py-5 text-lg text-white font-semibold transition-all hover:bg-[#c45c7a] hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Send a Valentine 💌
        </button>

        {/* Footer signature */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#8b2942]/60 italic">
            Built with 💗 for TreeHacks by Ian
          </p>
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
            className="animate-pop-in rounded-2xl border-2 border-[#d4a574]/50 bg-[#fdf6f8] p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              animationDelay: `${popup.delay}ms`,
              boxShadow: "0 10px 40px rgba(139, 41, 66, 0.2)",
            }}
          >
          <button
            onClick={() => removePopup(popup.id)}
            className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#8b2942] text-white text-sm hover:bg-[#c45c7a] transition-colors"
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
