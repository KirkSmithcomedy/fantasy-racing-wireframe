import Link from "next/link";
import ScreenShell from "@/components/ScreenShell";
import { appName } from "@/lib/mockData";

export default function LoginPage() {
  return (
    <ScreenShell theme="login">
      <div className="flex items-center justify-center">
        <main className="wireframe-card rise-in w-full max-w-md rounded-[32px] px-7 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            {appName}
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-neutral-900">
            Fantasy racing without the noise.
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Draft real jockeys, trainers, and owners. Score from real results.
          </p>
          <div className="mt-8 grid gap-3">
            <Link
              href="/league"
              className="rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
            >
              Sign Up
            </Link>
            <Link
              href="/league"
              className="rounded-2xl border border-neutral-300 bg-neutral-100 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700"
            >
              Log In
            </Link>
            <button className="rounded-2xl border border-dashed border-neutral-400 px-5 py-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Join With Code
            </button>
          </div>
          <p className="mt-8 text-xs text-neutral-500">
            No money, no betting. Just weekly head-to-head matchups.
          </p>
        </main>
      </div>
    </ScreenShell>
  );
}
