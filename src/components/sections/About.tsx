"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL"],
  },
  { category: "AI Engineer", items: ["Tensorflow", "FastAPI", "Keras"] },
  { category: "Tools", items: ["Git", "Figma", "Visual Studio Code"] },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id ="about"
      ref={sectionRef}
      className="relative h-[80vh] px-6 py-24 text-white overflow-hidden flex items-center justify-center"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div
          className={`flex flex-col items-center gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-center text-6xl font-semibold tracking-wide md:text-8xl">
            ABOUT ME
          </h1>
        </div>

        <div
          style={{ marginTop: "40px" }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start"
        >
          <div
            className={`flex flex-col gap-8 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-fit">
              <div className="h-52 w-52 rounded-3xl border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden">
                <img src="/profile.jpeg" alt="Profile" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Justine Declan
              </h2>
              <p className="mt-1 text-xl text-gray-400">
                Full Stack Developer · Software Engineer · AI Engineer
              </p>
            </div>
            <div className="flex flex-col gap-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Hey! I'm a{" "}
                <span className="text-white font-medium">
                  Full Stack Developer
                </span>{" "}
                and{" "}
                <span className="text-white font-medium"> AI Enthusiast</span>,
                currently studying at
                <span className="text-white font-medium">
                  {" "}
                  Tarumanagara University
                </span>
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              style={{ marginBottom: "30px" }}
              className="mb-10 flex items-center justify-between"
            >
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gray-500">
                  Expertise
                </p>

                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  Skills & Technologies
                </h2>
              </div>
            </div>
            <div className="grid gap-6">
              {skills.map((group, i) => (
                <div
                  key={i}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div
                    style={{ marginLeft: "20px" }}
                    className="mb-5 flex items-center gap-3"
                  >
                    <h3 className="text-lg font-semibold tracking-wide text-white">
                      {group.category}
                    </h3>
                  </div>
                  <div
                    style={{ marginLeft: "20px" }}
                    className="flex flex-wrap gap-3"
                  >
                    {group.items.map((skill, j) => (
                      <span
                        key={j}
                        className="
                          rounded-full
                          px-4 py-2
                          text-sm font-medium text-gray-200
                          shadow-lg shadow-black/10
                          transition-all duration-300
                          hover:-translate-y-1
                          hover:border-white/30
                          hover:bg-white/10
                          hover:text-white
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
