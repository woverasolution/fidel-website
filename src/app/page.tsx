import { CTASection } from "@/components/sections/cta-section";
import { FeaturesSection2 } from "@/components/sections/features-section-2";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Aurora Background */}
      <div className="-mt-5">
        <HeroSection />
      </div>
      {/* Showcase Section with Laptop Animation */}
      {/* <ShowcaseSection /> */}

      {/* Key Features Section with Dark Theme and Scroll Animations */}
      <div className="-mt-20">
        <FeaturesSection2 />
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <div className="mt-20">
        <CTASection />
      </div>
    </main>
  );
}
