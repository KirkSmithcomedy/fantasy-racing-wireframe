import type { ReactNode } from "react";

export default function ScreenShell({
  theme,
  children,
}: {
  theme: "home" | "login" | "league" | "draft" | "team" | "matchup" | "standings";
  children: ReactNode;
}) {
  return (
    <div className="wireframe-shell" data-theme={theme}>
      {children}
    </div>
  );
}
