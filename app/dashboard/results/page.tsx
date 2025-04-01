import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { ResultsTable } from "@/components/results-table"
import { ResultsGrid } from "@/components/results-grid"

export default function ResultsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
          <CardDescription>View and filter disease detection results for your tomato plants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="grid gap-2 flex-1">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" type="search" placeholder="Search by field, date, or disease..." className="pl-8" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="field">Field</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Fields" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fields</SelectItem>
                  <SelectItem value="field-a">Field A</SelectItem>
                  <SelectItem value="field-b">Field B</SelectItem>
                  <SelectItem value="field-c">Field C</SelectItem>
                  <SelectItem value="greenhouse">Greenhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="disease">Disease</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Diseases" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Diseases</SelectItem>
                  <SelectItem value="early-blight">Early Blight</SelectItem>
                  <SelectItem value="late-blight">Late Blight</SelectItem>
                  <SelectItem value="leaf-mold">Leaf Mold</SelectItem>
                  <SelectItem value="septoria">Septoria Leaf Spot</SelectItem>
                  <SelectItem value="healthy">Healthy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date Range</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Last 30 Days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 Days</SelectItem>
                  <SelectItem value="30">Last 30 Days</SelectItem>
                  <SelectItem value="90">Last 90 Days</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button>Apply Filters</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="table" className="space-y-4">
        <TabsList>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <ResultsTable />
        </TabsContent>
        <TabsContent value="grid">
          <ResultsGrid />
        </TabsContent>
      </Tabs>
    </div>
  )
}

