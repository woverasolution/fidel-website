"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ShowcaseSection() {
  return (
    <section className="bg-slate-900 w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98] // Custom easing for smooth animation
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-2 sm:p-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/fidel-mockup.png"
                alt="Fidel Dashboard"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
                quality={95}
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 