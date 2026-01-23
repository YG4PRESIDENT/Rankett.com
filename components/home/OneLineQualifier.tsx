'use client'

import { useRef, useEffect } from 'react'
import { MessageSquare, Zap } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

gsap.registerPlugin(ScrollTrigger)

export default function OneLineQualifier() {
  const containerRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768

      if (isMobile) {
        // Mobile Animation: Vertical Fan Out
        gsap.to(card1Ref.current, {
          y: -140,
          rotation: -4,
          scale: 0.9,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1,
          }
        })
        gsap.to(card2Ref.current, {
          y: 140,
          rotation: 4,
          scale: 0.9,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1,
          }
        })
      } else {
        // Desktop Animation: Horizontal Spread
        // Card 1 (Left)
        gsap.fromTo(card1Ref.current, 
          { x: 0, rotation: -6, y: 0 },
          {
            x: -380, // Slide left
            rotation: -8, // Tilt slightly
            y: 20,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 80%",
              scrub: 1,
            }
          }
        )

        // Card 2 (Right)
        gsap.fromTo(card2Ref.current, 
          { x: 0, rotation: 6, y: 0 },
          {
            x: 380, // Slide right
            rotation: 8, // Tilt slightly
            y: 20,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 80%",
              scrub: 1,
            }
          }
        )

        // Card 3 (Center)
        gsap.fromTo(card3Ref.current,
          { rotation: 0, y: 0 },
          {
            rotation: 0,
            y: -20, // Moves up slightly to clear space
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 80%",
              scrub: 1,
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Animation Container */}
        <div ref={containerRef} className="relative h-[400px] flex items-center justify-center mb-12">
          
          {/* Card 1: Competitor FOMO (Left) */}
          <div 
            ref={card1Ref}
            className="absolute w-[300px] sm:w-[340px] bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200 z-10 origin-bottom-right"
          >
            <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-700">High Value Client</span>
                <span className="block text-[10px] text-slate-400">Just now</span>
              </div>
            </div>
            <p className="font-semibold text-sm leading-relaxed text-slate-800">
              "Why does <span className="text-blue-600">Competitor X</span> show up on Perplexity and we don't? We have way more reviews."
            </p>
          </div>

          {/* Card 2: Anecdotal Panic (Right) */}
          <div 
            ref={card2Ref}
            className="absolute w-[300px] sm:w-[340px] bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200 z-10 origin-bottom-left"
          >
            <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-700">High Value Client</span>
                <span className="block text-[10px] text-slate-400">10 mins ago</span>
              </div>
            </div>
            <p className="font-semibold text-sm leading-relaxed text-slate-800">
              "I just asked ChatGPT for recommendations and it <span className="italic">didn't even mention us</span>. Can we fix this?"
            </p>
          </div>

          {/* Card 3: The Boardroom Strategy (Center) */}
          <div 
            ref={card3Ref}
            className="absolute w-[320px] sm:w-[360px] bg-white text-slate-900 rounded-2xl p-7 shadow-2xl border border-blue-100 z-20"
            style={{ boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.25)' }}
          >
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-700">High Value Client</span>
                <span className="block text-[10px] text-slate-400">2 mins ago</span>
              </div>
            </div>
            <p className="font-semibold text-base leading-relaxed text-slate-900">
              "Our board is asking about our <span className="text-blue-600">'Answer Engine Strategy'</span>. We need to own the narrative on ChatGPT, not just rank. Can you lead this?"
            </p>
          </div>
        
        </div>

        {/* The Merged Solution Text */}
        <FadeInOnScroll direction="up" delay={0.2}>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              The answer is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">already built</span>.
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto">
              Rankett provides the white-label backend you need to say "Yes" today.
            </p>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  )
}