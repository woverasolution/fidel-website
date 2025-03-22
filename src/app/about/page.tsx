import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Silvio Martignetti",
      position: "Co-Founder & Technoking",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Temesgen Mulugeta",
      position: "Co-Founder & Genius",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Tettemqe Endalamaw",
      position: "Co-Founder & Vibe Checker",
      image: "/placeholder.svg?height=400&width=400",
    }
    
  ]

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
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">About Fidel</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about our mission to transform educational management and the team behind Fidel.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-xl border bg-background/70 backdrop-blur-sm shadow-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Fidel+Team"
                  alt="Fidel team working together"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-primary/20 blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 h-48 w-48 rounded-full bg-primary/20 blur-3xl -z-10" />
            </div>
            <div className="space-y-6">
              <div className="text-primary font-medium">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">From vision to reality</h2>
              <p className="text-muted-foreground text-lg">
                Fidel was founded in 2018 with a clear mission: to simplify school administration and enhance the
                educational experience. We recognized that educators were spending too much time on administrative tasks
                and not enough time teaching.
              </p>
              <p className="text-muted-foreground text-lg">
                Our team of educators and technologists came together to build a solution that addresses the real
                challenges faced by schools around the world. What started as a simple student management tool has
                evolved into a comprehensive platform serving hundreds of educational institutions globally.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, Fidel continues to innovate and expand, always guided by our core belief that better school
                management leads to better education.
              </p>
              <Button className="mt-4" asChild>
                <Link href="/contact">
                  Join Our Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary font-medium">Our Mission & Values</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What drives us forward</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              We&apos;re driven by a commitment to excellence in education through innovative technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <CardContent className="p-8 pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower educational institutions with technology that simplifies administration, enhances
                  communication, and ultimately improves learning outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <CardContent className="p-8 pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 10-4 4-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where educators can focus on teaching and students can focus on learning, free from the burden
                  of inefficient administrative processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <CardContent className="p-8 pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 3 3 7-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Innovation in education</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Simplicity in design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Reliability in service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Integrity in all we do</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary font-medium">Our Team</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Meet the people behind Fidel</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Meet the passionate individuals behind Fidel who are dedicated to transforming education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="aspect-square overflow-hidden rounded-xl bg-muted/30">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                  <p className="text-muted-foreground mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Join us in transforming education</h2>
              <p className="text-primary-foreground/80 text-lg">
                Interested in working with us or learning more about our mission? Get in touch today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

