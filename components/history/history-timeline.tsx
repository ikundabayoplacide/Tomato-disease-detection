import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Eye } from "lucide-react"
import Link from "next/link"

export function HistoryTimeline() {
  const timelineData = [
    {
      date: "March 28, 2025",
      events: [
        {
          id: "R001",
          time: "10:23 AM",
          field: "Field A",
          section: "North",
          disease: "Early Blight",
          confidence: "High (92%)",
          status: "Detected",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "R002",
          time: "10:45 AM",
          field: "Field A",
          section: "East",
          disease: "Healthy",
          confidence: "High (95%)",
          status: "Healthy",
          image: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    {
      date: "March 27, 2025",
      events: [
        {
          id: "R003",
          time: "2:15 PM",
          field: "Field B",
          section: "Center",
          disease: "Late Blight",
          confidence: "Medium (78%)",
          status: "Detected",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "R004",
          time: "3:30 PM",
          field: "Greenhouse",
          section: "Row 3",
          disease: "Leaf Mold",
          confidence: "High (89%)",
          status: "Detected",
          image: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    {
      date: "March 26, 2025",
      events: [
        {
          id: "R005",
          time: "9:10 AM",
          field: "Field C",
          section: "South",
          disease: "Healthy",
          confidence: "High (97%)",
          status: "Healthy",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "R006",
          time: "11:45 AM",
          field: "Field A",
          section: "West",
          disease: "Septoria Leaf Spot",
          confidence: "High (91%)",
          status: "Detected",
          image: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {timelineData.map((day, dayIndex) => (
        <div key={dayIndex} className="space-y-2">
          <h3 className="font-medium text-lg">{day.date}</h3>
          <div className="space-y-3">
            {day.events.map((event, eventIndex) => (
              <Card key={eventIndex}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={event.image} alt={event.field} />
                      <AvatarFallback>IMG</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">
                          {event.field} - {event.section}
                        </div>
                        <div className="text-sm text-muted-foreground">{event.time}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant={event.status === "Healthy" ? "outline" : "destructive"}>
                            {event.disease}
                          </Badge>
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <Button variant="outline">
          Load More
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

