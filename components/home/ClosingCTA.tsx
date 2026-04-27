'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeInOnScroll direction="up">
          <h2 className="mb-6 text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Don&apos;t lose your clients to the agency that{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              got here first.
            </span>
          </h2>

          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-300 md:text-xl">
            Add AI visibility to your offer today.
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-400 md:text-lg">
            Your brand, done-for-you, live instantly.
          </p>

          <Link
            href="https://app.rankett.com/sign-up"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-5 text-base font-bold text-slate-950 shadow-[0_0_40px_-8px_rgba(96,165,250,0.6)] transition-all hover:scale-[1.02] hover:bg-blue-50 md:text-lg"
          >
            Apply
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
