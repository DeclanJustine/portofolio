export default function ContactPage() {
  return (
    <section id="contact">
      <main className="h-[100vh] flex items-center justify-center px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl items-center">
          <div>
            <p className="text-xl uppercase tracking-[0.2em] text-[#555] mb-4">
              Contact
            </p>
            <h1 className="text-[48px] font-medium text-[#f0f0f0] leading-tight mb-4">
              Justine Declan
            </h1>
            <p className="text-xl text-[#888] leading-relaxed mb-6">
              Always open to new projects, creative ideas, or opportunities to
              be part of something impactful.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-1">
              Reach out
            </p>

            <a
              href="mailto:declanjustine@email.com"
              className="flex items-center gap-3 px-4 py-[14px] rounded-xl border border-[#1e1e1e] bg-[#141415] hover:bg-[#1a1a1b] hover:border-[#2a2a2a] transition-all duration-150 no-underline group"
            >
              <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center bg-[#0c1e2e] text-[#378ADD] text-[17px] shrink-0">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#555] mb-0.5">Email</p>
                <p className="text-[13px] font-medium text-[#d0d0d0] truncate">
                  declanjustine@email.com
                </p>
              </div>
              <svg
                className="text-[#333] group-hover:text-[#555] transition-colors"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://github.com/DeclanJustine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-[14px] rounded-xl border border-[#1e1e1e] bg-[#141415] hover:bg-[#1a1a1b] hover:border-[#2a2a2a] transition-all duration-150 no-underline group"
            >
              <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center bg-[#1a1a1a] text-[#aaa] text-[17px] shrink-0">
                <svg
                  width="17"
                  height="17"
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
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#555] mb-0.5">GitHub</p>
                <p className="text-[13px] font-medium text-[#d0d0d0] truncate">
                  github.com/DeclanJustine
                </p>
              </div>
              <svg
                className="text-[#333] group-hover:text-[#555] transition-colors"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/justine-declan-621a62291/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-[14px] rounded-xl border border-[#1e1e1e] bg-[#141415] hover:bg-[#1a1a1b] hover:border-[#2a2a2a] transition-all duration-150 no-underline group"
            >
              <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center bg-[#0c1826] text-[#378ADD] text-[17px] shrink-0">
                {/* LinkedIn SVG */}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#555] mb-0.5">LinkedIn</p>
                <p className="text-[13px] font-medium text-[#d0d0d0] truncate">
                  linkedin.com/in/justinedeclan
                </p>
              </div>
              <svg
                className="text-[#333] group-hover:text-[#555] transition-colors"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
