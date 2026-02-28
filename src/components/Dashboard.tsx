import { useCallback, useRef, useState } from "react";
import { UrlShortenerForm } from "@/components/url-shortener-form";
import { UrlTable } from "@/components/url-table";
import { DashboardShell, type DashboardSection } from "@/components/dashboard-shell";
import { DashboardStats } from "@/components/dashboard-stats";
import { useAuth } from "@/lib/auth-context";
import {
  Settings,
  Link2,
  BarChart3,
  Zap,
  Clock,
  User,
  Shield,
  Bell,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

function HistorySection() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-2xl font-bold">Link History</h3>
        <p className="text-muted-foreground mt-1">All your created links over time.</p>
      </div>
      <UrlTable />
    </div>
  );
}

function AnalyticsSection() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-2xl font-bold">Analytics Overview</h3>
        <p className="text-muted-foreground mt-1">Track how your links are performing.</p>
      </div>
      <DashboardStats />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-[hsl(180,66%,49%)]" />
            Performance Insights
          </CardTitle>
          <CardDescription>Detailed breakdown of your link activity.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Top Performing Link", value: "See in My Links", icon: <Link2 className="h-4 w-4" /> },
              { label: "Peak Click Time", value: "Check your links", icon: <Clock className="h-4 w-4" /> },
              { label: "Avg. Clicks / Link", value: "In stats above", icon: <BarChart3 className="h-4 w-4" /> },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-lg border p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(180,66%,49%)]/10 text-[hsl(180,66%,49%)]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingsSection() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-2xl font-bold">Settings</h3>
        <p className="text-muted-foreground mt-1">Manage your account preferences.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <User className="h-4 w-4 text-[hsl(180,66%,49%)]" />
              Profile Information
            </CardTitle>
            <CardDescription>Update your personal details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={user?.name || ""} placeholder="Your name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" defaultValue={user?.email || ""} type="email" placeholder="your@email.com" />
            </div>
            <Button className="bg-[hsl(180,66%,49%)] hover:bg-[hsl(180,66%,42%)] text-white">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="h-4 w-4 text-[hsl(180,66%,49%)]" />
              Security
            </CardTitle>
            <CardDescription>Keep your account secure.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="current-pw">Current Password</Label>
              <Input id="current-pw" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="new-pw">New Password</Label>
              <Input id="new-pw" type="password" placeholder="••••••••" />
            </div>
            <Button className="bg-[hsl(180,66%,49%)] hover:bg-[hsl(180,66%,42%)] text-white">
              Update Password
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Bell className="h-4 w-4 text-[hsl(180,66%,49%)]" />
              Notifications
            </CardTitle>
            <CardDescription>Choose what you get notified about.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { label: "Link click milestones", desc: "Get notified at 100, 500, 1000 clicks" },
                { label: "Weekly summary", desc: "A weekly digest of your link performance" },
                { label: "Security alerts", desc: "Important account activity notifications" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 accent-[hsl(180,66%,49%)]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function HomeSection({ onShortened, onNavigate }: { onShortened: () => void; onNavigate: (s: DashboardSection) => void }) {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-2xl font-bold">Welcome back!</h3>
        <p className="text-muted-foreground mt-1">Shorten links, track performance and manage your URLs.</p>
      </div>
      <UrlShortenerForm onShortened={onShortened} />
      <DashboardStats />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            section: "my-links" as DashboardSection,
            icon: <Link2 className="h-6 w-6" />,
            title: "My Links",
            desc: "View and manage all your shortened URLs",
          },
          {
            section: "analytics" as DashboardSection,
            icon: <BarChart3 className="h-6 w-6" />,
            title: "Analytics",
            desc: "See detailed stats on link performance",
          },
          {
            section: "settings" as DashboardSection,
            icon: <Settings className="h-6 w-6" />,
            title: "Settings",
            desc: "Manage your profile and preferences",
          },
        ].map((item) => (
          <Card
            key={item.section}
            className="cursor-pointer transition-all hover:shadow-md hover:border-[hsl(180,66%,49%)] group"
            onClick={() => onNavigate(item.section)}
          >
            <CardContent className="flex flex-col items-start gap-3 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(180,66%,49%)]/10 text-[hsl(180,66%,49%)] group-hover:bg-[hsl(180,66%,49%)] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MyLinksSection({ onShortened }: { onShortened: () => void }) {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-2xl font-bold">My Links</h3>
        <p className="text-muted-foreground mt-1">All your shortened URLs in one place.</p>
      </div>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Zap className="h-4 w-4 text-[hsl(180,66%,49%)]" />
            Shorten a new link
          </CardTitle>
        </CardHeader>
        <CardContent>
          <UrlShortenerForm onShortened={onShortened} />
        </CardContent>
      </Card>
      <Separator />
      <UrlTable />
    </div>
  );
}

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState<DashboardSection>("home");
  const refreshRef = useRef<(() => void) | null>(null);

  const handleShortened = useCallback(() => {
    if (refreshRef.current) refreshRef.current();
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onShortened={handleShortened} onNavigate={setActiveSection} />;
      case "my-links":
        return <MyLinksSection onShortened={handleShortened} />;
      case "analytics":
        return <AnalyticsSection />;
      case "history":
        return <HistorySection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <HomeSection onShortened={handleShortened} onNavigate={setActiveSection} />;
    }
  };

  return (
    <DashboardShell activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderSection()}
    </DashboardShell>
  );
}


