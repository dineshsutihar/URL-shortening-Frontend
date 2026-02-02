import { useCallback, useRef } from "react";
import { UrlShortenerForm } from "@/components/url-shortener-form";
import { UrlTable } from "@/components/url-table";
import { DashboardShell } from "@/components/dashboard-shell";
import { DashboardStats } from "@/components/dashboard-stats";

export default function DashboardPage() {
  const refreshRef = useRef<(() => void) | null>(null);

  const handleShortened = useCallback(() => {
    if (refreshRef.current) refreshRef.current();
  }, []);

  return (
    <DashboardShell>
      <div className="flex flex-col gap-8 p-8">
        <UrlShortenerForm onShortened={handleShortened} />
        <DashboardStats />
        <UrlTable />
      </div>
    </DashboardShell>
  );
}

