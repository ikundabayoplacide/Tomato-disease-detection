import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us - Tomato Disease Detection",
  description: "Get in touch with our team for support, feedback, or inquiries",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Have questions or feedback? We'd love to hear from you. Fill out the form below or use our contact
            information.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}

