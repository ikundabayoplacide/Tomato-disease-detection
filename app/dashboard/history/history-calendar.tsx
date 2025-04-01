"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"
import Link from "next/link"

export function HistoryCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Sample data for the selected date
  const eventsForSelectedDate = [
    {
      id: "R001",
      time: "10:23 AM",
      field: "Field A",
      section: "North",
      disease: "Early Blight",
      confidence: "High (92%)",
      status: "Detected",
    },
    {
      id: "R002",
      time: "10:45 AM",
      field: "Field A",
      section: "East",
      disease: "Healthy",
      confidence: "High (95%)",
      status: "Healthy",
    },
  ]

  // Sample data for highlighting dates with events
  const highlightedDates = [
    new Date(2025, 2, 26), // March 26, 2025
    new Date(2025, 2, 27), // March 27, 2025
    new Date(2025, 2, 28), // March 28, 2025
    new Date(), // Today
  ]

  // Function to check if a date has events
  const hasEvents = (day: Date) => {
    return highlightedDates.some((d) => d.toDateString() === day.toDateString())
  }

  return (
    <div className="grid gap-6 md:grid-cols-[300px_1fr]">
      <Card>
        <CardContent className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate)
              setSelectedDate(newDate)
            }}
            className="rounded-md border"
            modifiers={{
              hasEvents: highlightedDates,
            }}
            modifiersStyles={{
              hasEvents: {
                fontWeight: "bold",
                backgroundColor: "hsl(var(--primary) / 0.1)",
                color: "hsl(var(--primary))",
              },
            }}
          />
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg">
            {selectedDate?.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                if (selectedDate) {
                  const newDate = new Date(selectedDate)
                  newDate.setDate(newDate.getDate() - 1)
                  setDate(newDate)
                  setSelectedDate(newDate)
                }
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous day</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                if (selectedDate) {
                  const newDate = new Date(selectedDate)
                  newDate.setDate(newDate.getDate() + 1)
                  setDate(newDate)
                  setSelectedDate(newDate)
                }
              }}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next day</span>
            </Button>
          </div>
        </div>

        {eventsForSelectedDate.length > 0 ? (
          <div className="space-y-3">
            {eventsForSelectedDate.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      {event.field} - {event.section}
                    </div>
                    <div className="text-sm text-muted-foreground">{event.time}</div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={event.status === "Healthy" ? "outline" : "destructive"}>{event.disease}</Badge>
                      <span className="text-sm text-muted-foreground">Confidence: {event.confidence}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">ID: {event.id}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <Link href={`/dashboard/results/${event.id}`}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No analysis data available for this date.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

