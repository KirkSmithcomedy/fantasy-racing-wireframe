import LeagueHeader from "@/components/LeagueHeader";
import TabBar from "@/components/TabBar";
import { roster } from "@/lib/mockData";

function RosterSection({
  title,
  entries,
}: {
  title: string;
  entries: { name: string; starts: number; status: string }[];
}) {
  return (
    <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
        {title}
      </h3>
      <div className="mt-3 grid gap-3">
        {entries.map((entry) => (
          <div
            key={entry.name}
            className="flex items-center justify-between rounded-2xl border border-neutral-300 bg-white px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                {entry.name}
              </p>
              <p className="text-xs text-neutral-500">
                {entry.starts} starts this week
              </p>
            </div>
            <button
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                entry.status === "START"
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-300 text-neutral-600"
              }`}
            >
              {entry.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="wireframe-shell">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <LeagueHeader subtitle="Set your starters" />

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>Lineup Lock</span>
            <span>{roster.lineupLock}</span>
          </div>
          <div className="mt-4 grid gap-4">
            <RosterSection title="Jockeys" entries={roster.jockeys} />
            <RosterSection title="Trainers" entries={roster.trainers} />
            <RosterSection title="Owners" entries={roster.owners} />
          </div>
        </section>
      </div>

      <TabBar />
    </div>
  );
}
