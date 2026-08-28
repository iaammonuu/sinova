"use client";

import { useEffect, useState } from "react";
import { temperatureService, TemperatureData } from "@/lib/temperatureService";
import { motion } from "motion/react";
import { Activity } from "lucide-react";
import GlobeVisualization from "./GlobeVisualization";

export default function TemperatureVisualization() {
  const [data, setData] = useState<TemperatureData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const globalTemps = await temperatureService.getGlobalTemperatures();
      setData(globalTemps);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every 60 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative bg-theme-bg">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--theme-primary) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          
          {/* Panel */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="w-full md:w-1/3"
          >
            <div className="p-2 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <Activity size={18} className="text-theme-primary" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-theme-secondary">GLOBAL TEMPERATURE INTELLIGENCE</h3>
              </div>
              
              <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                {data.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <span className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{item.location}</span>
                    <div className="flex items-center gap-3">
                      <span className={`text-[8px] font-mono px-2 py-0.5 uppercase tracking-widest ${
                        item.temperature > 30 ? 'text-theme-primary' : 'text-theme-secondary'
                      }`}>
                        {item.status}
                      </span>
                      <motion.span 
                        key={item.temperature}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white font-mono w-12 text-right"
                      >
                        {item.temperature.toFixed(1)}°{item.unit}
                      </motion.span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">LIVE DATA STREAM</span>
              </div>
            </div>
          </motion.div>

          {/* Map visualization */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="w-full md:w-2/3 relative h-[400px] overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 z-0">
              <GlobeVisualization data={data} />
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
