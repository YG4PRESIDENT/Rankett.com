'use client'

import { Eye, Wrench, BarChart3, ArrowRight } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const benefits = [
  {
    icon: Eye,
    title: 'Show Clients the Problem',
    description: 'Run an instant audit that reveals exactly how AI models portray their brand vs competitors.',
  },
  {
    icon: Wrench,
    title: 'We Fix It For You',
    description: 'Our team handles all the technical optimizations to improve their AI visibility across platforms.',
  },
  {
    icon: BarChart3,
    title: 'Track Progress Together',
    description: 'White-labeled dashboard shows clients their improving visibility scores and competitor comparisons.',
  },
]

export default function StealSpotlight() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              You Show Them. <span className="text-gradient">We Fulfill.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Your role is simple: show prospects their AI visibility gap and close the deal.
              We handle everything else.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <FadeInOnScroll key={benefit.title} direction="up" delay={index * 0.1}>
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </FadeInOnScroll>
            )
          })}
        </div>

        {/* Process flow */}
        <FadeInOnScroll direction="up" delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <div className="px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm">
              You Run Audit
            </div>
            <ArrowRight className="w-5 h-5 text-slate-600" />
            <div className="px-5 py-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium text-sm">
              Client Signs Up
            </div>
            <ArrowRight className="w-5 h-5 text-slate-600" />
            <div className="px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm">
              We Do The Work
            </div>
            <ArrowRight className="w-5 h-5 text-slate-600" />
            <div className="px-5 py-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-medium text-sm">
              You Keep The Margin
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
