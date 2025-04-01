"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ResultsTable() {
  const results = [
    {
      id: "R001",
      date: "2025-03-28",
      field: "Field A",
      section: "North",
      disease: "Early Blight",
      confidence: "High (92%)",
      status: "Detected",
    },
    {
      id: "R002",
      date: "2025-03-28",
      field: "Field A",
      section: "East",
      disease: "Healthy",
      confidence: "High (95%)",
      status: "Healthy",
    },
    {
      id: "R003",
      date: "2025-03-27",
      field: "Field B",
      section: "Center",
      disease: "Late Blight",
      confidence: "Medium (78%)",
      status: "Detected",
    },
    {
      id: "R004",
      date: "2025-03-27",
      field: "Greenhouse",
      section: "Row 3",
      disease: "Leaf Mold",
      confidence: "High (89%)",
      status: "Detected",
    },
    {
      id: "R005",
      date: "2025-03-26",
      field: "Field C",
      section: "South",
      disease: "Healthy",
      confidence: "High (97%)",
      status: "Healthy",
    },
    {
      id: "R006",
      date: "2025-03-26",
      field: "Field A",
      section: "West",
      disease: "Septoria Leaf Spot",
      confidence: "High (91%)",
      status: "Detected",
    },
    {
      id: "R007",
      date: "2025-03-25",
      field: "Field B",
      section: "North",
      disease: "Healthy",
      confidence: "High (94%)",
      status: "Healthy",
    },
    {
      id: "R008",
      date: "2025-03-25",
      field: "Greenhouse",
      section: "Row 1",
      disease: "Early Blight",
      confidence: "Medium (76%)",
      status: "Detected",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Disease</TableHead>
              <TableHead>Confidence</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell className="font-medium">{result.id}</TableCell>
                <TableCell>{result.date}</TableCell>
                <TableCell>{result.field}</TableCell>
                <TableCell>{result.section}</TableCell>
                <TableCell>{result.disease}</TableCell>
                <TableCell>{result.confidence}</TableCell>
                <TableCell>
                  <Badge variant={result.status === "Healthy" ? "outline" : "destructive"}>{result.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>1-8</strong> of <strong>32</strong> results
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

