"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow, ShieldCheck, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="w-full min-h-screen bg-slate-900 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-small-white/[0.05] -z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl opacity-30" />
      
      <motion.div 
        className="container px-4 md:px-6 py-24"
        style={{ opacity, scale, y }}
      >
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-blue-400 font-medium">The best school management system in Ethiopia</div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Here is what sets us apart
          </h1>
          <p className="text-slate-300 text-lg max-w-[800px] mx-auto">
          Our school management system is built specifically for schools in Ethiopia. We replace inefficiency, chaos, and compliance headaches with clarity, organization, and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Workflow className="h-6 w-6" />,
              title: "Automation at Its Best",
              description: "Simplify student admission, attendance, grading, and fee collection with our intuitive workflows."
            },
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              title: "ETA Compliance, Guaranteed",
              description: "Our software is specifically designed to meet Ethiopia's education standards and registrar requirements."
            },
            {
              icon: <LineChart className="h-6 w-6" />,
              title: "Real-Time Data Insights",
              description: "Access key performance metrics to make smarter, data-driven decisions."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group">
                <CardContent className="p-8 pt-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {feature.description}
                  </p>
                  <Link href="/features" className="text-blue-400 font-medium inline-flex items-center group">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl"
            asChild
          >
            <Link href="/features">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 