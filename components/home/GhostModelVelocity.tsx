'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useVelocity, useMotionValueEvent } from 'framer-motion'
import { Search, Zap, TrendingUp, ArrowRight, Check, Server } from 'lucide-react'

const phases = [
  {
    id: 1,
    title: "Win Clients",
    subtitle: "With Instant Audits",
    description: "Run a free audit. Show them the 'F' grade. The problem is undeniable, and the sale makes itself.",
    icon: Search,
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/5",
    visual: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-2">F</div>
          <div className="text-red-500 font-bold uppercase tracking-wider text-sm">Critical Visibility Issues</div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "We Fulfill",
    subtitle: "End-to-End Execution",
    description: "Our invisible engine claims directories, syncs data, and publishes content. You don't lift a finger.",
    icon: Server,
    color: "violet",
    gradient: "from-violet-500/20 to-violet-600/5",
    visual: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="space-y-4 w-full max-w-[200px]">
           {[1,2,3].map((_, i) => (
             <div key={i} className="h-2 bg-violet-500/30 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                 className="h-full bg-violet-500"
               />
             </div>
           ))}
           <div className="text-center text-violet-400 text-xs font-mono mt-2">OPTIMIZING...</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "You Profit",
    subtitle: "Capture The Spread",
    description: "You charge retail ($3k+). We charge wholesale. You own the client, the data, and the margin.",
    icon: TrendingUp,
    color: "emerald",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    visual: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl font-bold text-white mb-2">A+</div>
          <div className="text-emerald-500 font-bold uppercase tracking-wider text-sm mb-4">Dominant Visibility</div>
          <div className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
            +$2,002.00 Profit
          </div>
        </div>
      </div>
    )
  }
]

function Card({ phase, index }: { phase: typeof phases[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Velocity-based transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  
  // Smooth spring for "floating" feel
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  const Icon = phase.icon

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale: springScale, y: springY }}
      className="relative w-full max-w-4xl mx-auto min-h-[60vh] flex items-center justify-center py-20"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} blur-3xl rounded-[100px] opacity-50`} />

      <div className="relative z-10 w-full grid md:grid-cols-2 gap-8 items-center bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl overflow-hidden group hover:border-white/20 transition-colors duration-500">
        
        {/* Visual Side (Left on even, Right on odd) */}
        <div className={`h-[300px] bg-slate-950/50 rounded-2xl border border-white/5 relative overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
           {phase.visual}
        </div>

        {/* Text Side */}
        <div className="space-y-6">
          <div className={`w-12 h-12 rounded-2xl bg-${phase.color}-500/10 flex items-center justify-center border border-${phase.color}-500/20`}>
            <Icon className={`w-6 h-6 text-${phase.color}-400`} />
          </div>
          
          <div>
            <h3 className={`text-${phase.color}-400 font-bold text-sm uppercase tracking-wider mb-2`}>{phase.subtitle}</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{phase.title}</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {phase.description}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default function GhostModelVelocity() {
  return (
    <section className="bg-slate-950 relative py-32 overflow-hidden">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
        {phases.map((phase, index) => (
          <Card key={phase.id} phase={phase} index={index} />
        ))}
      </div>

    </section>
  )
}
