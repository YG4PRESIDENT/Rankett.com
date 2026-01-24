'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Power, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import BrandLogo from '../ui/BrandLogo'

gsap.registerPlugin(ScrollTrigger)

const LLM_LOGOS = [
  { name: 'ChatGPT', platform: 'openai' },
  { name: 'Anthropic', platform: 'claude' },
  { name: 'Gemini', platform: 'gemini' },
  { name: 'Google Overviews', platform: 'google' },
  { name: 'Perplexity', platform: 'perplexity' },
  { name: 'Grok', platform: 'grok' },
  { name: 'DeepSeek', platform: 'deepseek' },
]

export default function HeroHome() {
  const heroRef = useRef(null)
  const [hoveredWord, setHoveredWord] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top bottom',
            toggleActions: 'play none none none',
          },
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleWordHover = (index: number | null) => {
    setHoveredWord(index)
  }

  const getWordClasses = (index: number) => {
    if (hoveredWord === null) {
      return 'text-white' // Default state when no word is hovered
    }
    // If this word is hovered, make it extra bright
    if (hoveredWord === index) {
      return 'text-white filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]' // Brighter white with a blue glow
    }
    // If another word is hovered, dim this one slightly
    return 'text-slate-500' // Dimmed state
  }

  return (
    <section ref={heroRef} className="relative flex flex-col justify-start overflow-hidden pt-28 md:pt-36 min-h-[calc(100vh-theme(spacing.20))]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px]" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-6">
          <div className="group"> {/* Added group for hover state management */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight whitespace-nowrap">
              <span 
                className={`transition-colors duration-300 inline-block px-1 ${getWordClasses(0)}`}
                onMouseEnter={() => handleWordHover(0)}
                onMouseLeave={() => handleWordHover(null)}
              >
                AI Visibility.
              </span>{' '}
              <span 
                className={`text-gradient transition-colors duration-300 inline-block px-1 ${getWordClasses(1)}`}
                onMouseEnter={() => handleWordHover(1)}
                onMouseLeave={() => handleWordHover(null)}
              >
                Your Brand.
              </span>{' '}
              <span 
                className={`transition-colors duration-300 inline-block px-1 ${getWordClasses(2)}`}
                onMouseEnter={() => handleWordHover(2)}
                onMouseLeave={() => handleWordHover(null)}
              >
                Our Backend.
              </span>
            </h1>
          </div>
          <div className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Launch Tomorrow. <span className="text-white font-medium">Do none of the work.</span>
          </div>

          <div className="flex flex-col items-center gap-3 pt-8 pb-12">
            <p className="text-slate-400 text-sm md:text-base">
              Get access now. <span className="text-white font-medium">No card required.</span>
            </p>
            <a 
              href="https://tool.rankett.com" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)' }}
            >
              Start Free Trial
            </a>
          </div>

          <div className="pt-8 pb-8">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-6">Tracking visibility across</p>
            <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
              <div className="flex will-change-transform animate-marquee-fast" style={{ animationPlayState: 'running' }}>
                {LLM_LOGOS.concat(LLM_LOGOS).map((llm, index) => (
                  <div key={index} className="flex items-center gap-3 mx-8 shrink-0 transition-opacity duration-300">
                    <div className="relative flex items-center justify-center w-9 h-9">
                      <BrandLogo platform={llm.platform} size={36} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{llm.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}