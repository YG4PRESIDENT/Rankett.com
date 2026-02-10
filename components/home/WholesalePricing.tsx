'use client'

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

export default function WholesalePricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Three Tiers. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Total Fulfillment.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Choose the tier that matches your client. We handle all the work — no revenue share.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Table */}
        <FadeInOnScroll direction="up" delay={0.1}>
          <div
            className="rounded-2xl border border-slate-800 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)',
              backdropFilter: 'blur(16px)',
            }}
          >
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
        </FadeInOnScroll>

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
