'use client'

import { MapPin, Building2, Globe, TrendingUp } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const tiers = [
  {
    name: 'Local',
    price: '$998',
    icon: MapPin,
    target: '1-3 location businesses',
    sellFor: '$3,000 - $5,000',
    examples: 'Single-location restaurants, local service businesses, small medical practices',
    color: 'blue',
  },
  {
    name: 'Regional',
    price: '$1,498',
    icon: Building2,
    target: 'Multi-location / multistate',
    sellFor: '$5,000 - $8,000',
    examples: 'Regional franchises, multi-location healthcare, state-wide service companies',
    color: 'violet',
  },
  {
    name: 'National',
    price: '$2,498',
    icon: Globe,
    target: 'Nationwide reach',
    sellFor: '$8,000 - $15,000+',
    examples: 'National brands, enterprise companies, large franchise networks',
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

export default function FulfillmentTiers() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Only Pay When a Client Pays You
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Fulfillment Tiers
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose the tier that matches your client&apos;s business size. We handle all the work.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => {
            const colors = colorStyles[tier.color as keyof typeof colorStyles]
            const Icon = tier.icon

            return (
              <FadeInOnScroll key={tier.name} direction="up" delay={index * 0.1}>
                <div
                  className={`relative p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1 border ${colors.border}`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    style={{
                      boxShadow: `0 8px 24px rgba(${tier.color === 'blue' ? '59, 130, 246' : tier.color === 'violet' ? '139, 92, 246' : '16, 185, 129'}, 0.25)`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Header */}
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{tier.target}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">/mo per client</span>
                  </div>

                  {/* Sell for */}
                  <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border} mb-4`}>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Sell For</p>
                    <p className={`text-xl font-bold ${colors.text}`}>{tier.sellFor}</p>
                    <p className="text-xs text-slate-400">per month</p>
                  </div>

                  {/* Examples */}
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-400">Examples:</span> {tier.examples}
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
