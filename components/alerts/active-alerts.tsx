import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowRight, Check, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ActiveAlerts() {
  const alerts = [
    {
      id: "A001",
      title: "Early Blight Detected",
      description: "Early blight detected in Field A, North Section with high confidence (92%).",
      timestamp: "2 hours ago",
      severity: "high",
      field: "Field A",
      section: "North",
      disease: "Early Blight",
      recommendations: [
        "Apply fungicide treatment within 24 hours",
        "Increase plant spacing to improve air circulation",
        "Remove and destroy infected leaves",
      ],
    },
    {
      id: "A002",
      title: "Late Blight Risk Increasing",
      description:
        "Weather conditions in Field B are favorable for late blight development. Preventative action recommended.",
      timestamp: "5 hours ago",
      severity: "medium",
      field: "Field B",
      section: "All Sections",
      disease: "Late Blight (Risk)",
      recommendations: [
        "Apply preventative fungicide treatment",
        "Monitor closely over the next 48 hours",
        "Ensure proper drainage in field",
      ],
    },
    {
      id: "A003",
      title: "Unusual Leaf Pattern Detected",
      description: "Unidentified leaf pattern detected in Greenhouse, Row 3. Manual inspection required.",
      timestamp: "1 day ago",
      severity: "low",
      field: "Greenhouse",
      section: "Row 3",
      disease: "Unknown",
      recommendations: [
        "Conduct manual inspection of affected plants",
        "Take additional high-resolution images",
        "Isolate affected plants if necessary",
      ],
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <Card key={alert.id} className={alert.severity === "high" ? "border-destructive" : ""}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle
                  className={`h-5 w-5 ${alert.severity === "high" ? "text-destructive" : alert.severity === "medium" ? "text-amber-500" : "text-blue-500"}`}
                />
                <CardTitle>{alert.title}</CardTitle>
              </div>
              <Badge variant={getSeverityColor(alert.severity)}>
                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)} Severity
              </Badge>
            </div>
            <CardDescription>{alert.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="text-sm font-medium">Alert Details</div>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  <div className="text-muted-foreground">Alert ID:</div>
                  <div>{alert.id}</div>
                  <div className="text-muted-foreground">Location:</div>
                  <div>
                    {alert.field}, {alert.section}
                  </div>
                  <div className="text-muted-foreground">Disease:</div>
                  <div>{alert.disease}</div>
                  <div className="text-muted-foreground">Detected:</div>
                  <div>{alert.timestamp}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Recommended Actions</div>
                <ul className="space-y-1 text-sm">
                  {alert.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-0.5 h-4 w-4 text-primary">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <Check className="mr-2 h-4 w-4" />
              Mark as Resolved
            </Button>
            <Button size="sm" asChild>
              <Link href={`/dashboard/results?field=${alert.field}&section=${alert.section}`}>
                View Analysis
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

