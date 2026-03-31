'use client'

import FadeInOnScroll from '../scroll/FadeInOnScroll'

const testimonials = [
  {
    quote: "We closed 3 clients in our first week using the audit tool. They were shocked they didn't show up on ChatGPT.",
    role: "Agency Founder",
    location: "Austin, TX",
    initial: "M"
  },
  {
    quote: "The fulfillment is seamless. I sold a $5k retainer and didn't have to hire a single person.",
    role: "SEO Director",
    location: "New York, NY",
    initial: "S"
  },
  {
    quote: "Finally, a way to monetize AI that isn't just 'prompt engineering'. This is a real product.",
    role: "Digital Marketer",
    location: "London, UK",
    initial: "J"
  },
  {
    quote: "My clients love the reports. They see exactly what we're doing and the ROI is clear.",
    role: "Agency Owner",
    location: "Los Angeles, CA",
    initial: "D"
  }
]

export default function PooledTestimonials() {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Show Authority, <span className="text-blue-500">Day 1</span>.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Every agency we work for gets to use the pooled testimonials. The more we grow, the more you grow.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <FadeInOnScroll key={i} direction="up" delay={i * 0.1}>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 h-full flex flex-col relative overflow-hidden group hover:border-slate-700 transition-colors">
                {/* Blur effect over name area to visualize the "pooled/white-label" nature */}
                
                <div className="mb-4">
                    <div className="flex gap-1 mb-2">
                        {[1,2,3,4,5].map(star => (
                            <svg key={star} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        "{t.quote}"
                    </p>
                </div>

                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-900">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 font-bold border border-slate-700">
                        {t.initial}
                    </div>
                    <div>
                        {/* Blurred Name Visual */}
                        <div className="h-3 w-24 bg-slate-800 rounded mb-1 filter blur-[2px]"></div>
                        <div className="text-xs text-slate-500">{t.role}</div>
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
