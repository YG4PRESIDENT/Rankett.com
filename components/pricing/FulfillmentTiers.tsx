'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { Check, X, ShieldCheck } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const tiers = [
  { label: 'Tier 1', price: '$498', charge: '$1,500+' },
  { label: 'Tier 2', price: '$1,498', charge: '$4,500+', highlighted: true },
  { label: 'Tier 3', price: '$2,498', charge: '$7,500+' },
]

type CellValue = boolean | string

const deliverables: { name: string; values: [CellValue, CellValue, CellValue] }[] = [
  { name: 'Monthly AI Visibility Audit', values: [true, true, true] },
  { name: 'Website Crawlability Audit', values: [true, true, true] },
  { name: 'Schema Markup Implementation', values: [true, true, true] },
  { name: 'llms.txt File Deployment', values: [true, true, true] },
  { name: 'GBP Optimization', values: [true, true, true] },
  { name: 'AEO Content Assets', values: ['2/week', '2/week', '2/week'] },
  { name: 'Query Winning & Tracking', values: ['50 prompts', '150 prompts', '250 prompts'] },
  { name: 'FAQ Optimization', values: [true, 'Expanded', 'Aggressive'] },
  { name: '3rd Party Authority Quotes', values: [false, '3–6/mo', '7–10/mo'] },
  { name: 'TLDR Summary Boxes', values: [false, '3–6 pages', '6–12+ pages'] },
  { name: 'YouTube Audio Transcription', values: [false, false, '2 vids/mo'] },
  { name: 'ROI & Avoided Cost Reporting', values: [false, false, true] },
]

function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <Check className="w-5 h-5 text-blue-400 mx-auto" />
  if (value === false) return <X className="w-5 h-5 text-slate-600 mx-auto" />
  return <span className="text-sm text-blue-300 font-medium">{value}</span>
}

function MobileFulfillmentCards() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(1)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.offsetWidth * 0.85
    const gap = 16
    const idx = Math.round(el.scrollLeft / (cardWidth + gap))
    setActiveIndex(Math.min(idx, tiers.length - 1))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.offsetWidth * 0.85
    const gap = 16
    el.scrollLeft = (cardWidth + gap) * 1
  }, [])

  return (
    <div className="md:hidden">
      <FadeInOnScroll direction="up" delay={0.1}>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4"
        >
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.label}
              className={`flex-shrink-0 w-[85vw] snap-center rounded-2xl border p-5 ${
                tier.highlighted
                  ? 'border-blue-500/40 bg-blue-500/5'
                  : 'border-slate-800'
              }`}
              style={{
                background: tier.highlighted
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(2, 6, 23, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)',
              }}
            >
              <div className="text-center mb-4 pb-4 border-b border-slate-800/50">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">{tier.label}</p>
                <p className="text-3xl font-bold text-white">{tier.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
                <p className="text-[11px] text-slate-600 mt-1">You charge {tier.charge}/mo</p>
              </div>

              <div className="space-y-3">
                {deliverables.map((row) => {
                  const val = row.values[tierIdx]
                  return (
                    <div key={row.name} className="flex items-center justify-between gap-3">
                      <span className="text-xs text-slate-400 flex-1">{row.name}</span>
                      <span className="flex-shrink-0">
                        <CellContent value={val} />
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {tiers.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? 'bg-blue-400' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  )
}

export default function FulfillmentTiers() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Fulfillment <span className="text-gradient">Tiers</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We handle all the work. You set your price.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Desktop Table */}
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="hidden md:block -mx-4 sm:mx-0">
          <div
            className="rounded-none sm:rounded-2xl border border-slate-800 overflow-x-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)',
              backdropFilter: 'blur(16px)',
            }}
          >
          <div className="min-w-[600px]">
            {/* Column Headers */}
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
              {/* Empty top-left cell */}
              <div className="p-4 md:p-6 border-b border-r border-slate-800" />

              {/* Tier headers */}
              {tiers.map((tier) => (
                <div
                  key={tier.label}
                  className={`p-4 md:p-6 text-center border-b border-slate-800 ${tier.highlighted ? 'bg-blue-500/8 border-x border-blue-500/20' : ''}`}
                >
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-2">{tier.label}</p>
                  <p className="text-3xl md:text-4xl font-bold text-white">{tier.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
                  <p className="text-[11px] text-slate-600 mt-2">You charge {tier.charge}/mo</p>
                </div>
              ))}
            </div>

            {/* Deliverable Rows */}
            {deliverables.map((row, i) => (
              <div
                key={row.name}
                className={`grid grid-cols-[1fr_1fr_1fr_1fr] ${i % 2 === 0 ? 'bg-slate-900/30' : ''} ${i < deliverables.length - 1 ? 'border-b border-slate-800/50' : ''}`}
              >
                {/* Row label */}
                <div className="p-3 md:p-4 border-r border-slate-800/50 flex items-center">
                  <span className="text-sm text-slate-300">{row.name}</span>
                </div>

                {/* Tier values */}
                {row.values.map((val, j) => (
                  <div
                    key={j}
                    className={`p-3 md:p-4 flex items-center justify-center ${tiers[j].highlighted ? 'bg-blue-500/5' : ''}`}
                  >
                    <CellContent value={val} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>
          </div>
        </FadeInOnScroll>

        {/* Mobile Swipeable Cards */}
        <MobileFulfillmentCards />

        {/* Guarantee — bottom closer */}
        <FadeInOnScroll direction="up" delay={0.2}>
          <div className="flex items-center justify-center gap-2 mt-10">
            <ShieldCheck className="w-4 h-4 text-blue-400/60" />
            <p className="text-sm text-slate-500">
              If we are even a minute late on any fulfillment, the month is free.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
