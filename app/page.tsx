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

const HEART_EMOJIS = ["💚", "💛", "🌿", "🍀", "🌱", "🌳", "🌲", "🌴", "🎋", "☘️"];

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
      className="relative min-h-screen cursor-pointer overflow-hidden bg-gradient-to-br from-[#c8e6c9] via-[#a5d6a7] to-[#81c784]"
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
              filter: "drop-shadow(0 2px 4px rgba(27, 94, 32, 0.3))",
            }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>

      {/* Hero area */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-8">
        <h1
          className="mb-4 text-6xl font-[family-name:var(--font-display)] text-[#1b5e20] drop-shadow-lg md:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Random Valentines
        </h1>
        <p className="mb-12 text-center text-xl text-[#2e7d32] drop-shadow-md md:text-2xl font-medium">
          Click anywhere or press space for a valentine
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addPopup();
          }}
          className="rounded-full bg-gradient-to-r from-[#2e7d32] to-[#388e3c] px-8 py-4 text-white font-semibold transition-all hover:from-[#1b5e20] hover:to-[#2e7d32] hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg border-2 border-[#1b5e20]"
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
            className="animate-pop-in rounded-2xl border-3 border-[#558b2f] bg-gradient-to-br from-[#f9fdf7] to-[#f1f8e9] p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:border-[#2e7d32]"
            style={{
              animationDelay: `${popup.delay}ms`,
              boxShadow: "0 10px 40px rgba(46, 125, 50, 0.3), 0 0 20px rgba(76, 175, 80, 0.2)",
              borderWidth: "3px",
            }}
          >
          <button
            onClick={() => removePopup(popup.id)}
            className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white text-sm font-bold hover:from-[#4caf50] hover:to-[#2e7d32] transition-all hover:scale-110 shadow-md border-2 border-[#f1f8e9]"
          >
            ×
          </button>
          <p
            className="max-w-[280px] text-center text-xl text-[#1b5e20] font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {popup.message}
          </p>
          <span className="mt-2 block text-center text-2xl drop-shadow-sm">
            {popup.emoji}
          </span>
          </div>
        </div>
      ))}
    </main>
  );
}
