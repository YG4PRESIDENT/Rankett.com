'use client'

import Link from 'next/link'
import { Search, Zap, Crown, ArrowRight, ShieldCheck } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const tiers = [
  {
    name: 'Foundational Discovery',
    price: '$498',
    sellFor: '$1,500+',
    bestFor: 'Local businesses with zero AI presence',
    icon: Search,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    shadow: '59, 130, 246',
  },
  {
    name: 'Competitive Distinction',
    price: '$1,498',
    sellFor: '$4,500+',
    bestFor: 'Growth-stage companies in competitive verticals',
    icon: Zap,
    color: 'violet',
    gradient: 'from-violet-500 to-violet-600',
    border: 'border-violet-500/40',
    text: 'text-violet-400',
    shadow: '139, 92, 246',
    highlighted: true,
  },
  {
    name: 'Categorical Saturation',
    price: '$2,498',
    sellFor: '$7,500+',
    bestFor: 'Industry leaders aiming to own a category',
    icon: Crown,
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-600',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    shadow: '16, 185, 129',
  },
]

export default function WholesalePricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <FadeInOnScroll direction="up">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Three Tiers. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Total Fulfillment.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Choose the tier that matches your client. We handle all the work — no revenue share.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Guarantee Banner */}
        <FadeInOnScroll direction="up" delay={0.05}>
          <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-12 max-w-xl mx-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <p className="text-sm text-emerald-300 font-medium">
              Late on fulfillment? The month is free.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <FadeInOnScroll key={tier.name} direction="up" delay={index * 0.1}>
                <div
                  className={`relative p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1 border ${tier.border}`}
                  style={{
                    background: tier.highlighted
                      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)'
                      : 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Most Popular Badge */}
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    style={{ boxShadow: `0 8px 24px rgba(${tier.shadow}, 0.25)` }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-xs text-slate-500 mb-4">{tier.bestFor}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                  </div>

                  {/* Sell For */}
                  <div className={`p-3 rounded-lg bg-${tier.color}-500/10 border ${tier.border}`}>
                    <p className="text-xs text-slate-500 mb-0.5">You Charge</p>
                    <p className={`text-lg font-bold ${tier.text}`}>{tier.sellFor}<span className="text-xs font-normal text-slate-400">/mo</span></p>
                  </div>
                </div>
              </FadeInOnScroll>
            )
          })}
        </div>

        {/* CTA */}
        <FadeInOnScroll direction="up" delay={0.3}>
          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl shadow-blue-900/20"
            >
              View Full Pricing & Deliverables
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  )
}
