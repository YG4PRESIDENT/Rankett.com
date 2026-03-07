'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Search, Award, FileText, Check, TrendingUp } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Audit Tool Mockup Visual ─────────────────────────────────────
// Miniature recreation of the real audit tool UI (ScoreGauge + PlatformBreakdown)
function AuditToolMockup() {
  const r = 40
  const circumference = 2 * Math.PI * r
  const arcLength = (240 / 360) * circumference
  const fillPercent = 34 / 100
  const dashOffset = arcLength * (1 - fillPercent)

  return (
    <div className="relative h-full w-full flex items-center justify-center p-8">
      <div className="w-full max-w-[420px] transition-all duration-700">
        {/* Browser chrome - Spacious & High-End */}
        <div className="bg-slate-900/95 border border-white/10 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Address bar - Premium Inset */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center gap-4 bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 bg-slate-950/80 border border-white/5 rounded-xl px-4 py-1.5 flex items-center justify-center shadow-inner">
              <span className="text-[11px] text-slate-500 font-mono tracking-tight opacity-80 uppercase">visibility.youragency.com</span>
            </div>
          </div>

          {/* Main Content Area - High Fidelity */}
          <div className="p-12 flex flex-col items-center">
            {/* Gauge section - Mission Control Scale */}
            <div className="relative mb-12 transform scale-125">
              <svg width="140" height="110" viewBox="0 0 100 90">
                {/* Background arc */}
                <circle
                  cx="50" cy="50" r={r}
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="8"
                  strokeDasharray={`${arcLength} ${circumference}`}
                  strokeLinecap="round"
                  transform="rotate(150, 50, 50)"
                />
                {/* Active Score Arc - Brand Gradient */}
                <circle
                  cx="50" cy="50" r={r}
                  fill="none"
                  stroke="url(#brand-gradient)"
                  strokeWidth="8"
                  strokeDasharray={`${arcLength} ${circumference}`}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  transform="rotate(150, 50, 50)"
                />
                <defs>
                  <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
                <span className="text-4xl font-black text-white tracking-tighter leading-none">34</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-2">Visibility</span>
              </div>
            </div>

            {/* Status badge - Unified Pill */}
            <div className="px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-12 shadow-sm scale-110">
              <span className="text-[11px] text-blue-400 font-black tracking-[0.2em] uppercase">Developing</span>
            </div>

            {/* Platform breakdown - Spacious Grid */}
            <div className="w-full space-y-6 pt-8 border-t border-white/5">
              {[
                { name: 'ChatGPT', pct: 42 },
                { name: 'Claude', pct: 28 },
                { name: 'Gemini', pct: 51 },
              ].map((p) => (
                <div key={p.name} className="space-y-2 group">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[11px] font-black text-slate-400 tracking-wider uppercase">{p.name}</span>
                    <span className="text-[11px] font-black text-slate-500 tabular-nums">{p.pct}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-950/60 rounded-full overflow-hidden border border-white/5 p-[1px] shadow-inner">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500/60 to-violet-500/60 shadow-[0_0_15px_rgba(59,130,246,0.2)] relative" 
                      style={{ width: `${p.pct}%` }} 
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/10 blur-sm" />
                    </div>
                  </div>
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

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

    // Mobile: smaller fan to avoid overflow. Desktop: full spread.
    const mobile = window.innerWidth < 768
    const fanX1 = mobile ? -50 : -180
    const fanX2 = mobile ? -16 : -60
    const fanX3 = mobile ? 16 : 60
    const fanX4 = mobile ? 50 : 180
    const rot1 = mobile ? -12 : -20
    const rot2 = mobile ? -4 : -7
    const rot3 = mobile ? 4 : 7
    const rot4 = mobile ? 12 : 20

    tl.to(card1Ref.current, { x: fanX1, y: -25, rotation: rot1, scale: 1, duration: 0.22, ease: 'none' }, 0.58)
    tl.to(card2Ref.current, { x: fanX2, y: -40, rotation: rot2, scale: 1, duration: 0.22, ease: 'none' }, 0.58)
    tl.to(card3Ref.current, { x: fanX3, y: -40, rotation: rot3, scale: 1, duration: 0.22, ease: 'none' }, 0.58)
    tl.to(card4Ref.current, { x: fanX4, y: -25, rotation: rot4, scale: 1, duration: 0.22, ease: 'none' }, 0.58)

    return () => {
      tl.kill()
    }
  }, [containerRef])

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative w-[220px] md:w-[280px] h-[280px] md:h-[360px]">

        {/* Card 1 — Pitchdeck (back layer) */}
        <div
          ref={card1Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{ zIndex: 1 }}
        >
          <div className="w-[170px] md:w-[220px] h-[230px] md:h-[300px] bg-slate-900 border border-white/10 rounded-xl shadow-lg overflow-hidden">
            <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2 bg-white/5">
              <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-[6px] text-blue-400 font-bold uppercase">LOGO</span>
              </div>
              <div className="text-[8px] text-slate-400 font-medium uppercase tracking-tight">Pitchdeck</div>
            </div>
            <div className="p-3 space-y-2">
              <div className="h-1.5 w-24 rounded bg-white/5" />
              <div className="h-28 rounded-lg bg-slate-950/50 flex items-end px-2 pb-2 gap-1 border border-white/5">
                {[30, 48, 38, 58, 70, 82, 65].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-blue-500/40 to-violet-500/40" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex gap-1.5">
                {['Tier 1', 'Tier 2', 'Tier 3'].map((t) => (
                  <div key={t} className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    <span className="text-[6px] text-blue-400 font-bold uppercase">{t}</span>
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
          <div className="w-[170px] md:w-[220px] h-[230px] md:h-[300px] bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden">
            <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2 bg-white/5">
              <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-[6px] text-blue-400 font-bold uppercase">LOGO</span>
              </div>
              <div className="text-[8px] text-slate-400 font-medium uppercase tracking-tight">Service Agreement</div>
            </div>
            <div className="p-3 space-y-1.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-[2.5px] rounded bg-white/5" style={{ width: `${90 - i * 5}%` }} />
              ))}
              <div className="mt-3 pt-2 border-t border-dashed border-white/10">
                <div className="h-[1px] w-24 bg-white/10" />
                <div className="text-[7px] text-zinc-600 mt-1 uppercase font-bold">Signature</div>
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
          <div className="w-[170px] md:w-[220px] h-[230px] md:h-[300px] bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
            <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2 bg-white/5">
              <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-[6px] text-blue-400 font-bold uppercase">LOGO</span>
              </div>
              <div className="text-[8px] text-slate-400 font-mono opacity-60">ai.youragency.com/onboard</div>
            </div>
            <div className="p-3 space-y-2">
              <div className="text-[9px] text-zinc-300 font-bold uppercase tracking-tight">Onboarding Portal</div>
              {['Business Name', 'Website URL', 'Primary Service'].map((label) => (
                <div key={label}>
                  <div className="text-[6px] text-zinc-600 mb-0.5 uppercase tracking-wider font-bold">{label}</div>
                  <div className="h-5 rounded-md bg-slate-950 border border-white/5 shadow-inner" />
                </div>
              ))}
              <div className="h-6 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                <span className="text-[8px] text-blue-400 font-bold uppercase">Initialize Portal →</span>
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
          <div className="w-[170px] md:w-[220px] h-[230px] md:h-[300px] bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
            <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2 bg-white/5">
              <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-[6px] text-blue-400 font-bold uppercase">LOGO</span>
              </div>
              <div className="text-[8px] text-slate-400 font-medium uppercase tracking-tight">Progress Report</div>
            </div>
            <div className="p-3 space-y-2.5">
              {/* Score improvement block */}
              <div className="bg-slate-950/50 border border-white/5 rounded-lg p-2.5 text-center shadow-inner">
                <div className="text-[7px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Visibility Engine</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[14px] text-zinc-500 font-bold">28</span>
                  <span className="text-[10px] text-blue-500">→</span>
                  <span className="text-[14px] text-blue-400 font-bold">51</span>
                </div>
                <div className="mt-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block">
                  <span className="text-[7px] text-blue-400 font-bold tracking-tight">+23 PTS</span>
                </div>
              </div>
              {/* Completed work checklist */}
              <div className="space-y-1.5">
                <div className="text-[7px] text-zinc-600 uppercase tracking-widest font-bold">Protocol Sync</div>
                {['Schema deployment', 'GBP optimization', 'FAQ publication'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Check size={8} className="text-blue-400" />
                    </div>
                    <span className="text-[7px] text-slate-400 font-medium uppercase">{item}</span>
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
  accent: 'brand'
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
      "AI Mention Rate across all prompt types and platforms.",
      "Gap analysis that highlights missing schema, FAQs, and authority mentions.",
      "Exportable PDF audits for sales decks and proposals.",
      "Automatic email capture to track leads."
    ],
    icon: Search,
    accent: 'brand',
    visual: <AuditToolMockup />
  },
  {
    id: 2,
    title: "Don\u2019t Start From Zero",
    subtitle: "De\u2011identified, success stories on day one.",
    body: [
      "You don\u2019t start from zero. Pooled, de-identified results from all partners become ready-to-use sales material.",
      "As your clients win with Rankett, the vault grows. Testimonials compound automatically, and the playbook tightens with every new success."
    ],
    bullets: [
      "Anonymized testimonials you can put your logo on.",
      "Rankett compiles all data together to continuously test new strategies.",
      "Plug-and-play PDF one-pagers and deck slides for your pitch.",
      "Every network win becomes another proof asset you can use."
    ],
    icon: Award,
    accent: 'brand',
    visual: (
      <div className="relative h-full w-full flex items-center justify-center p-6">
        <div className="w-full max-w-[320px]">
          {/* Friendly Label Pill */}
          <div className="flex items-center justify-center mb-8">
            <div className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Collective Success Data</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { vertical: 'Dental', from: '0%', to: '15%', days: '90' },
              { vertical: 'HVAC', from: '2%', to: '18%', days: '75' },
              { vertical: 'Legal', from: '1%', to: '12%', days: '60' },
              { vertical: 'Medspa', from: '0%', to: '22%', days: '90' },
              { vertical: 'SaaS', from: '3%', to: '19%', days: '85' },
              { vertical: 'Retail', from: '1%', to: '14%', days: '70' },
            ].map((study) => (
              <motion.div
                key={study.vertical}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900 border border-white/10 rounded-2xl p-4 transition-all hover:bg-slate-800/60 shadow-lg"
              >
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">{study.vertical}</div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-lg font-bold text-white tracking-tight">{study.to}</span>
                  <span className="text-[10px] text-blue-400 font-bold tracking-tight">Mention Rate</span>
                </div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">Verified in {study.days} days</div>
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
      "We autogenerate your pitchdeck, agreements, monthly reports, and onboarding quiz. All fully branded, so you can focus on closing without writing a single slide, contract or report."
    ],
    bullets: [
      "Pitchdeck built around your tier pricing. Update once, every slide updates.",
      "Pre-filled branded client agreements.",
      "Monthly reports with your logo and colors, ready to send to clients.",
      "5\u2011minute client onboarding."
    ],
    icon: FileText,
    accent: 'brand',
    visualComponent: 'documentfan',
  }
]

// Accent color mappings - Unified Brand Palette
const accentColors = {
  brand: {
    gradient: 'from-blue-500/20 to-violet-500/5',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    iconText: 'text-blue-400',
    subtitleText: 'text-blue-400',
    bulletDot: 'bg-blue-400',
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const Icon = phase.icon
  const colors = accentColors[phase.accent]

  return (
    <div ref={containerRef} className="mb-8 md:mb-0 md:h-screen flex items-center justify-center md:sticky md:top-0">
      <motion.div
        style={isMobile ? {} : {
          scale,
          top: `calc(-5vh + ${index * 25}px)`
        }}
        className="relative w-full max-w-5xl md:h-[80vh] flex flex-col origin-top bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20`} />

        <div className="relative z-10 grid md:grid-cols-2 h-full">
            <div className="h-[200px] md:h-auto bg-slate-950/30 md:border-r border-b md:border-b-0 border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight tracking-tight">{phase.title}</h2>

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
