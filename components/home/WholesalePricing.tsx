'use client'

import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function WholesalePricing() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeInOnScroll direction="up">
          <div className="flex justify-center">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-12 md:p-16 text-center max-w-3xl w-full hover:border-slate-700 transition-colors duration-500">
              
              <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">
                Wholesale Platform Rate
              </h3>
              
              <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-7xl md:text-8xl font-bold text-white tracking-tight">$998</span>
                <span className="text-slate-500 text-xl font-medium">/client/mo</span>
              </div>
              
              <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                One flat rate for full-service AI optimization. <br />
                <span className="text-white">We do the work. You keep the margin.</span>
              </p>

            </div>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  )
}