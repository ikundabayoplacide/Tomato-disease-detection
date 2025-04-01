import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Download } from "lucide-react"

export function ResultsGrid() {
  const results = [
    {
      id: "R001",
      date: "2025-03-28",
      field: "Field A",
      section: "North",
      disease: "Early Blight",
      confidence: "High (92%)",
      status: "Detected",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "R002",
      date: "2025-03-28",
      field: "Field A",
      section: "East",
      disease: "Healthy",
      confidence: "High (95%)",
      status: "Healthy",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "R003",
      date: "2025-03-27",
      field: "Field B",
      section: "Center",
      disease: "Late Blight",
      confidence: "Medium (78%)",
      status: "Detected",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "R004",
      date: "2025-03-27",
      field: "Greenhouse",
      section: "Row 3",
      disease: "Leaf Mold",
      confidence: "High (89%)",
      status: "Detected",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "R005",
      date: "2025-03-26",
      field: "Field C",
      section: "South",
      disease: "Healthy",
      confidence: "High (97%)",
      status: "Healthy",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "R006",
      date: "2025-03-26",
      field: "Field A",
      section: "West",
      disease: "Septoria Leaf Spot",
      confidence: "High (91%)",
      status: "Detected",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <Card key={result.id} className="overflow-hidden">
          <div className="aspect-square relative">
            <Image
              src={result.image || "/placeholder.svg"}
              alt={`Image for ${result.id}`}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge
                variant={result.status === "Healthy" ? "outline" : "destructive"}
                className="bg-background/80 backdrop-blur-sm"
              >
                {result.status}
              </Badge>
            </div>
          </div>
          <CardHeader className="p-4">
            <CardTitle className="text-lg flex justify-between items-center">
              <span>{result.disease}</span>
              <span className="text-sm font-normal text-muted-foreground">{result.id}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span>{result.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span>
              <span>
                {result.field}, {result.section}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Confidence:</span>
              <span>{result.confidence}</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 flex gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Report
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

