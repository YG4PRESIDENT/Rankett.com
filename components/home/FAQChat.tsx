'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
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

export default function FAQChat() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleQuestionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
        </FadeInOnScroll>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInOnScroll key={index} direction="up" delay={index * 0.05}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(51, 65, 85, 0.3)',
                }}
              >
                {/* Question - Clickable */}
                <button
                  onClick={() => handleQuestionClick(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className="text-white font-medium text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer - Expandable */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
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
