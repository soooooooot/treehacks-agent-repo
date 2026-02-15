"use client";

import { useState, useEffect, useRef } from "react";

interface StatItem {
  id: string;
  label: string;
  icon: string;
  startValue: number;
  currentValue: number;
  increment: () => number;
  suffix?: string;
  color: string;
  glowColor: string;
}

export default function TreeHacksStatsDashboard() {
  const [stats, setStats] = useState<StatItem[]>([
    {
      id: "hackers",
      label: "Hackers Active",
      icon: "👨‍💻",
      startValue: 847,
      currentValue: 847,
      increment: () => Math.floor(Math.random() * 3), // 0-2 hackers
      color: "#d97706", // orange
      glowColor: "rgb(217, 119, 6)",
    },
    {
      id: "code",
      label: "Lines of Code Written",
      icon: "⚡",
      startValue: 52473,
      currentValue: 52473,
      increment: () => Math.floor(Math.random() * 150) + 50, // 50-200 lines
      suffix: "",
      color: "#ec4899", // pink
      glowColor: "rgb(236, 72, 153)",
    },
    {
      id: "pizzas",
      label: "Pizzas Consumed",
      icon: "🍕",
      startValue: 243,
      currentValue: 243,
      increment: () => Math.random() > 0.7 ? 1 : 0, // occasional pizza
      suffix: "",
      color: "#92400e", // brown
      glowColor: "rgb(146, 64, 14)",
    },
  ]);

  const hasAnimated = useRef(false);

  // Initial count-up animation
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          currentValue: Math.floor(
            stat.startValue * easeOutCubic(progress)
          ),
        }))
      );

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Periodic increments to simulate live activity
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          currentValue: stat.currentValue + stat.increment(),
          startValue: stat.currentValue + stat.increment(),
        }))
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#fef3c7] via-[#fed7aa] to-[#fce7f3] py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-5xl animate-bounce-slow">🌲</span>
            <h2 className="text-5xl font-bold text-[#92400e] md:text-6xl">
              TreeHacks 2026
            </h2>
            <span className="text-5xl animate-bounce-slow">🌲</span>
          </div>
          <p className="text-xl text-[#d97706] font-medium">
            Live Stats Dashboard
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ec4899] animate-pulse-dot"></span>
            <span className="text-sm text-[#92400e] font-medium uppercase tracking-wide">
              Live Now
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#d97706] opacity-75">
            Stats update in real-time • TreeHacks 2026 🎉
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [justUpdated, setJustUpdated] = useState(false);
  const prevValue = useRef(stat.currentValue);

  useEffect(() => {
    // Stagger the entrance animation
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    // Flash effect when value updates
    if (prevValue.current !== stat.currentValue) {
      setJustUpdated(true);
      const timer = setTimeout(() => setJustUpdated(false), 600);
      prevValue.current = stat.currentValue;
      return () => clearTimeout(timer);
    }
  }, [stat.currentValue]);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl transition-all duration-700 hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${justUpdated ? "ring-4 ring-offset-2" : ""}`}
      style={{
        boxShadow: `0 20px 50px rgba(0, 0, 0, 0.1), 0 0 30px ${stat.glowColor}15`,
        ...(justUpdated && {
          ringColor: stat.color,
        }),
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(135deg, ${stat.color} 0%, transparent 100%)`,
        }}
      />

      {/* Animated background orb */}
      <div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 blur-2xl transition-all duration-1000 group-hover:scale-150"
        style={{ backgroundColor: stat.color }}
      />

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <span
            className={`text-6xl transition-transform duration-300 ${
              justUpdated ? "animate-bounce-quick" : ""
            } group-hover:scale-110`}
          >
            {stat.icon}
          </span>
        </div>

        {/* Value */}
        <div className="mb-3 text-center">
          <span
            className={`text-5xl font-bold transition-all duration-300 ${
              justUpdated ? "scale-110" : ""
            }`}
            style={{ color: stat.color }}
          >
            {stat.currentValue.toLocaleString()}
          </span>
          {stat.suffix && (
            <span className="ml-1 text-3xl font-bold" style={{ color: stat.color }}>
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <p className="text-center text-lg font-semibold text-[#92400e] uppercase tracking-wide">
          {stat.label}
        </p>

        {/* Pulse indicator */}
        <div className="mt-4 flex justify-center">
          <div
            className="h-2 w-2 rounded-full animate-pulse-dot"
            style={{ backgroundColor: stat.color }}
          />
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, transparent 0%, ${stat.glowColor}10 50%, transparent 100%)`,
          }}
        />
      </div>
    </div>
  );
}

// Easing function for smooth count-up
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
