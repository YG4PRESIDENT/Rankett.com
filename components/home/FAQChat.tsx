'use client'

import { useState, useEffect } from 'react'
import { Plus, X, Sparkles } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const faqs = [
  {
    question: 'How does the white-labeling work?',
    answer: 'Everything is 100% white-labeled. Your logo, your colors, your custom domain. Your clients will never see Rankett branding anywhere. The dashboard, reports, and all client-facing materials appear as if you built them yourself.',
    align: 'right' as const,
  },
  {
    question: 'What does "done-for-you fulfillment" mean?',
    answer: 'After you close a client, we handle everything. Our team performs the AI visibility audits, implements optimizations, tracks progress, and generates reports. You focus on selling and client relationships while we do the technical work.',
    align: 'center-right' as const,
  },
  {
    question: 'Do I need technical expertise?',
    answer: 'Not at all. The platform is designed for marketing agencies without AI or technical backgrounds. You run audits with one click, share results with prospects, and we handle all the implementation complexity behind the scenes.',
    align: 'center' as const,
  },
  {
    question: 'How do I price this to clients?',
    answer: 'Most partners charge $1,500-$15,000/month depending on the client size and scope. Our fulfillment tiers start at $498/month per client. The typical margin is 200-400%.',
    align: 'right' as const,
  },
  {
    question: 'What if my client asks technical questions?',
    answer: 'We provide training materials and talking points for common client questions. For deep technical questions, you can loop in our team or we can join calls directly while representing your agency.',
    align: 'center-right' as const,
  },
  {
    question: 'Can I try before I commit?',
    answer: 'Yes! Start with our free Starter tier. You get 3 free audits to test with prospects, full access to the platform, and only upgrade to Partner or add fulfillment when you\'re ready to scale.',
    align: 'center' as const,
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
      </div>
    </section>
  )
}
