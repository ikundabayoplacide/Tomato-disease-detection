import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Upload, BarChart3, AlertCircle, Zap, Database, RefreshCw, Shield } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our system uses advanced machine learning and grid computing to detect diseases in tomato plants
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <Camera className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Capture Images</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Capture high-resolution images of tomato leaves using a camera or smartphone
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Upload className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Upload images through our intuitive web interface for analysis</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Zap className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Process</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Our system processes images using grid computing and machine learning</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <BarChart3 className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                View detailed analysis with disease predictions and treatment recommendations
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <AlertCircle className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receive notifications when urgent action is needed to protect your crops
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Database className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Data Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>All results are securely stored for future reference and analysis</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <RefreshCw className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Track disease progression over time with historical data analysis</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Role-based access control ensures your data remains secure and private</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

