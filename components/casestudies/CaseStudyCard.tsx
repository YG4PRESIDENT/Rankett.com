'use client'

import { TrendingUp, Clock, Target, ArrowUpRight } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

interface CaseStudyCardProps {
  industry: string
  clientType: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
  }[]
  timeline: string
  isPlaceholder?: boolean
}

// Placeholder case studies for template structure
const placeholderStudies: CaseStudyCardProps[] = [
  {
    industry: 'Healthcare',
    clientType: 'Multi-Location Dental Practice',
    challenge: 'AI assistants were recommending competitors when patients asked for dental recommendations in the area.',
    solution: 'Implemented comprehensive AI visibility optimization across all major platforms, including structured data and content optimization.',
    results: [
      { metric: 'AI Mentions', value: '+340%' },
      { metric: 'New Patient Inquiries', value: '+45%' },
      { metric: 'AI Visibility Score', value: '23 → 78' },
    ],
    timeline: '90 days',
    isPlaceholder: true,
  },
  {
    industry: 'Legal',
    clientType: 'Personal Injury Law Firm',
    challenge: 'Zero mentions in ChatGPT or Claude responses for personal injury attorney queries in their market.',
    solution: 'Built authority signals and optimized firm presence for AI-friendly content consumption.',
    results: [
      { metric: 'AI Recommendations', value: 'Top 3' },
      { metric: 'Consultation Requests', value: '+62%' },
      { metric: 'AI Visibility Score', value: '8 → 71' },
    ],
    timeline: '60 days',
    isPlaceholder: true,
  },
  {
    industry: 'Home Services',
    clientType: 'Regional HVAC Company',
    challenge: 'Competitors were being recommended by AI for every HVAC-related query in their service area.',
    solution: 'Comprehensive AI visibility campaign including review optimization and local authority building.',
    results: [
      { metric: 'AI Brand Mentions', value: '+520%' },
      { metric: 'Service Calls', value: '+38%' },
      { metric: 'AI Visibility Score', value: '15 → 82' },
    ],
    timeline: '75 days',
    isPlaceholder: true,
  },
]

export default function CaseStudyCard() {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderStudies.map((study, index) => (
            <FadeInOnScroll key={index} direction="up" delay={index * 0.1}>
              <div
                className="p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(51, 65, 85, 0.3)',
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">{study.clientType}</h3>
                  </div>
                  {study.isPlaceholder && (
                    <span className="px-2 py-1 rounded text-xs bg-slate-700/50 text-slate-400">
                      Template
                    </span>
                  )}
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-sm text-slate-300">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-sm text-slate-300">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mt-auto">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Results</p>
                  <div className="grid grid-cols-3 gap-2">
                    {study.results.map((result) => (
                      <div
                        key={result.metric}
                        className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center"
                      >
                        <p className="text-lg font-bold text-emerald-400">{result.value}</p>
                        <p className="text-xs text-slate-400">{result.metric}</p>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/50">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-400">Results achieved in {study.timeline}</span>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
