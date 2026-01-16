'use client'

import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function OneLineQualifier() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Your clients are already asking about
              <span className="text-gradient"> AI visibility</span>.
              <br className="hidden md:block" />
              Now you have the answer
              <span className="text-blue-400">&mdash;and the backend to deliver it.</span>
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
