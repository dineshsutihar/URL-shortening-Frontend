import { Suspense } from "react";
import { UrlShortenerForm } from "@/components/url-shortener-form";
import { UrlTable } from "@/components/url-table";
import { DashboardShell } from "@/components/dashboard-shell";
import { TableSkeleton } from "@/components/table-skeleton";
import { DashboardStats } from "@/components/dashboard-stats";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-8 p-8">
        <UrlShortenerForm />
        <DashboardStats />
        <Suspense fallback={<TableSkeleton />}>
          <UrlTable />
        </Suspense>
      </div>
    </DashboardShell>
  );
}
