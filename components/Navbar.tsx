"use client";

import { useState, useEffect } from "react";
import { Menu, X, Thermometer, Snowflake, Flame } from "lucide-react";
import { REGISTRATION_URL } from "@/lib/config";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "#platform" },
    { name: "API", href: "#technology" },
    { name: "Analyzer", href: "#analyzer" },
    { name: "Solutions", href: "#ideas" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-theme-bg/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-6 h-6 border-2 border-theme-primary rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-theme-secondary rounded-full animate-pulse"></div>
          </div>
          <span className="font-bold tracking-tighter text-xl text-white">SIRONA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            suppressHydrationWarning
          >
            {theme === "heat" ? <Snowflake size={16} /> : <Flame size={16} />}
            {theme === "heat" ? "Freeze" : "Heat"}
          </button>
          <a
            href="#analyzer"
            className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-theme-primary hover:text-white transition-all duration-300"
          >
            Launch Analyzer
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          suppressHydrationWarning
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-theme-bg/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#analyzer"
              className="mt-4 px-5 py-3 text-center bg-white text-black text-base font-semibold rounded hover:bg-gray-200 transition-colors"
            >
              Launch Analyzer
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
