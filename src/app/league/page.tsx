import Link from "next/link";
import LeagueHeader from "@/components/LeagueHeader";
import ScreenShell from "@/components/ScreenShell";
import TabBar from "@/components/TabBar";
import { leagueInfo, matchup, quickActions } from "@/lib/mockData";

export default function LeaguePage() {
  return (
    <ScreenShell theme="league">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <LeagueHeader subtitle={`Updated ${leagueInfo.updatedAt}`} />

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>Presenting Sponsor</span>
            <span>Hildebrandt's Icecream</span>
          </div>
          <div className="mt-4 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-5 py-4 text-center">
            <p className="text-lg font-semibold text-neutral-900">
              Hildebrandt's Icecream
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Week 3 featured partner
            </p>
          </div>
        </section>

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>Weekly Matchup</span>
            <span>{leagueInfo.scoringWindow}</span>
          </div>
          <div className="mt-4 grid gap-4 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-neutral-900">
                  {matchup.you.name}
                </p>
                <p className="text-xs text-neutral-500">
                  Record {matchup.you.record}
                </p>
              </div>
              <p className="text-2xl font-semibold text-neutral-900">
                {matchup.you.score} pts
              </p>
            </div>
            <div className="h-px w-full bg-neutral-300" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-neutral-900">
                  {matchup.opponent.name}
                </p>
                <p className="text-xs text-neutral-500">
                  Record {matchup.opponent.record}
                </p>
              </div>
              <p className="text-2xl font-semibold text-neutral-900">
                {matchup.opponent.score} pts
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            Scores update nightly during the scoring window.
          </p>
        </section>

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Quick Actions
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="rounded-2xl border border-neutral-300 bg-neutral-100 px-4 py-3 text-center text-xs uppercase tracking-[0.2em] text-neutral-700"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            This Week at a Glance
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-neutral-600">
            <div className="flex items-center justify-between rounded-2xl border border-dashed border-neutral-300 px-4 py-3">
              <span>Lineups lock</span>
              <span className="font-semibold text-neutral-900">1h 12m</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-dashed border-neutral-300 px-4 py-3">
              <span>Approved tracks</span>
              <span className="font-semibold text-neutral-900">3 circuits</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-dashed border-neutral-300 px-4 py-3">
              <span>Projected scoring</span>
              <span className="font-semibold text-neutral-900">Medium pace</span>
            </div>
          </div>
        </section>
      </div>

      <TabBar />
    </ScreenShell>
  );
}
