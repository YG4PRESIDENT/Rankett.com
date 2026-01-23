'use client'

import { Play } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'
import LogoCarousel from '../ui/LogoCarousel'

export default function HeroHome() {
  return (
    <section className="relative flex flex-col justify-start overflow-hidden pt-28 md:pt-36">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-6">
          <FadeInOnScroll direction="up" delay={0}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight whitespace-nowrap">
              <span className="text-white">AI Visibility.</span>{' '}
              <span className="text-gradient">Your Brand.</span>{' '}
              <span className="text-white">Our Backend.</span>
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.15}>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Launch Tomorrow. <span className="text-white font-medium">Do none of the work.</span>
            </p>
          </FadeInOnScroll>

          {/* Loom Video Placeholder */}
          <FadeInOnScroll direction="up" delay={0.3}>
            <div className="pt-8 pb-12">
              <div
                className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                }}
              >
                {/* Placeholder content - replace with actual Loom embed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4 cursor-pointer hover:bg-blue-500/30 transition-all duration-300 hover:scale-105">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-blue-400 ml-1" />
                  </div>
                </div>

                {/* Decorative gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 30%, rgba(15, 23, 42, 0.3) 100%)',
                  }}
                />
              </div>
            </div>
          </FadeInOnScroll>

          {/* Logo Carousel */}
          <FadeInOnScroll direction="up" delay={0.6}>
            <div className="pt-8 pb-8">
              <p className="text-sm text-slate-500 uppercase tracking-wider mb-6">
                Tracking visibility across
              </p>
              <LogoCarousel />
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
