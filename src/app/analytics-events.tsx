"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest<HTMLAnchorElement>("a[data-analytics-event]");

      if (!link?.dataset.analyticsEvent) {
        return;
      }

      track(link.dataset.analyticsEvent, {
        href: link.href,
        label: link.dataset.analyticsLabel ?? link.textContent?.trim().slice(0, 80) ?? "link",
        path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
