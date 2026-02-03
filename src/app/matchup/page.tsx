import LeagueHeader from "@/components/LeagueHeader";
import TabBar from "@/components/TabBar";
import { leagueInfo, matchup, matchupBreakdown } from "@/lib/mockData";

export default function MatchupPage() {
  return (
    <div className="wireframe-shell">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <LeagueHeader subtitle={`Updated ${leagueInfo.updatedAt}`} />

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>Head-to-Head</span>
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
                {matchup.you.score}
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
                {matchup.opponent.score}
              </p>
            </div>
          </div>
        </section>

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Starter Breakdown
          </h2>
          <div className="mt-4 grid gap-3">
            {matchupBreakdown.map((row) => (
              <div
                key={row.you}
                className="grid grid-cols-[1fr,48px,1fr,48px] items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm"
              >
                <span className="font-semibold text-neutral-900">
                  {row.you}
                </span>
                <span className="text-right font-semibold text-neutral-900">
                  {row.youPts}
                </span>
                <span className="text-right font-semibold text-neutral-900">
                  {row.opp}
                </span>
                <span className="text-right font-semibold text-neutral-900">
                  {row.oppPts}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            Scores update nightly. Scratches are zeroed with no penalty.
          </p>
        </section>
      </div>

      <TabBar />
    </div>
  );
}
