'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, MessageSquare } from 'lucide-react'
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
    answer: 'Most partners charge $3,000-$15,000/month depending on the client size and scope. Our local tier costs you $998/month, regional is $1,498/month, and national is $2,498/month. The typical margin is 200-400%.',
  },
  {
    question: 'What if my client asks technical questions?',
    answer: 'We provide training materials and talking points for common client questions. For deep technical questions, you can loop in our team or we can join calls directly (while representing your agency, of course).',
  },
  {
    question: 'Can I try before I commit?',
    answer: 'Yes! Start with our free Starter tier. You get 3 free audits to test with prospects, full access to the platform, and only upgrade to Partner or add fulfillment when you\'re ready to scale.',
  },
]

interface TypewriterTextProps {
  text: string
  isVisible: boolean
}

function TypewriterText({ text, isVisible }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText('')
      return
    }

    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 10) // Adjust speed here

    return () => clearInterval(interval)
  }, [text, isVisible])

  return (
    <span>
      {displayedText}
      {isVisible && displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

export default function FAQChat() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-slate-400">
              Get answers to common questions about partnering with Rankett
            </p>
          </div>
        </FadeInOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInOnScroll key={index} direction="up" delay={index * 0.05}>
              <div
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: openIndex === index ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(51, 65, 85, 0.3)',
                }}
              >
                {/* Question button */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer (chat bubble style) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div
                        className="flex-1 p-4 rounded-xl rounded-tl-none text-slate-300 text-sm leading-relaxed"
                        style={{
                          background: 'rgba(30, 41, 59, 0.5)',
                        }}
                      >
                        <TypewriterText text={faq.answer} isVisible={openIndex === index} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
