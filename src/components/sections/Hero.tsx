  "use client";

  import Image from "next/image";
  import { TypeAnimation } from "react-type-animation";

  export default function Hero() {
    return (
      <section id="home" className="relative flex h-[100vh] items-center justify-center overflow-hidden   px-6">
        <div className="mx-auto flex flex-col items-center justify-between gap-32 lg:flex-row">
          <div className="rounded-full border-4 border-white p-2">
            <div className="overflow-hidden rounded-full">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={500}
                height={500}
                className="h-[560px] w-[560px] object-cover"
                priority
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-5xl font-semibold tracking-wide text-white md:text-7xl">
              JUSTINE DECLAN
            </h1>

            <div className="mb-10 h-16 text-2xl italic text-gray-200 md:text-4xl">
              <TypeAnimation
                sequence={[
                  "Website Developer",
                  2000,
                  "",
                  500,
                  "Software Engineer",
                  2000,
                  "",
                  500,
                  "AI Engineer",
                  2000,
                  "",
                  500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <a
              href="/cv.pdf"
              download
              className="group relative inline-block overflow-hidden rounded-2xl border-2 border-white bg-white px-10 py-5 text-xl font-semibold text-black transition duration-300 hover:scale-105 hover:bg-transparent hover:text-white"
            >
              <span className="relative z-10 flex items-center justify-center w-46">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
