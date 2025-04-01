import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, XCircle } from "lucide-react"

export function RecentUploads() {
  const uploads = [
    {
      id: 1,
      name: "Field A - North Section",
      timestamp: "2 hours ago",
      status: "completed",
      result: "Healthy",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Field A - East Section",
      timestamp: "3 hours ago",
      status: "completed",
      result: "Early Blight",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Field B - Center",
      timestamp: "5 hours ago",
      status: "completed",
      result: "Healthy",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Greenhouse - Row 3",
      timestamp: "Just now",
      status: "processing",
      result: null,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Field C - South Corner",
      timestamp: "1 day ago",
      status: "failed",
      result: null,
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-4">
      {uploads.map((upload) => (
        <div key={upload.id} className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={upload.image} alt={upload.name} />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{upload.name}</p>
            <p className="text-xs text-muted-foreground">{upload.timestamp}</p>
          </div>
          <div className="flex items-center gap-2">
            {upload.status === "completed" && (
              <>
                <Badge variant={upload.result === "Healthy" ? "outline" : "destructive"}>{upload.result}</Badge>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </>
            )}
            {upload.status === "processing" && (
              <>
                <Badge variant="secondary">Processing</Badge>
                <Clock className="h-4 w-4 text-yellow-500 animate-pulse" />
              </>
            )}
            {upload.status === "failed" && (
              <>
                <Badge variant="outline">Failed</Badge>
                <XCircle className="h-4 w-4 text-red-500" />
              </>
            )}
          </div>
        </div>
      ))}
      <Button variant="outline" size="sm" className="w-full">
        View All Uploads
      </Button>
    </div>
  )
}

