"use client";

import { motion } from "motion/react";
import { REGISTRATION_URL } from "@/lib/config";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const badges = ["LIVE SYSTEM", "AI-POWERED", "GLOBAL API", "BETA"];
  
  const floatingData = [
    { loc: "Mumbai", temp: "+32.4°C", top: "20%", left: "70%" },
    { loc: "Delhi", temp: "+41.2°C", top: "35%", left: "65%" },
    { loc: "Singapore", temp: "+27.8°C", top: "60%", left: "80%" },
    { loc: "London", temp: "+18.6°C", top: "25%", left: "45%" },
    { loc: "Phoenix", temp: "+34.1°C", top: "40%", left: "20%" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.05)_0%,rgba(0,0,0,1)_70%)]" />
      <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/seed/map/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale" />
      
      {/* Floating Data points */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {floatingData.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: -20 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
            style={{ top: d.top, left: d.left }}
            className="absolute hidden md:flex flex-col items-center"
          >
            <div className="text-orange-500 font-mono text-lg font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
              {d.temp}
            </div>
            <div className="text-white/50 text-xs font-mono uppercase tracking-widest mt-1">
              {d.loc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center space-x-3 mb-8"
        >
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 border text-[10px] font-bold tracking-widest rounded-full ${
                badge === "LIVE SYSTEM" 
                  ? "border-theme-primary/40 bg-theme-primary/10 text-theme-primary" 
                  : "border-white/20 bg-white/5"
              }`}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tighter leading-[0.9] mb-6"
        >
          <span className="block text-white">THE WORLD&apos;S</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-secondary">
            CLIMATE BRAIN
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 italic font-serif leading-relaxed max-w-xl mb-6"
        >
          &ldquo;What if AI could see heat and solve it?&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-white/40 max-w-lg leading-relaxed mb-10"
        >
          An advanced climate intelligence platform transforming hyperlocal temperature data into predictive models, operational safety insights, and automated actions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <a
            href="#analyzer"
            className="group flex items-center space-x-4 bg-theme-primary px-8 py-4 rounded-sm transition-all hover:pr-10 text-white"
          >
            <span className="uppercase font-bold tracking-widest text-sm">Analyze Heat Risk</span>
            <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
          </a>
          <a
            href="#technology"
            className="text-xs uppercase tracking-widest border-b border-white/40 pb-1 hover:border-white transition-all text-white"
          >
            View API Docs ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-[10px] uppercase tracking-[0.3em] text-white/30"
        >
          Powered by FortyGuard Temperature Intelligence
        </motion.div>
      </div>
    </section>
  );
}
