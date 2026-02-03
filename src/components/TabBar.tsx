"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "League", href: "/league" },
  { label: "Team", href: "/team" },
  { label: "Matchup", href: "/matchup" },
  { label: "Standings", href: "/standings" },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,520px)] -translate-x-1/2">
      <div className="grid grid-cols-4 gap-2 rounded-2xl border border-neutral-300 bg-white/90 p-2 shadow-lg backdrop-blur">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-xl px-2 py-2 text-center text-xs font-medium uppercase tracking-[0.15em] transition ${
                active
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
