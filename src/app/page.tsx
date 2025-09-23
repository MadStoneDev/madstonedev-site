"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  {
    title: "The Watchman Reviews",
    url: "https://thewatchmanreviews.com",
    description:
      "Authentic movie and TV reviews without the fluff. Real opinions, useful stats, and shareable watchlists for actual humans.",
    longDescription:
      "Cut through the noise of biased reviews and affiliate marketing. Get honest takes on what's worth your time, plus tools to organize and share your watchlists with friends who actually care about your taste.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    category: "Review Platform",
    color: "from-blue-500 to-purple-600",
    accent: "blue-400",
    icon: "🎬",
  },
  {
    title: "beforeAftr",
    url: "https://beforeaftr.me",
    description:
      "Simple picture comparison tool that actually works. Upload two images, see the differences, judge the quality.",
    longDescription:
      "Sometimes you just need to compare two photos side-by-side without jumping through hoops. Perfect for before/after shots, quality comparisons, or settling debates about which photo looks better.",
    tech: ["React", "Node.js", "CloudFlare", "Canvas API", "WebP"],
    category: "Image Tool",
    color: "from-emerald-500 to-teal-600",
    accent: "emerald-400",
    icon: "📸",
  },
  {
    title: "JustNoted",
    url: "https://justnoted.app",
    description:
      "Note-taking that gets out of your way. Jot down ideas, write novels, make to-do lists. No bloat, no distractions.",
    longDescription:
      "Tired of note apps that do everything except let you take notes quickly? This one starts instantly, saves automatically, and won't try to organize your life for you. Just pure, fast writing.",
    tech: ["Vue.js", "Firebase", "PWA", "LocalStorage"],
    category: "Productivity App",
    color: "from-amber-500 to-orange-600",
    accent: "amber-400",
    icon: "📝",
  },
  {
    title: "TheJury",
    url: "https://thejury.app",
    description:
      "Polling done right. Create polls, share them, get results. No complexity, no gimmicks, just democracy that works.",
    longDescription:
      "Back to basics polling that focuses on what matters: easy creation, simple sharing, and clear results. Perfect for settling debates, making group decisions, or just satisfying your curiosity.",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind"],
    category: "Polling Platform",
    color: "from-rose-500 to-pink-600",
    accent: "rose-400",
    icon: "⚖️",
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
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

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 sm:px-12">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo Animation */}
            <div className="mb-8 relative inline-block group">
              <div className="absolute -inset-8 bg-gradient-to-r from-[#E81863]/20 via-[#E81863]/40 to-[#E81863]/20 blur-2xl group-hover:blur-3xl transition-all duration-500 rounded-full" />
              <img
                src="/madstone-logo.svg"
                alt="MadStone Logo"
                className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto drop-shadow-2xl group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent block">
                MADSTONE
              </span>
              <span className="text-[#E81863] block transform hover:scale-105 transition-transform duration-300">
                DEV
              </span>

              {/* Animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#E81863] to-transparent" />
            </h1>

            {/* Slogan */}
            <div className="mb-12 space-y-4">
              <p className="text-2xl sm:text-4xl font-light text-neutral-300 mb-4">
                Where{" "}
                <span className="text-[#E81863] font-bold">brilliance</span>{" "}
                meets <span className="text-white font-bold">madness</span>
              </p>
              <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                I love breaking norms and pushing boundaries. Just because
                something has always been done one way, does not mean it's the
                best way. Be creative. Be different.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={`/contact`}
                className="cursor-pointer group px-10 py-4 bg-gradient-to-r from-[#E81863] to-[#E81863]/80 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-[#E81863]/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Unleash the Magic</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href={`#laboratory`}
                className="cursor-pointer px-10 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:border-[#E81863] hover:shadow-lg hover:shadow-[#E81863]/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Browse the Lab
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 px-6 sm:px-12" name={`laboratory`}>
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                THE LABORATORY
              </h2>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                Things might go boom, but I promise you'll enjoy my projects
                until that point.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Card */}
                  <div className="relative h-[400px] rounded-3xl overflow-hidden bg-neutral-900/50 backdrop-blur-xl border border-white/10 transform transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:rotate-1 group-hover:border-white/30">
                    {/* Dynamic Background */}
                    <div className="absolute inset-0">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      {/* Animated Mesh Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-all duration-700 blur-3xl`}
                        style={{
                          transform:
                            hoveredProject === index
                              ? "scale(1.5) rotate(180deg)"
                              : "scale(1) rotate(0deg)",
                        }}
                      />
                    </div>

                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${project.color} blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
                        />
                        <div className="relative text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                          {project.icon}
                        </div>
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-6 right-6 z-20">
                      <span
                        className={`px-4 py-2 text-sm font-bold bg-${project.accent}/20 text-${project.accent} rounded-full backdrop-blur-sm border border-${project.accent}/30 transform group-hover:scale-110 transition-all duration-300`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-all duration-500 group-hover:translate-y-0">
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6 transform translate-y-4 group-hover:translate-y-0 opacity-70 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-white/10 text-white/80 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200"
                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight transform transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-neutral-300">
                        {project.title}
                      </h3>

                      {/* Descriptions */}
                      <div className="space-y-3 mb-6">
                        <p className="text-neutral-300 leading-relaxed text-sm group-hover:opacity-0 transition-opacity duration-300">
                          {project.description}
                        </p>
                        <p className="text-white/90 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Visit Button */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${project.color} text-white font-bold rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${project.accent}/30 group/btn`}
                      >
                        <span>Enter the Lab</span>
                        <div className="transform group-hover/btn:translate-x-1 group-hover/btn:rotate-45 transition-all duration-300">
                          <svg
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`}
                    />
                  </div>

                  {/* Floating Accent Elements */}
                  <div
                    className={`absolute -top-3 -right-3 w-6 h-6 bg-${project.accent} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 animate-pulse`}
                  />
                  <div
                    className={`absolute -bottom-3 -left-3 w-4 h-4 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Call to Action */}
        <section className="py-24 px-6 sm:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Ready for Your Own Experiment?
            </h3>
            <p className="text-xl text-neutral-400 mb-12">
              Let's concoct something extraordinary together. Bring us your
              impossible ideas, and we'll show you what methodical madness can
              achieve.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={`/contact`}
                className="group relative px-12 py-5 bg-gradient-to-r from-[#E81863] via-[#E81863] to-pink-600 text-white font-black text-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Start the Magic</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
