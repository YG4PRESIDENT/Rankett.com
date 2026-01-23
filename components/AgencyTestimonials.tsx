'use client'

import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const TESTIMONIALS = [
  {
    quote: "I added $5k in recurring revenue in my first month using this model. My clients were asking about ChatGPT rankings, and I finally have a high-ticket answer.",
    author: "Sarah J.",
    role: "Agency Founder",
    metric: "+$5k MRR Added"
  },
  {
    quote: "The fulfillment team is incredible. I don't have to touch Reddit or Schema markup. I just sell the service, and Rankett handles the execution. 100% white-label.",
    author: "Michael R.",
    role: "SEO Director",
    metric: "0 Fulfillment Hours"
  },
  {
    quote: "We used to lose clients because we couldn't prove AI results. Now we show them the dashboard, and they stay. The ROI calculator makes the sale for us.",
    author: "Elena T.",
    role: "Digital Agency Owner",
    metric: "95% Retention Rate"
  }
]

export default function AgencyTestimonials() {
  return (
    <section className="py-24 px-4 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Trusted by <span className="text-gradient">Modern Agencies</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See how agency owners are scaling their revenue with our fulfillment partnership.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="p-8 bg-slate-950 border-slate-800 relative hover:border-slate-700 transition-colors">
              <div className="absolute top-8 right-8 text-slate-800">
                <Quote className="w-12 h-12 opacity-50" />
              </div>
              
              <div className="space-y-6 relative z-10">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-slate-800">
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                  <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                    {t.metric}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
