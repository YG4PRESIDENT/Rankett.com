'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import LogoCarousel from '../ui/LogoCarousel'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function HeroHome() {
  const router = useRouter()

  const handleExplore = () => {
    router.push('/pricing')
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <FadeInOnScroll direction="up" delay={0}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">AI Visibility.</span>
              <br />
              <span className="text-gradient">Your Brand.</span>
              <br />
              <span className="text-white">Our Backend.</span>
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.15}>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Launch tomorrow. Charge 3x what you pay us.
              <br className="hidden sm:block" />
              <span className="text-white font-medium">Do none of the work.</span>
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                onClick={handleExplore}
                variant="primary"
                size="lg"
                className="min-w-[200px]"
              >
                Explore
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </FadeInOnScroll>

          {/* Logo Carousel */}
          <FadeInOnScroll direction="up" delay={0.45}>
            <div className="pt-16 pb-8">
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
