"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Thermometer, BrainCircuit, Loader2 } from "lucide-react";

export default function HeatRiskAnalyzer() {
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ text: string; temp: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !activity) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/analyze-heat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location, activity }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to analyze");
      }

      setResult({ text: data.result, temp: data.temperature });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="analyzer" className="py-24 bg-theme-bg relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top, var(--theme-secondary) 0%, transparent 70%)' }} />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4 text-white">
            AI HEAT RISK ANALYZER
          </h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto italic font-serif">
            Test our proprietary intelligence engine. Input a location and an operational activity to receive an instant, AI-generated heat risk assessment.
          </p>
          <div className="w-16 h-px bg-theme-secondary mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
          
          {/* Input Form */}
          <div className="bg-theme-bg p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-theme-secondary mb-8 flex items-center gap-2">
              <Activity size={16} /> INPUT PARAMETERS
            </h3>
            
            <form onSubmit={handleAnalyze} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Location</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Dubai, UAE"
                  className="w-full bg-transparent border-b border-white/20 focus:border-theme-primary px-0 py-2 text-white outline-none font-mono text-sm transition-colors placeholder:text-white/20"
                  required
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Operational Activity</label>
                <input 
                  type="text" 
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  placeholder="e.g. Outdoor construction, Marathon, Agriculture"
                  className="w-full bg-transparent border-b border-white/20 focus:border-theme-primary px-0 py-2 text-white outline-none font-mono text-sm transition-colors placeholder:text-white/20"
                  required
                  suppressHydrationWarning
                />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-theme-secondary text-black px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-theme-secondary/80 transition-all duration-300 disabled:opacity-50 flex justify-center items-center gap-2 mt-8"
                suppressHydrationWarning
              >
                {isLoading ? (
                  <><Loader2 size={16} className="animate-spin" /> RUNNING AI ANALYSIS...</>
                ) : (
                  <><BrainCircuit size={16} /> GENERATE INTELLIGENCE</>
                )}
              </button>
            </form>
          </div>

          {/* Output Window */}
          <div className="bg-black/40 p-8 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
             {/* Decorative grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

             <AnimatePresence mode="wait">
               {!result && !isLoading && !error && (
                 <motion.div 
                   key="empty"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="text-center relative z-10"
                 >
                   <Thermometer size={32} className="mx-auto text-white/10 mb-4" />
                   <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Awaiting Parameters...</p>
                 </motion.div>
               )}

               {isLoading && (
                 <motion.div 
                   key="loading"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="relative z-10"
                 >
                    <div className="space-y-4">
                      <div className="h-4 bg-white/5 w-3/4 animate-pulse" />
                      <div className="h-4 bg-white/5 w-1/2 animate-pulse" />
                      <div className="h-4 bg-white/5 w-full animate-pulse" />
                      <div className="h-4 bg-white/5 w-5/6 animate-pulse" />
                    </div>
                 </motion.div>
               )}

               {error && (
                 <motion.div 
                   key="error"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="relative z-10 border border-red-500/30 bg-red-500/10 p-4"
                 >
                   <p className="text-xs text-red-400 font-mono">ERROR: {error}</p>
                 </motion.div>
               )}

               {result && !isLoading && (
                 <motion.div 
                   key="result"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="relative z-10 h-full flex flex-col"
                 >
                   <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
                     <div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">LOCATION</div>
                       <div className="text-sm font-mono text-white">{location}</div>
                     </div>
                     <div className="text-right">
                       <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">LOCAL TEMP</div>
                       <div className="text-2xl font-bold text-theme-primary">{result.temp}°C</div>
                     </div>
                   </div>
                   
                   <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                     <pre className="text-xs font-mono text-white/80 leading-relaxed whitespace-pre-wrap">
                       {result.text}
                     </pre>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
