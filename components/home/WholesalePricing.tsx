'use client'

import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function WholesalePricing() {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      
      {/* Massive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Explicit Header */}
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Simple Pricing</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              One Price. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Total Fulfillment.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to sell and deliver AI visibility services. No hidden tiers. No revenue share.
            </p>
          </div>
        </FadeInOnScroll>

        {/* The Card */}
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="flex justify-center">
            <div className="bg-slate-900/60 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-12 md:p-20 text-center max-w-3xl w-full shadow-[0_0_50px_-10px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-blue-500/40 transition-colors duration-500">
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />

              <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">
                All-Inclusive Infrastructure Rate
              </h3>
              
              <div className="flex items-baseline justify-center gap-2 mb-10">
                <span className="text-7xl md:text-9xl font-bold text-white tracking-tight">$998</span>
                <div className="text-left flex flex-col justify-center">
                    <span className="text-slate-500 text-lg font-medium leading-none">/client</span>
                    <span className="text-slate-500 text-lg font-medium leading-none">/month</span>
                </div>
              </div>
              
              <div className="space-y-2">
                  <p className="text-white text-xl md:text-2xl font-medium">
                    We execute the entire fulfillment backend.
                  </p>
                  <p className="text-slate-400 text-lg">
                    You charge the retail price and keep 100% of the margin.
                  </p>
              </div>

            </div>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  )
}
