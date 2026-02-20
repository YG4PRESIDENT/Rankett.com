'use client'

import { useState } from 'react'
import { Play, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

// =====================================================
// REPLACE THIS with your actual Loom/YouTube embed URL
// =====================================================
const DEMO_VIDEO_URL = '' // e.g. 'https://www.loom.com/embed/abc123' or 'https://www.youtube.com/embed/abc123'

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const hasVideo = DEMO_VIDEO_URL.length > 0

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See Rankett in Action
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Watch how agencies use Rankett to offer AI visibility optimization as a white-labeled service
            </p>
          </div>

          {/* Video Player */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden mb-12"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(51, 65, 85, 0.5)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {!isPlaying || !hasVideo ? (
              <div
                className={`absolute inset-0 flex items-center justify-center ${hasVideo ? 'cursor-pointer group' : ''}`}
                onClick={() => hasVideo && setIsPlaying(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${hasVideo ? 'group-hover:scale-110' : ''} transition-all duration-300`}
                    style={{
                      background: hasVideo
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(99, 102, 241, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(51, 65, 85, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
                      boxShadow: hasVideo ? '0 10px 40px rgba(59, 130, 246, 0.4)' : 'none',
                    }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                  {!hasVideo && (
                    <p className="text-slate-400 text-sm font-medium">Demo video coming soon</p>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
              </div>
            ) : (
              <iframe
                src={DEMO_VIDEO_URL}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; picture-in-picture"
              />
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
              Ready to add AI visibility to your service stack?
            </h3>
            <Link
              href="https://app.rankett.com/sign-up"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl shadow-blue-900/20"
            >
              Get Access Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
