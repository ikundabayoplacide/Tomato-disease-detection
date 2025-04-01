import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Search } from "lucide-react"
import { HistoryTimeline } from "@/components/history/history-timeline"
import { HistoryCalendar } from "@/components/history/history-calendar"
import { HistoryChart } from "@/components/history/history-chart"

export const metadata: Metadata = {
  title: "History - Tomato Disease Detection",
  description: "View historical data and trends of your tomato disease detection analyses",
}

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Analysis History</h2>
          <p className="text-muted-foreground">View and analyze your historical disease detection data</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
          <CardDescription>Narrow down your history by date, field, or disease type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="grid gap-2">
              <Label htmlFor="date-range">Date Range</Label>
              <Select defaultValue="30">
                <SelectTrigger id="date-range">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                  <SelectItem value="custom">Custom range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="field">Field</Label>
              <Select defaultValue="all">
                <SelectTrigger id="field">
                  <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fields</SelectItem>
                  <SelectItem value="field-a">Field A</SelectItem>
                  <SelectItem value="field-b">Field B</SelectItem>
                  <SelectItem value="field-c">Field C</SelectItem>
                  <SelectItem value="greenhouse">Greenhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="disease">Disease</Label>
              <Select defaultValue="all">
                <SelectTrigger id="disease">
                  <SelectValue placeholder="Select disease" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Diseases</SelectItem>
                  <SelectItem value="early-blight">Early Blight</SelectItem>
                  <SelectItem value="late-blight">Late Blight</SelectItem>
                  <SelectItem value="leaf-mold">Leaf Mold</SelectItem>
                  <SelectItem value="septoria">Septoria Leaf Spot</SelectItem>
                  <SelectItem value="healthy">Healthy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" type="search" placeholder="Search by ID or notes..." className="pl-8" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="timeline" className="space-y-4">
        <TabsList>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline" className="space-y-4">
          <HistoryTimeline />
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <HistoryCalendar />
        </TabsContent>
        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Disease Trends Over Time</CardTitle>
              <CardDescription>Visualize how disease detection has changed over the selected period</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[400px]">
                <HistoryChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

