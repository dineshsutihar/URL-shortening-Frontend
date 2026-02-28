"use client";

import type React from "react";
import {
  BarChart3,
  Settings,
  Link2,
  History,
  Home,
  Bell,
  MenuIcon,
  LogOut,
  Zap,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { useNavigate } from "react-router-dom";

export type DashboardSection = "home" | "my-links" | "analytics" | "history" | "settings";

interface DashboardShellProps {
  children: React.ReactNode;
  activeSection: DashboardSection;
  onSectionChange: (section: DashboardSection) => void;
}

const sectionLabels: Record<DashboardSection, string> = {
  home: "Dashboard",
  "my-links": "My Links",
  analytics: "Analytics",
  history: "History",
  settings: "Settings",
};

export function DashboardShell({ children, activeSection, onSectionChange }: DashboardShellProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  const navItems: { section: DashboardSection; icon: React.ReactNode; label: string }[] = [
    { section: "home", icon: <Home className="h-4 w-4" />, label: "Dashboard" },
    { section: "my-links", icon: <Link2 className="h-4 w-4" />, label: "My Links" },
    { section: "analytics", icon: <BarChart3 className="h-4 w-4" />, label: "Analytics" },
    { section: "history", icon: <History className="h-4 w-4" />, label: "History" },
    { section: "settings", icon: <Settings className="h-4 w-4" />, label: "Settings" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(180,66%,49%)]">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-bold">Shortly</h1>
            </div>
          </SidebarHeader>
          <SidebarContent className="overflow-y-auto px-2 py-4">
            <SidebarMenu className="space-y-1">
              {navItems.map(({ section, icon, label }) => (
                <SidebarMenuItem key={section}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(section)}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all
                      ${activeSection === section
                        ? "bg-[hsl(180,66%,49%)] text-white shadow-sm hover:bg-[hsl(180,66%,42%)]"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                  >
                    {icon}
                    {label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarFallback className="bg-[hsl(180,66%,49%)] text-white text-xs">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-medium truncate">{user?.name || "User"}</span>
                  <span className="text-xs text-muted-foreground truncate">{user?.email || ""}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout" className="shrink-0">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/95 backdrop-blur px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger>
                <MenuIcon className="h-5 w-5" />
              </SidebarTrigger>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">{sectionLabels[activeSection]}</h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarFallback className="bg-[hsl(180,66%,49%)] text-white text-xs">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-muted/30">
            <div className="mx-auto max-w-6xl">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}