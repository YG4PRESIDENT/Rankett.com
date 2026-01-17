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
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const goToPrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 6000)
    return () => clearInterval(interval)
  }, [goToNext])

  const currentStudy = caseStudies[currentIndex]

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Main Carousel Card */}
        <div
          className="relative p-8 md:p-12 rounded-3xl transition-all duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(51, 65, 85, 0.5)',
          }}
        >
          {/* Industry Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium">
              {currentStudy.industry}
            </span>
          </div>

          {/* Client Type Headline */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 transition-opacity duration-300">
            {currentStudy.clientType}
          </h3>

          {/* Results Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
            {currentStudy.results.map((result, index) => (
              <div
                key={result.metric}
                className="p-4 md:p-6 rounded-2xl text-center transition-all duration-300"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">
                  {result.value}
                </p>
                <p className="text-xs md:text-sm text-slate-400">{result.metric}</p>
              </div>
            ))}
          </div>

          {/* Challenge Story */}
          <div className="mb-8">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              <span className="text-white font-medium">The Challenge:</span> {currentStudy.challenge}
            </p>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Results achieved in {currentStudy.timeline}</span>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
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
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 w-8'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
