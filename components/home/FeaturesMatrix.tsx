'use client'

import FadeInOnScroll from '../scroll/FadeInOnScroll'
import BrandLogo from '../ui/BrandLogo'

export default function FeaturesMatrix() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to <span className="text-gradient">Win AI Visibility</span>
            </h2>
          </div>
        </FadeInOnScroll>

        {/* 2x2 Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - Compare Visibility Across LLMs */}
          <FadeInOnScroll direction="up" delay={0.1}>
            <div
              className="p-8 rounded-3xl h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(51, 65, 85, 0.3)',
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Compare Visibility Across LLMs
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Track how each AI platform talks about your clients
              </p>

              {/* Visual: Connected AI platform icons */}
              <div className="relative flex items-center justify-center py-8">
                <div className="flex items-center gap-4">
                  {['chatgpt', 'claude', 'gemini', 'perplexity', 'grok'].map((platform, i) => (
                    <div
                      key={platform}
                      className="relative w-14 h-14 rounded-xl flex items-center justify-center transition-transform hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.6) 0%, rgba(30, 41, 59, 0.8) 100%)',
                        border: '1px solid rgba(71, 85, 105, 0.4)',
                      }}
                    >
                      <BrandLogo platform={platform} size={28} />
                      {i < 4 && (
                        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-blue-500/50" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Card 2 - Understand AI's Sentiment */}
          <FadeInOnScroll direction="up" delay={0.15}>
            <div
              className="p-8 rounded-3xl h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(51, 65, 85, 0.3)',
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Understand AI's Sentiment
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                See how positively AI models perceive your brand
              </p>

              {/* Visual: Sentiment badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 py-8">
                <div className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                  <span className="text-emerald-400 font-medium text-sm">Positive</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30">
                  <span className="text-amber-400 font-medium text-sm">Neutral</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30">
                  <span className="text-red-400 font-medium text-sm">Negative</span>
                </div>

                {/* Sample score display */}
                <div className="w-full mt-4 flex justify-center">
                  <div
                    className="px-6 py-3 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <span className="text-emerald-400 font-bold text-lg">+87% Positive Sentiment</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Card 3 - See What AI Says */}
          <FadeInOnScroll direction="up" delay={0.2}>
            <div
              className="p-8 rounded-3xl h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(51, 65, 85, 0.3)',
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                See What AI Says About Your Brand
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Actual AI responses mentioning your clients
              </p>

              {/* Visual: Chat mockup */}
              <div className="space-y-3 py-4">
                <div
                  className="p-4 rounded-xl rounded-tl-sm max-w-[90%]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.5) 0%, rgba(30, 41, 59, 0.7) 100%)',
                    border: '1px solid rgba(71, 85, 105, 0.3)',
                  }}
                >
                  <p className="text-slate-300 text-sm">
                    "For dental care in Austin, I'd recommend <span className="text-blue-400 font-medium">Smith Family Dental</span>. They're known for..."
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <BrandLogo platform="chatgpt" size={16} />
                    <span className="text-xs text-slate-500">ChatGPT</span>
                  </div>
                </div>

                <div
                  className="p-4 rounded-xl rounded-tl-sm max-w-[90%]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.5) 0%, rgba(30, 41, 59, 0.7) 100%)',
                    border: '1px solid rgba(71, 85, 105, 0.3)',
                  }}
                >
                  <p className="text-slate-300 text-sm">
                    "Based on reviews, <span className="text-blue-400 font-medium">Smith Family Dental</span> is highly rated for..."
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <BrandLogo platform="claude" size={16} />
                    <span className="text-xs text-slate-500">Claude</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Card 4 - Compare to Competitors */}
          <FadeInOnScroll direction="up" delay={0.25}>
            <div
              className="p-8 rounded-3xl h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(51, 65, 85, 0.3)',
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Compare to Competitors in Real-Time
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Track your clients vs their competition
              </p>

              {/* Visual: Simple bar comparison */}
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-400 font-medium">Your Client</span>
                    <span className="text-slate-400">78%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-blue-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Competitor A</span>
                    <span className="text-slate-500">52%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-[52%] rounded-full bg-slate-600" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Competitor B</span>
                    <span className="text-slate-500">35%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-[35%] rounded-full bg-slate-600" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Competitor C</span>
                    <span className="text-slate-500">28%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-[28%] rounded-full bg-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
