"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <AuroraBackground className="w-full min-h-[90vh] flex items-center justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 py-20"
          >
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
              >
                Introducing Fidel 2.0
              </motion.div>
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.span 
                    className="block"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    Fidel
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    Transforming School Management
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-[600px]"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  Fidel is more than just a school management system; it's a partner in your educational journey. By
                  automating and streamlining administrative tasks, Fidel frees up time and resources.
                </motion.p>
              </div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/features">
                    Explore Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 text-sm text-muted-foreground"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 2 + (i * 0.1) }}
                    >
                      <Image src={`/placeholder.svg?height=32&width=32&text=${i}`} alt="User" width={32} height={32} />
                    </motion.div>
                  ))}
                </div>
                <div>Trusted by 1000+ schools worldwide</div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex-1 relative"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="relative z-10 rounded-xl border bg-white/50 dark:bg-black/20 backdrop-blur-sm shadow-xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Fidel+Dashboard"
                  alt="Fidel Dashboard"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </AuroraBackground>
      </motion.div>
    </motion.div>
  );
} 