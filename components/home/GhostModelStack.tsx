'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Search, Settings, DollarSign } from 'lucide-react'

const phases = [
  {
    id: 1,
    title: "Your Tool",
    subtitle: "White-Label AI Search",
    description: "A branded AI search tool that shows any business how they rank in ChatGPT, Gemini, and Perplexity. Your name, your colors, your domain. Most businesses are completely invisible.",
    icon: Search,
    visual: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(51, 65, 85, 0.5)" strokeWidth="8" />
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${0.12 * 2 * Math.PI * 52} ${2 * Math.PI * 52}`} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">12%</span>
            </div>
          </div>
          <div className="text-sm text-slate-400 font-medium">AI Visibility Score</div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "We Do the Work",
    subtitle: "Invisible Fulfillment",
    description: "Client signs. We take over. Every optimization, every report, done under your brand. You manage the relationship. Your client never knows we exist.",
    icon: Settings,
    visual: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="space-y-4 w-full max-w-[220px]">
          {[85, 65, 92, 58, 78, 70].map((width, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <motion.svg className="w-3 h-3 text-blue-400" viewBox="0 0 12 12" fill="none">
                  <motion.path
                    d="M2 6L5 9L10 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.12 }}
                  />
                </motion.svg>
              </div>
              <div className="h-2 rounded-full bg-slate-700/50" style={{ width: `${width}%` }} />
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Set Your Price",
    subtitle: "Your Pricing",
    description: "One flat monthly rate per client. You charge whatever you want. No revenue share, no per-seat fees, no surprises.",
    icon: DollarSign,
    visual: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="space-y-6 text-center">
          {[
            { tier: 'Tier 1', price: '$498' },
            { tier: 'Tier 2', price: '$1,498' },
            { tier: 'Tier 3', price: '$2,498' },
          ].map((item) => (
            <div key={item.tier}>
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.tier}</div>
              <div className="text-2xl font-bold text-white">{item.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
            </div>
          ))}
        </div>
      </div>
    )
  }
]

function Card({
  phase,
  index,
  progress,
  range,
  targetScale
}: {
  phase: typeof phases[0],
  index: number,
  progress: MotionValue<number>,
  range: number[],
  targetScale: number
}) {
  const containerRef = useRef(null)

  // Scale Calculation: Starts at 1, goes down to targetScale as next card overlaps it
  const scale = useTransform(progress, range, [1, targetScale])

  const Icon = phase.icon

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`
        }}
        className="relative w-full max-w-5xl h-[60vh] flex flex-col origin-top bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/5 opacity-20" />

        <div className="relative z-10 grid md:grid-cols-2 h-full">

            {/* Visual Side */}
            <div className="bg-slate-950/30 border-r border-slate-800/50 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs font-mono text-slate-500">PHASE 0{phase.id}</div>
                {phase.visual}
            </div>

            {/* Text Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-slate-900/40 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6">
                    <Icon className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">{phase.subtitle}</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{phase.title}</h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    {phase.description}
                </p>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function GhostModelStack() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={containerRef} className="bg-slate-950 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {phases.map((phase, i) => {
            // Logic: Each card scales down slightly as the next one arrives
            const targetScale = 1 - ((phases.length - 1 - i) * 0.05)
            return (
                <Card 
                  key={phase.id} 
                  index={i} 
                  phase={phase} 
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
            )
        })}
      </div>
      

    </section>
  )
}
