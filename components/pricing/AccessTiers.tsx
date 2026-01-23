'use client'

import { useRouter } from 'next/navigation'
import { Check, ArrowRight, Zap, Crown } from 'lucide-react'
import { Button } from '../ui/Button'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for testing the waters',
    icon: Zap,
    features: [
      '3 free audits',
      'Rankett branding on reports',
      'Email support',
      'Pay-per-credit after free audits',
    ],
    cta: 'Start Free',
    ctaVariant: 'outline' as const,
    highlight: false,
  },
  {
    name: 'Partner',
    price: '$500',
    period: '/mo',
    description: 'Everything unlocked for serious partners',
    icon: Crown,
    features: [
      'Unlimited audits',
      'Full white-label branding',
      'Priority phone support',
      'Co-founder gameplan meeting',
      'Custom domain support',
      'Everything unlocked',
    ],
    cta: 'Go Partner',
    ctaVariant: 'primary' as const,
    highlight: true,
  },
]

export default function AccessTiers() {
  const router = useRouter()

  const handleCTA = (tier: string) => {
    // TODO: Implement actual signup flow
    const toolBaseUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'http://localhost:3001'
    router.push(toolBaseUrl)
  }

  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Choose Your <span className="text-gradient">Access Level</span>
            </h2>
            <p className="text-slate-400">
              Start free, upgrade when you&apos;re ready to go white-label
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <FadeInOnScroll key={tier.name} direction="up" delay={index * 0.1}>
                <div
                  className={`relative p-6 lg:p-8 rounded-2xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                    tier.highlight
                      ? 'border-2 border-blue-500/50'
                      : 'border border-slate-700/50'
                  }`}
                  style={{
                    background: tier.highlight
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 41, 59, 0.6) 100%)'
                      : 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-xs font-semibold text-white">
                      Recommended
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        tier.highlight ? 'bg-blue-500/20' : 'bg-slate-800'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${tier.highlight ? 'text-blue-400' : 'text-slate-400'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                      <p className="text-xs text-slate-400">{tier.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleCTA(tier.name)}
                    variant={tier.ctaVariant}
                    className="w-full"
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </FadeInOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
