'use client'

import { useState, useEffect } from 'react'
import { Plus, X, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const faqs = [
  {
    question: 'How much can agencies charge clients?',
    answer: 'Tier 1: $1,500/mo \u2192 Rankett $498 = $1,002 profit (67%). Tier 2: $4,500/mo \u2192 Rankett $1,498 = $3,002 profit (67%). Tier 3: $7,500/mo \u2192 Rankett $2,498 = $5,002 profit (67%).',
    align: 'right' as const,
  },
  {
    question: 'Can I fully white-label (custom domain)?',
    answer: 'Yes: aivisibility.youragency.com. Your logo, your colors, your positioning. Clients see your platform. Partner tier unlocks ($299/mo).',
    align: 'center-right' as const,
  },
  {
    question: 'How long until clients see results?',
    answer: '90 days average for 12\u201318% SOV lift. Week 1\u20134: Technical (schema, llms.txt, GBP). Month 2: Content injection + authority mentions. Month 3: Consistent SOV gains + branded search lift.',
    align: 'center' as const,
  },
  {
    question: "What if you're late on deliverables?",
    answer: 'Full month refund if even 1 minute late. Agencies have final approval/rejection rights. No risk to your client relationships.',
    align: 'right' as const,
  },
  {
    question: "Why now? Isn't this just SEO 2.0?",
    answer: 'AI search = 42% of queries (2026). Traditional SEO traffic down 25\u201361%. Clients demand "show up in ChatGPT" or lose to competitors. 90-day window before saturation.',
    align: 'center-right' as const,
  },
]

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

export default function FAQChat() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null)

  const handleQuestionClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
      setAnimatingIndex(null)
    } else {
      setOpenIndex(index)
      setAnimatingIndex(index)
    }
  }

  const getAlignmentClass = (align: string) => {
    switch (align) {
      case 'right':
        return 'justify-end'
      case 'center-right':
        return 'justify-end md:pr-12'
      case 'center':
        return 'justify-end md:pr-24'
      default:
        return 'justify-end'
    }
  }

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Questions List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <FadeInOnScroll key={index} direction="up" delay={index * 0.05}>
                <div className="space-y-3">
                  {/* Question Row - Staggered alignment */}
                  <div className={`flex items-center gap-3 ${getAlignmentClass(faq.align)}`}>
                    {/* Plus/X Icon */}
                    <button
                      onClick={() => handleQuestionClick(index)}
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

                    {/* Question Bubble */}
                    <button
                      onClick={() => handleQuestionClick(index)}
                      className={`px-5 py-3 rounded-full text-left transition-all duration-300 ${
                        isOpen
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-800/80 text-white hover:bg-slate-700/80'
                      }`}
                      style={{
                        border: isOpen ? 'none' : '1px solid rgba(71, 85, 105, 0.3)',
                      }}
                    >
                      <p className="font-medium text-sm md:text-base">{faq.question}</p>
                    </button>
                  </div>

                  {/* Answer - Shows on click with typewriter */}
                  {isOpen && (
                    <div className="flex gap-3 pl-4 animate-in slide-in-from-top-2 duration-300">
                      {/* AI Avatar */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mt-1">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>

                      {/* Answer Bubble */}
                      <div
                        className="max-w-[85%] md:max-w-[75%] px-5 py-4 rounded-2xl rounded-tl-md"
                        style={{
                          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
                          border: '1px solid rgba(51, 65, 85, 0.3)',
                        }}
                      >
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                          {animatingIndex === index ? (
                            <TypewriterText
                              text={faq.answer}
                              onComplete={() => setAnimatingIndex(null)}
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

        {/* View all FAQs link */}
        <FadeInOnScroll direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm md:text-base">View all FAQs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
