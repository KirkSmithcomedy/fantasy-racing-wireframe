import LeagueHeader from "@/components/LeagueHeader";
import TabBar from "@/components/TabBar";
import { draftInfo, leagueInfo } from "@/lib/mockData";

export default function DraftPage() {
  return (
    <div className="wireframe-shell">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <LeagueHeader subtitle={`Draft room - Week ${leagueInfo.week}`} />

        <section className="wireframe-card rise-in rounded-[28px] px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>Round {draftInfo.round}</span>
            <span>Pick {draftInfo.pick}</span>
            <span>Timer {draftInfo.timer}</span>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[2fr,1fr]">
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-4">
              <div className="flex gap-2">
                {draftInfo.tabs.map((tab, index) => (
                  <span
                    key={tab}
                    className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                      index === 0
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-300 text-neutral-500"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid gap-3">
                {draftInfo.available.map((entry) => (
                  <div
                    key={entry.name}
                    className="flex items-center justify-between rounded-2xl border border-neutral-300 bg-white px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {entry.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {entry.tag} - {entry.track}
                      </p>
                    </div>
                    <button className="rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                      Draft
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Your Roster
              </h2>
              <div className="mt-4 grid gap-3">
                {draftInfo.roster.map((slot) => (
                  <div
                    key={slot.slot}
                    className="rounded-2xl border border-neutral-300 bg-white px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {slot.slot}
                    </p>
                    <p className="text-sm font-semibold text-neutral-900">
                      {slot.name}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-neutral-500">
                Draft order auto-updates every pick.
              </p>
            </div>
          </div>
        </section>
      </div>

      <TabBar />
    </div>
  );
}
