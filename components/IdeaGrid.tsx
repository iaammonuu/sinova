"use client";

import { motion } from "motion/react";
import { AlertTriangle, Building2, Sprout, Battery, HardHat, HeartPulse, Bot, Shield, Plane, Siren } from "lucide-react";

export default function IdeaGrid() {
  const ideas = [
    { title: "HEAT-RISK AI", desc: "Predict dangerous heat exposure.", icon: AlertTriangle },
    { title: "SMART CITY AI", desc: "Help cities identify heat-vulnerable areas.", icon: Building2 },
    { title: "AGRICULTURE AI", desc: "Help farmers make decisions using temperature intelligence.", icon: Sprout },
    { title: "ENERGY OPTIMIZATION", desc: "Predict cooling and energy demand.", icon: Battery },
    { title: "WORKER SAFETY", desc: "Help organizations reduce heat-related workplace risks.", icon: HardHat },
    { title: "HEALTH INTELLIGENCE", desc: "Identify potential heat-related risks.", icon: HeartPulse },
    { title: "CLIMATE AGENTS", desc: "Build autonomous AI agents that reason about temperature.", icon: Bot },
    { title: "INSURANCE", desc: "Develop smarter climate-risk intelligence.", icon: Shield },
    { title: "TRAVEL", desc: "Create intelligent heat-aware travel planning.", icon: Plane },
    { title: "EMERGENCY RESPONSE", desc: "Help communities prepare for extreme heat.", icon: Siren }
  ];

  return (
    <section id="ideas" className="py-24 bg-theme-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4 text-white">
            DON&apos;T BUILD ANOTHER WEATHER APP.
          </h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto italic font-serif">
            Build something that changes what people can do with temperature intelligence.
          </p>
          <div className="w-16 h-px bg-theme-primary mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-white/10">
          {ideas.map((idea, idx) => {
            const Icon = idea.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-transparent border-r border-b border-white/10 p-6 hover:bg-white/[0.02] transition-all group flex flex-col items-center text-center cursor-default"
              >
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-4 group-hover:border-theme-secondary/50 group-hover:text-theme-secondary transition-colors text-white/40">
                   <Icon size={16} />
                </div>
                <h3 className="text-[10px] uppercase font-bold text-white tracking-widest mb-2">{idea.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed font-serif italic">{idea.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
