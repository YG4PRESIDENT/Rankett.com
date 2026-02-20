'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Search, Award, FileText } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'

const LLM_LOGOS = [
  { name: 'ChatGPT', platform: 'chatgpt' },
  { name: 'Anthropic', platform: 'claude' },
  { name: 'Gemini', platform: 'gemini' },
  { name: 'Google Overviews', platform: 'google' },
  { name: 'Perplexity', platform: 'perplexity' },
  { name: 'Grok', platform: 'grok' },
  { name: 'DeepSeek', platform: 'deepseek' },
]

// ─── Document Fan Visual ──────────────────────────────────────────
// Three document mockups fan out from a stack as the user scrolls.
// Scroll down = spread. Scroll up = stack back together. Buttery smooth.
function DocumentFanVisual({ progress }: { progress: MotionValue<number> }) {
  // Phase 03 appears at ~0.66 scroll progress. Animate from 0.62 to 0.82.
  // Card 1 (back): fans left
  const card1Rotate = useTransform(progress, [0.62, 0.82], [2, -12])
  const card1X = useTransform(progress, [0.62, 0.82], [8, -80])
  const card1Y = useTransform(progress, [0.62, 0.82], [4, -20])

  // Card 2 (middle): lifts up
  const card2Y = useTransform(progress, [0.62, 0.82], [0, -30])

  // Card 3 (front): fans right
  const card3Rotate = useTransform(progress, [0.62, 0.82], [-2, 12])
  const card3X = useTransform(progress, [0.62, 0.82], [-8, 80])
  const card3Y = useTransform(progress, [0.62, 0.82], [4, -20])

  return (
    <div className="relative h-full w-full flex items-center justify-center p-4">
      <div className="relative w-[220px] h-[280px]">

        {/* Card 1 — Pitch Deck (back layer) */}
        <motion.div
          className="absolute inset-0"
          style={{ x: card1X, y: card1Y, rotate: card1Rotate, zIndex: 1 }}
        >
          <div className="w-[200px] h-[260px] bg-slate-800/90 border border-slate-700/50 rounded-lg shadow-lg overflow-hidden">
            <div className="px-3 py-2 border-b border-slate-700/40 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
              <div className="w-2 h-2 rounded-full bg-slate-600/40" />
              <div className="w-2 h-2 rounded-full bg-slate-600/40" />
              <div className="ml-2 h-1.5 w-16 rounded bg-slate-600/40" />
            </div>
            <div className="p-3 space-y-2">
              <div className="h-1.5 w-20 rounded bg-slate-600/30" />
              <div className="h-1 w-28 rounded bg-slate-700/30" />
              <div className="h-24 rounded bg-slate-700/20 flex items-end px-2 pb-2 gap-1">
                {[35, 50, 40, 60, 72, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-emerald-500/25" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="h-1 w-14 rounded bg-slate-600/20" />
              <div className="h-1 w-20 rounded bg-slate-600/15" />
            </div>
          </div>
        </motion.div>

        {/* Card 2 — MSA (middle layer) */}
        <motion.div
          className="absolute inset-0"
          style={{ y: card2Y, zIndex: 2 }}
        >
          <div className="w-[200px] h-[260px] bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden mx-auto" style={{ marginLeft: '10px' }}>
            <div className="px-3 py-2 border-b border-slate-700/40 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
              <div className="ml-2 text-[8px] text-slate-400 font-medium tracking-wide">Master Service Agreement</div>
            </div>
            <div className="p-3 space-y-1.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-[3px] rounded bg-slate-600/25" style={{ width: `${90 - i * 6}%` }} />
              ))}
              <div className="mt-4 pt-3 border-t border-slate-700/30 space-y-1">
                <div className="h-[3px] w-16 rounded bg-slate-600/30" />
                <div className="h-[3px] w-20 rounded bg-slate-600/25" />
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-slate-700/20">
                <div className="h-[1px] w-24 bg-slate-600/40" />
                <div className="text-[7px] text-slate-600 mt-1">Signature</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3 — Onboarding Form (front layer) */}
        <motion.div
          className="absolute inset-0"
          style={{ x: card3X, y: card3Y, rotate: card3Rotate, zIndex: 3 }}
        >
          <div className="w-[200px] h-[260px] bg-slate-800 border border-slate-700/50 rounded-lg shadow-2xl overflow-hidden" style={{ marginLeft: '20px' }}>
            <div className="px-3 py-2 border-b border-slate-700/40 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
              <div className="ml-2 text-[8px] text-slate-400 font-mono">ai.youragency.com/onboard</div>
            </div>
            <div className="p-3 space-y-2.5">
              {['Business Name', 'Website URL', 'Primary Service'].map((label) => (
                <div key={label}>
                  <div className="text-[7px] text-slate-500 mb-1 uppercase tracking-wider">{label}</div>
                  <div className="h-5 rounded bg-slate-700/30 border border-slate-600/20" />
                </div>
              ))}
              <div className="mt-1 h-6 rounded-md bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <span className="text-[8px] text-emerald-400 font-medium">Start Onboarding →</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

// ─── Phase Data ───────────────────────────────────────────────────
interface PhaseData {
  id: number
  title: string
  subtitle: string
  body: string[]
  bullets: string[]
  icon: React.ComponentType<{ className?: string }>
  accent: 'blue' | 'violet' | 'emerald'
  visual?: React.ReactNode
  visualComponent?: 'documentfan'
}

const phases: PhaseData[] = [
  {
    id: 1,
    title: "Your AI Visibility Audit Tool",
    subtitle: "Your logo, your domain, our engine.",
    body: [
      "Show any client exactly how visible they are across ChatGPT, Gemini, Claude, and Perplexity under your brand.",
      "Upload your logo once and get a fully branded audit tool on your own subdomain. Use it as a lead magnet, discovery tool, or upsell on every client call."
    ],
    bullets: [
      "AI Visibility Score and Share of Voice across up to all types of prompts.",
      "Gap analysis that highlights missing schema, FAQs, and authority mentions.",
      "Exportable PDF audits you can drop straight into sales decks and proposals.",
      "Automatic email capture to track leads."
    ],
    icon: Search,
    accent: 'blue',
    visual: (
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <p className="text-sm text-slate-500 uppercase tracking-wider mb-6">Tracking visibility across</p>
        <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
          <div className="flex will-change-transform animate-marquee-fast" style={{ animationPlayState: 'running' }}>
            {LLM_LOGOS.concat(LLM_LOGOS).map((llm, index) => (
              <div key={index} className="flex items-center gap-3 mx-8 shrink-0">
                <div className="relative flex items-center justify-center w-9 h-9">
                  <BrandLogo platform={llm.platform} size={36} />
                </div>
                <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{llm.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Your Case Studies, Powered by Everyone's Wins",
    subtitle: "Our shared proof pool makes you look battle-tested from day one.",
    body: [
      "You don't start from zero. Rankett's proof vault turns pooled, de-identified results from all partner campaigns into ready-to-use sales material.",
      "As your clients win, the vault gets stronger. Your testimonials grow automatically alongside everyone else's, and we use that data to continuously tighten the playbook and improve fulfillment for every new client. Win-win."
    ],
    bullets: [
      'Anonymized "0 → 15% AI Share of Voice in 90 days" case studies by vertical.',
      'Benchmark slides: "Across 5 brands like yours, +14.6% AI SOV and 22% lift in branded search."',
      "Plug-and-play PDF one-pagers and deck slides you can drop into your own pitch.",
      "Every new success from the network becomes another proof asset you can use."
    ],
    icon: Award,
    accent: 'violet',
    visual: (
      <div className="relative h-full w-full flex items-center justify-center p-4">
        <div className="w-full max-w-[280px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1.5 bg-violet-500/15 border border-violet-500/30 rounded-lg text-[10px] font-semibold text-violet-300">
              Pooled Proof & Testimonials
            </div>
            <div className="ml-auto w-5 h-5 rounded bg-violet-500/20 border border-violet-500/30" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { vertical: 'Dental', from: '0%', to: '15%', days: '90' },
              { vertical: 'HVAC', from: '2%', to: '18%', days: '75' },
              { vertical: 'Legal', from: '1%', to: '12%', days: '60' },
              { vertical: 'Medspa', from: '0%', to: '22%', days: '90' },
              { vertical: 'Roofing', from: '3%', to: '19%', days: '85' },
              { vertical: 'Finance', from: '1%', to: '14%', days: '70' },
            ].map((study) => (
              <motion.div
                key={study.vertical}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="bg-slate-800/50 border border-slate-700/40 rounded-lg p-2.5"
              >
                <div className="text-[9px] text-violet-400 font-semibold uppercase tracking-wider mb-1">{study.vertical}</div>
                <div className="text-[11px] text-white font-bold">{study.from} → {study.to} SOV</div>
                <div className="text-[8px] text-slate-500 mt-0.5">{study.days} days</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Your Deck, Your Contracts, Your Onboarding",
    subtitle: "Upload your logo once and get a complete AI visibility offer, ready to sell.",
    body: [
      "Rankett autogenerates a fully branded pitchdeck, legal MSA, and 5-minute onboarding quiz so you can close and onboard AI visibility retainers without writing a single slide or contract.",
      "You stay the face of the offer, we stay invisible in the background."
    ],
    bullets: [
      "Pitchdeck pre-built around your tier pricing; update numbers once and every slide updates.",
      "Branded MSA and client legal addendum that shifts fulfillment liability correctly while keeping you in control.",
      "5-minute client onboarding survey on your domain that collects everything we need to start fulfillment.",
      "Monthly white-label reports with your logo and colors, ready to send to clients."
    ],
    icon: FileText,
    accent: 'emerald',
    visualComponent: 'documentfan',
  }
]

// Accent color mappings
const accentColors = {
  blue: {
    gradient: 'from-blue-500/20 to-blue-600/5',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    iconText: 'text-blue-400',
    subtitleText: 'text-blue-400',
    bulletDot: 'bg-blue-400',
  },
  violet: {
    gradient: 'from-violet-500/20 to-violet-600/5',
    iconBg: 'bg-violet-500/10',
    iconBorder: 'border-violet-500/20',
    iconText: 'text-violet-400',
    subtitleText: 'text-violet-400',
    bulletDot: 'bg-violet-400',
  },
  emerald: {
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    iconBg: 'bg-emerald-500/10',
    iconBorder: 'border-emerald-500/20',
    iconText: 'text-emerald-400',
    subtitleText: 'text-emerald-400',
    bulletDot: 'bg-emerald-400',
  },
}

function Card({
  phase,
  index,
  progress,
  range,
  targetScale
}: {
  phase: PhaseData,
  index: number,
  progress: MotionValue<number>,
  range: number[],
  targetScale: number
}) {
  const containerRef = useRef(null)
  const scale = useTransform(progress, range, [1, targetScale])

  const Icon = phase.icon
  const colors = accentColors[phase.accent]

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`
        }}
        className="relative w-full max-w-5xl h-[80vh] flex flex-col origin-top bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20`} />

        <div className="relative z-10 grid md:grid-cols-2 h-full">
            <div className="bg-slate-950/30 border-r border-slate-800/50 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs font-mono text-slate-500">PHASE 0{phase.id}</div>
                {phase.visualComponent === 'documentfan' ? (
                  <DocumentFanVisual progress={progress} />
                ) : (
                  phase.visual
                )}
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
                <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center border ${colors.iconBorder} mb-4`}>
                    <Icon className={`w-5 h-5 ${colors.iconText}`} />
                </div>

                <h3 className={`${colors.subtitleText} font-bold text-xs uppercase tracking-wider mb-1.5`}>{phase.subtitle}</h3>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{phase.title}</h2>

                <div className="space-y-2.5 mb-4">
                    {phase.body.map((paragraph, i) => (
                        <p key={i} className="text-slate-400 text-sm leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <ul className="space-y-2">
                    {phase.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.bulletDot} mt-1.5 flex-shrink-0`} />
                            <span className="text-slate-400 text-sm leading-relaxed">{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function GhostModelStack() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={containerRef} className="bg-slate-950 relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {phases.map((phase, i) => {
            const targetScale = 1 - ((phases.length - 1 - i) * 0.05)
            return (
                <Card
                  key={phase.id}
                  index={i}
                  phase={phase}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
            )
        })}
      </div>
    </section>
  )
}
