'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import LogoCarousel from '@/components/ui/LogoCarousel'

export default function HeroAgency() {
  const scrollToApplication = () => {
     window.open("https://calendly.com/rankett/30min", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center p-4 overflow-hidden pt-20 bg-slate-950">
      
      {/* Background Effects (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Glow - Top Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="w-full max-w-5xl space-y-10 animate-fade-in relative z-10 text-center">
        
        {/* Hero Text */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
            The White-Label <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-violet-400">
              AI Engine
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            You become our sales team. We focus on fulfillment. <br className="hidden md:block"/>
            Charge <span className="text-white font-medium">3x+ what you pay us</span>. Do none of the work.
          </p>
        </div>

        {/* CTAs - Using System Primary Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Button 
            onClick={scrollToApplication}
            variant="primary"
            className="h-14 px-10 text-lg w-full sm:w-auto shadow-lg shadow-blue-500/20"
          >
            Apply for Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="pt-24 mt-8 border-t border-slate-900/50 max-w-4xl mx-auto w-full">
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] mb-8 font-medium">
            Infrastructure Partner For
          </p>
          <div className="opacity-30 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0">
            <LogoCarousel />
          </div>
        </div>

      </div>
    </section>
  )
}