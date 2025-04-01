"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Bell, Mail, Save, Smartphone } from "lucide-react"

export function NotificationSettings() {
  const [emailEnabled, setEmailEnabled] = useState(true)
  const [smsEnabled, setSmsEnabled] = useState(true)
  const [pushEnabled, setPushEnabled] = useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Configure how you want to receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <Label htmlFor="email-notifications" className="text-base">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
            </div>
            <Switch id="email-notifications" checked={emailEnabled} onCheckedChange={setEmailEnabled} />
          </div>

          {emailEnabled && (
            <div className="ml-9 space-y-4 border-l pl-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-disease-alerts">Disease Alerts</Label>
                <Switch id="email-disease-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-system-updates">System Updates</Label>
                <Switch id="email-system-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-weekly-reports">Weekly Reports</Label>
                <Switch id="email-weekly-reports" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-team-activity">Team Activity</Label>
                <Switch id="email-team-activity" defaultChecked />
              </div>
            </div>
          )}
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-4">
              <Smartphone className="h-5 w-5 text-primary" />
              <div>
                <Label htmlFor="sms-notifications" className="text-base">
                  SMS Notifications
                </Label>
                <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
              </div>
            </div>
            <Switch id="sms-notifications" checked={smsEnabled} onCheckedChange={setSmsEnabled} />
          </div>

          {smsEnabled && (
            <div className="ml-9 space-y-4 border-l pl-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-critical-alerts">Critical Alerts Only</Label>
                <Switch id="sms-critical-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-system-outages">System Outages</Label>
                <Switch id="sms-system-outages" defaultChecked />
              </div>
            </div>
          )}
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-primary" />
              <div>
                <Label htmlFor="push-notifications" className="text-base">
                  Push Notifications
                </Label>
                <p className="text-sm text-muted-foreground">Receive notifications on your devices</p>
              </div>
            </div>
            <Switch id="push-notifications" checked={pushEnabled} onCheckedChange={setPushEnabled} />
          </div>

          {pushEnabled && (
            <div className="ml-9 space-y-4 border-l pl-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="push-disease-alerts">Disease Alerts</Label>
                <Switch id="push-disease-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-analysis-complete">Analysis Complete</Label>
                <Switch id="push-analysis-complete" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-team-mentions">Team Mentions</Label>
                <Switch id="push-team-mentions" defaultChecked />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Notification Settings
        </Button>
      </CardFooter>
    </Card>
  )
}

