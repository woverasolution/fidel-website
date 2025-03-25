import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FidelFeatureShowcase } from "@/components/ui/FidelFeatureShowcase"
import {
  BookOpen,
  Users,
  CreditCard,
  Calendar,
  BarChartIcon as ChartBar,
  MessageSquare,
  Bell,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Student Management",
      description:
        "Comprehensive student profiles with academic history, attendance records, and performance analytics.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Course Management",
      description: "Create and manage courses, assign teachers, and track curriculum progress effortlessly.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Financial Management",
      description: "Handle tuition payments, generate invoices, and manage school finances with ease.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Scheduling",
      description: "Intelligent timetable management to optimize classroom usage and teacher availability.",
    },
    {
      icon: <ChartBar className="h-8 w-8 text-primary" />,
      title: "Performance Analytics",
      description: "Detailed insights into student performance, teacher effectiveness, and overall school metrics.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Communication Tools",
      description: "Built-in messaging system for seamless communication between staff, students, and parents.",
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Notifications",
      description: "Automated alerts for important events, deadlines, and announcements.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security",
      description: "Role-based access control and data encryption to keep sensitive information secure.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Integration Capabilities",
      description: "Seamlessly connect with other educational tools and platforms for a unified experience.",
    },
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
              Powerful Features
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Features that power educational excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Fidel can transform your school&apos;s administrative processes and enhance the educational
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Feature Showcase */}
      <FidelFeatureShowcase />

      {/* Featured Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-xl border bg-background/70 backdrop-blur-sm shadow-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Student+Management"
                  alt="Student Management Dashboard"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-primary/20 blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 h-48 w-48 rounded-full bg-primary/20 blur-3xl -z-10" />
            </div>
            <div className="space-y-6">
              <div className="text-primary font-medium">Core Feature</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Comprehensive Student Management</h2>
              <p className="text-muted-foreground text-lg">
                Our student management module provides a complete view of each student&apos;s journey, from enrollment to
                graduation. Track academic progress, attendance, behavior, and more in one centralized system.
              </p>
              <ul className="space-y-4">
                {[
                  "Digital student profiles with complete history",
                  "Attendance tracking with automated reports",
                  "Performance analytics and progress tracking",
                  "Document management for student records",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-4" asChild>
                <Link href="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="w-full py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary font-medium">All Features</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Everything you need to run your school</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Fidel provides a comprehensive suite of tools designed to streamline school operations and enhance the
              educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <CardContent className="p-8 pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Link href="#" className="text-primary font-medium inline-flex items-center group">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="w-full py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to see Fidel in action?</h2>
              <p className="text-primary-foreground/80 text-lg">
                Schedule a personalized demo to see how Fidel can transform your school&apos;s management.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
                <Link href="/contact">Request Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

