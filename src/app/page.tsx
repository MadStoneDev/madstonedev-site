"use client";

import Link from "next/link";

import MainNavigation from "@/components/sections/main-navigation";
import AnimatedBackground from "@/components/shared/animated-background";
import SharedFooter from "@/components/shared/footer";

interface Project {
  title: string;
  url: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  color: string;
  accent: string;
  icon: string;
  wip?: boolean;
}

const projects: Project[] = [
  {
    title: "JustReel",
    url: "https://justreel.app",
    description:
      "Track shows, get involved in discussions and share movie and tv show watchlists with friends.",
    longDescription:
      "A TV Show tracker that does away with the noise. Talk about movies, shows, seasons and episodes with others" +
      " in the community and even share movie and show collections with your friends so you can both add to the" +
      " list mark as watched!",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    category: "Movies and TV",
    color: "from-green-600 to-lime-400",
    accent: "#84cc16",
    icon: "🎬",
  },
  {
    title: "TheJury",
    url: "https://thejury.app",
    description:
      "Polling done right. Create polls, share them, get results. No complexity, no gimmicks, just democracy that works.",
    longDescription:
      "Back to basics polling that focuses on what matters: easy creation, simple sharing, and clear results. Perfect for settling debates, making group decisions, or just satisfying your curiosity.",
    tech: ["Next.js", "Typescript", "Supabase", "LocalStorage", "Tailwind"],
    category: "Polling Platform",
    color: "from-emerald-700 to-emerald-500",
    accent: "#fb7185",
    icon: "⚖️",
  },
  {
    title: "JustNoted",
    url: "https://justnoted.app",
    description:
      "Note-taking that gets out of your way. Jot down ideas, write novels, make to-do lists. No bloat, no distractions.",
    longDescription:
      "Tired of note apps that do everything except let you take notes quickly? This one starts instantly, saves automatically, and won't try to organize your life for you. Just pure, fast writing.",
    tech: ["Next.js", "Typescript", "Upstash", "Supabase", "LocalStorage"],
    category: "Note Taking",
    color: "from-indigo-600 to-blue-400",
    accent: "#fbbf24",
    icon: "📝",
  },
  {
    title: "iLoveBoardGames",
    url: "https://iloveboardgames.xyz",
    description:
      "Discover board games, build your collection, rate your favourites and find your next game night adventure.",
    longDescription:
      "A board game discovery and collection management platform powered by BoardGameGeek data. Browse trending and" +
      " top-rated titles, organise your collection, write reviews, and never show up to game night without a plan again.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    category: "Board Games",
    color: "from-amber-600 to-yellow-500",
    accent: "#fbbf24",
    icon: "🎲",
  },
  {
    title: "TurnTally",
    url: "https://turntally.madstone.dev",
    description:
      "Track every second, analyse every move, and prove who's the real board game champion at your table.",
    longDescription:
      "A board game session tracker that records turn times, maintains player statistics, and settles debates with cold," +
      " hard data. Manage your game vault, track player performance across sessions, and compete on leaderboards." +
      " No more arguments — just numbers.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    category: "Game Tracker",
    color: "from-cyan-600 to-teal-400",
    accent: "#22d3ee",
    icon: "⏱️",
  },
  {
    title: "be.vocl",
    url: "https://bevocl.app",
    description:
      "A content sharing platform built with safety at its core. Share your creativity with a community that actually cares.",
    longDescription:
      "Think Tumblr, but built from the ground up with real safety measures. Share text, images, videos, and audio with" +
      " a community that values creative expression while maintaining strict content moderation and zero-tolerance" +
      " safety policies. Because creative freedom and safety aren't mutually exclusive.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Cloudflare R2"],
    category: "Social Platform",
    color: "from-purple-600 to-violet-400",
    accent: "#a78bfa",
    icon: "🎭",
    wip: true,
  },
  {
    title: "Ostracon",
    url: "https://ostracon.app",
    description:
      "Back to basics social media. Express yourself, share your thoughts, and connect with others.",
    longDescription:
      "Remember when hopping on social media was all about likes, followers, and being yourself, rather than a place" +
      " to push the news? Ostracon goes back to basics and gives you a space to just do that.",
    tech: ["Next.js", "Typescript", "Supabase", "LocalStorage", "Tailwind"],
    category: "Social Platform",
    color: "from-yellow-500 to-orange-500",
    accent: "#facc15",
    icon: "💬",
    wip: true,
  },
  {
    title: "FairDinkum",
    url: "https://fairdinkum.app",
    description:
      "Polling done right. Create polls, share them, get results. No complexity, no gimmicks, just democracy that works.",
    longDescription:
      "Back to basics polling that focuses on what matters: easy creation, simple sharing, and clear results. Perfect for settling debates, making group decisions, or just satisfying your curiosity.",
    tech: ["Next.js", "Typescript", "Supabase", "LocalStorage", "Tailwind"],
    category: "Ask Questions",
    color: "from-rose-500 to-pink-600",
    accent: "#fb7185",
    icon: "🐨",
    wip: true,
  },
  {
    title: "beforeAftr",
    url: "https://beforeaftr.me",
    description:
      "Simple picture comparison tool that actually works. Upload two images, see the differences, judge the quality.",
    longDescription:
      "Sometimes you just need to compare two photos side-by-side without jumping through hoops. Perfect for before/after shots, quality comparisons, or settling debates about which photo looks better.",
    tech: ["Next.js"],
    category: "Image Tool",
    color: "from-neutral-400 to-neutral-700",
    accent: "#f5f5f5",
    icon: "📸",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground particleCount={50} />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <MainNavigation />

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
        <section className="py-24 px-6 sm:px-12" id={`laboratory`}>
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
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative cursor-pointer ${
                    index === projects.length - 1 && projects.length % 2 !== 0
                      ? "xl:col-span-2 xl:max-w-[calc(50%-1.5rem)] xl:justify-self-center"
                      : ""
                  }`}
                >
                  {/* Project Card */}
                  <div className="relative min-h-[400px] rounded-3xl overflow-hidden bg-neutral-900/50 backdrop-blur-xl border border-white/10 transform transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-white/30">
                    {/* Dynamic Background */}
                    <div className="absolute inset-0">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>

                    {/* WIP Badge */}
                    {project.wip && (
                      <div className="absolute top-16 left-3 sm:left-6 z-30">
                        <span className="px-3 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30 backdrop-blur-sm">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Floating Icon */}
                    <div className="absolute top-6 left-3 sm:left-6 z-20">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${project.color} blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
                        />
                        <div className="relative text-4xl transform group-hover:scale-110 transition-all duration-300">
                          {project.icon}
                        </div>
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-6 right-6 z-20">
                      <span
                        className="px-4 py-2 text-sm font-bold rounded-full backdrop-blur-sm transform group-hover:scale-110 transition-all duration-300"
                        style={{
                          backgroundColor: project.accent + "33",
                          color: project.accent,
                          borderWidth: "1px",
                          borderColor: project.accent + "4d",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="px-6 sm:px-8 pt-20 pb-10 flex flex-col items-start justify-between gap-8 sm:gap-0 h-full z-20 transform transition-all duration-500 group-hover:translate-y-0">
                      {/* Tech Stack */}
                      <div className="hidden sm:flex flex-wrap gap-2 mb-6 transform translate-y-4 group-hover:translate-y-0 opacity-70 group-hover:opacity-100 transition-all duration-500 delay-100">
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
                      <section className="flex-grow mb-6">
                        <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight transform transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-neutral-300">
                          {project.title}
                        </h3>

                        {/* Descriptions */}
                        <div className="space-y-3 mb-0">
                          <p className="text-neutral-300 leading-relaxed text-sm sm:group-hover:opacity-0 transition-opacity duration-300">
                            {project.description}
                          </p>
                          <p className="hidden sm:block text-white/90 leading-relaxed text-sm sm:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform sm:translate-y-4 group-hover:translate-y-0">
                            {project.longDescription}
                          </p>
                        </div>
                      </section>

                      {/* Visit Button */}
                      {project.wip ? (
                        <span className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white/50 font-bold rounded-xl cursor-default">
                          <span>Coming Soon</span>
                        </span>
                      ) : (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${project.color} text-white font-bold rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn`}
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
                        </Link>
                      )}
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Call to Action */}
        <section className="py-24 px-6 sm:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="p-2 text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Got something brewing?
            </h3>
            <p className="text-xl text-neutral-400 mb-12">
              Hit me up with your project idea and I'd love to collaborate with
              you!
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

        <SharedFooter />
      </div>
    </div>
  );
}
