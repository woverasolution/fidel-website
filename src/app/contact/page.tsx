"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    schoolName: "",
    schoolType: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "", schoolName: "", schoolType: "" })
    } catch (error) {
      console.error('Error sending message:', error)
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again later.')
      setIsSubmitted(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-primary/5 via-background/95 to-background">
      {/* Hero Section with Warm Gradient */}
      <section className="relative w-full py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-blue-900 to-blue-800/70 bg-clip-text text-transparent">
              Get in Touch with Fidel
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Transform your school&apos;s management experience with Fidel. We&apos;re here to help you streamline your administrative tasks and enhance your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground">Start Your Journey</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-primary/10 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="p-4 text-sm bg-destructive/10 border border-destructive/30 text-destructive rounded-lg">
                          {error}
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="h-11"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={handleChange}
                            className="h-11"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="schoolName" className="text-sm font-medium">School Name</Label>
                          <Input
                            id="schoolName"
                            name="schoolName"
                            placeholder="Your school's name"
                            value={formData.schoolName}
                            onChange={handleChange}
                            className="h-11"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="schoolType" className="text-sm font-medium">Type of School</Label>
                          <select
                            id="schoolType"
                            name="schoolType"
                            value={formData.schoolType}
                            onChange={handleChange}
                            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Select school type</option>
                            <option value="K-12">K-12</option>
                            <option value="College or University">College or University</option>
                            <option value="TVET Institutions">TVET Institutions</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full h-11" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 lg:sticky lg:top-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground">Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  Get in touch with us directly using any of the following methods.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">Email Us</h3>
                      <p className="text-sm text-muted-foreground">For general inquiries and support</p>
                      <a href="mailto:info@fidel.et" className="text-primary font-medium hover:underline">
                        info@fidel.et
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">Call Us</h3>
                      <p className="text-sm text-muted-foreground">Mon-Fri from 9am to 6pm</p>
                      <a href="tel:+251910428013" className="text-primary font-medium hover:underline">
                        +251 910 428 013
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">Visit Us</h3>
                      <p className="text-sm text-muted-foreground">Our office location</p>
                      <address className="not-italic text-primary font-medium">
                        Wessen Area, Brix Building, 1st floor
                        <br />
                        Addis Ababa, Ethiopia
                      </address>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Response Promise */}
              <Card className="border-primary/10 bg-primary/5 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Quick Response Promise</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        We aim to respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

