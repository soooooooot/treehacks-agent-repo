"use client";

import { useState, useEffect, useRef } from "react";

interface Stat {
  id: string;
  label: string;
  icon: string;
  startValue: number;
  currentValue: number;
  incrementRange: [number, number]; // min and max increment per update
  suffix?: string;
  color: string;
  glowColor: string;
}

export default function TreeHacksStatsDashboard() {
  const [stats, setStats] = useState<Stat[]>([
    {
      id: "hackers",
      label: "Hackers Active",
      icon: "👨‍💻",
      startValue: 847,
      currentValue: 847,
      incrementRange: [1, 5],
      color: "#D2691E", // chocolate brown
      glowColor: "210, 105, 30",
    },
    {
      id: "code",
      label: "Lines of Code Written",
      icon: "💻",
      startValue: 52847,
      currentValue: 52847,
      incrementRange: [50, 250],
      color: "#FF6B35", // vibrant orange
      glowColor: "255, 107, 53",
    },
    {
      id: "pizzas",
      label: "Pizzas Consumed",
      icon: "🍕",
      startValue: 234,
      currentValue: 234,
      incrementRange: [1, 3],
      color: "#FF69B4", // hot pink
      glowColor: "255, 105, 180",
    },
  ]);

  // Periodically increment stats to simulate live activity
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          const [min, max] = stat.incrementRange;
          const increment = Math.floor(Math.random() * (max - min + 1)) + min;
          return {
            ...stat,
            currentValue: stat.currentValue + increment,
          };
        })
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div className="w-full py-12 px-4 bg-gradient-to-br from-[#2d1b2e] via-[#3d2b3e] to-[#2d1b2e]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#FF6B35] to-[#FF69B4] animate-gradient">
              TreeHacks 2026
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-[#FFB6C1]">
            <span className="animate-pulse">🌲</span>
            <p className="font-medium">Live Stats Dashboard</p>
            <span className="animate-pulse">🌲</span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00ff00] animate-pulse-fast"></span>
            <span className="text-sm text-[#00ff00] font-mono">LIVE</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
            />
          ))}
        </div>

        {/* Footer message */}
        <div className="mt-12 text-center">
          <p className="text-[#d4a574] text-lg animate-pulse-slow">
            ✨ Building the future, one line at a time ✨
          </p>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  stat: Stat;
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(stat.startValue);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  // Animate the counter when stat.currentValue changes
  useEffect(() => {
    const startValue = displayValue;
    const endValue = stat.currentValue;
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(
        startValue + (endValue - startValue) * easeProgress
      );

      setDisplayValue(value);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [stat.currentValue]);

  return (
    <div
      className="stat-card-enter relative group"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `radial-gradient(circle at center, rgba(${stat.glowColor}, 0.4), transparent 70%)`,
        }}
      />

      {/* Card content */}
      <div
        className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl"
        style={{
          borderColor: stat.color,
          boxShadow: `0 10px 40px rgba(${stat.glowColor}, 0.2)`,
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div
            className={`text-6xl transition-transform duration-300 ${
              isHovered ? "animate-bounce-subtle" : ""
            }`}
          >
            {stat.icon}
          </div>
        </div>

        {/* Value */}
        <div className="text-center mb-3">
          <div
            className="text-5xl md:text-6xl font-bold font-mono transition-all duration-300"
            style={{
              color: stat.color,
              textShadow: `0 0 20px rgba(${stat.glowColor}, 0.5)`,
            }}
          >
            {displayValue.toLocaleString()}
            {stat.suffix}
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#d4a574]">
            {stat.label}
          </p>
        </div>

        {/* Progress bar animation */}
        <div className="mt-6 h-1 bg-[#3d2b3e] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full animate-progress-bar"
            style={{
              background: `linear-gradient(90deg, ${stat.color}, transparent)`,
            }}
          />
        </div>

        {/* Corner decorations */}
        <div
          className="absolute top-2 right-2 w-3 h-3 rounded-full animate-pulse"
          style={{ backgroundColor: stat.color }}
        />
        <div
          className="absolute bottom-2 left-2 w-2 h-2 rounded-full animate-pulse"
          style={{
            backgroundColor: stat.color,
            animationDelay: "0.5s",
          }}
        />
      </div>
    </div>
  );
}
