import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronDown, Shield, ShieldAlert, Trash2, UserCheck, UserMinus, UserPlus } from "lucide-react"

export function TeamActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JD",
      },
      action: "added",
      target: "Elena Rodriguez",
      details: "as Manager",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JD",
      },
      action: "changed",
      target: "Michael Chen",
      details: "role from Viewer to Analyst",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      user: {
        name: "Elena Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
      },
      action: "invited",
      target: "david.smith@example.com",
      details: "as Analyst",
      timestamp: "2 days ago",
    },
    {
      id: 4,
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JD",
      },
      action: "removed",
      target: "Alex Johnson",
      details: "from the team",
      timestamp: "1 week ago",
    },
    {
      id: 5,
      user: {
        name: "System",
        avatar: "",
        initials: "SYS",
      },
      action: "expired",
      target: "maria.garcia@example.com",
      details: "invitation",
      timestamp: "2 weeks ago",
    },
  ]

  const getActionIcon = (action: string) => {
    switch (action) {
      case "added":
        return <UserCheck className="h-4 w-4 text-green-500" />
      case "invited":
        return <UserPlus className="h-4 w-4 text-blue-500" />
      case "changed":
        return <Shield className="h-4 w-4 text-amber-500" />
      case "removed":
        return <UserMinus className="h-4 w-4 text-red-500" />
      case "expired":
        return <Trash2 className="h-4 w-4 text-gray-500" />
      default:
        return <ShieldAlert className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.id} className="flex">
              <div className="relative mr-4">
                <Avatar>
                  {activity.user.avatar ? <AvatarImage src={activity.user.avatar} alt={activity.user.name} /> : null}
                  <AvatarFallback>{activity.user.initials}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 rounded-full bg-background p-0.5">
                  <div className="rounded-full bg-card p-1">{getActionIcon(activity.action)}</div>
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-semibold">{activity.target}</span>{" "}
                  <span className="text-muted-foreground">{activity.details}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline">
            Load More
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

