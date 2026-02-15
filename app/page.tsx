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
      style={{ background: "linear-gradient(135deg, #E6E6FA 0%, #DCD0FF 50%, #B19CD9 100%)" }}
    >
      {/* Floating hearts background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart, i) => (
          <span
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              opacity: 0.25,
              color: i % 2 === 0 ? "#9370DB" : "#7B68EE",
              animation: `float ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
            }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>

      {/* Hero area */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-8">
        <h1
          className="mb-4 text-6xl font-[family-name:var(--font-display)] md:text-8xl"
          style={{ 
            fontFamily: "var(--font-display)",
            color: "#4B0082",
            textShadow: "2px 2px 4px rgba(75, 0, 130, 0.3)"
          }}
        >
          Random Valentines
        </h1>
        <p 
          className="mb-12 text-center text-xl md:text-2xl"
          style={{ color: "#6A5ACD" }}
        >
          Click anywhere or press space for a valentine
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addPopup();
          }}
          className="rounded-full px-8 py-4 font-medium transition-all hover:scale-105 active:scale-95"
          style={{ 
            fontFamily: "var(--font-body)",
            backgroundColor: "#6A5ACD",
            color: "#FFFFFF",
            boxShadow: "0 4px 15px rgba(106, 90, 205, 0.4)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#7B68EE";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(123, 104, 238, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#6A5ACD";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(106, 90, 205, 0.4)";
          }}
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
            className="animate-pop-in rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              animationDelay: `${popup.delay}ms`,
              backgroundColor: "#E6E6FA",
              border: "2px solid #B19CD9",
              boxShadow: "0 10px 40px rgba(106, 90, 205, 0.3)",
            }}
          >
          <button
            onClick={() => removePopup(popup.id)}
            className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors"
            style={{
              backgroundColor: "#6A5ACD",
              color: "#FFFFFF"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#7B68EE";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            ×
          </button>
          <p
            className="max-w-[280px] text-center text-xl"
            style={{ 
              fontFamily: "var(--font-display)",
              color: "#483D8B"
            }}
          >
            {popup.message}
          </p>
          <span 
            className="mt-2 block text-center text-2xl"
            style={{ filter: "hue-rotate(270deg)" }}
          >
            {popup.emoji}
          </span>
          </div>
        </div>
      ))}
    </main>
  );
}
