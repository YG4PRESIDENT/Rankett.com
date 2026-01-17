'use client'

import { useRouter } from 'next/navigation'
import { Check, ArrowRight, Zap, Crown, Building2 } from 'lucide-react'
import { Button } from '../ui/Button'
import FadeInOnScroll from '../scroll/FadeInOnScroll'
import { CONTACT } from '@/lib/constants'

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
      'Basic AI visibility insights',
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
      'Done-for-you fulfillment available',
    ],
    cta: 'Go Partner',
    ctaVariant: 'primary' as const,
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For agencies with high-volume needs',
    icon: Building2,
    features: [
      'Everything in Partner',
      'Volume discounts',
      'Dedicated account manager',
      'Custom integrations',
      'API access',
      'White-glove onboarding',
    ],
    cta: 'Contact Sales',
    ctaVariant: 'outline' as const,
    highlight: false,
  },
]

export default function PricingTiers() {
  const router = useRouter()

  const handleCTA = (tier: string) => {
    if (tier === 'Enterprise') {
      window.open(CONTACT.calendly, '_blank', 'noopener,noreferrer')
    } else {
      const toolBaseUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'http://localhost:3001'
      router.push(toolBaseUrl)
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Start free, upgrade when you&apos;re ready to scale. Add done-for-you fulfillment anytime.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                      Most Popular
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

        {/* Fulfillment add-on note */}
        <FadeInOnScroll direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              <span className="text-white font-medium">Done-for-you fulfillment available</span> starting at $998/client/month.{' '}
              <button
                onClick={() => window.open(CONTACT.calendly, '_blank', 'noopener,noreferrer')}
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Talk to us about pricing
              </button>
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
