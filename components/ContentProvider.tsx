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

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(siteContent);

  useEffect(() => {
    const stored = parseStoredContent();
    if (stored) setContentState(stored);
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
