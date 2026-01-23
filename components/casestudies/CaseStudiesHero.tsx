'use client'

import { TrendingUp } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function CaseStudiesHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Objection Killer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Real Results From
              <br />
              <span className="text-gradient">Real Agencies</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              See how marketing agencies are using AI visibility services to add new revenue streams
              and deliver measurable results for their clients.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
