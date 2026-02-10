'use client'

import { Search, Zap, Crown, Check, ShieldCheck } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const tiers = [
  {
    name: 'Foundational Discovery',
    price: '$498',
    icon: Search,
    sellFor: '$1,500+',
    identity: 'Moderate Competitor Density. You are now fighting 50+ competitors across a state or specific industry niche.',
    bestFor: 'Local businesses ($1M–$5M ARR) with zero AI presence',
    idealAgency: 'Generalist Digital Marketing or SEO agencies looking to modernize "Maintenance" packages',
    color: 'blue',
    highlighted: false,
    deliverables: [
      'Monthly AI Visibility Audit',
      'Website Crawlability Audit',
      'Schema Markup Implementation',
      'llms.txt File Deployment',
      'GBP Optimization',
      'AEO Content Assets (2x/week)',
      'Query Winning & Tracking (50 prompts)',
      'FAQ Optimization',
    ],
  },
  {
    name: 'Competitive Distinction',
    price: '$1,498',
    icon: Zap,
    sellFor: '$4,500+',
    identity: 'Winning the "Recommendation Engine." At this level, we ensure the AI suggests your client instead of the competitor.',
    bestFor: 'Growth-stage companies ($5M–$20M ARR) in competitive verticals (SaaS, Law, Finance)',
    idealAgency: 'Performance or Revenue Optimization agencies that focus on ROI and market share',
    color: 'violet',
    highlighted: true,
    deliverables: [
      'Everything in Foundational Discovery',
      'Expanded Query Tracking (150 prompts)',
      '3rd Party Authority Quotes (3–6/mo)',
      'TLDR Summary Boxes (3–6 money pages)',
      'Enhanced FAQ Optimization',
    ],
  },
  {
    name: 'Categorical Saturation',
    price: '$2,498',
    icon: Crown,
    sellFor: '$7,500+',
    identity: 'High Competitor Density. Winning here requires "Categorical Saturation". AI must see your client as the primary source of truth.',
    bestFor: 'Industry leaders or companies aiming to "own" a category',
    idealAgency: 'Specialist agencies or high-ticket consulting firms',
    color: 'emerald',
    highlighted: false,
    deliverables: [
      'Everything in Tier 1 & 2',
      'Aggressive Query Tracking (250 prompts)',
      'High-Volume Authority Quotes (7–10/mo)',
      'Massive TLDR Coverage (6–12+ pages)',
      'YouTube Audio Transcription (2 vids/mo)',
      'ROI & Avoided Cost Reporting',
    ],
  },
]

const colorStyles = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    highlightBorder: 'border-blue-500/40',
    text: 'text-blue-400',
    shadow: '59, 130, 246',
  },
  violet: {
    gradient: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    highlightBorder: 'border-violet-500/60',
    text: 'text-violet-400',
    shadow: '139, 92, 246',
  },
  emerald: {
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    highlightBorder: 'border-emerald-500/40',
    text: 'text-emerald-400',
    shadow: '16, 185, 129',
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Guarantee Banner */}
        <FadeInOnScroll direction="up">
          <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-12 max-w-3xl mx-auto">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <p className="text-sm md:text-base text-emerald-300 font-medium text-center">
              <span className="font-bold">The Guarantee:</span> If we are even a minute late on any fulfillment, the month is free.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              AI Visibility <span className="text-gradient">Fulfillment Tiers</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose the tier that matches your client. We handle all the work — you keep the spread.
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
                  className={`relative p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1 border ${tier.highlighted ? colors.highlightBorder : colors.border}`}
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    style={{
                      boxShadow: `0 8px 24px rgba(${colors.shadow}, 0.25)`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Header */}
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{tier.identity}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">/mo</span>
                  </div>

                  {/* Sell for */}
                  <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border} mb-6`}>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">You Charge</p>
                    <p className={`text-xl font-bold ${colors.text}`}>{tier.sellFor}<span className="text-sm font-normal text-slate-400">/mo</span></p>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-medium">Deliverables</p>
                    <ul className="space-y-2">
                      {tier.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For & Ideal Agency */}
                  <div className="pt-4 border-t border-slate-700/50 space-y-3">
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1">Best For</p>
                      <p className="text-xs text-slate-400">{tier.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1">Ideal Agency</p>
                      <p className="text-xs text-slate-400">{tier.idealAgency}</p>
                    </div>
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
