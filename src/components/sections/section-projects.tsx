"use client";

import Link from "next/link";

export default function SectionProjects() {
  return (
    <section
      className={`my-10 flex flex-row items-stretch gap-4 w-full h-[600px] text-xl`}
    >
      {/*<div*/}
      {/*  className={`hover:flex-grow w-40 border transition-all duration-300`}*/}
      {/*>*/}
      {/*  <Link href={`https://lfu-companion.vercel.app`}>LFU Companion</Link>*/}
      {/*</div>*/}
      <div
        className={`group hover:flex-grow py-5 flex justify-end items-end w-40 max-w-[960px] border-2 border-neutral-50 transition-all duration-300 ease-in-out`}
        style={{
          backgroundImage: `url(/ostracon-project-bg.png)`,
          backgroundSize: `auto 100%`,
          backgroundPosition: `left top`,
        }}
      >
        <Link
          href={`https://ostracon.app`}
          target={"_blank"}
          className={`p-5 w-full bg-neutral-50 opacity-0 group-hover:opacity-100 shadow-lg shadow-neutral-900/30 font-bold text-neutral-900 hover:text-primary text-right uppercase transition-all duration-300`}
        >
          Visit Ostracon
        </Link>
      </div>
      <div
        className={`group hover:flex-grow py-5 flex justify-end items-end w-40 max-w-[960px] border-2 border-neutral-50 transition-all duration-300 ease-in-out`}
        style={{
          backgroundImage: `url(/beforeAfter-project-bg.png)`,
          backgroundSize: `auto 100%`,
          backgroundPosition: `left top`,
        }}
      >
        <Link
          href={"https://beforeaftr.me"}
          target={"_blank"}
          className={`p-5 w-full bg-neutral-50 opacity-0 group-hover:opacity-100 shadow-lg shadow-neutral-900/30 font-bold text-neutral-900 hover:text-primary text-right uppercase transition-all duration-300`}
        >
          Visit BeforeAftr
        </Link>
      </div>
      <div
        className={`group hover:flex-grow py-5 flex justify-end items-end w-40 max-w-[960px] border-2 border-neutral-50 transition-all duration-300 ease-in-out`}
        style={{
          backgroundImage: `url(/justnoted-project-bg.png)`,
          backgroundSize: `auto 100%`,
          backgroundPosition: `left top`,
        }}
      >
        <Link
          href={`https://justnoted.app`}
          target={"_blank"}
          className={`p-5 w-full bg-neutral-50 opacity-0 group-hover:opacity-100 shadow-lg shadow-neutral-900/30 font-bold text-neutral-900 hover:text-primary text-right uppercase transition-all duration-300`}
        >
          Visit JustNoted
        </Link>
      </div>
    </section>
  );
}
