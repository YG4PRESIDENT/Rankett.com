'use client'

import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const faqs = [
  {
    question: 'How does the white-labeling work?',
    answer: 'Everything is 100% white-labeled. Your logo, your colors, your custom domain. Your clients will never see Rankett branding anywhere. The dashboard, reports, and all client-facing materials appear as if you built them yourself.',
  },
  {
    question: 'What does "done-for-you fulfillment" mean?',
    answer: 'After you close a client, we handle everything. Our team performs the AI visibility audits, implements optimizations, tracks progress, and generates reports. You focus on selling and client relationships while we do the technical work.',
  },
  {
    question: 'Do I need technical expertise?',
    answer: 'Not at all. The platform is designed for marketing agencies without AI or technical backgrounds. You run audits with one click, share results with prospects, and we handle all the implementation complexity behind the scenes.',
  },
  {
    question: 'How do I price this to clients?',
    answer: 'Most partners charge $3,000-$15,000/month depending on the client size and scope. Our fulfillment tiers start at $998/month per client. The typical margin is 200-400%.',
  },
  {
    question: 'What if my client asks technical questions?',
    answer: 'We provide training materials and talking points for common client questions. For deep technical questions, you can loop in our team or we can join calls directly while representing your agency.',
  },
  {
    question: 'Can I try before I commit?',
    answer: 'Yes! Start with our free Starter tier. You get 3 free audits to test with prospects, full access to the platform, and only upgrade to Partner or add fulfillment when you\'re ready to scale.',
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
      // Close if clicking same question
      setOpenIndex(null)
      setAnimatingIndex(null)
    } else {
      // Open new question and start animation
      setOpenIndex(index)
      setAnimatingIndex(index)
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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-slate-400">
              Click a question to get your answer
            </p>
          </div>
        </FadeInOnScroll>

        {/* Chat Container */}
        <div
          className="p-6 md:p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(51, 65, 85, 0.3)',
          }}
        >
          {/* Questions List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeInOnScroll key={index} direction="up" delay={index * 0.05}>
                <div className="space-y-3">
                  {/* Question - Clickable (right-aligned like user message) */}
                  <button
                    onClick={() => handleQuestionClick(index)}
                    className="w-full flex justify-end"
                  >
                    <div
                      className={`max-w-[85%] md:max-w-[70%] px-5 py-3 rounded-2xl rounded-br-md text-left transition-all duration-200 ${
                        openIndex === index
                          ? 'ring-2 ring-blue-500/50'
                          : 'hover:ring-2 hover:ring-slate-600/50'
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)',
                        border: '1px solid rgba(71, 85, 105, 0.5)',
                      }}
                    >
                      <p className="text-white font-medium text-sm md:text-base">{faq.question}</p>
                    </div>
                  </button>

                  {/* Answer - Shows on click with typewriter (left-aligned like AI response) */}
                  {openIndex === index && (
                    <div className="flex gap-3 animate-in slide-in-from-bottom-2 duration-300">
                      {/* AI Avatar */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
