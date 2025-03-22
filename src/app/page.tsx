import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/sections/hero-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { FeaturesSection } from "@/components/sections/features-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Aurora Background */}
      <HeroSection />

      {/* Showcase Section with Laptop Animation */}
      <ShowcaseSection />

      {/* Key Features Section with Dark Theme and Scroll Animations */}
      <FeaturesSection />

      {/* Dark Stats Section */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small-white/[0.05] -z-10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary-foreground/80 font-medium">Our Impact</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Transforming education worldwide
            </h2>
            <p className="text-slate-300 text-lg max-w-[800px] mx-auto">
              See the difference Fidel is making in educational institutions around the globe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-white">1000+</h3>
              <p className="text-slate-300">Schools</p>
            </div>
            <div className="space-y-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-white">500K+</h3>
              <p className="text-slate-300">Students</p>
            </div>
            <div className="space-y-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-white">50+</h3>
              <p className="text-slate-300">Countries</p>
            </div>
            <div className="space-y-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-white">99%</h3>
              <p className="text-slate-300">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-32 w-full"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary font-medium">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Trusted by educators worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-muted/30 border-none p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 text-lg mb-4">
                    &quot;Fidel has transformed how we manage our school. The administrative burden has been significantly
                    reduced, allowing us to focus on what matters most: education.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                      <Image src={`/placeholder.svg?height=48&width=48&text=${i}`} alt="User" width={48} height={48} />
                    </div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">Principal, International School</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Feature Highlight Section */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small-white/[0.05] -z-10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white">
                Advanced Analytics
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                Make data-driven decisions with powerful insights
              </h2>
              <p className="text-slate-300 text-lg">
                Fidel&apos;s advanced analytics dashboard gives you a comprehensive view of your school&apos;s performance. Track
                student progress, monitor attendance, analyze financial data, and more—all in one place.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time performance tracking",
                  "Customizable reports and dashboards",
                  "Trend analysis and forecasting",
                  "Exportable data in multiple formats",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <svg
                      className="h-5 w-5 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link href="/features">
                  Explore Analytics Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden">
                <div className="p-2">
                  <Image
                    src="/analytics.svg"
                    alt="Analytics Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Ready to transform your school management?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Join thousands of schools already benefiting from Fidel&apos;s comprehensive management system.
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

