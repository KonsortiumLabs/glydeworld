"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { contentStorageKey, siteContent, type SiteContent } from "@/content/siteContent";

type ContentContextValue = {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  resetContent: () => void;
};

const ContentContext = createContext<ContentContextValue | null>(null);

function parseStoredContent(): SiteContent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(contentStorageKey);
    return stored ? (JSON.parse(stored) as SiteContent) : null;
  } catch {
    return null;
  }
}

function mergeContentDefaults<T>(defaults: T, overrides: unknown): T {
  if (!overrides || typeof overrides !== "object" || Array.isArray(defaults)) {
    return overrides === undefined ? defaults : (overrides as T);
  }
  const merged = { ...(defaults as Record<string, unknown>) };
  for (const [key, value] of Object.entries(overrides as Record<string, unknown>)) {
    const defaultValue = merged[key];
    merged[key] =
      defaultValue && typeof defaultValue === "object" && !Array.isArray(defaultValue)
        ? mergeContentDefaults(defaultValue, value)
        : value;
  }
  return merged as T;
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(siteContent);

  useEffect(() => {
    const stored = parseStoredContent();
    if (stored) setContentState(mergeContentDefaults(siteContent, stored));
  }, []);

  const value = useMemo<ContentContextValue>(() => ({
    content,
    setContent: (next) => {
      setContentState(next);
      window.localStorage.setItem(contentStorageKey, JSON.stringify(next));
    },
    resetContent: () => {
      setContentState(siteContent);
      window.localStorage.removeItem(contentStorageKey);
    },
  }), [content]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useSiteContent() {
  const value = useContext(ContentContext);
  if (!value) throw new Error("useSiteContent must be used within ContentProvider");
  return value;
}
