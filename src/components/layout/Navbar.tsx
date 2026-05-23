"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.08] bg-[#0e0e0f]/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 items-center justify-center px-6">
        <ul className="flex items-center gap-100">
          {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    rounded-lg px-[14px] py-[6px] text-[30px] transition-all duration-150
                    ${
                      isActive
                        ? " bg-white/[0.07] text-[#f0f0f0]"
                        : "text-[#777] hover:text-[#f0f0f0]"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}