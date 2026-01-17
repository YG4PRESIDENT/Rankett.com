'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

interface CaseStudy {
  industry: string
  clientType: string
  challenge: string
  results: {
    metric: string
    value: string
  }[]
  timeline: string
}

const caseStudies: CaseStudy[] = [
  {
    industry: 'Healthcare',
    clientType: 'Multi-Location Dental Practice',
    challenge: 'AI assistants were recommending competitors when patients asked for dental recommendations in the area.',
    results: [
      { metric: 'AI Mentions', value: '+340%' },
      { metric: 'New Patient Inquiries', value: '+45%' },
      { metric: 'AI Visibility Score', value: '23 → 78' },
    ],
    timeline: '90 days',
  },
  {
    industry: 'Legal',
    clientType: 'Personal Injury Law Firm',
    challenge: 'Zero mentions in ChatGPT or Claude responses for personal injury attorney queries in their market.',
    results: [
      { metric: 'AI Recommendations', value: 'Top 3' },
      { metric: 'Consultation Requests', value: '+62%' },
      { metric: 'AI Visibility Score', value: '8 → 71' },
    ],
    timeline: '60 days',
  },
  {
    industry: 'Home Services',
    clientType: 'Regional HVAC Company',
    challenge: 'Competitors were being recommended by AI for every HVAC-related query in their service area.',
    results: [
      { metric: 'AI Brand Mentions', value: '+520%' },
      { metric: 'Service Calls', value: '+38%' },
      { metric: 'AI Visibility Score', value: '15 → 82' },
    ],
    timeline: '75 days',
  },
  {
    industry: 'Real Estate',
    clientType: 'Luxury Property Agency',
    challenge: 'High-net-worth clients using AI assistants were never seeing their listings or recommendations.',
    results: [
      { metric: 'AI Visibility', value: '+280%' },
      { metric: 'Qualified Leads', value: '+55%' },
      { metric: 'AI Visibility Score', value: '12 → 74' },
    ],
    timeline: '85 days',
  },
]

export default function CaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating])

  const goToPrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating])

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 6000)
    return () => clearInterval(interval)
  }, [goToNext])

  const getCardIndex = (offset: number) => {
    return (currentIndex + offset + caseStudies.length) % caseStudies.length
  }

  const renderCard = (study: CaseStudy, position: 'prev' | 'current' | 'next') => {
    const isPrev = position === 'prev'
    const isNext = position === 'next'
    const isCurrent = position === 'current'

    return (
      <div
        className={`absolute top-0 transition-all duration-400 ease-out ${
          isCurrent
            ? 'left-1/2 -translate-x-1/2 z-20 scale-100 opacity-100'
            : isPrev
            ? 'left-0 -translate-x-1/4 z-10 scale-90 opacity-40'
            : 'right-0 translate-x-1/4 z-10 scale-90 opacity-40'
        }`}
        style={{
          width: isCurrent ? '85%' : '60%',
          maxWidth: isCurrent ? '800px' : '500px',
        }}
      >
        <div
          className={`p-6 md:p-8 rounded-2xl transition-all duration-400 ${
            isCurrent ? 'shadow-2xl' : ''
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(51, 65, 85, 0.5)',
          }}
        >
          {/* Industry Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium">
              {study.industry}
            </span>
          </div>

          {/* Client Type Headline */}
          <h3 className={`font-bold text-white mb-4 transition-opacity duration-300 ${
            isCurrent ? 'text-xl md:text-2xl lg:text-3xl' : 'text-lg md:text-xl'
          }`}>
            {study.clientType}
          </h3>

          {/* Results Grid - Only show full results on current card */}
          {isCurrent && (
            <>
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                {study.results.map((result) => (
                  <div
                    key={result.metric}
                    className="p-3 md:p-4 rounded-xl text-center"
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                    }}
                  >
                    <p className="text-lg md:text-2xl lg:text-3xl font-bold text-emerald-400 mb-1">
                      {result.value}
                    </p>
                    <p className="text-xs text-slate-400">{result.metric}</p>
                  </div>
                ))}
              </div>

              {/* Challenge Story */}
              <div className="mb-4">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  <span className="text-white font-medium">The Challenge:</span> {study.challenge}
                </p>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Results achieved in {study.timeline}</span>
              </div>
            </>
          )}

          {/* Preview for side cards */}
          {!isCurrent && (
            <div className="grid grid-cols-3 gap-2 mt-2">
              {study.results.slice(0, 3).map((result) => (
                <div
                  key={result.metric}
                  className="p-2 rounded-lg text-center"
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                  }}
                >
                  <p className="text-sm md:text-lg font-bold text-emerald-400/80">
                    {result.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Real <span className="text-gradient">Results</span>
            </h2>
            <p className="text-lg text-slate-400">
              See how agencies are winning with AI visibility optimization
            </p>
          </div>
        </FadeInOnScroll>

        {/* Carousel Container */}
        <div className="relative h-[400px] md:h-[380px] lg:h-[350px]">
          {/* Previous Card */}
          {renderCard(caseStudies[getCardIndex(-1)], 'prev')}

          {/* Current Card */}
          {renderCard(caseStudies[currentIndex], 'current')}

          {/* Next Card */}
          {renderCard(caseStudies[getCardIndex(1)], 'next')}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== currentIndex) {
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 400)
                }
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 w-8'
                  : 'bg-slate-600 hover:bg-slate-500 w-2.5'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
