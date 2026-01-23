'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2, TrendingUp, Search, MessageSquare, BarChart2, Globe, ArrowRight } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'
import BrandLogo from '../ui/BrandLogo'

export default function FeaturesMatrix() {
  return (
    <section className="py-8 relative overflow-hidden bg-slate-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - More Compact */}
        <div className="text-center mb-6">
          <FadeInOnScroll direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Uncover What AI Says <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">About Your Brand</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Know exactly how ChatGPT, Claude, and other AI models portray your brand—and steal the spotlight from competitors.
            </p>
          </FadeInOnScroll>
        </div>

        {/* 2x2 Bento Grid - Dense */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          
          {/* Card 1: Visibility & Connectivity */}
          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="h-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-white mb-1">Compare Visibility Across LLMs</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Unite your favorite tools for effortless connectivity. Boost productivity through interconnected workflows.
                </p>
              </div>
              
              {/* Visual: Denser Central Hub */}
              <div className="relative h-[100px] flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 bg-[size:20px_20px]" />
                
                {/* Center Node */}
                <div className="relative z-10 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <Globe className="w-5 h-5 text-white" />
                </div>

                {/* Orbiting Satellites - Even Tighter Radius */}
                {['chatgpt', 'claude', 'gemini', 'perplexity'].map((platform, i) => (
                  <div 
                    key={platform}
                    className="absolute w-8 h-8 bg-slate-800 border border-slate-700 rounded-md flex items-center justify-center shadow-lg"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 90}deg) translate(50px) rotate(-${i * 90}deg) translate(-50%, -50%)`,
                    }}
                  >
                    <BrandLogo platform={platform} size={16} />
                    {/* Connection Line */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[50px] h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent -z-10 origin-left"
                      style={{
                        transform: `rotate(${180 + (i * 90) * -1}deg)`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          {/* Card 2: Sentiment Analysis */}
          <FadeInOnScroll direction="up" delay={0.2}>
            <div className="h-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-white mb-1">Understand AI's Sentiment</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Set it, forget it. Your AI Agent tackles repetitive tasks so you can focus on strategy, innovation, and growth.
                </p>
              </div>

              {/* Visual: Denser Sentiment Bars */}
              <div className="relative h-[100px] bg-slate-950/50 rounded-xl border border-slate-800/50 p-3 flex flex-col justify-end gap-2">
                
                {/* Very Positive */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-medium text-emerald-400">
                    <span>Very Positive Sentiment</span>
                    <span>85%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full animate-grow-bar" style={{ width: '85%' }} />
                  </div>
                </div>

                {/* Neutral */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-medium text-amber-400">
                    <span>Neutral Sentiment</span>
                    <span>12%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full animate-grow-bar" style={{ width: '12%', animationDelay: '0.2s' }} />
                  </div>
                </div>

                {/* Negative */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-medium text-red-400">
                    <span>Negative Sentiment</span>
                    <span>3%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full animate-grow-bar" style={{ width: '3%', animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Card 3: Chat Simulation */}
          <FadeInOnScroll direction="up" delay={0.3}>
            <div className="h-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-white mb-1">See What AI Actually Says</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Track mentions across real AI answers. Know exactly how you appear in the conversation.
                </p>
              </div>

              {/* Visual: Denser Chat Interface */}
              <div className="relative h-[100px] bg-slate-950/50 rounded-xl border border-slate-800/50 p-2 flex flex-col gap-2 overflow-hidden">
                {/* User Message */}
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center">
                    <User className="w-2.5 h-2.5 text-slate-300" />
                  </div>
                  <div className="bg-slate-800 rounded-xl rounded-tl-none p-1.5 text-[10px] text-slate-200 max-w-[90%]">
                    Hey, I need help choosing a platform for my new membership site.
                  </div>
                </div>

                {/* AI Response (Typewriter) */}
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-900/50 border border-emerald-500/30 flex-shrink-0 flex items-center justify-center">
                    <BrandLogo platform="chatgpt" size={10} />
                  </div>
                  <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl rounded-tl-none p-1.5 text-[10px] text-slate-300 max-w-[95%]">
                    <TypewriterText text="Based on 2025 trends, top membership platforms include Wix for an all-around solution, Kajabi for a comprehensive course focus, and Rankett for..." />
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Card 4: Competitor Comparison */}
          <FadeInOnScroll direction="up" delay={0.4}>
            <div className="h-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-white mb-1">Real-Time Competitor Tracking</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Transform raw data into clear insights in seconds. See who is winning the visibility war.
                </p>
              </div>

              {/* Visual: Denser Comparison Graph */}
              <div className="relative h-[100px] bg-slate-950/50 rounded-xl border border-slate-800/50 p-3 flex flex-col">
                <div className="flex items-end justify-between h-[80px] w-full gap-1 mb-2">
                  {[
                    { label: 'Notion', val: 28, color: 'bg-slate-700' },
                    { label: 'Teachable', val: 46, color: 'bg-slate-600' },
                    { label: 'Podia', val: 50, color: 'bg-slate-500' },
                    { label: 'Thinkific', val: 59, color: 'bg-blue-900' },
                    { label: 'Kajabi', val: 67, color: 'bg-blue-600' },
                    { label: 'You', val: 82, color: 'bg-blue-500' },
                  ].map((item, i) => (
                    <div key={item.label} className="flex flex-col items-center gap-0.5 h-full justify-end w-1/6 group/bar">
                      <div className="opacity-0 group-hover/bar:opacity-100 transition-opacity text-[8px] text-white font-bold mb-0">
                        {item.val}%
                      </div>
                      <div 
                        className={`w-full rounded-t-[1px] transition-all duration-1000 ${item.color}`}
                        style={{ height: `${item.val}%` }}
                      />
                      <span className="text-[7px] text-slate-500 truncate w-full text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between text-[8px] text-slate-500 border-t border-slate-800 pt-1.5">
                  <span>1 May</span>
                  <span>4 May</span>
                  <span>8 May</span>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

        </div>
      </div>

      <style jsx global>{`
        @keyframes grow-bar {
          from { width: 0; }
        }
        .animate-grow-bar {
          animation: grow-bar 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('')
  
  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index))
      index++
      if (index === text.length) clearInterval(intervalId)
    }, 30) // Typing speed
    return () => clearInterval(intervalId)
  }, [text])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function User({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}