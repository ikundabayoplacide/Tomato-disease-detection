import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center justify-center p-2 rounded-full bg-primary/10">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="ml-2 text-sm font-medium">Tomato Disease Detection</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Predictive Analytics for Disease Detection in Tomatoes
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Early detection of tomato plant diseases using advanced machine learning and grid computing. Upload images
            of your tomato leaves and get instant analysis and treatment recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

