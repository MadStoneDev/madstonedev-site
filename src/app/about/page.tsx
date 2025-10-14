// app/about/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MainNavigation from "@/components/sections/main-navigation";

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
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

      {/* Header Navigation */}
      <MainNavigation />

      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-8 relative inline-block group">
              <div className="absolute -inset-8 bg-gradient-to-r from-[#E81863]/20 via-[#E81863]/40 to-[#E81863]/20 blur-2xl group-hover:blur-3xl transition-all duration-500 rounded-full" />
              <div className="relative text-6xl sm:text-8xl">🧪</div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent block mb-4">
                ABOUT THE
              </span>
              <span className="text-[#E81863] block">MAD SCIENTIST</span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E81863] to-transparent mx-auto" />
          </div>

          {/* Philosophy Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative p-8 sm:p-12 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E81863]/5 to-purple-500/5 opacity-50" />

              <div className="relative space-y-6 text-lg leading-relaxed">
                <p className="text-2xl font-bold text-white mb-6">
                  Where <span className="text-[#E81863]">brilliance</span> meets{" "}
                  <span className="text-white">madness</span>
                </p>

                <p className="text-neutral-300">
                  I don't just build websites—I create digital experiences that
                  break the mold. Why? Because following the same tired playbook
                  everyone else uses isn't how you make something memorable.
                </p>

                <p className="text-neutral-300">
                  <strong className="text-white">
                    The philosophy is simple:
                  </strong>{" "}
                  Just because something has always been done one way doesn't
                  mean it's the best way. Innovation requires courage to
                  experiment, iterate, and sometimes completely reimagine what's
                  possible.
                </p>

                <p className="text-neutral-300">
                  Think of it as a laboratory where conventional wisdom gets
                  challenged, tested, and often exploded in favor of something
                  better. Sometimes experiments fail spectacularly. But when
                  they succeed? That's when magic happens.
                </p>
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-[#E81863]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E81863]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <div className="relative">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Full-Stack Development
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  From sleek Next.js applications to robust backend systems, I
                  build modern web experiences using TypeScript, React,
                  Supabase, and cutting-edge tools. Every project is crafted for
                  performance, scalability, and that "wow" factor.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-[#E81863]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <div className="relative">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Design That Dares
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Bold gradients, micro-interactions, glassmorphism—I embrace
                  contemporary design trends while ensuring every interface is
                  intuitive and accessible. Beauty and functionality aren't
                  mutually exclusive.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-[#E81863]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <div className="relative">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Rapid Experimentation
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  My laboratory is filled with projects—from movie review
                  platforms to polling apps to social networks. Each one is an
                  experiment in solving real problems with creative solutions.
                  Some boom, some shine, all teach something valuable.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-[#E81863]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-[#E81863]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <div className="relative">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Real-World Solutions
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Whether it's an e-commerce platform, a SaaS application, or a
                  mobile app, I focus on building tools that people actually
                  want to use. No bloat. No unnecessary complexity. Just smart
                  solutions that work.
                </p>
              </div>
            </div>
          </div>

          {/* The Approach */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-center mb-12">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                THE MADSTONE METHOD
              </span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Break Convention",
                  desc: "Challenge assumptions about how things 'should' be done",
                },
                {
                  number: "02",
                  title: "Experiment Fearlessly",
                  desc: "Test bold ideas and iterate rapidly based on what works",
                },
                {
                  number: "03",
                  title: "Build with Purpose",
                  desc: "Every feature serves a real user need—no fluff allowed",
                },
                {
                  number: "04",
                  title: "Perfect the Details",
                  desc: "Sweat the small stuff because micro-interactions matter",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#E81863]/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-black text-[#E81863] opacity-30">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part of RAVENCI */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative p-8 sm:p-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-50" />

              <div className="relative">
                <p className="text-lg text-neutral-300 mb-4">
                  MadStoneDev sometimes operates as part of
                </p>
                <a
                  href="https://ravenci.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-4xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300"
                >
                  RAVENCI
                </a>
                <p className="text-neutral-400 mt-4">
                  A collective of digital craftsmen pushing boundaries together
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Ready to create something
              </span>
              <span className="block text-[#E81863]">absolutely mad?</span>
            </h3>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Let's collaborate on your next project and build something that
              breaks the mold.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={"/contact"}
                className="group relative px-12 py-5 bg-gradient-to-r from-[#E81863] via-pink-600 to-purple-600 text-white font-black text-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/#laboratory"
                className="px-12 py-5 border-2 border-white/20 text-white font-bold text-xl rounded-2xl hover:border-[#E81863] hover:shadow-lg hover:shadow-[#E81863]/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 p-8 text-center text-xs text-neutral-500 border-t border-white/10">
        <p>
          MadStoneDev sometimes operates as part of{" "}
          <a
            href={"https://ravenci.solutions"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E81863] hover:text-white transition-colors"
          >
            RAVENCI
          </a>
        </p>
      </footer>
    </div>
  );
}
