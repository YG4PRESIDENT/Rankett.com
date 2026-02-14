'use client'

import { ArrowRight, DollarSign, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export default function AgencyProfitModel() {
  return (
    <section id="agency-math" className="py-24 px-4 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Revenue Expansion Model
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Our pricing is designed to provide significant margin for agency partners while covering the cost of manual fulfillment and AI infrastructure.
          </p>
        </div>

        {/* The Math Equation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          
          {/* Step 1: Cost */}
          <Card className="w-full max-w-sm p-8 bg-slate-900/50 border-slate-800">
            <div className="space-y-2">
              <h3 className="text-slate-500 text-sm font-mono uppercase tracking-wider">Your Cost (Tier 2)</h3>
              <div className="text-4xl font-light text-white">$1,498<span className="text-lg text-slate-600">/mo</span></div>
              <p className="text-sm text-slate-500 pt-2">Competitive Distinction</p>
            </div>
          </Card>

          {/* Operator */}
          <div className="text-slate-700 font-light text-4xl hidden lg:block">-</div>

          {/* Step 2: Revenue */}
          <Card className="w-full max-w-sm p-8 bg-slate-900/50 border-slate-800">
            <div className="space-y-2">
              <h3 className="text-blue-400 text-sm font-mono uppercase tracking-wider">You Charge</h3>
              <div className="text-4xl font-light text-white">$4,500<span className="text-lg text-slate-600">/mo</span></div>
              <p className="text-sm text-slate-500 pt-2">Example Rate</p>
            </div>
          </Card>

          {/* Operator */}
          <div className="text-slate-700 font-light text-4xl hidden lg:block">=</div>

          {/* Step 3: Profit */}
          <Card className="w-full max-w-sm p-8 bg-slate-900 border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-white" />
            <div className="space-y-2 relative z-10">
              <h3 className="text-white text-sm font-mono uppercase tracking-wider">Your Profit</h3>
              <div className="text-5xl font-medium text-white">$3,002<span className="text-lg text-slate-500 font-light">/mo</span></div>
              <p className="text-sm text-slate-400 pt-2">Per client margin</p>
            </div>
          </Card>

        </div>

        {/* Note */}
        <div className="text-center">
          <p className="text-xs text-slate-600 font-mono">
            * MARGINS RANGE FROM $1,002/MO (TIER 1) TO $5,002/MO (TIER 3). PARTNERS RETAIN 100% OF END-CLIENT REVENUE.
          </p>
        </div>

      </div>
    </section>
  )
}