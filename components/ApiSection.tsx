"use client";

import { motion } from "motion/react";
import { Terminal, Database, Cpu, ArrowDown } from "lucide-react";

export default function ApiSection() {
  const codeSnippet = `GET /temperature
{
  "location": "Mumbai",
  "temperature": 31.4,
  "unit": "C",
  "timestamp": "2026-08-28T14:00:00"
}`;

  return (
    <section id="technology" className="py-24 bg-theme-bg relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4 text-white">
            YOUR AI NEEDS TO UNDERSTAND THE REAL WORLD.
          </h2>
          <p className="text-sm text-theme-secondary uppercase tracking-widest font-bold mb-6">
            Meet the Temperature Intelligence layer.
          </p>
          <p className="text-sm text-white/60 max-w-3xl mx-auto leading-relaxed italic font-serif">
            FortyGuard&apos;s Temperature API provides temperature intelligence that developers can integrate into applications, analytics systems, AI agents, dashboards, and predictive models.
          </p>
          <div className="w-16 h-px bg-white/20 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-theme-bg overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full border border-white/20" />
                <div className="w-3 h-3 rounded-full border border-white/20" />
                <div className="w-3 h-3 rounded-full border border-white/20" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                <Terminal size={12} />
                <span>api.fortyguard.com/v1</span>
              </div>
            </div>
            <div className="p-6 overflow-x-auto bg-theme-bg/40">
              <pre className="text-xs font-mono text-white/80 leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </motion.div>

          {/* Data Flow & Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center border-l border-white/10 pl-12"
          >
            <div className="flex gap-0 mb-12 border border-white/10">
               <div className="flex-1 bg-white/[0.02] border-r border-white/10 p-4">
                  <div className="text-[10px] font-mono text-white/40 mb-1 uppercase tracking-widest">LOCATION</div>
                  <div className="text-sm font-bold text-white">Mumbai, India</div>
               </div>
               <div className="flex-1 bg-white/[0.02] border-r border-white/10 p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-theme-primary/5" />
                  <div className="text-[10px] font-mono text-white/40 mb-1 uppercase tracking-widest relative z-10">TEMPERATURE</div>
                  <div className="text-sm font-bold text-theme-primary relative z-10">31.4°C</div>
               </div>
               <div className="flex-1 bg-white/[0.02] p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-theme-secondary/5" />
                  <div className="text-[10px] font-mono text-white/40 mb-1 uppercase tracking-widest relative z-10">STATUS / AI SIGNAL</div>
                  <div className="text-sm font-bold text-theme-secondary relative z-10">Elevated</div>
               </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 mb-12">
              <div className="px-4 py-3 bg-transparent border border-white/10 font-bold text-[10px] uppercase tracking-widest text-white/60 w-full text-center flex items-center justify-center gap-2">
                <Database size={14} /> TEMPERATURE DATA
              </div>
              <ArrowDown size={16} className="text-white/20" />
              <div className="px-4 py-3 bg-theme-secondary/10 border border-theme-secondary/30 font-bold text-[10px] uppercase tracking-widest text-theme-secondary w-full text-center">
                FORTYGUARD API
              </div>
              <ArrowDown size={16} className="text-white/20" />
              <div className="px-4 py-3 bg-transparent border border-white/10 font-bold text-[10px] uppercase tracking-widest text-white/60 w-full text-center flex items-center justify-center gap-2">
                <Cpu size={14} /> AI / ML MODEL
              </div>
              <ArrowDown size={16} className="text-white/20" />
              <div className="flex w-full gap-4">
                <div className="flex-1 px-4 py-3 bg-transparent border border-white/10 font-bold text-[10px] uppercase tracking-widest text-white/60 text-center">
                  INSIGHT
                </div>
                <div className="flex-1 px-4 py-3 bg-theme-primary/10 border border-theme-primary/30 font-bold text-[10px] uppercase tracking-widest text-theme-primary text-center">
                  ACTION
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Hyperlocal temperature intelligence",
                "API-first architecture",
                "AI-ready data",
                "Location-aware intelligence",
                "Real-world climate applications"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs text-white/50 font-serif italic">
                  <div className="w-1 h-1 rounded-full bg-theme-primary" />
                  {feature}
                </li>
              ))}
            </ul>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
