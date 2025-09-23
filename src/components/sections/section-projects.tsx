import SectionProjects from "@/components/sections/section-projects";

export const metadata = {
  title: "MadStoneDev - Perfecting the method, embracing the madness",
  description:
    "Professional web development agency specializing in modern, scalable applications. From concept to deployment, we perfect the method while embracing creative madness.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16 sm:mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#E81863]/20 blur-xl rounded-full" />
            <img
              src="/madstone-logo.svg"
              alt="Madstone Logo"
              className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                MadStone
              </span>
              <span className="block sm:inline text-[#E81863] ml-0 sm:ml-4">
                Dev
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-400 max-w-2xl leading-relaxed font-light">
              Perfecting the method, embracing the madness
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#E81863] to-transparent" />
              <span className="text-sm uppercase tracking-wider text-neutral-500 font-medium">
                Digital Craftsmen
              </span>
            </div>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="mb-16 sm:mb-24 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                We build digital experiences that
                <span className="text-[#E81863]"> matter</span>
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                From innovative web applications to scalable platforms, we
                transform ideas into powerful digital solutions. Every project
                is crafted with precision, creativity, and an obsession for
                excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#E81863] mb-2">
                  50+
                </div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">
                  Projects
                </div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#E81863] mb-2">5+</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">
                  Years
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <SectionProjects />

        {/* Call to Action */}
        <section className="mt-24 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold">
              Ready to build something
              <span className="text-[#E81863]"> extraordinary</span>?
            </h3>
            <p className="text-xl text-neutral-400">
              Let's discuss your next project and turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@madstonedev.com"
                className="px-8 py-4 bg-[#E81863] text-white font-semibold rounded-xl hover:bg-[#E81863]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E81863]/25"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
