'use client'

import { TrendingUp, ShoppingCart, RefreshCcw, AlertTriangle } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const metrics = [
  {
    value: '300%',
    label: 'Increase in demand for AI visibility services year-over-year',
    icon: TrendingUp,
    color: 'emerald'
  },
  {
    value: '4.4x',
    label: 'More likely to buy when using AI search vs traditional search',
    icon: ShoppingCart,
    color: 'blue'
  },
  {
    value: 'Dynamic',
    label: 'AI is constantly changing; we adapt the strategy for you',
    icon: RefreshCcw,
    color: 'violet'
  },
  {
    value: '36%',
    label: 'Of content marketers reported organic traffic decline in 2025',
    icon: AlertTriangle,
    color: 'amber'
  }
]

export default function MarketMetrics() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Clients Need <span className="text-blue-500">AI Visibility</span>.
            </h2>
            <p className="text-slate-400 text-lg">
              We deliver it under your name. The market has already shifted—don't let your clients get left behind.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => {
            const Icon = m.icon
            return (
              <FadeInOnScroll key={i} direction="up" delay={i * 0.1}>
                <div className="h-full p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className={`w-12 h-12 rounded-xl bg-${m.color}-500/10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${m.color}-500`} />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{m.value}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {m.label}
                    {i === 3 && <span className="block mt-2 text-xs text-amber-500/80">That traffic moved to Perplexity.</span>}
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
