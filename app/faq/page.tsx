'use client'

import { useState, useEffect } from 'react'
import { Plus, X, Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import FadeInOnScroll from '@/components/scroll/FadeInOnScroll'
import { CONTACT } from '@/lib/constants'

interface FAQ {
  question: string
  answer: string
}

interface FAQCategory {
  name: string
  faqs: FAQ[]
}

const categories: FAQCategory[] = [
  {
    name: 'AI Visibility 101',
    faqs: [
      {
        question: 'What is AI Visibility (AEO/GEO)?',
        answer: '92% of businesses are invisible when customers ask AI "best [service] near me." AI Visibility = Mention Rate across ChatGPT, Perplexity, and Gemini. We make AI cite your clients as the #1 recommendation vs competitors.',
      },
      {
        question: 'How is Rankett different from SEO tools?',
        answer: 'SEO = clicks. AI Visibility = zero-click recommendations. SEO tools track rankings and traffic. Rankett provides content + mentions + Mention Rate tracking so AI picks your client first. Agencies charge $1.5k\u2013$7.5k/mo retainers (vs $500 SEO packages).',
      },
      {
        question: 'What is Mention Rate?',
        answer: 'Mention Rate = % of times AI cites your client vs 50 competitors across buyer queries. Example: "Best dentist Hillsboro" \u2192 Track ChatGPT, Perplexity, and Gemini. Average lift: 0\u219215% Mention Rate in 90 days across partner accounts.',
      },
      {
        question: 'How is AI Visibility measured?',
        answer: '4 metrics across ChatGPT, Perplexity, and Gemini: 1) Citation frequency (# mentions), 2) Position prominence (top of answer?), 3) Entity recognition (#1 recommendation?), 4) Business impact (branded lift, assisted conversions).',
      },
      {
        question: "Why now? Isn't this just SEO 2.0?",
        answer: 'AI search = 42% of queries (2026). Traditional SEO traffic down 25\u201361%. Clients demand "show up in ChatGPT" or lose to competitors. 90-day window before saturation.',
      },
    ],
  },
  {
    name: 'Pricing & Profit Margins',
    faqs: [
      {
        question: 'How much can agencies charge clients?',
        answer: 'Tier 1: $1,500/mo \u2192 Rankett $498 = $1,002 profit (67%). Tier 2: $4,500/mo \u2192 Rankett $1,498 = $3,002 profit (67%). Tier 3: $7,500/mo \u2192 Rankett $2,498 = $5,002 profit (67%).',
      },
      {
        question: 'What is Partner pricing ($299/mo)?',
        answer: 'Platform access + unlimited white-label audits + custom domain. Everything agencies need to sell $3k+ retainers. Free after 1 client close. Includes dedicated manager, pitch decks, proof vault access.',
      },
      {
        question: 'How does per-seat billing work?',
        answer: 'Agency pays per active client \u2192 we fulfill completely. Close client \u2192 create seat \u2192 send branded onboarding \u2192 we deliver content, mentions, and reports. Monthly autopay, no proration.',
      },
      {
        question: 'What exactly do you fulfill per tier?',
        answer: 'Tier 1 ($498): 50-query tracking, 8 answer-first blogs/mo, schema/llms.txt, Featured.com mentions. Tier 2 ($1,498): +150 queries, 36 authority mentions, TLDR page summaries. Tier 3 ($2,498): +250 queries, 70+ mentions, YouTube transcripts, dominance-to-dollars reports.',
      },
    ],
  },
  {
    name: 'Results & Guarantees',
    faqs: [
      {
        question: 'How long until clients see results?',
        answer: '90 days average for 12\u201318% Mention Rate lift. Week 1\u20134: Technical (schema, llms.txt, GBP). Month 2: Content injection + authority mentions. Month 3: Consistent Mention Rate gains + branded search lift.',
      },
      {
        question: "What if you're late on deliverables?",
        answer: 'Full month refund if even 1 minute late. Agencies have final approval/rejection rights. No risk to your client relationships.',
      },
      {
        question: 'What proof/case studies exist?',
        answer: 'Pooled benchmarks: Tier 1 avg 12% Mention Rate lift in 90 days. Live vault access for partners (before/after Mention Rate charts, competitor gaps, revenue correlations). Early adopters contribute \u2192 everyone benefits.',
      },
      {
        question: 'Can I see the partner results dashboard?',
        answer: 'Live demo available. Tracks your MRR, client Mention Rate lifts, churn, LTV. Pooled benchmarks update automatically.',
      },
    ],
  },
  {
    name: 'White-Label & Sales Tools',
    faqs: [
      {
        question: 'Can I fully white-label (custom domain)?',
        answer: 'Yes: aivisibility.youragency.com. Your logo, your colors, your positioning. Clients see your platform. Partner tier unlocks ($299/mo).',
      },
      {
        question: 'What sales assets do you provide?',
        answer: 'Plug-and-play pitch deck (pulls your pricing automatically), branded audit tool (lead magnet), scripts for client upsells, and proof vault (anonymized benchmarks/cases).',
      },
      {
        question: 'Do you handle legal/contracts?',
        answer: 'Branded MSA templates included. Agencies sign clients \u2192 MSA timestamps \u2192 we fulfill. Liability shifts appropriately.',
      },
      {
        question: 'What makes agencies switch from competitors?',
        answer: 'Indexly/Peekaboo = $149/mo tracking. Rankett = $3k profit/client/mo. We fulfill. They track. Custom domain + sales kit + guarantees = lock-in.',
      },
    ],
  },
  {
    name: 'Getting Started',
    faqs: [
      {
        question: 'Is there a free trial/Starter plan?',
        answer: 'Partner: $299/mo (unlimited audits, custom domain). Starter: Email for details. First 5 founding agencies: Waived onboarding call included.',
      },
      {
        question: 'How do I onboard my first client?',
        answer: '1. Run branded audit \u2192 show client gaps. 2. Close retainer \u2192 create seat in Rankett. 3. Send client your onboarding link (yourdomain.com/onboard). 4. We deliver. You bill.',
      },
      {
        question: 'How do affiliates earn?',
        answer: '10% of referred agency\'s LTV forever ($300\u2013$1k/mo passive). Coaches/consultants: One referral = $3.6k/yr. Gold tier (5+ refs): 15%.',
      },
    ],
  },
]

const allCategoryNames = ['All', ...categories.map((c) => c.name)]

interface TypewriterTextProps {
  text: string
  onComplete?: () => void
}

function TypewriterText({ text, onComplete }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    setDisplayedText('')
    let index = 0

    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        onComplete?.()
      }
    }, 8)

    return () => clearInterval(interval)
  }, [text, onComplete])

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openKey, setOpenKey] = useState<string | null>(null)
  const [animatingKey, setAnimatingKey] = useState<string | null>(null)

  const handleQuestionClick = (key: string) => {
    if (openKey === key) {
      setOpenKey(null)
      setAnimatingKey(null)
    } else {
      setOpenKey(key)
      setAnimatingKey(key)
    }
  }

  const filteredCategories =
    activeCategory === 'All'
      ? categories
      : categories.filter((c) => c.name === activeCategory)

  // JSON-LD FAQ Schema
  const allFaqs = categories.flatMap((c) => c.faqs)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="min-h-screen py-20 md:py-32 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 right-0 w-[600px] h-[600px]"
            style={{
              background:
                'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute bottom-1/4 left-0 w-[400px] h-[400px]"
            style={{
              background:
                'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 60%)',
              filter: 'blur(60px)',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <FadeInOnScroll direction="up">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm">Back to home</span>
            </Link>
          </FadeInOnScroll>

          {/* Header */}
          <FadeInOnScroll direction="up">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked{' '}
                <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Everything you need to know about partnering with Rankett for AI
                visibility fulfillment.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Category Filter Tabs */}
          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {allCategoryNames.map((name) => (
                <button
                  key={name}
                  onClick={() => setActiveCategory(name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === name
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-white'
                  }`}
                  style={{
                    border:
                      activeCategory === name
                        ? 'none'
                        : '1px solid rgba(71, 85, 105, 0.3)',
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </FadeInOnScroll>

          {/* FAQ Categories */}
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.name}>
                {/* Category Header */}
                <FadeInOnScroll direction="up">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-8 pl-4 border-l-2 border-blue-500">
                    {category.name}
                  </h2>
                </FadeInOnScroll>

                {/* Questions */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${category.name}-${faqIndex}`
                    const isOpen = openKey === key
                    const alignments = [
                      'justify-end',
                      'justify-end md:pr-12',
                      'justify-end md:pr-24',
                    ]

                    return (
                      <FadeInOnScroll
                        key={key}
                        direction="up"
                        delay={faqIndex * 0.05}
                      >
                        <div className="space-y-3">
                          {/* Question Row */}
                          <div
                            className={`flex items-center gap-3 ${alignments[faqIndex % 3]}`}
                          >
                            <button
                              onClick={() => handleQuestionClick(key)}
                              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isOpen
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50'
                              }`}
                            >
                              {isOpen ? (
                                <X className="w-4 h-4" />
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </button>

                            <button
                              onClick={() => handleQuestionClick(key)}
                              className={`px-5 py-3 rounded-full text-left transition-all duration-300 ${
                                isOpen
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-slate-800/80 text-white hover:bg-slate-700/80'
                              }`}
                              style={{
                                border: isOpen
                                  ? 'none'
                                  : '1px solid rgba(71, 85, 105, 0.3)',
                              }}
                            >
                              <p className="font-medium text-sm md:text-base">
                                {faq.question}
                              </p>
                            </button>
                          </div>

                          {/* Answer */}
                          {isOpen && (
                            <div className="flex gap-3 pl-4 animate-in slide-in-from-top-2 duration-300">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mt-1">
                                <Sparkles className="w-4 h-4 text-white" />
                              </div>
                              <div
                                className="max-w-[85%] md:max-w-[75%] px-5 py-4 rounded-2xl rounded-tl-md"
                                style={{
                                  background:
                                    'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
                                  border: '1px solid rgba(51, 65, 85, 0.3)',
                                }}
                              >
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                  {animatingKey === key ? (
                                    <TypewriterText
                                      text={faq.answer}
                                      onComplete={() =>
                                        setAnimatingKey(null)
                                      }
                                    />
                                  ) : (
                                    faq.answer
                                  )}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </FadeInOnScroll>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <FadeInOnScroll direction="up" delay={0.2}>
            <div className="text-center mt-20 pt-12 border-t border-slate-800">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-400 mb-8">
                Book a call and we&apos;ll walk you through everything.
              </p>
              <a
                href={CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300"
              >
                Book a Call
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  )
}
