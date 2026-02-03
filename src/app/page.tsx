import Link from "next/link";
import { appName } from "@/lib/mockData";

export default function Home() {
  return (
    <div className="wireframe-shell flex items-center justify-center">
      <main className="wireframe-card fade-in w-full max-w-xl rounded-[32px] px-8 py-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Low-fidelity prototype
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-neutral-900">
          {appName}
        </h1>
        <p className="mt-3 text-base text-neutral-600">
          A season-long fantasy horse racing experience with weekly matchups,
          real results, and draft-day tension.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/login"
            className="rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm uppercase tracking-[0.2em] text-white"
          >
            Go to Login
          </Link>
          <Link
            href="/league"
            className="rounded-2xl border border-neutral-300 bg-neutral-100 px-5 py-3 text-sm uppercase tracking-[0.2em] text-neutral-700"
          >
            Preview League
          </Link>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-500">
          Grey boxes only. No live data.
        </p>
      </main>
    </div>
  );
}
