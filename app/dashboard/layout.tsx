import type React from "react"
import type { Metadata } from "next"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"

export const metadata: Metadata = {
  title: "Dashboard - Tomato Disease Detection",
  description: "Manage your tomato disease detection analysis and results",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b px-2 py-4">
            <div className="flex-1">
              <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage your tomato disease detection analysis and results</p>
            </div>
            <UserNav />
          </div>
          <div className="p-4 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

