"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Download, FileText, Plus, RefreshCw } from "lucide-react"

export function BillingSettings() {
  const invoices = [
    {
      id: "INV-001",
      date: "Mar 01, 2025",
      amount: "$49.00",
      status: "paid",
    },
    {
      id: "INV-002",
      date: "Feb 01, 2025",
      amount: "$49.00",
      status: "paid",
    },
    {
      id: "INV-003",
      date: "Jan 01, 2025",
      amount: "$49.00",
      status: "paid",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>Manage your subscription and billing information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium">Professional Plan</h3>
              <p className="text-sm text-muted-foreground">$49/month, billed monthly</p>
            </div>
            <Badge className="w-fit">Active</Badge>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Analysis Credits</span>
              <span>750 / 1000 remaining</span>
            </div>
            <Progress value={75} />
            <p className="text-xs text-muted-foreground">Credits reset on April 1, 2025</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Storage</span>
              <span>2.3 GB / 5 GB used</span>
            </div>
            <Progress value={46} />
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button>
              <RefreshCw className="mr-2 h-4 w-4" />
              Upgrade Plan
            </Button>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Buy Additional Credits
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Manage your payment methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-2">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 04/2026</p>
              </div>
            </div>
            <Badge variant="outline">Default</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          <Button>
            <CreditCard className="mr-2 h-4 w-4" />
            Update Payment Method
          </Button>
          <Button variant="outline">Billing Address</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View and download your invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={invoice.status === "paid" ? "outline" : "destructive"}
                      className={invoice.status === "paid" ? "text-green-500" : ""}
                    >
                      {invoice.status === "paid" ? "Paid" : "Unpaid"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download invoice</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            View All Invoices
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

