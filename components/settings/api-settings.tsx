"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Copy, Eye, EyeOff, Key, RefreshCw, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ApiSettings() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKey, setApiKey] = useState("sk_live_TomGuard_2025_XYZ123456789ABCDEF")

  const apiKeys = [
    {
      id: "key_1",
      name: "Production API Key",
      lastUsed: "2 hours ago",
      created: "Mar 15, 2025",
      status: "active",
    },
    {
      id: "key_2",
      name: "Development API Key",
      lastUsed: "1 day ago",
      created: "Feb 20, 2025",
      status: "active",
    },
    {
      id: "key_3",
      name: "Testing API Key",
      lastUsed: "Never",
      created: "Jan 10, 2025",
      status: "inactive",
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
  }

  const regenerateApiKey = () => {
    // In a real app, this would call an API to regenerate the key
    setApiKey("sk_live_TomGuard_2025_" + Math.random().toString(36).substring(2, 15))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API Access</CardTitle>
          <CardDescription>Manage your API keys and access to the Tomato Disease Detection API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">Your API Key</Label>
            <div className="flex">
              <div className="relative flex-1">
                <Input id="api-key" type={showApiKey ? "text" : "password"} value={apiKey} readOnly className="pr-10" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">{showApiKey ? "Hide API key" : "Show API key"}</span>
                </Button>
              </div>
              <Button variant="outline" className="ml-2" onClick={copyToClipboard}>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              This key grants full access to the API. Keep it secure and never share it publicly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate Key
            </Button>
            <Button variant="outline" className="text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Revoke Key
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>Manage all your API keys</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell className="font-medium">{key.name}</TableCell>
                  <TableCell>{key.created}</TableCell>
                  <TableCell>{key.lastUsed}</TableCell>
                  <TableCell>
                    <Badge variant={key.status === "active" ? "default" : "secondary"}>
                      {key.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Key className="h-4 w-4" />
                      <span className="sr-only">Manage key</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button>
            <Key className="mr-2 h-4 w-4" />
            Create New API Key
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>Resources to help you integrate with our API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">Learn the basics of integrating with our API</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="link" className="px-0">
                  View Documentation
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">API Reference</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">Complete reference for all API endpoints</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="link" className="px-0">
                  View Reference
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Code Examples</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">Sample code in various programming languages</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="link" className="px-0">
                  View Examples
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Webhooks</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">Set up webhooks to receive real-time updates</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="link" className="px-0">
                  Configure Webhooks
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

