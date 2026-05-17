import { Suspense } from "react";
import { ArchiveView } from "@/components/PublicViews";

export default function ArchivePage() {
  return (
    <Suspense fallback={null}>
      <ArchiveView />
    </Suspense>
  );
}
