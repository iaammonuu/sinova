"use client";

import { REGISTRATION_URL } from "@/lib/config";
import { Thermometer, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-bg pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 group mb-6">
              <div className="w-6 h-6 border-2 border-theme-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-theme-secondary rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold tracking-tighter text-xl text-white">SIRONA</span>
            </a>
            <p className="text-white/50 max-w-sm mb-6">
              Building intelligent applications for a world where heat matters.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xs text-white tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#platform" className="text-white/60 hover:text-white transition-colors text-xs font-serif italic">Platform</a></li>
              <li><a href="#technology" className="text-white/60 hover:text-white transition-colors text-xs font-serif italic">API Docs</a></li>
              <li><a href="#analyzer" className="text-white/60 hover:text-white transition-colors text-xs font-serif italic">Risk Analyzer</a></li>
              <li><a href="#ideas" className="text-white/60 hover:text-white transition-colors text-xs font-serif italic">Solutions</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-white transition-colors text-xs font-serif italic">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xs text-white tracking-widest uppercase mb-6">Action</h4>
            <ul className="space-y-4">
              <li><a href="#analyzer" className="text-theme-secondary hover:text-theme-secondary/80 transition-colors text-xs uppercase tracking-widest font-bold">Launch Dashboard</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs font-serif italic">Get API Key</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs">
            &copy; {currentYear} Sirona. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span className="font-mono">Climate Tech Intelligence</span>
          </div>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
