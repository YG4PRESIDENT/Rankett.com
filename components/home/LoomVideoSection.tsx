'use client'

import { useState } from 'react'
import { Play, ArrowRight } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'
import Link from 'next/link'

export default function LoomVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  // Placeholder Loom URL - replace with actual URL when available
  const loomEmbedUrl = 'https://www.loom.com/embed/placeholder-video-id'

  return (
    <section className="pb-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption above video - acts as visual proof */}
        <FadeInOnScroll direction="up">
          <p className="text-center text-slate-400 font-medium tracking-wide text-sm uppercase mb-8">
            See your new service line in action
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.1}>
          <div
            className="relative aspect-video rounded-2xl overflow-hidden mb-12"
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

                {/* Play button (No text, just icon) */}
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

        {/* The New CTA below the video */}
        <FadeInOnScroll direction="up" delay={0.2}>
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
              Turn those questions into contracts.
            </h3>
            <Link 
              href="https://tool.rankett.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl shadow-blue-900/20"
            >
              Get Access Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  )
}