import { CTASection } from "@/components/sections/cta-section";
import { FeaturesSection2 } from "@/components/sections/features-section-2";
import { Button } from "@/components/ui/button";
import { FidelFeatureShowcase } from "@/components/ui/FidelFeatureShowcase";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function FeaturesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Aurora Background (fixed height, no blur on text) */}
      <AuroraBackground className="h-[580px] min-h-0 -mt-20" >
        <section className="relative w-full h-full flex items-center overflow-hidden bg-transparent">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 -z-10" />
            <div className="absolute h-full w-full [mask-image:radial-gradient(transparent,white)] -z-10" />
          </div>
          <div className="container px-4 md:px-6 relative z-10 flex flex-col justify-center items-center h-full">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                Powerful Features
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Features that power educational excellence
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how Fidel can transform your school&apos;s
                administrative processes and enhance the educational experience.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>

      {/* Interactive Feature Showcase */}
      <FidelFeatureShowcase />

      {/* Featured Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <div className="relative z-10 rounded-xl pt-[120px] bg-background/70  overflow-hidden">
                <Image
                  src="/dashboard.png"
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Comprehensive Student Management
              </h2>
              <p className="text-muted-foreground text-lg">
                Our student management module provides a complete view of each
                student&apos;s journey, from enrollment to graduation. Track
                academic progress, attendance, behavior, and more in one
                centralized system.
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

      <FeaturesSection2 />
      {/* CTA Section */}
      <div className="w-full rounded-lg mt-10">
        <CTASection />
      </div>
    </main>
  );
}
