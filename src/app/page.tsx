import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
            <div className="text-primary-foreground/80 font-medium">Our Commitment</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Making school management simple in Ethiopia
            </h2>
            <p className="text-slate-300 text-lg max-w-[800px] mx-auto">
              Discover how Fidel is streamlining operations for educational institutions across Ethiopia with tailored workflows and automation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-white">50+</h3>
              <p className="text-slate-300">Schools Supported</p>
            </div>
            <div className="space-y-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-white">30K+</h3>
              <p className="text-slate-300">Students Managed</p>
            </div>
            <div className="space-y-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-white">95%</h3>
              <p className="text-slate-300">Client Retention</p>
            </div>
            <div className="space-y-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-white">100%</h3>
              <p className="text-slate-300">Customizable Workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-32 w-full"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary font-medium">Hear from our clients</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Trusted by Ethiopian educators</h2>
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
                    &quot;Since we started using Fidel, managing students and finances has never been easier. It truly fits our needs and feels like it was built just for us.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                      <Image src={`/placeholder.svg?height=48&width=48&text=${i}`} alt="User" width={48} height={48} />
                    </div>
                    <div>
                      <div className="font-medium">Samuel Desta</div>
                      <div className="text-sm text-muted-foreground">Administrator, Unity Academy</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="w-full py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Ready for simpler school management?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Experience firsthand how Fidel can ease your administrative workload.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request a Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
