import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, UserPlus } from "lucide-react"
import { TeamMembers } from "@/components/team/team-members"
import { TeamInvites } from "@/components/team/team-invites"
import { TeamActivity } from "@/components/team/team-activity"

export const metadata: Metadata = {
  title: "Team - Tomato Disease Detection",
  description: "Manage your team members and permissions",
}

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Team Management</h2>
          <p className="text-muted-foreground">Manage team members, roles, and permissions</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Overview</CardTitle>
          <CardDescription>Your team has 5 members and 2 pending invitations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="grid gap-2">
              <Label htmlFor="search-members">Search</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search-members"
                  type="search"
                  placeholder="Search by name or email..."
                  className="pl-8 w-full md:w-[300px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Export Team
              </Button>
              <Button variant="outline" size="sm">
                Manage Roles
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="members" className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="invites">Pending Invites</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
        </TabsList>
        <TabsContent value="members" className="space-y-4">
          <TeamMembers />
        </TabsContent>
        <TabsContent value="invites" className="space-y-4">
          <TeamInvites />
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <TeamActivity />
        </TabsContent>
      </Tabs>
    </div>
  )
}

