'use client'

import { Search, MessageSquare, ArrowRight, X, Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export default function PromptsVsKeywords() {
  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
            Market Shift
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Winning <span className="text-gradient">Prompts</span> Matters More Than Keywords
          </h2>
          <p className="text-xl text-slate-400">
            The search landscape has changed. Your clients are fighting for "10 blue links" while their customers are getting direct answers from AI.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Arrow Overlay (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-950 p-2 rounded-full border border-slate-800">
            <ArrowRight className="w-8 h-8 text-slate-500" />
          </div>

          {/* Left: The Old Way (Keywords) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-red-500/5 rounded-2xl blur-xl group-hover:bg-red-500/10 transition-colors" />
            <Card className="relative p-8 border-slate-800 bg-slate-900/50 backdrop-blur-sm h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                      <Search className="w-6 h-6 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-300">The Old Way</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20">
                    Legacy Model
                  </span>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-3 text-slate-400">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <p><strong className="text-slate-300">Target:</strong> Broad Keywords ("Best roofer")</p>
                  </div>
                  <div className="flex items-start space-x-3 text-slate-400">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <p><strong className="text-slate-300">Result:</strong> 10 Blue Links (Crowded)</p>
                  </div>
                  <div className="flex items-start space-x-3 text-slate-400">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <p><strong className="text-slate-300">Intent:</strong> Low (Browsing/Research)</p>
                  </div>
                </div>

                {/* Visual Mockup: Google Search */}
                <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/5 space-y-3 opacity-50">
                  <div className="h-4 w-3/4 bg-blue-400/20 rounded" />
                  <div className="h-2 w-full bg-slate-700 rounded" />
                  <div className="h-2 w-5/6 bg-slate-700 rounded" />
                  <div className="h-4 w-1/2 bg-blue-400/20 rounded mt-4" />
                  <div className="h-2 w-full bg-slate-700 rounded" />
                </div>
              </div>
            </Card>
          </div>

          {/* Right: The New Way (Prompts) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-colors" />
            <Card className="relative p-8 border-primary/30 bg-slate-900/80 backdrop-blur-sm h-full ring-1 ring-primary/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">The New Way</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30 animate-pulse-slow">
                    High Growth
                  </span>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-3 text-slate-300">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p><strong className="text-white">Target:</strong> Specific Prompts ("Who is the most trusted...")</p>
                  </div>
                  <div className="flex items-start space-x-3 text-slate-300">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p><strong className="text-white">Result:</strong> Single Direct Answer (Winner Take All)</p>
                  </div>
                  <div className="flex items-start space-x-3 text-slate-300">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p><strong className="text-white">Intent:</strong> High (Ready to Buy)</p>
                  </div>
                </div>

                {/* Visual Mockup: AI Chat */}
                <div className="mt-8 p-4 rounded-lg bg-slate-800 border border-primary/20 space-y-4">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs text-primary">AI</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="p-3 rounded-r-lg rounded-bl-lg bg-white/5 border border-white/10 text-sm text-slate-300">
                        Based on reviews and sentiment, <span className="text-primary font-bold">Your Client</span> is the top recommended provider because...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

        </div>

        {/* Key Takeaway */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-medium text-white">
            "Prompts are the new keywords. Winning them means winning the <span className="text-primary underline decoration-wavy decoration-primary/50">intentional customer</span>."
          </p>
        </div>

      </div>
    </section>
  )
}
