'use client'

import { useRef, useState } from 'react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function WholesalePricing() {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setOpacity(1)
  }

  const handleBlur = () => {
    setOpacity(0)
  }

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      
      {/* Massive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Explicit Header */}
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              One Price. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Total Fulfillment.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to sell and deliver AI visibility services. No hidden tiers. No revenue share.
            </p>
          </div>
        </FadeInOnScroll>

        {/* The Spotlight Card */}
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="flex justify-center">
            <div 
              ref={divRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleFocus}
              onMouseLeave={handleBlur}
              className="bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-12 md:p-20 text-center max-w-3xl w-full shadow-[0_0_50px_-10px_rgba(59,130,246,0.15)] relative overflow-hidden group transition-colors duration-500"
            >
              
              {/* Spotlight Effect */}
              <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                  opacity,
                  background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />

              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.png')] bg-repeat" />

              <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8 relative z-10">
                Fulfillment Infrastructure
              </h3>
              
              <div className="flex items-baseline justify-center gap-2 mb-10 relative z-10">
                <span className="text-7xl md:text-9xl font-bold text-white tracking-tight drop-shadow-2xl">$998</span>
                <div className="text-left flex flex-col justify-center">
                    <span className="text-slate-500 text-lg font-medium leading-none">/client</span>
                    <span className="text-slate-500 text-lg font-medium leading-none">/month</span>
                </div>
              </div>
              
              <div className="space-y-4 relative z-10">
                  <p className="text-white text-xl md:text-2xl font-medium">
                    Fixed Platform Rate.
                  </p>
                  <p className="text-slate-400 text-lg">
                    We do the work. You own the client. You keep the spread.
                  </p>
              </div>

            </div>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  )
}