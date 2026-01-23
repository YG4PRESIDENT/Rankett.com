'use client'

import { Check, Cpu, Users, FileText, Globe, Search, MessageSquare, RefreshCw } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export default function FulfillmentShowcase() {
  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-sm font-medium border border-blue-800/30">
            Platform + Fulfillment
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            We Do The Work. <span className="text-gradient">You Take The Credit.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            This isn't just a software tool. It's a complete fulfillment system. We handle the labor-intensive optimization while you manage the client relationship.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: The Platform (Tech) */}
          <Card className="p-8 border-slate-800 bg-slate-900/50">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">The Platform</h3>
                  <p className="text-slate-400">Automated Intelligence</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Multi-LLM Rank Tracking (ChatGPT, Claude, Gemini)",
                  "White-Label Client Dashboards",
                  "Automated Monthly PDF Reports",
                  "Competitor Visibility Analysis",
                  "Revenue-at-Risk ROI Calculator",
                  "100% Ghost Branding (No Rankett Traces)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Visual: Ghost Dashboard */}
              <div className="mt-8 p-6 rounded-xl bg-slate-950 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs text-slate-600 font-mono">dashboard.youragency.com</div>
                <div className="space-y-4 opacity-75">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-dashed border border-slate-700 bg-slate-900 flex items-center justify-center text-[10px] text-slate-500">LOGO</div>
                    <div className="h-4 w-32 bg-slate-800 rounded" />
                  </div>
                  <div className="h-32 bg-slate-900 rounded border border-slate-800" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-[2px]">
                  <p className="text-white font-bold tracking-wide">YOUR BRAND HERE</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Column 2: The Fulfillment (Labor) */}
          <Card className="p-8 border-primary/20 bg-primary/5">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/20 text-primary">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">The Fulfillment</h3>
                  <p className="text-primary/80">Human-Led Optimization</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: MessageSquare, text: "Weekly Reddit & Quora Answer Seeding" },
                  { icon: FileText, text: "LLM.txt & Schema Markup Updates" },
                  { icon: RefreshCw, text: "Content Freshness Cycles (for Perplexity)" },
                  { icon: Globe, text: "Directory Claiming (50+ Authority Sites)" },
                  { icon: Search, text: "Review Sentiment Monitoring" },
                  { icon: Users, text: "Dedicated Account Manager Support" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-0.5 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-white font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Visual: Work Log */}
              <div className="mt-8 p-6 rounded-xl bg-slate-900 border border-primary/20 relative">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>RECENT ACTIVITY LOG</span>
                    <span>STATUS: ACTIVE</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-slate-300">Posted to r/AustinSmallBiz</span>
                    <span className="text-xs text-slate-500 ml-auto">2h ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-slate-300">Updated FAQ Schema</span>
                    <span className="text-xs text-slate-500 ml-auto">5h ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-slate-300">Claimed 3 New Directories</span>
                    <span className="text-xs text-slate-500 ml-auto">1d ago</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>

      </div>
    </section>
  )
}
