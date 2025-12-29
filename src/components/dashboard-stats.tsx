import { useEffect, useState } from "react";
import { BarChart3, Link2, MousePointerClick } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserStats } from "@/lib/server-calls";

export function DashboardStats() {
  const [stats, setStats] = useState<{ totalLinks: number; totalClicks: number } | null>(null);

  useEffect(() => {
    getUserStats().then(setStats);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Links</CardTitle>
          <Link2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats ? stats.totalLinks.toLocaleString() : "—"}
          </div>
          <p className="text-xs text-muted-foreground">Links you have created</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
          <MousePointerClick className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats ? stats.totalClicks.toLocaleString() : "—"}
          </div>
          <p className="text-xs text-muted-foreground">Across all your links</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Clicks / Link</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats && stats.totalLinks > 0
              ? (stats.totalClicks / stats.totalLinks).toFixed(1)
              : "—"}
          </div>
          <p className="text-xs text-muted-foreground">Average engagement per link</p>
        </CardContent>
      </Card>
    </div>
  );
}

