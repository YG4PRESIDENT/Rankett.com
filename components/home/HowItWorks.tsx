'use client'

import { Palette, BarChart3, Wrench } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const steps = [
  {
    number: '01',
    icon: Palette,
    title: 'Customize Your Tool',
    description: 'White-label the entire platform with your branding. Your logo, your colors, your domain. Clients never see Rankett.',
    color: 'blue',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Show the Visibility Score',
    description: 'Run audits for prospects and clients. Show them exactly how AI models like ChatGPT and Claude portray their brand.',
    color: 'violet',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'We Fulfill Everything',
    description: 'Close the deal, we do the work. Our team handles all the technical implementations, optimizations, and reporting.',
    color: 'emerald',
  },
]

const colorStyles = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
  },
  violet: {
    gradient: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
  },
  emerald: {
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
  },
}

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Three simple steps to launch your AI visibility service
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-500/50 via-violet-500/50 to-emerald-500/50" />

          {steps.map((step, index) => {
            const colors = colorStyles[step.color as keyof typeof colorStyles]
            const Icon = step.icon

            return (
              <FadeInOnScroll key={step.number} direction="up" delay={index * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    style={{
                      boxShadow: `0 10px 30px rgba(${step.color === 'blue' ? '59, 130, 246' : step.color === 'violet' ? '139, 92, 246' : '16, 185, 129'}, 0.3)`,
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`p-6 rounded-xl ${colors.bg} border ${colors.border} w-full`}
                    style={{
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider`}>
                      Step {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
