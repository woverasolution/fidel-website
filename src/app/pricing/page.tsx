import { Pricing } from "@/components/blocks/pricing"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PricingPage() {
  // Define the pricing plans for the new component
  const pricingPlans = [
    {
      name: "Starter",
      price: "99",
      yearlyPrice: "948",
      period: "month", 
      description: "Perfect for small schools with basic management needs",
      features: [
        "Up to 200 student profiles",
        "Basic course management",
        "Simple fee tracking",
        "Email support",
        "Mobile app access"
      ],
      buttonText: "Get Started",
      href: "/contact",
      isPopular: false
    },
    {
      name: "Professional",
      price: "299",
      yearlyPrice: "2868",
      period: "month",
      description: "Ideal for growing schools with more complex management needs",
      features: [
        "Up to 1,000 student profiles",
        "Advanced course management",
        "Complete financial system",
        "Attendance tracking",
        "Performance analytics",
        "Priority email & phone support",
        "Mobile app access"
      ],
      buttonText: "Get Started",
      href: "/contact",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      yearlyPrice: "Custom",
      period: "month",
      description: "For large educational institutions with specialized requirements",
      features: [
        "Unlimited student profiles",
        "Full feature access",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 premium support",
        "On-site training",
        "Advanced security features",
        "Custom reporting"
      ],
      buttonText: "Contact Sales",
      href: "/contact",
      isPopular: false
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
              Simple Pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Choose the right plan for your school
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section with the new component */}
      <Pricing 
        plans={pricingPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for your educational institution.\nAll plans include core features and dedicated support."
      />

      {/* Comparison Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary font-medium">Plan Comparison</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Compare plan features</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Find the plan that&apos;s right for your school&apos;s needs and budget.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border shadow-lg">
            <div className="grid grid-cols-4 divide-x">
              <div className="p-6 bg-muted/30">
                <div className="h-6"></div>
              </div>
              {[{ name: "Starter" }, { name: "Professional", popular: true }, { name: "Enterprise" }].map((plan, i) => (
                <div key={i} className={`p-6 ${plan.popular ? "bg-primary/10" : "bg-muted/30"}`}>
                  <h3 className={`text-lg font-bold text-center ${plan.popular ? "text-primary" : ""}`}>{plan.name}</h3>
                </div>
              ))}
            </div>

            {[
              {
                feature: "Student Profiles",
                starter: "Up to 200",
                professional: "Up to 1,000",
                enterprise: "Unlimited",
              },
              {
                feature: "Course Management",
                starter: "Basic",
                professional: "Advanced",
                enterprise: "Advanced + Custom",
              },
              {
                feature: "Financial System",
                starter: "Simple",
                professional: "Complete",
                enterprise: "Complete + Custom",
              },
              {
                feature: "Support",
                starter: "Email only",
                professional: "Email & Phone",
                enterprise: "24/7 Premium",
              },
              {
                feature: "Integrations",
                starter: "None",
                professional: "Limited",
                enterprise: "Custom",
              },
              {
                feature: "Reporting",
                starter: "Basic",
                professional: "Advanced",
                enterprise: "Custom",
              },
              {
                feature: "Mobile App",
                starter: "Basic access",
                professional: "Full access",
                enterprise: "Full access + Custom",
              },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 divide-x border-t">
                <div className="p-6 font-medium">{row.feature}</div>
                <div className="p-6 text-muted-foreground">{row.starter}</div>
                <div className="p-6 bg-primary/5">{row.professional}</div>
                <div className="p-6 text-muted-foreground">{row.enterprise}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-primary font-medium">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Find answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-8">
            {[
              {
                question: "Can I switch plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription.",
              },
              {
                question: "Do you offer discounts for educational institutions?",
                answer:
                  "Yes, we offer special pricing for public schools and non-profit educational institutions. Contact our sales team for details.",
              },
              {
                question: "How secure is my data?",
                answer:
                  "We take security seriously. All data is encrypted at rest and in transit, and we comply with educational data privacy regulations.",
              },
              {
                question: "Can I cancel my subscription?",
                answer:
                  "Yes, you can cancel your subscription at any time. We don't lock you into long-term contracts.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to get started with Fidel?</h2>
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
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

