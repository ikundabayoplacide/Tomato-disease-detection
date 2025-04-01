"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Upload, BarChart3, History, Bell, Users, Settings } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: LayoutDashboard,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/upload",
      label: "Upload Images",
      icon: Upload,
      active: pathname === "/dashboard/upload",
    },
    {
      href: "/dashboard/results",
      label: "Results",
      icon: BarChart3,
      active: pathname === "/dashboard/results",
    },
    {
      href: "/dashboard/history",
      label: "History",
      icon: History,
      active: pathname === "/dashboard/history",
    },
    {
      href: "/dashboard/alerts",
      label: "Alerts",
      icon: Bell,
      active: pathname === "/dashboard/alerts",
    },
    {
      href: "/dashboard/team",
      label: "Team",
      icon: Users,
      active: pathname === "/dashboard/team",
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <nav className="grid items-start gap-2 px-2 py-4">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant={route.active ? "secondary" : "ghost"}
            className={cn("w-full justify-start", {
              "bg-muted": route.active,
            })}
          >
            <route.icon className="mr-2 h-4 w-4" />
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  )
}

