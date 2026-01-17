'use client'

import { useState, useEffect, useRef } from 'react'
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
  isVisible: boolean
  delay?: number
}

function TypewriterText({ text, isVisible, delay = 0 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    // Apply initial delay
    const startTimer = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [isVisible, delay])

  useEffect(() => {
    if (!hasStarted) {
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
    }, 8)

    return () => clearInterval(interval)
  }, [text, hasStarted])

  return (
    <span>
      {displayedText}
      {hasStarted && displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

interface ChatMessageProps {
  question: string
  answer: string
  index: number
}

function ChatMessage({ question, answer, index }: ChatMessageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="space-y-4">
      {/* User Question - Right aligned */}
      <div
        className="flex justify-end opacity-0 translate-y-4 transition-all duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transitionDelay: '0ms',
        }}
      >
        <div
          className="max-w-[85%] md:max-w-[70%] px-5 py-3 rounded-2xl rounded-br-md"
          style={{
            background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
          }}
        >
          <p className="text-white font-medium text-sm md:text-base">{question}</p>
        </div>
      </div>

      {/* AI Answer - Left aligned */}
      <div
        className="flex gap-3 opacity-0 translate-y-4 transition-all duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transitionDelay: '200ms',
        }}
      >
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
            <TypewriterText
              text={answer}
              isVisible={isVisible}
              delay={400}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQChat() {
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
              Got <span className="text-gradient">Questions?</span>
            </h2>
            <p className="text-lg text-slate-400">
              Here&apos;s what agencies typically ask us
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
          {/* Chat Header */}
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-700/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-medium">Rankett AI</p>
              <p className="text-xs text-slate-400">Always here to help</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">Online</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <ChatMessage
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
