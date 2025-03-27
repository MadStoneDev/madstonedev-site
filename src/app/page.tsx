import SectionProjects from "@/components/sections/section-projects";

export const metadata = {
  title: "MadStoneDev - Perfecting the method, embracing the madness",
  description: "",
};

export default function Home() {
  return (
    <main
      className={`px-4 sm:px-8 py-5 sm:py-8 gap-16 sm:p-20 font-sans text-white`}
    >
      <section className={`flex flex-row items-center gap-2`}>
        <img
          src={`/madstone-logo.svg`}
          alt="Madstone Logo"
          className={`w-12`}
        />

        <article className={`flex flex-col`}>
          <h1 className={`font-display text-xl sm:text-4xl uppercase`}>
            MadStone Dev
          </h1>
          <h2
            className={`-mt-0.5 max-w-52 sm:max-w-lg sm:-mt-1.5 text-sm sm:text-base text-primary`}
          >
            Perfecting the method, embracing the madness
          </h2>
        </article>
      </section>

      <SectionProjects />
    </main>
  );
}
