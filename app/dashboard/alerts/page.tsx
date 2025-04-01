import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { AlertCircle, Bell, BellOff, Check, Info, Settings } from "lucide-react"
import { ActiveAlerts } from "@/components/alerts/active-alerts"
import { AlertHistory } from "@/components/alerts/alert-history"
import { AlertSettings } from "@/components/alerts/alert-settings"

export const metadata: Metadata = {
  title: "Alerts - Tomato Disease Detection",
  description: "Manage and view alerts for tomato disease detection",
}

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Alerts</h2>
          <p className="text-muted-foreground">Manage notifications and alerts for disease detection</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <BellOff className="mr-2 h-4 w-4" />
            Mute All
          </Button>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Requiring attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved This Week</CardTitle>
            <Check className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alert Rate</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12%</div>
            <p className="text-xs text-muted-foreground">Of all analyses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notification Status</CardTitle>
            <Bell className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Switch id="notification-status" defaultChecked />
              <Label htmlFor="notification-status">Enabled</Label>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Email, SMS, and push</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Alerts</TabsTrigger>
          <TabsTrigger value="history">Alert History</TabsTrigger>
          <TabsTrigger value="settings">Alert Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <ActiveAlerts />
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <AlertHistory />
        </TabsContent>
        <TabsContent value="settings" className="space-y-4">
          <AlertSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

