'use client'

import { Check } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'
import BrandLogo from '../ui/BrandLogo'

const platforms = [
  { key: 'chatgpt', name: 'ChatGPT', provider: 'OpenAI' },
  { key: 'claude', name: 'Claude', provider: 'Anthropic' },
  { key: 'gemini', name: 'Gemini', provider: 'Google' },
  { key: 'perplexity', name: 'Perplexity', provider: 'Perplexity AI' },
  { key: 'grok', name: 'Grok', provider: 'xAI' },
  { key: 'google', name: 'Google AI', provider: 'Google Overviews' },
]

const features = [
  'Brand mention tracking',
  'Competitor analysis',
  'Sentiment scoring',
  'Recommendation tracking',
  'Response optimization',
  'Weekly monitoring',
]

export default function FeaturesMatrix() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Track Visibility Across <span className="text-gradient">Every AI Platform</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Your clients need to know how AI models portray their brand. We track them all.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Platform grid */}
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {platforms.map((platform) => (
              <div
                key={platform.key}
                className="p-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(51, 65, 85, 0.3)',
                }}
              >
                <div className="flex justify-center mb-3">
                  <BrandLogo platform={platform.key} size={40} />
                </div>
                <p className="text-white font-semibold text-sm">{platform.name}</p>
                <p className="text-slate-500 text-xs mt-1">{platform.provider}</p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Features list */}
        <FadeInOnScroll direction="up" delay={0.2}>
          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(51, 65, 85, 0.3)',
            }}
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              What We Track For Each Platform
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
