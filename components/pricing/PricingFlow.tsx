'use client'

import { ArrowDown, Sparkles, Users, Rocket } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const steps = [
  {
    icon: Sparkles,
    title: 'Choose Your Access',
    description: 'Start free with Starter or unlock everything with Partner ($500/mo)',
  },
  {
    icon: Users,
    title: 'Close a Client',
    description: 'Use the audit tool to show prospects their AI visibility gap',
  },
  {
    icon: Rocket,
    title: 'Add Fulfillment',
    description: 'Pay per-client fulfillment ($998-$2,498/mo) and keep the margin',
  },
]

export default function PricingFlow() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              How the Pricing <span className="text-gradient">Works</span>
            </h2>
            <p className="text-slate-400">
              A simple progression from free to profitable
            </p>
          </div>
        </FadeInOnScroll>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-emerald-500/50 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === steps.length - 1

              return (
                <FadeInOnScroll key={step.title} direction="up" delay={index * 0.1}>
                  <div className="relative flex items-start gap-6 md:gap-8">
                    {/* Step number and icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg"
                        style={{
                          boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 p-6 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(51, 65, 85, 0.3)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {!isLast && (
                    <div className="flex justify-start md:justify-center pl-5 md:pl-0 py-2">
                      <ArrowDown className="w-5 h-5 text-slate-600" />
                    </div>
                  )}
                </FadeInOnScroll>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
