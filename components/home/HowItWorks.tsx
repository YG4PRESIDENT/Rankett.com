'use client'

import { Palette, BarChart3, Wrench } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const steps = [
  {
    number: '01',
    icon: Palette,
    title: 'Customize',
    description: 'White-label with your brand',
    color: 'blue',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Show Value',
    description: 'Run audits, show visibility scores',
    color: 'violet',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'We Deliver',
    description: 'Close deals, we do the work',
    color: 'emerald',
  },
]

const colorStyles = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    glow: 'rgba(59, 130, 246, 0.3)',
  },
  violet: {
    gradient: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
    glow: 'rgba(139, 92, 246, 0.3)',
  },
  emerald: {
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    glow: 'rgba(16, 185, 129, 0.3)',
  },
}

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-500/50 via-violet-500/50 to-emerald-500/50" />

          {steps.map((step, index) => {
            const colors = colorStyles[step.color as keyof typeof colorStyles]
            const Icon = step.icon

            return (
              <FadeInOnScroll key={step.number} direction="up" delay={index * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div
                    className={`relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    style={{
                      boxShadow: `0 10px 40px ${colors.glow}`,
                    }}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>

                  {/* Step number label */}
                  <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider mb-2`}>
                    Step {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-slate-400 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </FadeInOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
