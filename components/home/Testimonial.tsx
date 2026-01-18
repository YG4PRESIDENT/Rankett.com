'use client'

import FadeInOnScroll from '../scroll/FadeInOnScroll'
import { Quote } from 'lucide-react'

interface TestimonialProps {
  slot: 1 | 2 | 3
  size?: 'default' | 'compact'
}

// Placeholder testimonials - replace with real testimonials when available
const testimonials = {
  1: {
    quote: "We added $15,000/month in recurring revenue within 60 days of launching AI visibility services. The best part? Rankett handles all the fulfillment.",
    author: "Marketing Agency Owner",
    company: "Digital Growth Agency",
    avatar: null,
  },
  2: {
    quote: "Our clients were already asking about AI search. Now we have a premium service to offer them with zero extra work on our end.",
    author: "SEO Agency Founder",
    company: "Search Optimization Co.",
    avatar: null,
  },
  3: {
    quote: "The white-label dashboard is beautiful. Our clients think we built it ourselves. The margins are incredible.",
    author: "Agency Partner",
    company: "Local Marketing Pros",
    avatar: null,
  },
}

export default function Testimonial({ slot, size = 'default' }: TestimonialProps) {
  const testimonial = testimonials[slot]
  const isCompact = size === 'compact'

  return (
    <section className={isCompact ? "py-8 md:py-12 relative" : "py-16 md:py-20 relative"}>
      <div className={isCompact ? "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"}>
        <FadeInOnScroll direction="up">
          <div
            className={isCompact ? "relative p-5 md:p-6 rounded-xl" : "relative p-8 md:p-12 rounded-2xl"}
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(51, 65, 85, 0.3)',
            }}
          >
            {/* Quote icon */}
            <div className={isCompact ? "absolute -top-3 left-5" : "absolute -top-4 left-8"}>
              <div
                className={isCompact ? "w-6 h-6 rounded-full flex items-center justify-center" : "w-8 h-8 rounded-full flex items-center justify-center"}
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.8) 100%)',
                }}
              >
                <Quote className={isCompact ? "w-3 h-3 text-white" : "w-4 h-4 text-white"} />
              </div>
            </div>

            {/* Quote text */}
            <blockquote className={isCompact
              ? "text-base md:text-lg text-white font-medium leading-relaxed mb-4"
              : "text-xl md:text-2xl text-white font-medium leading-relaxed mb-8"
            }>
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author info */}
            <div className="flex items-center gap-3">
              {/* Placeholder avatar */}
              <div className={isCompact
                ? "w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm"
                : "w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold"
              }>
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className={isCompact ? "text-white font-semibold text-sm" : "text-white font-semibold"}>{testimonial.author}</p>
                <p className={isCompact ? "text-slate-400 text-xs" : "text-slate-400 text-sm"}>{testimonial.company}</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
