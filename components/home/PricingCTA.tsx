'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '../ui/Button'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const highlights = [
  'White-label dashboard included',
  'Unlimited audits for prospects',
  '100% done-for-you fulfillment',
  'Your branding everywhere',
]

export default function PricingCTA() {
  const router = useRouter()

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div
            className="p-8 md:p-12 rounded-3xl text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Add a <span className="text-gradient">New Revenue Stream?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Start free, upgrade when you close your first client.
              <br className="hidden sm:block" />
              We only win when you win.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50"
                >
                  <Check className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => router.push('/pricing')}
                variant="primary"
                size="lg"
                className="min-w-[200px]"
              >
                Explore Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open('https://calendly.com/rankett/30min', '_blank')}
                variant="outline"
                size="lg"
                className="min-w-[200px]"
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
