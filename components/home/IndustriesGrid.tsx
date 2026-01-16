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
  { name: 'Professional Services', icon: Building2, examples: 'Accountants, Consultants' },
  { name: 'Healthcare', icon: Stethoscope, examples: 'Dentists, Doctors, Clinics' },
  { name: 'Legal', icon: Scale, examples: 'Law Firms, Attorneys' },
  { name: 'Real Estate', icon: Home, examples: 'Agents, Brokerages' },
  { name: 'Automotive', icon: Car, examples: 'Dealerships, Repair Shops' },
  { name: 'Restaurants', icon: UtensilsCrossed, examples: 'Restaurants, Bars, Cafes' },
  { name: 'Fitness', icon: Dumbbell, examples: 'Gyms, Personal Trainers' },
  { name: 'Financial', icon: Briefcase, examples: 'Insurance, Wealth Management' },
  { name: 'Education', icon: GraduationCap, examples: 'Tutoring, Trade Schools' },
  { name: 'Home Services', icon: Wrench, examples: 'Plumbers, HVAC, Electricians' },
  { name: 'Beauty & Wellness', icon: Sparkles, examples: 'Salons, Spas, Med Spas' },
  { name: 'Retail', icon: ShoppingBag, examples: 'Boutiques, Specialty Stores' },
]

export default function IndustriesGrid() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Industries Your <span className="text-gradient">Clients Serve</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every local business needs AI visibility. Here are the verticals agencies target most.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <FadeInOnScroll key={industry.name} direction="up" delay={index * 0.05}>
                <div
                  className="p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 group cursor-default"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.5) 100%)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(51, 65, 85, 0.3)',
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{industry.name}</h3>
                  <p className="text-slate-500 text-xs">{industry.examples}</p>
                </div>
              </FadeInOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
