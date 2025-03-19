"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";

export function ShowcaseSection() {
  // Marketing headline component
  const marketingHeadline = (
    <div className="space-y-4">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-500"
      >
        Powerful & Intuitive
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100"
      >
        The Future of <span className="text-blue-400">School Management</span> is Here
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto text-base md:text-xl text-slate-400"
      >
        A complete solution that gives administrators, teachers, and parents the tools they need to focus on what really matters — education.
      </motion.p>
    </div>
  );

  return (
    <section className="bg-slate-900 w-full">
      <ContainerScroll
        titleComponent={marketingHeadline}
      >
        {/* Laptop frame containing Fidel screenshot */}
        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-8">
          <div className="w-full h-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-slate-700 laptop-frame">
            <div className="w-full h-full relative">
              {/* Replace with your actual Fidel screenshot */}
              <Image
                src="/fidel-dashboard.png"
                alt="Fidel Dashboard"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
} 