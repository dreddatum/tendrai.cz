import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { TimeSavings } from "@/components/sections/TimeSavings";
import { Security } from "@/components/sections/Security";
import { Pricing } from "@/components/sections/Pricing";
import { DemoForm } from "@/components/sections/DemoForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <div className="mesh-bg" />
      
      {/* SVG Filter Definition */}
      <svg className="hidden w-0 h-0" width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <filter id="liquid-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise">
            <animate attributeName="baseFrequency" values="0.015;0.02;0.015" dur="10s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <Navbar />
      <main className="flex-1 w-full pt-20 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[minmax(120px,auto)]">
            <Hero />
            <Features />
            <TimeSavings />
            <Security />
            <DemoForm />
            <Pricing />
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
