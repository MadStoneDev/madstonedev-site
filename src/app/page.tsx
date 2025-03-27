import SectionProjects from "@/components/sections/section-projects";

export const metadata = {
  title: "MadStoneDev - Perfecting the method, embracing the madness",
  description: "",
};

export default function Home() {
  return (
    <main className={`p-8 pb-20 gap-16 sm:p-20 font-sans text-white`}>
      <section className={`flex flex-row items-center gap-2`}>
        <img
          src={`/madstone-logo.svg`}
          alt="Madstone Logo"
          className={`w-12`}
        />

        <article className={`flex flex-col`}>
          <h1 className={`font-display text-4xl uppercase`}>MadStone Dev</h1>
          <h2 className={`-mt-1.5 text-primary`}>
            Perfecting the method, embracing the madness
          </h2>
        </article>
      </section>

      <SectionProjects />
    </main>
  );
}
