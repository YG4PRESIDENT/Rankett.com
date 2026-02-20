'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Search, Award, FileText, BarChart3, FileSignature, ClipboardList } from 'lucide-react'
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

// ─── Scroll-linked 3D Book Flap Visual ────────────────────────────
// Panels unfold like book pages as user scrolls through Phase 03
function BookFlapVisual({ progress }: { progress: MotionValue<number> }) {
  // Phase 03 is index 2 of 3 cards. It becomes visible ~0.5 scroll progress.
  // Unfold panels sequentially between 0.45 and 0.75
  const panel1Rotate = useTransform(progress, [0.42, 0.55], [-90, 0])
  const panel1Opacity = useTransform(progress, [0.42, 0.50], [0, 1])

  const panel2Rotate = useTransform(progress, [0.50, 0.63], [-90, 0])
  const panel2Opacity = useTransform(progress, [0.50, 0.56], [0, 1])

  const panel3Rotate = useTransform(progress, [0.58, 0.71], [-90, 0])
  const panel3Opacity = useTransform(progress, [0.58, 0.64], [0, 1])

  // Subtle glow that fades in after all panels open
  const glowOpacity = useTransform(progress, [0.70, 0.80], [0, 1])

  // Spine line draws in
  const spineHeight = useTransform(progress, [0.42, 0.60], ['0%', '100%'])

  const panels = [
    {
      icon: BarChart3,
      label: 'Pitch Deck',
      sublabel: 'Auto-branded slides',
      rotate: panel1Rotate,
      opacity: panel1Opacity,
    },
    {
      icon: FileSignature,
      label: 'Service Agreement',
      sublabel: 'Legal MSA templates',
      rotate: panel2Rotate,
      opacity: panel2Opacity,
    },
    {
      icon: ClipboardList,
      label: 'Client Onboarding',
      sublabel: '5-min intake survey',
      rotate: panel3Rotate,
      opacity: panel3Opacity,
    },
  ]

  return (
    <div className="relative h-full w-full flex items-center justify-center p-4">
      <div className="relative">
        {/* 3D Perspective Container */}
        <div style={{ perspective: '1200px' }}>
          <div className="flex items-stretch" style={{ transformStyle: 'preserve-3d' }}>

            {/* Spine / Book Edge */}
            <div className="relative w-[3px] flex items-center justify-center mr-1 self-stretch">
              <motion.div
                className="w-full bg-gradient-to-b from-emerald-500/60 via-emerald-400/80 to-emerald-500/60 rounded-full"
                style={{ height: spineHeight }}
              />
            </div>

            {/* Panels */}
            {panels.map((panel, i) => (
              <motion.div
                key={panel.label}
                style={{
                  rotateY: panel.rotate,
                  opacity: panel.opacity,
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                }}
                className="relative"
              >
                {/* The panel itself */}
                <div className={`
                  w-[100px] sm:w-[120px] h-[220px] sm:h-[280px]
                  bg-gradient-to-b from-slate-800/80 to-slate-850/90
                  backdrop-blur-sm
                  border border-slate-700/30
                  ${i === 2 ? 'rounded-r-xl' : ''}
                  flex flex-col items-center justify-center
                  relative overflow-hidden
                `}>
                  {/* Fold crease shadow on left edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />

                  {/* Subtle inner glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] to-transparent pointer-events-none"
                    style={{ opacity: glowOpacity }}
                  />

                  {/* Top decorative line */}
                  <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <panel.icon className="w-6 h-6 text-emerald-400" />
                  </div>

                  {/* Label */}
                  <div className="text-center px-3">
                    <div className="text-[11px] sm:text-xs font-semibold text-white leading-tight tracking-wide">{panel.label}</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 mt-1.5 leading-tight">{panel.sublabel}</div>
                  </div>

                  {/* Decorative bottom element */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-[1px] bg-emerald-500/20" />
                  </div>

                  {/* Bottom decorative line */}
                  <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />
                </div>

                {/* Inter-panel depth shadow */}
                {i < 2 && (
                  <div
                    className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/15 to-transparent pointer-events-none"
                    style={{ transform: 'translateX(100%)' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Geometric accent lines beneath — angular, Perplexity-style */}
        <motion.div
          className="absolute -bottom-10 left-0 right-0 flex justify-center"
          style={{ opacity: glowOpacity }}
        >
          <svg width="280" height="24" viewBox="0 0 280 24" fill="none" className="overflow-visible">
            {/* Center chevron */}
            <path d="M90 2 L140 20 L190 2" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" fill="none" />
            {/* Outer chevron */}
            <path d="M60 2 L140 22 L220 2" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="0.5" fill="none" />
          </svg>
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
  visualComponent?: 'bookflap'
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
          {/* Tab Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1.5 bg-violet-500/15 border border-violet-500/30 rounded-lg text-[10px] font-semibold text-violet-300">
              Pooled Proof & Testimonials
            </div>
            <div className="ml-auto w-5 h-5 rounded bg-violet-500/20 border border-violet-500/30" />
          </div>

          {/* Case Study Cards Grid */}
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
    visualComponent: 'bookflap',
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

  // Scale Calculation: Starts at 1, goes down to targetScale as next card overlaps it
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
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20`} />

        <div className="relative z-10 grid md:grid-cols-2 h-full">

            {/* Visual Side */}
            <div className="bg-slate-950/30 border-r border-slate-800/50 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs font-mono text-slate-500">PHASE 0{phase.id}</div>
                {phase.visualComponent === 'bookflap' ? (
                  <BookFlapVisual progress={progress} />
                ) : (
                  phase.visual
                )}
            </div>

            {/* Text Side */}
            <div className="p-6 md:p-10 flex flex-col justify-center bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
                <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center border ${colors.iconBorder} mb-4`}>
                    <Icon className={`w-5 h-5 ${colors.iconText}`} />
                </div>

                <h3 className={`${colors.subtitleText} font-bold text-xs uppercase tracking-wider mb-1.5`}>{phase.subtitle}</h3>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{phase.title}</h2>

                {/* Body Paragraphs */}
                <div className="space-y-2.5 mb-4">
                    {phase.body.map((paragraph, i) => (
                        <p key={i} className="text-slate-400 text-sm leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Bullet Points */}
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
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {phases.map((phase, i) => {
            // Logic: Each card scales down slightly as the next one arrives
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
