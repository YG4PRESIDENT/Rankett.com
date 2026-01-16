'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

export default function LoomVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  // Placeholder Loom URL - replace with actual URL when available
  const loomEmbedUrl = 'https://www.loom.com/embed/placeholder-video-id'

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See How It Works
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Watch how agencies are adding a new revenue stream with AI visibility services
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.15}>
          <div
            className="relative aspect-video rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(51, 65, 85, 0.5)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {!isPlaying ? (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Placeholder thumbnail background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />

                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(99, 102, 241, 0.9) 100%)',
                      boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
                    }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">
                    Watch Demo
                  </span>
                </div>

                {/* Glassmorphic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
              </div>
            ) : (
              <iframe
                src={loomEmbedUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; picture-in-picture"
              />
            )}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
