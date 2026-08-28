"use client";

import { motion } from "motion/react";
import { ThermometerSun, BrainCircuit, Zap } from "lucide-react";

export default function Challenge() {
  const cards = [
    {
      num: "01",
      title: "UNDERSTAND HEAT",
      desc: "Help AI understand how temperature changes across locations and time.",
      icon: ThermometerSun,
      color: "from-theme-primary/20 to-transparent",
      borderColor: "border-white/10"
    },
    {
      num: "02",
      title: "PREDICT IMPACT",
      desc: "Use intelligence and prediction to identify heat-related risks.",
      icon: BrainCircuit,
      color: "from-theme-secondary/20 to-transparent",
      borderColor: "border-white/10"
    },
    {
      num: "03",
      title: "TAKE ACTION",
      desc: "Turn temperature intelligence into useful decisions for people, businesses, and communities.",
      icon: Zap,
      color: "from-theme-primary/20 to-transparent",
      borderColor: "border-white/10"
    }
  ];

  return (
    <section id="platform" className="py-24 bg-theme-bg relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20 border-l border-theme-primary pl-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
            <span className="block text-white">AI CAN SEE ALMOST EVERYTHING.</span>
            <span className="block text-white/40 italic font-serif">CAN IT SEE HEAT?</span>
          </h2>
          <p className="text-sm text-white/60 mb-6 leading-relaxed max-w-xl">
            Heat is more than a number. It affects human health, agriculture, energy consumption, infrastructure, productivity, cities, transportation, and everyday decisions.
          </p>
          <p className="text-sm text-theme-secondary uppercase tracking-widest leading-relaxed">
            Your challenge is to build an AI-powered application that turns hyperlocal temperature intelligence into useful predictions, decisions, recommendations, or actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-black/20 border-r border-white/10 last:border-r-0 p-10 relative overflow-hidden group hover:bg-white/[0.02] transition-colors`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-mono tracking-widest text-white/40">{card.num}</span>
                    <Icon size={24} className="text-theme-primary opacity-50 group-hover:opacity-100 transition-colors" />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-4 tracking-widest uppercase">{card.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-serif italic">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
