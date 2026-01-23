'use client'

import { ArrowRight, TrendingUp } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const tiers = [
  {
    name: 'Local',
    youPay: '$998',
    youCharge: '$3,000 - $5,000',
    margin: '200-400%',
    description: '1-3 location businesses',
    highlight: false,
  },
  {
    name: 'Regional',
    youPay: '$1,498',
    youCharge: '$5,000 - $8,000',
    margin: '230-430%',
    description: 'Multi-location / multistate',
    highlight: true,
  },
  {
    name: 'National',
    youPay: '$2,498',
    youCharge: '$8,000 - $15,000+',
    margin: '220-500%+',
    description: 'Nationwide reach',
    highlight: false,
  },
]

export default function TheMathSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              The Math Just <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Pay us monthly. Charge your clients 3-5x more. Keep the difference.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <FadeInOnScroll key={tier.name} direction="up" delay={index * 0.1}>
              <div
                className={`relative p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlight
                    ? 'border-2 border-blue-500/50'
                    : 'border border-slate-700/50'
                }`}
                style={{
                  background: tier.highlight
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 41, 59, 0.6) 100%)'
                    : 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-400">{tier.description}</p>
                </div>

                {/* Pricing flow */}
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-xl bg-slate-800/50">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">You Pay Rankett</p>
                    <p className="text-2xl font-bold text-white">{tier.youPay}<span className="text-sm text-slate-400">/mo</span></p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-blue-400 rotate-90" />
                  </div>

                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">You Charge Clients</p>
                    <p className="text-2xl font-bold text-gradient">{tier.youCharge}<span className="text-sm text-slate-300">/mo</span></p>
                  </div>
                </div>

                {/* Margin badge */}
                <div className="mt-6 flex items-center justify-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-bold">{tier.margin} margin</span>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
