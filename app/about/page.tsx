import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Leaf, Microscope, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Tomato Disease Detection",
  description: "Learn about our mission, technology, and the team behind the Tomato Disease Detection System",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Hero Section */}
      <section className="mb-16 md:mb-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Revolutionizing Tomato Disease Detection
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Our mission is to empower farmers with advanced technology to detect and prevent tomato diseases early,
              reducing crop loss and increasing agricultural sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild>
                <Link href="/dashboard">
                  Try Our Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Tomato plants in a field"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
            We're dedicated to combining cutting-edge technology with agricultural expertise to create sustainable
            solutions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <Leaf className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustainable Agriculture</h3>
            <p className="text-muted-foreground">
              Reducing pesticide use through precise disease detection and targeted treatment recommendations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Crop Protection</h3>
            <p className="text-muted-foreground">
              Minimizing crop losses by identifying diseases at their earliest stages when treatment is most effective.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Knowledge Sharing</h3>
            <p className="text-muted-foreground">
              Building a global database of tomato diseases to improve detection accuracy and treatment protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="mb-16 md:mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="AI analyzing tomato leaf"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tighter">Our Technology</h2>
            <p className="text-muted-foreground">
              TomatoGuard uses advanced machine learning and computer vision to detect diseases with over 95% accuracy.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 h-5 w-5 text-primary mt-0.5">
                  <Microscope className="h-5 w-5" />
                </div>
                <span>
                  <strong className="font-medium">Deep Learning Models:</strong> Trained on thousands of images of
                  healthy and diseased tomato plants
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-5 w-5 text-primary mt-0.5">
                  <Microscope className="h-5 w-5" />
                </div>
                <span>
                  <strong className="font-medium">Grid Computing:</strong> Distributed processing for rapid analysis of
                  multiple images
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-5 w-5 text-primary mt-0.5">
                  <Microscope className="h-5 w-5" />
                </div>
                <span>
                  <strong className="font-medium">Computer Vision:</strong> Advanced image processing to identify subtle
                  disease markers
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-5 w-5 text-primary mt-0.5">
                  <Microscope className="h-5 w-5" />
                </div>
                <span>
                  <strong className="font-medium">Continuous Learning:</strong> Our system improves with each analysis,
                  becoming more accurate over time
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
            A diverse group of experts in agriculture, machine learning, and software development.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Dr. Sarah Johnson",
              role: "Chief Scientist",
              bio: "Ph.D. in Plant Pathology with 15 years of research experience in tomato diseases.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Michael Chen",
              role: "Lead AI Engineer",
              bio: "Expert in computer vision and machine learning with a focus on agricultural applications.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Elena Rodriguez",
              role: "Agricultural Specialist",
              bio: "Former tomato farmer with extensive knowledge of crop management and disease prevention.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "James Wilson",
              role: "Software Architect",
              bio: "Full-stack developer specializing in scalable cloud solutions for data-intensive applications.",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/contact">
              <Users className="mr-2 h-4 w-4" />
              Join Our Team
            </Link>
          </Button>
        </div>
      </section>

      {/* Research and Publications */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Research & Publications</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Our work is backed by scientific research and peer-reviewed publications.
          </p>
        </div>
        <div className="space-y-6">
          {[
            {
              title: "Early Detection of Tomato Late Blight Using Deep Learning",
              authors: "Johnson, S., Chen, M., et al.",
              journal: "Journal of Agricultural Informatics",
              year: "2024",
              link: "#",
            },
            {
              title: "Comparative Analysis of Machine Learning Models for Tomato Disease Classification",
              authors: "Chen, M., Rodriguez, E., et al.",
              journal: "Computers and Electronics in Agriculture",
              year: "2023",
              link: "#",
            },
            {
              title: "Field Validation of an Automated Tomato Disease Detection System",
              authors: "Rodriguez, E., Johnson, S., et al.",
              journal: "Precision Agriculture",
              year: "2023",
              link: "#",
            },
          ].map((publication, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold">{publication.title}</h3>
              <p className="text-muted-foreground">{publication.authors}</p>
              <p className="text-sm text-muted-foreground">
                {publication.journal}, {publication.year}
              </p>
              <Button variant="link" className="p-0 h-auto mt-2" asChild>
                <Link href={publication.link}>Read Publication</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

