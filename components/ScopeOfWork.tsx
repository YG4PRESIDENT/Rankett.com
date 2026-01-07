'use client'

import { Check, X } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export default function ScopeOfWork() {
  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Your Infrastructure Team
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            We provide the technical foundation. You provide the client relationship. Here is exactly where our work ends and yours begins.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Column 1: Included */}
          <Card className="p-8 bg-slate-900/50 border-slate-800">
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-800">
                <h3 className="text-xl font-medium text-white">Included Infrastructure</h3>
                <p className="text-sm text-slate-500 mt-1">Delivered by Rankett</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Platform Setup & White-Labeling",
                  "Weekly Reporting (First 4 Weeks)",
                  "Monthly Analysis & PDF Reports",
                  "Schema & LLM.txt Updates",
                  "Directory Management (50+ Sites)",
                  "Pooled Network Data Access"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Column 2: Excluded */}
          <Card className="p-8 bg-slate-950 border-slate-800/50 border-dashed">
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-900">
                <h3 className="text-xl font-medium text-slate-400">Agency Responsibilities</h3>
                <p className="text-sm text-slate-600 mt-1">Managed by You</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Client Sales & Closing",
                  "Marketing Strategy & Ads",
                  "End-Client Customer Support",
                  "Custom Feature Development",
                  "Billing Your Client"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    </div>
                    <span className="text-slate-500 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

        </div>

      </div>
    </section>
  )
}
