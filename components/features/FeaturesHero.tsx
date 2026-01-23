'use client'

import FadeInOnScroll from '../scroll/FadeInOnScroll'
import LogoCarousel from '../ui/LogoCarousel'

export default function FeaturesHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              See How AI Models
              <br />
              <span className="text-gradient">Portray Your Brand</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Show your clients exactly how ChatGPT, Claude, and other AI models talk about their business
              &mdash;and help them steal the spotlight from competitors.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.15}>
          <div className="pt-8">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-6 text-center">
              Tracking visibility across all major platforms
            </p>
            <LogoCarousel />
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
