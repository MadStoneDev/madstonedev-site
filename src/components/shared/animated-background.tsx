"use client";

import { useState, useEffect } from "react";

interface AnimatedBackgroundProps {
  particleCount?: number;
}

export default function AnimatedBackground({
  particleCount = 50,
}: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#E81863] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic Cursor Glow */}
      <div
        className="absolute w-96 h-96 pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(232, 24, 99, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,24,99,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,24,99,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
}
