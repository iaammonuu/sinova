import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TemperatureVisualization from "@/components/TemperatureVisualization";
import Challenge from "@/components/Challenge";
import HeatRiskAnalyzer from "@/components/HeatRiskAnalyzer";
import ApiSection from "@/components/ApiSection";
import IdeaGrid from "@/components/IdeaGrid";
import WhyTemperatureAI from "@/components/WhyTemperatureAI";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col overflow-x-hidden selection:bg-theme-secondary/30">
      <Navbar />
      <Hero />
      <TemperatureVisualization />
      <Challenge />
      <HeatRiskAnalyzer />
      <ApiSection />
      <IdeaGrid />
      <WhyTemperatureAI />
      <FAQ />
      <Footer />
    </main>
  );
}
