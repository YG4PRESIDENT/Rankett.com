'use client'

import {
  Building2,
  Stethoscope,
  Scale,
  Home,
  Car,
  UtensilsCrossed,
  Dumbbell,
  Briefcase,
  GraduationCap,
  Wrench,
  Sparkles,
  ShoppingBag,
} from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const industries = [
  { name: 'Professional Services', icon: Building2 },
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Legal', icon: Scale },
  { name: 'Real Estate', icon: Home },
  { name: 'Automotive', icon: Car },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Fitness', icon: Dumbbell },
  { name: 'Financial', icon: Briefcase },
  { name: 'Education', icon: GraduationCap },
  { name: 'Home Services', icon: Wrench },
  { name: 'Beauty & Wellness', icon: Sparkles },
  { name: 'Retail', icon: ShoppingBag },
]

export default function IndustriesGrid() {
  // Duplicate for seamless loop
  const duplicatedIndustries = [...industries, ...industries]

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <p className="text-center text-sm text-slate-500 uppercase tracking-wider mb-8">
            Trusted across industries
          </p>
        </FadeInOnScroll>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling strip */}
          <div className="flex animate-marquee">
            {duplicatedIndustries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div
                  key={`${industry.name}-${index}`}
                  className="flex items-center gap-2 px-6 py-2 flex-shrink-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium whitespace-nowrap">
                    {industry.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
