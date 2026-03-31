'use client'

import { Check, X, Minus } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const features = [
  { name: 'Google Business Profile', foundation: true, growth: true, dominance: true },
  { name: 'Directory Listings (50+)', foundation: true, growth: true, dominance: true },
  { name: 'Review Management', foundation: true, growth: true, dominance: true },
  { name: 'Monthly Reporting', foundation: true, growth: true, dominance: true },
  { name: 'Schema Implementation', foundation: false, growth: true, dominance: true },
  { name: 'Robots.txt Optimization', foundation: false, growth: true, dominance: true },
  { name: 'On-site Content (4/mo)', foundation: false, growth: true, dominance: true },
  { name: 'Technical SEO Audit', foundation: false, growth: true, dominance: true },
  { name: 'Video Content & Transcripts', foundation: false, growth: false, dominance: true },
  { name: 'Custom ChatGPT Plugins', foundation: false, growth: false, dominance: true },
  { name: 'Advanced Analytics', foundation: false, growth: false, dominance: true },
]

export default function ClientFulfillmentTiers() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Fulfillment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Blueprints</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">
              Select the engine. We handle the execution. You set the retail price.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-4 min-w-[600px]">
              
              {/* Header Row */}
              <div className="p-6 border-b border-r border-slate-800/50 bg-slate-900/50">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Features</span>
              </div>
              
              <div className="p-6 border-b border-r border-slate-800/50 text-center bg-slate-900/50">
                <h3 className="text-white font-bold text-lg mb-1">Foundation</h3>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Entry Level</div>
              </div>
              
              <div className="p-6 border-b border-r border-slate-800/50 text-center bg-blue-500/5 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500" />
                <h3 className="text-white font-bold text-lg mb-1">Growth</h3>
                <div className="text-[10px] text-blue-400 uppercase tracking-wider font-bold">Standard</div>
              </div>
              
              <div className="p-6 border-b border-slate-800/50 text-center bg-slate-900/50">
                <h3 className="text-white font-bold text-lg mb-1">Dominance</h3>
                <div className="text-[10px] text-emerald-400 uppercase tracking-wider font-bold">Enterprise</div>
              </div>

              {/* Feature Rows */}
              {features.map((feature, i) => (
                <>
                  <div key={`name-${i}`} className="p-4 px-6 border-b border-r border-slate-800/50 flex items-center bg-slate-950/20">
                    <span className="text-sm text-slate-300 font-medium">{feature.name}</span>
                  </div>
                  
                  <div key={`fnd-${i}`} className="p-4 border-b border-r border-slate-800/50 flex items-center justify-center bg-slate-950/20">
                    {feature.foundation ? (
                      <Check className="w-4 h-4 text-slate-400" />
                    ) : (
                      <Minus className="w-4 h-4 text-slate-700" />
                    )}
                  </div>
                  
                  <div key={`grw-${i}`} className="p-4 border-b border-r border-slate-800/50 flex items-center justify-center bg-blue-500/5">
                    {feature.growth ? (
                      <Check className="w-4 h-4 text-blue-400" />
                    ) : (
                      <Minus className="w-4 h-4 text-slate-700" />
                    )}
                  </div>
                  
                  <div key={`dom-${i}`} className="p-4 border-b border-slate-800/50 flex items-center justify-center bg-slate-950/20">
                    {feature.dominance ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Minus className="w-4 h-4 text-slate-700" />
                    )}
                  </div>
                </>
              ))}

              {/* Pricing Row */}
              <div className="p-6 border-r border-slate-800/50 bg-slate-900/50 flex items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Wholesale Cost</span>
              </div>
              
              <div className="p-6 border-r border-slate-800/50 text-center bg-slate-900/50">
                <div className="text-2xl font-bold text-white">$997<span className="text-sm text-slate-500 font-normal">/mo</span></div>
              </div>
              
              <div className="p-6 border-r border-slate-800/50 text-center bg-blue-500/5">
                <div className="text-2xl font-bold text-white">$2,997<span className="text-sm text-slate-500 font-normal">/mo</span></div>
              </div>
              
              <div className="p-6 text-center bg-slate-900/50">
                <div className="text-2xl font-bold text-white">$7,997<span className="text-sm text-slate-500 font-normal">/mo</span></div>
              </div>

            </div>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  )
}