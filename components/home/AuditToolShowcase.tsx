'use client'

import { Search, LineChart, Target, Zap, Users } from 'lucide-react'
import Image from 'next/image'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function AuditToolShowcase() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Screenshot of Tool */}
          <FadeInOnScroll direction="right">
            <div className="relative group">
              {/* Glow Effect behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-2xl">
                {/* Placeholder for actual screenshot - using a div for now to represent the UI */}
                <div className="aspect-[16/10] bg-slate-900 relative flex flex-col">
                  {/* Fake UI Header */}
                  <div className="h-12 border-b border-slate-800 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  </div>
                  {/* Fake UI Body */}
                  <div className="flex-1 p-6 flex flex-col gap-4">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30">
                            <span className="text-2xl font-bold text-red-500">F</span>
                        </div>
                        <div>
                            <div className="h-4 w-32 bg-slate-800 rounded mb-2"></div>
                            <div className="h-3 w-24 bg-slate-800 rounded"></div>
                        </div>
                     </div>
                     <div className="h-32 w-full bg-slate-800/50 rounded border border-slate-800"></div>
                     <div className="flex gap-2 mt-auto">
                        <div className="h-8 w-8 rounded bg-emerald-500/20"></div>
                        <div className="h-8 w-8 rounded bg-blue-500/20"></div>
                        <div className="h-8 w-8 rounded bg-violet-500/20"></div>
                     </div>
                  </div>
                  
                  {/* Overlay text for "Screenshot of tool" if needed, but the visual implies it */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-slate-700 font-mono text-sm">[Dashboard Interface Screenshot]</span>
                  </div>
                </div>
              </div>

              {/* "Tracking across LLM" Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-900 border border-slate-800 flex items-center justify-center text-[10px] text-emerald-400 font-bold">GPT</div>
                    <div className="w-8 h-8 rounded-full bg-violet-900 border border-slate-800 flex items-center justify-center text-[10px] text-violet-400 font-bold">CLD</div>
                    <div className="w-8 h-8 rounded-full bg-blue-900 border border-slate-800 flex items-center justify-center text-[10px] text-blue-400 font-bold">GEM</div>
                </div>
                <span className="text-sm font-medium text-slate-300">Tracking across LLMs</span>
              </div>
            </div>
          </FadeInOnScroll>

          {/* RIGHT: Text & Features */}
          <FadeInOnScroll direction="left" delay={0.2}>
            <div className="space-y-12">
              
              {/* Meta Features (Your Lead Magnet) */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <Target className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Your Lead Magnet</h3>
                </div>
                <p className="text-slate-400 mb-6">
                    Stop cold calling. Start providing value. Use our white-label audit tool to generate "Red Alert" reports that close deals for you.
                </p>
                <ul className="space-y-3">
                    {[
                        'Send to prospects instantly',
                        'Run high-converting ads',
                        'Capture emails automatically',
                        'Track user behavior',
                        'Audit live on sales calls'
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            {item}
                        </li>
                    ))}
                </ul>
              </div>

              {/* Tool Features (What It Does) */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                        <Search className="w-5 h-5 text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">What It Does</h3>
                </div>
                <ul className="space-y-3">
                    {[
                        'AI visibility analysis & scoring',
                        'Brand monitoring across ChatGPT, Claude, Gemini',
                        'Competitor gap analysis',
                        'Sentiment tracking',
                        'Local vs National filtering'
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                            {item}
                        </li>
                    ))}
                </ul>
              </div>

            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  )
}
