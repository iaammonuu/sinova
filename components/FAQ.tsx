"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "What is Sirona?", a: "Sirona is an advanced climate intelligence platform that combines hyperlocal temperature data with predictive AI models to help organizations understand and mitigate heat-related risks." },
    { q: "How accurate is the FortyGuard Temperature API?", a: "The API leverages a vast network of global nodes and proprietary calibration algorithms to deliver highly accurate, hyperlocal temperature intelligence, updated in real-time." },
    { q: "Can I use the API for automated decision-making?", a: "Yes. Our platform is built for integration. The AI signals and temperature data can trigger autonomous agents, optimize energy usage, and issue automated safety alerts." },
    { q: "What is the Heat Risk Analyzer?", a: "It is our flagship AI tool that evaluates the potential danger of high temperatures for specific activities, providing operational recommendations to ensure safety and efficiency." },
    { q: "How do I get an API key?", a: "API keys are currently available to enterprise partners and researchers in our early access program. Contact our sales team to request access." },
    { q: "What kind of models do you use?", a: "We utilize advanced foundational AI models, including Gemini, integrated directly with our spatial temperature matrices to perform complex contextual reasoning about heat impact." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    if (openIdx === idx) setOpenIdx(null);
    else setOpenIdx(idx);
  };

  return (
    <section id="faq" className="py-24 bg-theme-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-16 text-white text-center uppercase">
          FAQ
        </h2>
        
        <div className="space-y-0 border border-white/10">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border-b border-white/10 last:border-b-0 overflow-hidden bg-transparent hover:bg-white/[0.02] transition-colors"
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                suppressHydrationWarning
              >
                <span className="font-bold text-white pr-4 uppercase tracking-wide text-xs">{faq.q}</span>
                {openIdx === idx ? <Minus size={18} className="text-theme-primary flex-shrink-0" /> : <Plus size={18} className="text-theme-secondary flex-shrink-0" />}
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/50 leading-relaxed pt-0 text-sm font-serif italic">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
