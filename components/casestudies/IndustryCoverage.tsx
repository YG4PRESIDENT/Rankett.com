'use client'

import { Check, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/Button'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const coveragePoints = [
  'Healthcare & Medical',
  'Legal Services',
  'Real Estate',
  'Home Services',
  'Restaurants & Hospitality',
  'Professional Services',
  'Financial Services',
  'Automotive',
  'Education',
  'Retail & E-commerce',
  'Fitness & Wellness',
  'Beauty & Personal Care',
]

export default function IndustryCoverage() {
  const router = useRouter()

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries We <span className="text-gradient">Cover</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Our AI visibility optimization strategies work across any industry where customers use AI to find businesses.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.1}>
          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(51, 65, 85, 0.3)',
            }}
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {coveragePoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">
              Don&apos;t see your client&apos;s industry? We can help. Every business with local customers can benefit from AI visibility optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => router.push('/pricing')}
                variant="primary"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={() => window.open('https://calendly.com/rankett/30min', '_blank')}
                variant="outline"
              >
                Talk to Founders
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
