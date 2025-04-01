"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { Bell, Mail, Save, Smartphone } from "lucide-react"

export function AlertSettings() {
  const [emailEnabled, setEmailEnabled] = useState(true)
  const [smsEnabled, setSmsEnabled] = useState(true)
  const [pushEnabled, setPushEnabled] = useState(true)
  const [threshold, setThreshold] = useState([75])

  return (
    <Tabs defaultValue="notifications" className="space-y-4">
      <TabsList>
        <TabsTrigger value="notifications">Notification Channels</TabsTrigger>
        <TabsTrigger value="thresholds">Alert Thresholds</TabsTrigger>
        <TabsTrigger value="schedule">Alert Schedule</TabsTrigger>
      </TabsList>

      <TabsContent value="notifications" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Notification Channels</CardTitle>
            <CardDescription>Configure how you want to receive alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <Label htmlFor="email-notifications" className="text-base">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive alerts via email</p>
                </div>
              </div>
              <Switch id="email-notifications" checked={emailEnabled} onCheckedChange={setEmailEnabled} />
            </div>

            {emailEnabled && (
              <div className="ml-9 space-y-4 border-l pl-4">
                <div className="grid gap-2">
                  <Label htmlFor="email-address">Email Address</Label>
                  <Input id="email-address" placeholder="your.email@example.com" defaultValue="john.doe@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email-frequency">Frequency</Label>
                  <Select defaultValue="immediate">
                    <SelectTrigger id="email-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="hourly">Hourly Digest</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-4">
                <Smartphone className="h-5 w-5 text-primary" />
                <div>
                  <Label htmlFor="sms-notifications" className="text-base">
                    SMS Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive alerts via text message</p>
                </div>
              </div>
              <Switch id="sms-notifications" checked={smsEnabled} onCheckedChange={setSmsEnabled} />
            </div>

            {smsEnabled && (
              <div className="ml-9 space-y-4 border-l pl-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input id="phone-number" placeholder="+1 (555) 123-4567" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sms-severity">Minimum Severity</Label>
                  <Select defaultValue="high">
                    <SelectTrigger id="sms-severity">
                      <SelectValue placeholder="Select minimum severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High Only</SelectItem>
                      <SelectItem value="medium">Medium and Above</SelectItem>
                      <SelectItem value="all">All Alerts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-4">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <Label htmlFor="push-notifications" className="text-base">
                    Push Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive alerts on your devices</p>
                </div>
              </div>
              <Switch id="push-notifications" checked={pushEnabled} onCheckedChange={setPushEnabled} />
            </div>

            {pushEnabled && (
              <div className="ml-9 space-y-4 border-l pl-4">
                <div className="grid gap-2">
                  <Label htmlFor="push-devices">Devices</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="push-devices">
                      <SelectValue placeholder="Select devices" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Devices</SelectItem>
                      <SelectItem value="mobile">Mobile Only</SelectItem>
                      <SelectItem value="desktop">Desktop Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Notification Settings
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="thresholds" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Alert Thresholds</CardTitle>
            <CardDescription>Configure when alerts should be triggered</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="confidence-threshold" className="text-base">
                  Confidence Threshold: {threshold}%
                </Label>
                <p className="text-sm text-muted-foreground mb-4">
                  Only generate alerts when disease detection confidence is above this threshold
                </p>
                <Slider
                  id="confidence-threshold"
                  min={50}
                  max={95}
                  step={5}
                  value={threshold}
                  onValueChange={setThreshold}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>50%</span>
                  <span>75%</span>
                  <span>95%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base">Disease Severity Settings</Label>
              <div className="space-y-2">
                {[
                  { id: "early-blight", name: "Early Blight", defaultSeverity: "high" },
                  { id: "late-blight", name: "Late Blight", defaultSeverity: "high" },
                  { id: "leaf-mold", name: "Leaf Mold", defaultSeverity: "medium" },
                  { id: "septoria", name: "Septoria Leaf Spot", defaultSeverity: "medium" },
                  { id: "unknown", name: "Unknown Patterns", defaultSeverity: "low" },
                ].map((disease) => (
                  <div key={disease.id} className="flex items-center justify-between">
                    <Label htmlFor={`severity-${disease.id}`}>{disease.name}</Label>
                    <Select defaultValue={disease.defaultSeverity}>
                      <SelectTrigger id={`severity-${disease.id}`} className="w-[180px]">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="ignore">Ignore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Threshold Settings
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="schedule" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Alert Schedule</CardTitle>
            <CardDescription>Configure when alerts can be sent</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label htmlFor="quiet-hours" className="text-base">
                    Quiet Hours
                  </Label>
                  <p className="text-sm text-muted-foreground">Suppress non-critical alerts during specified hours</p>
                </div>
                <Switch id="quiet-hours" defaultChecked />
              </div>

              <div className="grid gap-4 grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="quiet-start">Start Time</Label>
                  <Select defaultValue="22">
                    <SelectTrigger id="quiet-start">
                      <SelectValue placeholder="Select start time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i.toString().padStart(2, "0")}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="quiet-end">End Time</Label>
                  <Select defaultValue="7">
                    <SelectTrigger id="quiet-end">
                      <SelectValue placeholder="Select end time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i.toString().padStart(2, "0")}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-base">Alert Days</Label>
                <p className="text-sm text-muted-foreground mb-4">Select days when alerts should be active</p>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day} className="flex flex-col items-center gap-1.5">
                    <Label htmlFor={`day-${day}`}>{day}</Label>
                    <Switch id={`day-${day}`} defaultChecked={day !== "Sat" && day !== "Sun"} />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Schedule Settings
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

