'use client'

import { useState, useEffect, useRef } from 'react'
import { Magnet, TrendingUp, Terminal, User, ArrowRight, ShieldCheck, Search, Activity, Globe, CheckCircle2 } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'
import { gsap } from 'gsap'

type Mode = 'prospector' | 'closer' | 'fulfillment'

export default function AuditToolSection() {
  const [activeMode, setActiveMode] = useState<Mode>('prospector')
  const screenRef = useRef<HTMLDivElement>(null)

  // Auto-cycle through modes every 6 seconds if user hasn't interacted
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMode(prev => {
        if (prev === 'prospector') return 'closer'
        if (prev === 'closer') return 'fulfillment'
        return 'prospector'
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Animate transition between modes
  useEffect(() => {
    if (screenRef.current) {
      gsap.fromTo(screenRef.current, 
        { opacity: 0, y: 10, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }
      )
    }
  }, [activeMode])

  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The Agency <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Control Panel</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Replace manual work with a fully automated visibility engine.
            </p>
          </FadeInOnScroll>
        </div>

        {/* The Control Interface */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          {/* Left: Mode Switcher (The "Controller") */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <ModeButton 
              active={activeMode === 'prospector'} 
              onClick={() => setActiveMode('prospector')}
              icon={Magnet}
              title="Lead Capture"
              desc="Prospects run the audit. You get the lead."
              color="blue"
            />
            <ModeButton 
              active={activeMode === 'closer'} 
              onClick={() => setActiveMode('closer')}
              icon={TrendingUp}
              title="Deal Closer"
              desc="Irrefutable data that proves they are invisible."
              color="violet"
            />
            <ModeButton 
              active={activeMode === 'fulfillment'} 
              onClick={() => setActiveMode('fulfillment')}
              icon={Terminal}
              title="Auto-Fulfillment"
              desc="We execute the engineering. You keep the margin."
              color="emerald"
            />
          </div>

          {/* Right: The "Screen" (The Machine) */}
          <div className="w-full lg:w-2/3">
            <div 
              className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden group"
              style={{ boxShadow: '0 0 80px -20px rgba(59, 130, 246, 0.1)' }}
            >
              {/* Window Controls */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900/80 border-b border-slate-800 flex items-center px-4 gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="ml-4 h-5 px-3 rounded-full bg-slate-800 flex items-center gap-2 border border-slate-700/50">
                  <div className={`w-1.5 h-1.5 rounded-full ${activeMode === 'prospector' ? 'bg-blue-400' : activeMode === 'closer' ? 'bg-violet-400' : 'bg-emerald-400'}`} />
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                    rankett_os:/{activeMode}
                  </span>
                </div>
              </div>

              {/* Screen Content */}
              <div ref={screenRef} className="absolute inset-0 top-10 p-6 md:p-8">
                {activeMode === 'prospector' && <ProspectorView />}
                {activeMode === 'closer' && <CloserView />}
                {activeMode === 'fulfillment' && <FulfillmentView />}
              </div>

              {/* Scanline/Grid Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/grid-pattern.svg')] bg-[size:20px_20px]" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// --- Sub-Components ---

function ModeButton({ active, onClick, icon: Icon, title, desc, color }: any) {
  const activeStyles = {
    blue: 'border-blue-500/50 bg-blue-500/10 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]',
    violet: 'border-violet-500/50 bg-violet-500/10 shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]',
    emerald: 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]',
  }

  const iconColors = {
    blue: 'text-blue-400',
    violet: 'text-violet-400',
    emerald: 'text-emerald-400',
  }

  return (
    <button 
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
        active 
          ? activeStyles[color as keyof typeof activeStyles] 
          : 'border-slate-800 bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg ${active ? 'bg-slate-900/50' : 'bg-slate-800'} transition-colors`}>
          <Icon className={`w-6 h-6 ${active ? iconColors[color as keyof typeof iconColors] : 'text-slate-500'}`} />
        </div>
        <div>
          <h3 className={`font-bold text-base ${active ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
            {title}
          </h3>
          <p className="text-sm text-slate-500 leading-snug mt-1">
            {desc}
          </p>
        </div>
      </div>
    </button>
  )
}

// --- Views ---

function ProspectorView() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Live Lead Feed</h4>
        <div className="flex items-center gap-2 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>Scanning Network</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {[
          { name: 'Acme Corp', industry: 'Legal', score: 12, time: '2m ago' },
          { name: 'TechFlow', industry: 'SaaS', score: 45, time: '12m ago' },
          { name: 'Dr. Smith', industry: 'Medical', score: 8, time: '1h ago' },
        ].map((lead, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-xs font-bold">
                {lead.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">{lead.name}</p>
                <p className="text-xs text-slate-500">{lead.industry}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-slate-500">Visibility</p>
                <p className={`text-sm font-bold ${lead.score < 20 ? 'text-red-400' : 'text-amber-400'}`}>
                  {lead.score}%
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        ))}
        
        {/* Fake Loading Skeleton for next item */}
        <div className="p-3 rounded-lg border border-slate-800/30 flex items-center justify-between opacity-50">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-slate-800 animate-pulse" />
             <div className="space-y-1">
               <div className="w-24 h-3 bg-slate-800 rounded animate-pulse" />
               <div className="w-16 h-2 bg-slate-800 rounded animate-pulse" />
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

function CloserView() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-sm p-5 rounded-xl border border-slate-700 bg-slate-800/30 relative">
        <div className="absolute -top-3 left-4 px-2 bg-slate-900 border border-slate-700 rounded text-xs text-violet-400 font-bold uppercase">
          Generated Report
        </div>
        
        <div className="text-center mb-6 mt-2">
          <h4 className="text-lg font-bold text-white">Visibility Gap Analysis</h4>
          <p className="text-xs text-slate-400">Target: "Best Personal Injury Lawyer"</p>
        </div>

        {/* Chart */}
        <div className="space-y-4 mb-6">
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Competitor A</span>
              <span>84%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-[84%] bg-slate-500" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Competitor B</span>
              <span>72%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-[72%] bg-slate-500" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-white font-bold">
              <span>Your Client</span>
              <span className="text-red-400">0% (Invisible)</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden border border-red-500/30">
              <div className="h-full w-[2%] bg-red-500" />
            </div>
          </div>
        </div>

        <button className="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-bold transition-colors">
          Download Proposal PDF
        </button>
      </div>
    </div>
  )
}

function FulfillmentView() {
  return (
    <div className="h-full font-mono text-xs">
      <div className="flex items-center gap-2 mb-4 text-emerald-400 border-b border-emerald-500/20 pb-2">
        <Terminal className="w-4 h-4" />
        <span className="font-bold">Automated Fulfillment Engine</span>
      </div>
      
      <div className="space-y-2 text-slate-400">
        <p>
          <span className="text-slate-600">[10:42:01]</span> Initializing optimization sequence...
        </p>
        <p>
          <span className="text-slate-600">[10:42:02]</span> <span className="text-emerald-400">✓</span> Entity Schema generated
        </p>
        <p>
          <span className="text-slate-600">[10:42:04]</span> <span className="text-emerald-400">✓</span> NAP consistency verified (4/4 sources)
        </p>
        <p>
          <span className="text-slate-600">[10:42:08]</span> <span className="text-blue-400">ℹ</span> Injecting data into knowledge graph...
        </p>
        <p>
          <span className="text-slate-600">[10:42:15]</span> <span className="text-blue-400">ℹ</span> Submitting to Perplexity Index...
        </p>
        <p className="animate-pulse">
          <span className="text-slate-600">[10:42:18]</span> Monitoring brand sentiment...
        </p>
      </div>

      <div className="mt-6 p-3 rounded bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
        <div>
          <p className="text-emerald-300 font-bold">Optimization Complete</p>
          <p className="text-emerald-400/60">Rankett is maintaining this position.</p>
        </div>
      </div>
    </div>
  )
}