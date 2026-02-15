"use client";

export default function ValentinesBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] overflow-hidden">
      {/* Banner container with gradient background */}
      <div
        className="relative px-4 py-4 text-center"
        style={{
          background: "linear-gradient(135deg, #f8e8ec 0%, #fdf6f8 25%, #f8e8ec 50%, #fdf6f8 75%, #f8e8ec 100%)",
          borderBottom: "3px solid #d4a574",
          boxShadow: "0 4px 20px rgba(139, 41, 66, 0.15)",
        }}
      >
        {/* Floating hearts decoration - left side */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span
            className="absolute left-[5%] top-1/2 -translate-y-1/2 text-2xl opacity-60 animate-heart-beat"
            style={{ animationDelay: "0s" }}
          >
            💕
          </span>
          <span
            className="absolute left-[15%] top-1/2 -translate-y-1/2 text-xl opacity-50 animate-heart-beat"
            style={{ animationDelay: "0.3s" }}
          >
            💖
          </span>
          <span
            className="absolute left-[25%] top-1/2 -translate-y-1/2 text-lg opacity-40 animate-float"
            style={{ animationDelay: "0.6s" }}
          >
            💝
          </span>
          
          {/* Floating hearts decoration - right side */}
          <span
            className="absolute right-[5%] top-1/2 -translate-y-1/2 text-2xl opacity-60 animate-heart-beat"
            style={{ animationDelay: "0.2s" }}
          >
            💗
          </span>
          <span
            className="absolute right-[15%] top-1/2 -translate-y-1/2 text-xl opacity-50 animate-heart-beat"
            style={{ animationDelay: "0.5s" }}
          >
            💘
          </span>
          <span
            className="absolute right-[25%] top-1/2 -translate-y-1/2 text-lg opacity-40 animate-float"
            style={{ animationDelay: "0.8s" }}
          >
            💞
          </span>
        </div>

        {/* Main banner text */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          <span className="text-3xl animate-heart-beat">💖</span>
          <h2
            className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[#8b2942]"
            style={{
              fontFamily: "var(--font-display)",
              textShadow: "2px 2px 4px rgba(212, 165, 116, 0.3)",
            }}
          >
            Happy Valentine's Day
          </h2>
          <span className="text-3xl animate-heart-beat" style={{ animationDelay: "0.6s" }}>
            💖
          </span>
        </div>

        {/* Sparkle/shine effect */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212, 165, 116, 0.1) 50%, transparent 100%)",
            animation: "shine 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Add shine animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
