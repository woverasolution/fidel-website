"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-background to-muted overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
          <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(transparent,white)] -z-10" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Fidel? We're here to help. Reach out to our team and we'll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-32 w-full"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="space-y-6 mb-8">
                <div className="text-primary font-medium">Send us a message</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Let's start a conversation</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll respond within 24 hours.
                </p>
              </div>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 pt-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full h-12" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-primary font-medium">Contact Information</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How to reach us</h2>
                <p className="text-muted-foreground text-lg">Reach out to us directly using the information below.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg bg-muted/30 hover:shadow-xl transition-all duration-200">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-4">For general inquiries and support</p>
                    <a href="mailto:info@fideleducation.com" className="text-primary font-medium">
                      info@fideleducation.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-muted/30 hover:shadow-xl transition-all duration-200">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-4">Mon-Fri from 9am to 6pm (PST)</p>
                    <a href="tel:+15551234567" className="text-primary font-medium">
                      +1 (555) 123-4567
                    </a>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-lg bg-muted/30 hover:shadow-xl transition-all duration-200">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Office Location</h3>
                  <p className="text-muted-foreground mb-4">Come visit our headquarters</p>
                  <address className="not-italic">
                    123 Education Lane
                    <br />
                    Suite 400
                    <br />
                    San Francisco, CA 94107
                  </address>
                </CardContent>
              </Card>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Map"
                  alt="Office Location Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark FAQ Section */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small-white/[0.05] -z-10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary-foreground/80 font-medium">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Frequently Asked Questions</h2>
            <p className="text-slate-300 text-lg max-w-[800px] mx-auto">
              Find answers to common questions about contacting and working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-8">
            {[
              {
                question: "What is the typical response time?",
                answer:
                  "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.",
              },
              {
                question: "Do you offer technical support?",
                answer:
                  "Yes, we provide technical support to all our clients. Support hours are Monday to Friday, 9am to 6pm (PST).",
              },
              {
                question: "Can I schedule a demo?",
                answer: "You can request a demo through our contact form or by calling our sales team directly.",
              },
              {
                question: "Do you have international offices?",
                answer:
                  "While our headquarters is in San Francisco, we have remote team members across the globe to provide support in multiple time zones.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none bg-white/5 backdrop-blur-sm border-white/10 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{item.question}</h3>
                  <p className="text-slate-300">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

