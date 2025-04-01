import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, BarChart3, History } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <main className="flex-1">
        <section className="container px-4 py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Upload className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Upload Images</CardTitle>
                <CardDescription>Upload high-resolution images of tomato leaves for analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our system processes your images using advanced machine learning to detect diseases early.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/upload" className="w-full">
                  <Button className="w-full">Upload Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>View Results</CardTitle>
                <CardDescription>Access detailed analysis and disease predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get comprehensive reports with visualizations and treatment recommendations.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/results" className="w-full">
                  <Button className="w-full" variant="outline">
                    View Dashboard
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <History className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Historical Data</CardTitle>
                <CardDescription>Track disease progression over time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Review past analyses to identify patterns and improve crop management strategies.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/history" className="w-full">
                  <Button className="w-full" variant="outline">
                    View History
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <FeaturesSection />
      </main>
    </div>
  )
}

