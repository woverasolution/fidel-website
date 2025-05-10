import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Aurora Background */}
      <HeroSection />

      {/* Showcase Section with Laptop Animation */}
      {/* <ShowcaseSection /> */}

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
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href="/contact">Request a Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
