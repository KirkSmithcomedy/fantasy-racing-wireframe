import { appName, leagueInfo } from "@/lib/mockData";

export default function LeagueHeader({
  subtitle,
}: {
  subtitle?: string;
}) {
  return (
    <header className="rounded-3xl border border-neutral-300 bg-white/70 px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
        <span>{appName}</span>
        <span>Wireframe</span>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-neutral-900">
            {leagueInfo.name}
          </h1>
          <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600">
            Week {leagueInfo.week} of {leagueInfo.totalWeeks}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
          <span>Scoring window: {leagueInfo.scoringWindow}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          <span>Closes in {leagueInfo.countdown}</span>
          {subtitle ? (
            <>
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span>{subtitle}</span>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
