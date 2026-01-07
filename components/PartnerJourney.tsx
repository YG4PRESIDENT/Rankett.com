'use client'

import { ClipboardCheck, Phone, Layout, Rocket } from 'lucide-react'

const STEPS = [
  {
    title: "Application",
    description: "Submit your agency profile. We require 5+ active clients to ensure partner quality.",
    icon: ClipboardCheck
  },
  {
    title: "Validation",
    description: "15-minute discovery call to confirm your existing offer aligns with our infrastructure.",
    icon: Phone
  },
  {
    title: "Onboarding",
    description: "Immediate white-label access. Configure your brand, pricing, and integration.",
    icon: Layout
  },
  {
    title: "Deployment",
    description: "Launch your first client seat. Strict 60-day activation window applies.",
    icon: Rocket
  }
]

export default function PartnerJourney() {
  return (
    <section className="py-24 px-4 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Partner Application Process
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            We operate as an exclusive infrastructure partner, not a mass-market SaaS.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-slate-800 md:left-1/2 md:-ml-px" />

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <div key={i} className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Icon Marker */}
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-slate-950 border border-slate-800 z-10 group hover:border-white/20 transition-colors">
                  <step.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <div className="ml-24 md:ml-0 md:w-[42%] p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:bg-slate-900/40 transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
