import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mail, RefreshCcw, Trash2, UserPlus } from "lucide-react"

export function TeamInvites() {
  const invites = [
    {
      id: 1,
      email: "david.smith@example.com",
      role: "Analyst",
      sent: "2 days ago",
      expires: "5 days remaining",
    },
    {
      id: 2,
      email: "lisa.wong@example.com",
      role: "Scientist",
      sent: "1 week ago",
      expires: "1 day remaining",
    },
  ]

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Invite New Team Member</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="grid gap-2 flex-1">
                <label htmlFor="invite-email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="invite-email"
                  type="email"
                  placeholder="colleague@example.com"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2 w-full md:w-[200px]">
                <label htmlFor="invite-role" className="text-sm font-medium">
                  Role
                </label>
                <select
                  id="invite-role"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="viewer">Viewer</option>
                  <option value="analyst">Analyst</option>
                  <option value="scientist">Scientist</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Send Invite
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <h3 className="text-lg font-medium mt-6">Pending Invitations</h3>

      {invites.length > 0 ? (
        <div className="space-y-4">
          {invites.map((invite) => (
            <Card key={invite.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium">{invite.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{invite.role}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          Sent {invite.sent}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:ml-auto">
                    <span className="text-xs text-amber-600 dark:text-amber-400">Expires in {invite.expires}</span>
                    <Button variant="outline" size="sm">
                      <RefreshCcw className="mr-2 h-3 w-3" />
                      Resend
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="mr-2 h-3 w-3" />
                      Cancel
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
            <p className="text-muted-foreground">No pending invitations</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

