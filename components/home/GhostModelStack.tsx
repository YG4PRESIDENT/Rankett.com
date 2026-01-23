'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Search, Server, TrendingUp } from 'lucide-react'

const phases = [
  {
    id: 1,
    title: "Your Lead Magnet",
    subtitle: "Stop Cold Calling",
    description: "Use our white-label audit tool to generate 'Red Alert' reports. The problem is undeniable, and the sale makes itself.",
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
        <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-20`} />

        <div className="relative z-10 grid md:grid-cols-2 h-full">
            
            {/* Visual Side */}
            <div className="bg-slate-950/30 border-r border-slate-800/50 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs font-mono text-slate-500">PHASE 0{phase.id}</div>
                {phase.visual}
            </div>

            {/* Text Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-slate-900/40 backdrop-blur-sm">
                <div className={`w-12 h-12 rounded-xl bg-${phase.color}-500/10 flex items-center justify-center border border-${phase.color}-500/20 mb-6`}>
                    <Icon className={`w-6 h-6 text-${phase.color}-400`} />
                </div>
                
                <h3 className={`text-${phase.color}-400 font-bold text-sm uppercase tracking-wider mb-2`}>{phase.subtitle}</h3>
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
