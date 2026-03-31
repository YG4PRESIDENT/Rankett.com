'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Zap, TrendingUp, Check, Lock, Server } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GhostModelScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activePhase, setActivePhase] = useState(1)

  // Refs for each text block to trigger phase changes
  const textRef1 = useRef<HTMLDivElement>(null)
  const textRef2 = useRef<HTMLDivElement>(null)
  const textRef3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configure triggers for each text block
      const triggers = [
        { ref: textRef1, phase: 1 },
        { ref: textRef2, phase: 2 },
        { ref: textRef3, phase: 3 },
      ]

      triggers.forEach(({ ref, phase }) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top center+=100', // Trigger when top of text hits center of screen
          end: 'bottom center+=100',
          onEnter: () => setActivePhase(phase),
          onEnterBack: () => setActivePhase(phase),
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="bg-slate-950 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT: Natural Scrolling Text Column */}
          <div className="relative z-10 py-24 pb-48">
            
            {/* Phase 1 Text Block */}
            <div ref={textRef1} className="min-h-[80vh] flex flex-col justify-center">
              <div className={`transition-all duration-500 ${activePhase === 1 ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'}`}>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                  <Search className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Offer & <span className="text-blue-400">Sell</span>.
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-md">
                  Use our audit tool to find the gaps. Your client sees the problem immediately—and begs for the solution.
                </p>
              </div>
            </div>

            {/* Phase 2 Text Block */}
            <div ref={textRef2} className="min-h-[80vh] flex flex-col justify-center">
              <div className={`transition-all duration-500 ${activePhase === 2 ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'}`}>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 border border-violet-500/20">
                  <Server className="w-6 h-6 text-violet-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  We <span className="text-violet-400">Fulfill</span>.
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-md">
                  Our invisible backend does the work. We claim directories, sync data, and publish content. You don't lift a finger.
                </p>
              </div>
            </div>

            {/* Phase 3 Text Block */}
            <div ref={textRef3} className="min-h-[80vh] flex flex-col justify-center">
              <div className={`transition-all duration-500 ${activePhase === 3 ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'}`}>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  You <span className="text-emerald-400">Profit</span>.
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-md">
                  Capture the margin spread. You own the client; we own the code. The glory (and the revenue) is yours.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: Sticky Visual Column */}
          <div className="hidden lg:block relative">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              
              {/* The Device Frame (Reacts to activePhase state) */}
              <div className="w-full max-w-md aspect-[4/5] bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative flex flex-col transition-all duration-700 hover:shadow-blue-900/10">
                
                {/* Header Bar */}
                <div className="h-14 border-b border-slate-800 bg-slate-950/50 flex items-center px-6 justify-between backdrop-blur-md z-20">
                  <div className="w-24 h-3 bg-slate-800 rounded-full" /> {/* Fake Logo */}
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-slate-700" />
                     <div className="w-2 h-2 rounded-full bg-slate-700" />
                  </div>
                </div>

                {/* Main Screen Content */}
                <div className="flex-1 relative p-6 bg-slate-950/20">
                  <AnimatePresence mode="wait">
                    
                    {/* Phase 1: AUDIT UI */}
                    {activePhase === 1 && (
                      <motion.div
                        key="phase1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                        className="h-full flex flex-col"
                      >
                        <div className="mb-6 space-y-2">
                          <div className="text-slate-500 text-xs uppercase tracking-wider font-bold">Audit Results</div>
                          <div className="text-white text-xl font-bold">Local Coffee Co.</div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl border border-red-500/20 p-6 mb-6 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Search className="w-24 h-24 text-red-500" />
                          </div>
                          <div className="relative z-10">
                            <div className="text-4xl font-bold text-white mb-1">F</div>
                            <div className="text-red-500 font-bold text-sm">Critical Visibility Issues</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                           {['ChatGPT: Not Found', 'Claude: Not Found', 'Perplexity: Competitor Listed'].map((item, i) => (
                             <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                               <div className="w-2 h-2 rounded-full bg-red-500" />
                               <span className="text-slate-400 text-sm">{item}</span>
                             </div>
                           ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Phase 2: ENGINE UI */}
                    {activePhase === 2 && (
                      <motion.div
                        key="phase2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.2 } }}
                        className="h-full flex flex-col justify-center relative"
                      >
                        {/* Background "Matrix" Effect */}
                        <div className="absolute inset-0 opacity-10 flex flex-col gap-2 overflow-hidden pointer-events-none">
                           {[...Array(10)].map((_, i) => (
                             <div key={i} className="h-1 bg-violet-500/50 w-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                           ))}
                        </div>

                        <div className="text-center z-10 mb-8">
                           <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-4 border border-violet-500/30">
                              <Zap className="w-8 h-8 text-violet-400 animate-pulse" />
                           </div>
                           <h3 className="text-white font-bold">Optimizing Backend...</h3>
                           <p className="text-violet-400 text-xs mt-1">Ghost Engine Active</p>
                        </div>

                        <div className="space-y-4 z-10 max-w-[260px] mx-auto w-full">
                           {[
                             { label: 'Syncing 50+ Directories', progress: '100%' },
                             { label: 'Updating Schema Markup', progress: '85%' },
                             { label: 'Publishing AI Content', progress: '60%' }
                           ].map((task, i) => (
                             <div key={i} className="bg-slate-900/80 backdrop-blur p-3 rounded-lg border border-violet-500/20">
                                <div className="flex justify-between text-xs mb-2">
                                  <span className="text-slate-300">{task.label}</span>
                                  <span className="text-violet-400">{task.progress}</span>
                                </div>
                                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: task.progress }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                    className="h-full bg-violet-500" 
                                  />
                                </div>
                             </div>
                           ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Phase 3: PROFIT UI */}
                    {activePhase === 3 && (
                      <motion.div
                        key="phase3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="h-full flex flex-col"
                      >
                        <div className="mb-6 space-y-2 flex justify-between items-end">
                          <div>
                             <div className="text-slate-500 text-xs uppercase tracking-wider font-bold">Client Dashboard</div>
                             <div className="text-white text-xl font-bold">Local Coffee Co.</div>
                          </div>
                          <div className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs font-bold border border-emerald-500/20">
                             Live
                          </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl border border-emerald-500/20 p-6 mb-6 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                          <div className="relative z-10 flex justify-between items-center">
                            <div>
                               <div className="text-4xl font-bold text-white mb-1">A+</div>
                               <div className="text-emerald-500 font-bold text-sm">Dominant Visibility</div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                               <Check className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* The "Margin" Card */}
                        <motion.div 
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-auto bg-slate-800 rounded-xl border border-slate-700 p-4"
                        >
                           <div className="flex items-center gap-3 mb-3 border-b border-slate-700 pb-3">
                              <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                                 <Lock className="w-4 h-4 text-slate-400" />
                              </div>
                              <div>
                                 <div className="text-white text-sm font-bold">Agency Revenue</div>
                                 <div className="text-slate-500 text-[10px]">November 2026</div>
                              </div>
                           </div>
                           <div className="flex justify-between items-center">
                              <div className="text-slate-400 text-xs">Net Profit</div>
                              <div className="text-emerald-400 font-bold text-lg">+$2,002.00</div>
                           </div>
                        </motion.div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}