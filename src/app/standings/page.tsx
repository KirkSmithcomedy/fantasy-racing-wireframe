import LeagueHeader from "@/components/LeagueHeader";
import TabBar from "@/components/TabBar";
import { standings } from "@/lib/mockData";

export default function StandingsPage() {
  return (
    <div className="wireframe-shell">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <LeagueHeader subtitle="Standings" />

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>Leaderboard</span>
            <span>Top 2 advance</span>
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-300 bg-white">
            <div className="grid grid-cols-[40px,1fr,80px,70px,70px] gap-2 border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
              <span>Rank</span>
              <span>Team</span>
              <span className="text-right">Record</span>
              <span className="text-right">PF</span>
              <span className="text-right">PA</span>
            </div>
            {standings.map((row) => (
              <div
                key={row.rank}
                className="grid grid-cols-[40px,1fr,80px,70px,70px] gap-2 border-b border-neutral-200 px-4 py-3 text-sm"
              >
                <span className="font-semibold text-neutral-900">
                  {row.rank}
                </span>
                <span className="font-semibold text-neutral-900">
                  {row.name}
                </span>
                <span className="text-right text-neutral-700">
                  {row.record}
                </span>
                <span className="text-right text-neutral-700">{row.pf}</span>
                <span className="text-right text-neutral-700">{row.pa}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <TabBar />
    </div>
  );
}
