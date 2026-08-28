"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function WhyTemperatureAI() {
  return (
    <section className="py-32 bg-theme-bg relative border-y border-white/10">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom, var(--theme-primary) 0%, transparent 70%)' }} />
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">
            <span className="block text-white/50 mb-2 text-xl md:text-3xl font-serif italic tracking-wide">The world doesn&apos;t just need more temperature data.</span>
            <span className="block text-white uppercase">IT NEEDS AI THAT UNDERSTANDS WHAT THAT DATA MEANS.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-transparent border border-white/10 rounded-sm p-8"
        >
          <div className="flex flex-col items-center">
             <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">INPUT</span>
             <span className="text-xl font-bold text-white uppercase tracking-widest">TEMPERATURE</span>
          </div>
          <ArrowRight className="text-white/20 hidden md:block" />
          <div className="text-white/20 rotate-90 md:hidden"><ArrowRight /></div>
          
          <div className="flex flex-col items-center">
             <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">LAYER 01</span>
             <span className="text-xl font-bold text-white uppercase tracking-widest">CONTEXT</span>
          </div>
          <ArrowRight className="text-white/20 hidden md:block" />
          <div className="text-white/20 rotate-90 md:hidden"><ArrowRight /></div>
          
          <div className="flex flex-col items-center">
             <span className="text-[10px] font-bold tracking-widest uppercase text-theme-secondary mb-2">LAYER 02</span>
             <span className="text-xl font-bold text-theme-secondary uppercase tracking-widest">INTELLIGENCE</span>
          </div>
          <ArrowRight className="text-white/20 hidden md:block" />
          <div className="text-white/20 rotate-90 md:hidden"><ArrowRight /></div>
          
          <div className="flex flex-col items-center">
             <span className="text-[10px] font-bold tracking-widest uppercase text-theme-primary mb-2">OUTPUT</span>
             <span className="text-xl font-bold text-theme-primary uppercase tracking-widest">ACTION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
