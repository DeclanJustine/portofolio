"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/projects/pharmacheck.png",
    title: "PharmaCheck",
  },
  {
    image: "/projects/godec.png",
    title: "GoDec",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center px-6 py-24 text-white"
    >
      <div className="w-full max-w-[1400px]">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center text-6xl font-semibold tracking-wide md:text-8xl">
            PROJECTS
          </h1>
          <p className="text-center text-2xl font-medium text-gray-300 md:text-4xl">
            Turning ideas into Experiences
          </p>
        </div>
        <br />
        <br />

        <div className="mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5">
            <div className="relative h-[480px] w-full">
              <Image
                src="/projects/pharmacheck.png"
                alt="PharmaCheck"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold tracking-wide">
              PharmaCheck
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href="https://pharma-check-wheat.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.12] hover:border-white/30"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                View Site
              </Link>

              <Link
                href="https://github.com/BoviliusMeidi/PharmaCheck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.12] hover:border-white/30"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </Link>
            </div>
            <div className="h-px w-full bg-white/10" />
            <p className="text-[15px] leading-relaxed text-gray-400">
              PharmaCheck is a website that provides reliable information for
              healthcare professionals and students. It connects to the
              Indonesian Ministry of Health's BPOM API to validate and display
              data on legally distributed medicines and medical devices.
            </p>
          </div>
        </div><br /><br /><br />
        <div className="mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5">
            <div className="relative h-[480px] w-full">
              <Image
                src="/projects/godec.png"
                alt="GoDec  "
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold tracking-wide">
              GoDec
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/HengkyLaurencio/GoDec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.12] hover:border-white/30"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </Link>
            </div>
            <div className="h-px w-full bg-white/10" />
            <p className="text-[15px] leading-relaxed text-gray-400">
              GoDec is a mobile platform for booking public transportation,
              including cars and motorcycles. Users can act as customers or
              drivers, with comprehensive features for an efficient and
              enjoyable booking experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
