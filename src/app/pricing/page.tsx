import { Pricing } from "@/components/blocks/pricing"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PricingPage() {
  // Define the pricing plans for the new component
  const pricingPlans = [
    {
      name: "Starter",
      price: "7899",
      yearlyPrice: "6299",
      period: "month",
      description: "Ideal for smaller schools seeking simplicity and efficiency",
      features: [
        "Up to 2,000 student profiles",
        "Basic course and curriculum management",
        "Easy tuition fee tracking",
        "Email and phone support",
        "Basic reporting tools",
        "Online payment integration"
      ],
      buttonText: "Get Started",
      href: "/contact",
      isPopular: false
    },
    {
      name: "Professional",
      price: "8999",
      yearlyPrice: "7499",
      period: "month",
      description: "Designed for growing schools that need powerful administrative tools",
      features: [
        "Up to 10,000 student profiles",
        "Student web portal",
        "Advanced course and curriculum management",
        "Comprehensive financial tracking",
        "Attendance management",
        "Detailed analytics and reporting",
        "Priority support by phone & email",
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
      

      {/* Pricing Section with the new component */}
      <Pricing 
        plans={pricingPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for your educational institution."
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

          {/* Mobile view */}
          <div className="block md:hidden">
            <div className="space-y-8">
              {[{ name: "Starter" }, { name: "Professional", popular: true }, { name: "Enterprise" }].map((plan, i) => (
                <div key={i} className={`rounded-xl border ${plan.popular ? "bg-primary/5" : "bg-muted/30"}`}>
                  <div className={`p-6 border-b ${plan.popular ? "bg-primary/10" : "bg-muted/30"}`}>
                    <h3 className={`text-lg font-bold text-center ${plan.popular ? "text-primary" : ""}`}>{plan.name}</h3>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        feature: "Student Profiles",
                        value: plan.name === "Starter" ? "Up to 200" : plan.name === "Professional" ? "Up to 1,000" : "Unlimited"
                      },
                      {
                        feature: "Course Management",
                        value: plan.name === "Starter" ? "Basic" : plan.name === "Professional" ? "Advanced" : "Advanced + Custom"
                      },
                      {
                        feature: "Financial System",
                        value: plan.name === "Starter" ? "Simple" : plan.name === "Professional" ? "Complete" : "Complete + Custom"
                      },
                      {
                        feature: "Support",
                        value: plan.name === "Starter" ? "Email only" : plan.name === "Professional" ? "Email & Phone" : "24/7 Premium"
                      },
                      {
                        feature: "Integrations",
                        value: plan.name === "Starter" ? "None" : plan.name === "Professional" ? "Limited" : "Custom"
                      },
                      {
                        feature: "Reporting",
                        value: plan.name === "Starter" ? "Basic" : plan.name === "Professional" ? "Advanced" : "Custom"
                      },
                      {
                        feature: "Mobile App",
                        value: plan.name === "Starter" ? "Basic access" : plan.name === "Professional" ? "Full access" : "Full access + Custom"
                      }
                    ].map((row, j) => (
                      <div key={j} className="p-6">
                        <div className="font-medium mb-2">{row.feature}</div>
                        <div className="text-muted-foreground">{row.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden md:block relative overflow-hidden rounded-xl border shadow-lg">
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

          <div className="max-w-3xl mx-auto grid gap-4">
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
                <details className="group">
                  <summary className="p-6 flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-xl font-bold">{item.question}</h3>
                    <div className="transform transition-transform duration-200 group-open:rotate-180">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-muted-foreground"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </details>
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

