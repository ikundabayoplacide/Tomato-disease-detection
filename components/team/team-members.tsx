import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, MoreHorizontal, Shield, ShieldAlert, ShieldCheck, Trash2, UserCog } from "lucide-react"

export function TeamMembers() {
  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JD",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      email: "elena.rodriguez@example.com",
      role: "Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
      lastActive: "Just now",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      role: "Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
      lastActive: "1 day ago",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "Scientist",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
      lastActive: "3 hours ago",
    },
    {
      id: 5,
      name: "James Wilson",
      email: "james.wilson@example.com",
      role: "Viewer",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JW",
      lastActive: "5 days ago",
    },
  ]

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300">
            <ShieldAlert className="mr-1 h-3 w-3" />
            Admin
          </Badge>
        )
      case "Manager":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900 dark:text-amber-300">
            <ShieldCheck className="mr-1 h-3 w-3" />
            Manager
          </Badge>
        )
      case "Analyst":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
            <UserCog className="mr-1 h-3 w-3" />
            Analyst
          </Badge>
        )
      case "Scientist":
        return (
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300">
            <Shield className="mr-1 h-3 w-3" />
            Scientist
          </Badge>
        )
      default:
        return <Badge variant="outline">Viewer</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {members.map((member) => (
        <Card key={member.id}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                  <div className="flex items-center pt-2">
                    {getRoleBadge(member.role)}
                    <span className="text-xs text-muted-foreground ml-2">Active {member.lastActive}</span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Member
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Shield className="mr-2 h-4 w-4" />
                    Change Role
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove Member
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

