'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }, [])

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 6000)
    return () => clearInterval(interval)
  }, [goToNext])

  // Touch/Mouse drag handling
  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    // Swipe threshold
    if (translateX > 80) {
      goToPrev()
    } else if (translateX < -80) {
      goToNext()
    }
    setTranslateX(0)
  }

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const normalizedDiff = ((diff + caseStudies.length) % caseStudies.length)

    // Handle wrapping for smooth carousel
    let position = normalizedDiff
    if (normalizedDiff > caseStudies.length / 2) {
      position = normalizedDiff - caseStudies.length
    }

    const baseTranslate = position * 320 + (isDragging ? translateX : 0)
    const scale = position === 0 ? 1 : 0.85
    const opacity = position === 0 ? 1 : Math.abs(position) === 1 ? 0.5 : 0
    const zIndex = position === 0 ? 20 : 10

    return {
      transform: `translateX(calc(-50% + ${baseTranslate}px)) scale(${scale})`,
      opacity,
      zIndex,
      transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Case <span className="text-gradient">Studies</span>
            </h2>
            <p className="text-lg text-slate-400">
              See how agencies are winning with AI visibility optimization
            </p>
          </div>
        </FadeInOnScroll>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative h-[420px] md:h-[400px] overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {caseStudies.map((study, index) => (
            <div
              key={study.industry}
              className="absolute left-1/2 top-0 w-[90%] max-w-[600px]"
              style={getCardStyle(index)}
            >
              <div
                className="p-6 md:p-8 rounded-2xl h-full"
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-5">
                  {study.clientType}
                </h3>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {study.results.map((result) => (
                    <div
                      key={result.metric}
                      className="p-3 md:p-4 rounded-xl text-center"
                      style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      <p className="text-lg md:text-2xl font-bold text-blue-400 mb-1">
                        {result.value}
                      </p>
                      <p className="text-xs text-slate-400">{result.metric}</p>
                    </div>
                  ))}
                </div>

                {/* Challenge Story */}
                <div className="mb-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="text-white font-medium">The Challenge:</span> {study.challenge}
                  </p>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Results achieved in {study.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={goToPrev}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-6'
                    : 'bg-slate-600 hover:bg-slate-500 w-2'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
