'use client'

import { LayoutDashboard, Zap, Users, Lock, TrendingUp, CheckCircle2 } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'
import Link from 'next/link'

const perks = [
  {
    icon: LayoutDashboard,
    title: 'Ghost-Labeled Infrastructure',
    description: 'Your domain. Your brand. Our code is invisible.'
  },
  {
    icon: Zap,
    title: 'Autonomous Fulfillment',
    description: 'Zero-touch delivery. You sell the contract, our engine executes it.'
  },
  {
    icon: Users,
    title: 'Built to Scale',
    description: 'Add clients without adding headcount. Same infrastructure at 1 client or 100.'
  },
  {
    icon: Lock,
    title: 'Zero Overhead',
    description: 'No developers to hire. No tools to build. Add a new service line overnight.'
  }
]

export default function PartnerBenefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeInOnScroll direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Agency Growth Engine</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Sell AI Visibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Under Your Brand</span>.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                The complete infrastructure for AI search optimization. Your brand, your clients, your revenue.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
                {perks.map((perk, i) => (
                  <div key={i} className="flex flex-col gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                      <perk.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{perk.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://app.rankett.com/sign-up" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                  Start For Free
                </Link>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="left" delay={0.2}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-20"></div>
              
              {/* High-Fidelity Dashboard Mockup */}
              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">A</span>
                        </div>
                        <span className="text-slate-300 font-medium text-sm">Agency Admin</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    </div>
                </div>
                
                {/* Dashboard Body */}
                <div className="p-6 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="text-slate-500 text-xs mb-1">Active Clients</div>
                            <div className="text-2xl font-bold text-white">24</div>
                            <div className="text-emerald-400 text-xs mt-1 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> +3 this week
                            </div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="text-slate-500 text-xs mb-1">Recurring Revenue</div>
                            <div className="text-2xl font-bold text-white">$72k</div>
                            <div className="text-emerald-400 text-xs mt-1 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> +12% vs last mo
                            </div>
                        </div>
                    </div>

                    {/* Client List Preview */}
                    <div className="space-y-3">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recent Optimizations</div>
                        {[
                            { name: 'Local Coffee Co.', status: 'Optimized', time: '2m ago' },
                            { name: 'TechStart Inc.', status: 'Processing', time: '15m ago' },
                            { name: 'Dental Care Plus', status: 'Optimized', time: '1h ago' }
                        ].map((client, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${client.status === 'Optimized' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                                    <span className="text-slate-300 text-sm font-medium">{client.name}</span>
                                </div>
                                <span className="text-slate-500 text-xs">{client.time}</span>
                            </div>
                        ))}
                    </div>

                    {/* "Ghost" Badge */}
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-200 text-xs font-medium">Auto-Fulfillment Active</span>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping"></div>
                    </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

        </div>

      </div>
    </section>
  )
}
