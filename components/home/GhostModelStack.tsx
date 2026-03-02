'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Search, Award, FileText } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Audit Tool Mockup Visual ─────────────────────────────────────
// Miniature recreation of the real audit tool UI (ScoreGauge + PlatformBreakdown)
function AuditToolMockup() {
  // SVG arc gauge math: 240° arc, radius 30, center at (48, 48)
  const r = 30
  const circumference = 2 * Math.PI * r
  const arcLength = (240 / 360) * circumference // ~125.66
  const fillPercent = 34 / 100
  const dashOffset = arcLength * (1 - fillPercent)

  return (
    <div className="relative h-full w-full flex items-center justify-center p-4">
      <div className="w-full max-w-[300px]">
        {/* Browser chrome */}
        <div className="bg-slate-800/90 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
          {/* Address bar */}
          <div className="px-3 py-2 border-b border-slate-700/40 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 bg-slate-900/60 rounded px-2 py-0.5">
              <span className="text-[8px] text-slate-500 font-mono">visibility.youragency.com</span>
            </div>
          </div>

          {/* Gauge section */}
          <div className="p-4 flex flex-col items-center">
            <svg width="96" height="72" viewBox="0 0 96 80" className="mb-1">
              {/* Background arc */}
              <circle
                cx="48" cy="48" r={r}
                fill="none"
                stroke="rgba(148,163,184,0.15)"
                strokeWidth="6"
                strokeDasharray={`${arcLength} ${circumference}`}
                strokeDashoffset="0"
                strokeLinecap="round"
                transform="rotate(150, 48, 48)"
              />
              {/* Filled arc — amber for score 34 */}
              <circle
                cx="48" cy="48" r={r}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="6"
                strokeDasharray={`${arcLength} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                transform="rotate(150, 48, 48)"
              />
              {/* Score text */}
              <text x="48" y="48" textAnchor="middle" dominantBaseline="central" className="fill-white text-[20px] font-bold">34</text>
              <text x="48" y="63" textAnchor="middle" className="fill-slate-500 text-[6px]">AI Visibility Score</text>
            </svg>

            {/* Status badge */}
            <div className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 mb-3">
              <span className="text-[8px] text-amber-400 font-semibold tracking-wide">DEVELOPING</span>
            </div>

            {/* Platform breakdown bars */}
            <div className="w-full space-y-1.5">
              {[
                { name: 'ChatGPT', pct: 42, color: 'bg-emerald-500' },
                { name: 'Claude', pct: 28, color: 'bg-amber-500' },
                { name: 'Gemini', pct: 51, color: 'bg-blue-500' },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <span className="text-[8px] text-slate-400 w-12 text-right">{p.name}</span>
                  <div className="flex-1 h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${p.color}/60`} style={{ width: `${p.pct}%` }} />
                  </div>
                  <span className="text-[8px] text-slate-500 w-7">{p.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Document Fan Visual ──────────────────────────────────────────
// Four labeled document mockups fan out from a stack as the user scrolls.
function DocumentFanVisual({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)
  const card4Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !card1Ref.current || !card2Ref.current || !card3Ref.current || !card4Ref.current) return

    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], { x: 0, y: 0, rotation: 0, scale: 0.95 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    tl.addLabel('end', 1)

    // 4 cards fan out: -20°, -7°, +7°, +20°
    tl.to(card1Ref.current, { x: -180, y: -25, rotation: -20, scale: 1, duration: 0.22, ease: 'none' }, 0.58)
    tl.to(card2Ref.current, { x: -60, y: -40, rotation: -7, scale: 1, duration: 0.22, ease: 'none' }, 0.58)
    tl.to(card3Ref.current, { x: 60, y: -40, rotation: 7, scale: 1, duration: 0.22, ease: 'none' }, 0.58)
    tl.to(card4Ref.current, { x: 180, y: -25, rotation: 20, scale: 1, duration: 0.22, ease: 'none' }, 0.58)

    return () => {
      tl.kill()
    }
  }, [containerRef])

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative w-[280px] h-[360px]">

        {/* Card 1 — Pitchdeck (back layer) */}
        <div
          ref={card1Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{ zIndex: 1 }}
        >
          <div className="w-[220px] h-[300px] bg-slate-800/90 border border-slate-700/50 rounded-xl shadow-lg overflow-hidden">
            <div className="px-3 py-2 border-b border-slate-700/40 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[6px] text-emerald-400 font-bold">LOGO</span>
              </div>
              <div className="text-[8px] text-slate-400 font-medium">Pitchdeck</div>
            </div>
            <div className="p-3 space-y-2">
              <div className="h-1.5 w-24 rounded bg-slate-600/30" />
              <div className="h-28 rounded-lg bg-slate-700/20 flex items-end px-2 pb-2 gap-1">
                {[30, 48, 38, 58, 70, 82, 65].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-emerald-500/30" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex gap-1.5">
                {['Tier 1', 'Tier 2', 'Tier 3'].map((t) => (
                  <div key={t} className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-[6px] text-emerald-400">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Master Service Agreement */}
        <div
          ref={card2Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{ zIndex: 2 }}
        >
          <div className="w-[220px] h-[300px] bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-xl overflow-hidden">
            <div className="px-3 py-2 border-b border-slate-700/40 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[6px] text-emerald-400 font-bold">LOGO</span>
              </div>
              <div className="text-[8px] text-slate-400 font-medium">Master Service Agreement</div>
            </div>
            <div className="p-3 space-y-1.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-[2.5px] rounded bg-slate-600/25" style={{ width: `${90 - i * 5}%` }} />
              ))}
              <div className="mt-3 pt-2 border-t border-dashed border-slate-700/25">
                <div className="h-[1px] w-24 bg-slate-600/40" />
                <div className="text-[7px] text-slate-600 mt-1">Signature</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — 5 Min Onboarding */}
        <div
          ref={card3Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{ zIndex: 3 }}
        >
          <div className="w-[220px] h-[300px] bg-slate-800 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
            <div className="px-3 py-2 border-b border-slate-700/40 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[6px] text-emerald-400 font-bold">LOGO</span>
              </div>
              <div className="text-[8px] text-slate-400 font-mono">ai.youragency.com/onboard</div>
            </div>
            <div className="p-3 space-y-2">
              <div className="text-[9px] text-slate-300 font-semibold">5 Minute Onboarding</div>
              {['Business Name', 'Website URL', 'Primary Service'].map((label) => (
                <div key={label}>
                  <div className="text-[6px] text-slate-500 mb-0.5 uppercase tracking-wider font-medium">{label}</div>
                  <div className="h-5 rounded-md bg-slate-700/30 border border-slate-600/20" />
                </div>
              ))}
              <div className="h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <span className="text-[8px] text-emerald-400 font-semibold">Start Onboarding →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 — Monthly Progress Report (front layer) */}
        <div
          ref={card4Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{ zIndex: 4 }}
        >
          <div className="w-[220px] h-[300px] bg-slate-800 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
            <div className="px-3 py-2 border-b border-slate-700/40 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[6px] text-emerald-400 font-bold">LOGO</span>
              </div>
              <div className="text-[8px] text-slate-400 font-medium">Monthly Progress Report</div>
            </div>
            <div className="p-3 space-y-2.5">
              {/* Score improvement block */}
              <div className="bg-slate-700/20 rounded-lg p-2.5 text-center">
                <div className="text-[7px] text-slate-500 uppercase tracking-wider mb-1">Visibility Score</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[14px] text-slate-400 font-bold">28</span>
                  <span className="text-[10px] text-emerald-400">→</span>
                  <span className="text-[14px] text-emerald-400 font-bold">51</span>
                </div>
                <div className="mt-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 inline-block">
                  <span className="text-[7px] text-emerald-400 font-semibold">+23 pts</span>
                </div>
              </div>
              {/* Completed work checklist */}
              <div className="space-y-1.5">
                <div className="text-[7px] text-slate-500 uppercase tracking-wider font-medium">Completed This Month</div>
                {['Schema markup deployed', 'GBP profile optimized', 'FAQ content published'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <span className="text-[6px] text-emerald-400">✓</span>
                    </div>
                    <span className="text-[7px] text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

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
    title: "Your Lead Magnet",
    subtitle: "Your logo, your domain, your solution.",
    body: [],
    bullets: [
      "AI Visibility Score and Mention Rate across all prompt types.",
      "Gap analysis that highlights missing schema, FAQs, and authority mentions.",
      "Exportable PDF audits for sales decks and proposals.",
      "Automatic email capture to track leads."
    ],
    icon: Search,
    accent: 'blue',
    visual: <AuditToolMockup />
  },
  {
    id: 2,
    title: "Don't Start From Zero",
    subtitle: "De-identified, success stories on day one.",
    body: [
      "Every agency on the network contributes anonymized results. When a dental client goes from 0% to 15% AI Mention Rate, that case study is stripped of identifiers and added to the shared vault \u2014 ready for you to use on your next sales call.",
      "The longer you stay, the deeper the library gets. Benchmarks sharpen, new verticals get covered, and your pitch gets stronger without you doing extra work."
    ],
    bullets: [
      'De-identified case studies by vertical \u2014 "0 \u2192 15% Mention Rate in 90 days."',
      "Network-wide benchmarks you can drop into any deck.",
      "Every partner win becomes proof you can sell with."
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
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { vertical: 'Dental', from: '0%', to: '15%', days: '90' },
              { vertical: 'HVAC', from: '2%', to: '18%', days: '75' },
              { vertical: 'Legal', from: '1%', to: '12%', days: '60' },
              { vertical: 'Medspa', from: '0%', to: '22%', days: '90' },
              { vertical: 'SaaS', from: '3%', to: '19%', days: '85' },
              { vertical: 'Online Store', from: '1%', to: '14%', days: '70' },
            ].map((study) => (
              <motion.div
                key={study.vertical}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="bg-slate-800/50 border border-slate-700/40 rounded-lg p-2.5"
              >
                <div className="text-[9px] text-violet-400 font-semibold uppercase tracking-wider mb-1">{study.vertical}</div>
                <div className="text-[11px] text-white font-bold">{study.from} → {study.to} Mention Rate</div>
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
    title: "Ready Day 1",
    subtitle: "Upload your logo. Change the colors, fonts and domain.",
    body: [
      "Your pitchdeck, MSA, monthly reports, and client onboarding are pre-built and auto-branded the moment you upload your logo and pick your colors. No design work, no copywriting \u2014 just plug in your details and start selling."
    ],
    bullets: [
      "Pitchdeck auto-generates from your tier pricing \u2014 update once, every slide follows.",
      "Branded MSA shifts fulfillment liability while keeping you in control.",
      "Monthly progress reports with your logo, colors, and client scores \u2014 ready to send.",
      "5\u2011minute onboarding survey on your domain collects everything needed to start work."
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
  targetScale,
  sectionRef
}: {
  phase: PhaseData,
  index: number,
  progress: MotionValue<number>,
  range: number[],
  targetScale: number,
  sectionRef: React.RefObject<HTMLElement | null>
}) {
  const containerRef = useRef(null)
  const scale = useTransform(progress, range, [1, targetScale])

  const Icon = phase.icon
  const colors = accentColors[phase.accent]

  return (
    <div ref={containerRef} className="mb-8 md:mb-0 md:h-screen flex items-center justify-center md:sticky md:top-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`
        }}
        className="relative w-full max-w-5xl md:h-[80vh] flex flex-col origin-top bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20`} />

        <div className="relative z-10 grid md:grid-cols-2 h-full">
            <div className="h-[250px] md:h-auto bg-slate-950/30 md:border-r border-b md:border-b-0 border-slate-800/50 p-8 flex items-center justify-center relative overflow-hidden">
                {phase.visualComponent === 'documentfan' ? (
                  <DocumentFanVisual containerRef={sectionRef} />
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
  const containerRef = useRef<HTMLElement>(null)
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
                  sectionRef={containerRef}
                />
            )
        })}
      </div>
    </section>
  )
}
