'use client'

import { useState } from 'react'
import {
  Stethoscope,
  Scale,
  Home,
  UtensilsCrossed,
  Wrench,
  Briefcase,
} from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const industries = [
  { id: 'healthcare', name: 'Healthcare', icon: Stethoscope },
  { id: 'legal', name: 'Legal', icon: Scale },
  { id: 'realestate', name: 'Real Estate', icon: Home },
  { id: 'restaurants', name: 'Restaurants', icon: UtensilsCrossed },
  { id: 'homeservices', name: 'Home Services', icon: Wrench },
  { id: 'professional', name: 'Professional', icon: Briefcase },
]

export default function CaseStudyTabs() {
  const [activeTab, setActiveTab] = useState('healthcare')

  return (
    <section className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => {
              const Icon = industry.icon
              const isActive = activeTab === industry.id
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {industry.name}
                </button>
              )
            })}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
