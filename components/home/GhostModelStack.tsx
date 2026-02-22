'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Search, Award, FileText } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
// Five labeled document mockups fan out from a stack as the user scrolls.
// Each card represents a real deliverable: Pitchdeck, Monthly Report, MSA, Onboarding, Upload Logo.
function DocumentFanVisual({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !card1Ref.current || !card2Ref.current || !card3Ref.current) return

    gsap.set([card1Ref.current, card3Ref.current], { x: 0, y: 0, rotation: 0, scale: 0.95 })
    gsap.set(card2Ref.current, { y: 0, scale: 0.95 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    tl.addLabel('end', 1)

    // Card 1 (back): fans hard left
    tl.to(card1Ref.current, { x: -160, y: -30, rotation: -16, scale: 1, duration: 0.22, ease: 'none' }, 0.58)
    // Card 2 (middle): lifts up and grows
    tl.to(card2Ref.current, { y: -50, scale: 1.02, duration: 0.22, ease: 'none' }, 0.58)
    // Card 3 (front): fans hard right
    tl.to(card3Ref.current, { x: 160, y: -30, rotation: 16, scale: 1, duration: 0.22, ease: 'none' }, 0.58)

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
          <div className="w-[250px] h-[330px] bg-slate-800/90 border border-slate-700/50 rounded-xl shadow-lg overflow-hidden">
            <div className="px-4 py-2.5 border-b border-slate-700/40 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[7px] text-emerald-400 font-bold">LOGO</span>
              </div>
              <div className="ml-1 text-[9px] text-slate-400 font-medium tracking-wide">Pitchdeck</div>
            </div>
            <div className="p-4 space-y-3">
              <div className="h-2 w-28 rounded bg-slate-600/30" />
              <div className="h-1.5 w-36 rounded bg-slate-700/25" />
              <div className="h-36 rounded-lg bg-slate-700/20 flex items-end px-3 pb-3 gap-1.5">
                {[30, 48, 38, 58, 70, 82, 65].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-emerald-500/30" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[7px] text-emerald-400">Tier 1</span>
                </div>
                <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[7px] text-emerald-400">Tier 2</span>
                </div>
                <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[7px] text-emerald-400">Tier 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Master Service Agreement (middle layer) */}
        <div
          ref={card2Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{ zIndex: 2 }}
        >
          <div className="w-[250px] h-[330px] bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-xl overflow-hidden">
            <div className="px-4 py-2.5 border-b border-slate-700/40 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[7px] text-emerald-400 font-bold">LOGO</span>
              </div>
              <div className="ml-1 text-[9px] text-slate-400 font-medium tracking-wide">Master Service Agreement</div>
            </div>
            <div className="p-4 space-y-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-[3px] rounded bg-slate-600/25" style={{ width: `${92 - i * 5}%` }} />
              ))}
              <div className="mt-5 pt-3 border-t border-slate-700/30 space-y-1.5">
                <div className="h-[3px] w-20 rounded bg-slate-600/30" />
                <div className="h-[3px] w-24 rounded bg-slate-600/25" />
              </div>
              <div className="mt-4 pt-3 border-t border-dashed border-slate-700/25">
                <div className="h-[1px] w-28 bg-slate-600/40" />
                <div className="text-[8px] text-slate-600 mt-1.5">Signature</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — 5 Min Onboarding (front layer) */}
        <div
          ref={card3Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{ zIndex: 3 }}
        >
          <div className="w-[250px] h-[330px] bg-slate-800 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
            <div className="px-4 py-2.5 border-b border-slate-700/40 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[7px] text-emerald-400 font-bold">LOGO</span>
              </div>
              <div className="ml-1 text-[9px] text-slate-400 font-mono">ai.youragency.com/onboard</div>
            </div>
            <div className="p-4 space-y-2.5">
              <div className="text-[10px] text-slate-300 font-semibold mb-1">5 Minute Onboarding</div>
              {['Business Name', 'Website URL', 'Primary Service', 'Target Location'].map((label) => (
                <div key={label}>
                  <div className="text-[7px] text-slate-500 mb-1 uppercase tracking-wider font-medium">{label}</div>
                  <div className="h-6 rounded-md bg-slate-700/30 border border-slate-600/20" />
                </div>
              ))}
              <div className="pt-1.5">
                <div className="h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                  <span className="text-[9px] text-emerald-400 font-semibold">Start Onboarding →</span>
                </div>
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
    title: "Your AI Visibility Audit Tool",
    subtitle: "Your logo, your domain, our engine.",
    body: [
      "Show any client how visible they are across ChatGPT, Gemini, Claude, and Perplexity — under your brand.",
      "Branded audit tool on your subdomain. Use it as a lead magnet, discovery tool, or upsell on every call."
    ],
    bullets: [
      "AI Visibility Score and Mention Rate across all prompt types.",
      "Gap analysis that highlights missing schema, FAQs, and authority mentions.",
      "Exportable PDF audits for sales decks and proposals.",
      "Automatic email capture to track leads."
    ],
    icon: Search,
    accent: 'blue',
    visual: (
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <p className="text-base text-slate-500 uppercase tracking-wider mb-8 font-medium">Tracking visibility across</p>
        <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex will-change-transform animate-marquee-fast" style={{ animationPlayState: 'running' }}>
            {LLM_LOGOS.concat(LLM_LOGOS).map((llm, index) => (
              <div key={index} className="flex items-center gap-4 mx-10 shrink-0">
                <div className="relative flex items-center justify-center w-12 h-12">
                  <BrandLogo platform={llm.platform} size={48} />
                </div>
                <span className="text-base font-medium text-slate-300 whitespace-nowrap">{llm.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Case Studies From Everyone's Wins",
    subtitle: "Battle-tested proof from day one.",
    body: [
      "You don't start from zero. Pooled, de-identified results from all partners become ready-to-use sales material.",
      "As your clients win, the vault grows. Testimonials compound automatically, and the playbook tightens with every new success."
    ],
    bullets: [
      'Anonymized "0 → 15% AI Mention Rate in 90 days" case studies by vertical.',
      'Benchmark slides: "+14.6% AI Mention Rate and 22% lift in branded search across 5 brands."',
      "Plug-and-play PDF one-pagers and deck slides for your pitch.",
      "Every network win becomes another proof asset you can use."
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
    title: "Your Deck, Contracts & Onboarding",
    subtitle: "Upload once. Ready to sell.",
    body: [
      "We autogenerate your pitchdeck, MSA, monthly reports, and onboarding quiz \u2014 fully branded, so you can close retainers without writing a single slide.",
      "You stay the face of the offer. We stay invisible."
    ],
    bullets: [
      "Pitchdeck built around your tier pricing \u2014 update once, every slide updates.",
      "Branded MSA and legal addendum that shifts fulfillment liability while keeping you in control.",
      "Monthly reports with your logo and colors, ready to send to clients.",
      "5\u2011minute onboarding survey on your domain \u2014 collects everything needed to start."
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
