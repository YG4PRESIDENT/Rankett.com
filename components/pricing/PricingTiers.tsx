'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Check, ArrowRight, Zap, Crown, Building2, X, Sparkles } from 'lucide-react'
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
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const handleCTA = (tier: string) => {
    if (tier === 'Enterprise') {
      window.open(CONTACT.calendly, '_blank', 'noopener,noreferrer')
    } else {
      router.push('https://app.rankett.com/sign-up')
    }
  }

  return (
    <>
      {/* Teaser Section */}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInOnScroll direction="up">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Simple, Transparent Pricing</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to See Our <span className="text-gradient">Pricing?</span>
              </h2>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                Start free, upgrade when you&apos;re ready to scale. We keep things simple so you can focus on growing your agency.
              </p>

              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                size="lg"
                className="min-w-[220px]"
              >
                See Our Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="mt-6 text-sm text-slate-500">
                No credit card required to start
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Pricing Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl animate-in zoom-in-95 fade-in duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
              border: '1px solid rgba(51, 65, 85, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-10">
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                  Simple, Transparent <span className="text-gradient">Pricing</span>
                </h2>
                <p className="text-slate-400">
                  Start free, upgrade when you&apos;re ready to scale. Add done-for-you fulfillment anytime.
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {tiers.map((tier) => {
                  const Icon = tier.icon
                  return (
                    <div
                      key={tier.name}
                      className={`relative p-6 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                        tier.highlight
                          ? 'border-2 border-blue-500/50'
                          : 'border border-slate-700/50'
                      }`}
                      style={{
                        background: tier.highlight
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 41, 59, 0.6) 100%)'
                          : 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
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

                      <ul className="space-y-3 mb-6 flex-grow">
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
                  )
                })}
              </div>

              {/* Fulfillment add-on note */}
              <div className="mt-8 text-center">
                <p className="text-slate-400 text-sm">
                  <span className="text-white font-medium">Done-for-you fulfillment available</span> starting at $498/client/month.{' '}
                  <button
                    onClick={() => window.open(CONTACT.calendly, '_blank', 'noopener,noreferrer')}
                    className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  >
                    Talk to us about pricing
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
