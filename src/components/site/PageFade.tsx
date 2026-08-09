import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Re-mounts children on every pathname change to trigger a quick fade-in. */
export function PageFade({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}
