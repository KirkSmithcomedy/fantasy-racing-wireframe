export const appName = "Fantasy Racing";

export const leagueInfo = {
  name: "Saratoga Six",
  week: 3,
  totalWeeks: 6,
  countdown: "2d 4h",
  scoringWindow: "Thu-Sun",
  updatedAt: "Last night",
};

export const matchup = {
  you: { name: "You", record: "2-0", score: 42 },
  opponent: { name: "Mike", record: "1-1", score: 38 },
};

export const quickActions = [
  { label: "Set Lineup", href: "/team" },
  { label: "Open Draft", href: "/draft" },
  { label: "View Standings", href: "/standings" },
];

export const draftInfo = {
  round: 2,
  pick: 7,
  timer: "00:42",
  tabs: ["Jockeys", "Trainers", "Owners"],
  available: [
    { name: "Irad Ortiz Jr.", tag: "Jockey", track: "Gulfstream" },
    { name: "Flavien Prat", tag: "Jockey", track: "Santa Anita" },
    { name: "Tyler Gaffalione", tag: "Jockey", track: "Gulfstream" },
  ],
  roster: [
    { slot: "Jockey", name: "Irad Ortiz Jr." },
    { slot: "Trainer", name: "--" },
    { slot: "Owner", name: "--" },
  ],
};

export const roster = {
  jockeys: [
    { name: "Irad Ortiz Jr.", starts: 4, status: "START" },
    { name: "Flavien Prat", starts: 2, status: "BENCH" },
  ],
  trainers: [
    { name: "Chad Brown", starts: 6, status: "START" },
    { name: "Brad Cox", starts: 5, status: "START" },
    { name: "Todd Pletcher", starts: 4, status: "BENCH" },
  ],
  owners: [
    { name: "Klaravich Stables", starts: 3, status: "START" },
    { name: "Godolphin", starts: 2, status: "BENCH" },
  ],
  lineupLock: "1h 12m",
};

export const matchupBreakdown = [
  { you: "Irad Ortiz Jr.", youPts: 18, opp: "Flavien Prat", oppPts: 12 },
  { you: "Chad Brown", youPts: 14, opp: "Todd Pletcher", oppPts: 16 },
  { you: "Brad Cox", youPts: 10, opp: "Brad Cox", oppPts: 10 },
];

export const standings = [
  { rank: 1, name: "You", record: "3-0", pf: 128, pa: 94 },
  { rank: 2, name: "Sarah", record: "2-1", pf: 115, pa: 108 },
  { rank: 3, name: "Mike", record: "1-2", pf: 110, pa: 112 },
  { rank: 4, name: "Jen", record: "0-3", pf: 97, pa: 136 },
];
