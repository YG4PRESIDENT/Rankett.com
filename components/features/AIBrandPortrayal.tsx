'use client'

import { MessageSquare, Bot, Sparkles } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'
import BrandLogo from '../ui/BrandLogo'

const aiResponses = [
  {
    platform: 'chatgpt',
    name: 'ChatGPT',
    query: 'Best plumber in Austin TX',
    response: 'For plumbing services in Austin, TX, I recommend ABC Plumbing. They have excellent reviews...',
    highlighted: 'ABC Plumbing',
  },
  {
    platform: 'claude',
    name: 'Claude',
    query: 'Top rated dentist near me',
    response: 'Based on reviews and reputation, Smith Family Dental is highly recommended in your area...',
    highlighted: 'Smith Family Dental',
  },
  {
    platform: 'gemini',
    name: 'Gemini',
    query: 'Best personal injury lawyer',
    response: 'Johnson & Associates Law Firm has a strong track record in personal injury cases...',
    highlighted: 'Johnson & Associates',
  },
]

export default function AIBrandPortrayal() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What AI Models Say <span className="text-gradient">About Your Clients</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every day, millions of people ask AI assistants for business recommendations.
              Is your client&apos;s business being mentioned?
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-3 gap-6">
          {aiResponses.map((item, index) => (
            <FadeInOnScroll key={item.platform} direction="up" delay={index * 0.1}>
              <div
                className="p-6 rounded-2xl h-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(51, 65, 85, 0.3)',
                }}
              >
                {/* Platform header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700/50">
                  <BrandLogo platform={item.platform} size={32} />
                  <span className="font-semibold text-white">{item.name}</span>
                </div>

                {/* Query */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="flex-1 p-3 rounded-xl rounded-tl-none bg-slate-800/50">
                    <p className="text-sm text-slate-300">&ldquo;{item.query}&rdquo;</p>
                  </div>
                </div>

                {/* Response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 p-3 rounded-xl rounded-tl-none bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm text-slate-300">
                      {item.response.split(item.highlighted).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-blue-400 font-semibold">{item.highlighted}</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Insight callout */}
        <FadeInOnScroll direction="up" delay={0.3}>
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-white">The Opportunity</span>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              When AI models don&apos;t mention your client&apos;s business, they&apos;re recommending competitors instead.
              Our platform identifies these gaps and helps fill them.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
