'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Zap, CheckCircle2, CreditCard, ShieldCheck, Server, ArrowRight } from 'lucide-react'
import FadeInOnScroll from '../scroll/FadeInOnScroll'

const steps = [
  {
    id: 1,
    title: 'The Audit',
    subtitle: 'You find the problem.',
    description: 'Use your white-label tool to scan any local business. Show them they are invisible to AI.',
    action: 'Run Scan',
    color: 'blue'
  },
  {
    id: 2,
    title: 'The Fix',
    subtitle: 'We do the work.',
    description: 'You click "Activate". Our engine instantly optimizes directories, syncs GBP, and deploys content.',
    action: 'Activate Rankett',
    color: 'violet'
  },
  {
    id: 3,
    title: 'The Credit',
    subtitle: 'You get the hero status.',
    description: 'The client sees their visibility score skyrocket. They pay you. You keep the relationship.',
    action: 'Collect Payment',
    color: 'emerald'
  }
]

export default function AgencyModelSimulator() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(1) // Loop back
    }
  }

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeInOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Actually Works</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              No complex integrations. No hiring. Just a simple workflow that scales.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Controls & Narrative */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div 
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`group relative pl-8 border-l-2 transition-all duration-500 cursor-pointer ${
                  currentStep === step.id 
                    ? `border-${step.color}-500` 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Active Indicator */}
                {currentStep === step.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-${step.color}-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
                  />
                )}

                <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                  currentStep === step.id ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'
                }`}>
                  {step.id}. {step.title}
                </h3>
                <h4 className={`text-sm font-medium mb-3 transition-colors duration-300 ${
                   currentStep === step.id ? `text-${step.color}-400` : 'text-slate-600'
                }`}>
                  {step.subtitle}
                </h4>
                
                <AnimatePresence>
                  {currentStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleNext()
                        }}
                        className={`px-6 py-2 rounded-lg bg-${step.color}-500/10 border border-${step.color}-500/50 text-${step.color}-400 text-sm font-bold flex items-center gap-2 hover:bg-${step.color}-500/20 transition-colors`}
                      >
                        {step.action} <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT: The Visual Simulator */}
          <div className="relative h-[500px] bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center p-8">
            
            {/* Background Animations (The "Engine") */}
            <AnimatePresence mode="wait">
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-0"
                >
                  {/* Streaming Code / Data Lines */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-[1px] bg-violet-500/30"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: 0,
                        right: 0,
                      }}
                      animate={{
                        x: ['-100%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-violet-500/5 mix-blend-overlay" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Central Device Mockup */}
            <motion.div 
              className="relative z-10 w-[300px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              animate={{
                scale: currentStep === 2 ? 0.95 : 1,
                borderColor: currentStep === 1 ? '#3b82f6' : currentStep === 2 ? '#8b5cf6' : '#10b981',
                boxShadow: currentStep === 3 ? '0 0 50px rgba(16, 185, 129, 0.2)' : '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Device Header */}
              <div className="h-12 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-900/50">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                </div>
                <div className="h-2 w-20 bg-slate-800 rounded-full" />
              </div>

              {/* Device Screen Content */}
              <div className="flex-1 p-6 relative">
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: AUDIT (Lead Magnet) */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col items-center text-center h-full justify-center space-y-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                        <Search className="w-8 h-8 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Local Coffee Co.</h3>
                        <p className="text-slate-500 text-sm">Scanning visibility...</p>
                      </div>
                      <div className="w-full bg-slate-900 rounded-xl border border-red-500/30 p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xl">F</div>
                        <div className="text-left">
                          <div className="text-red-400 font-bold text-sm">Invisible</div>
                          <div className="text-slate-600 text-xs">0/10 AI Mentions</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: FIX (Backend Engine) */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="flex flex-col items-center text-center h-full justify-center space-y-6"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="w-48 h-48 border border-dashed border-violet-500/30 rounded-full"
                        />
                      </div>
                      
                      <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mb-2 relative z-10">
                        <Server className="w-8 h-8 text-violet-500" />
                      </div>
                      
                      <div className="relative z-10 bg-slate-950/80 backdrop-blur-sm p-4 rounded-xl border border-violet-500/30 w-full">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400">Directories</span>
                            <span className="text-violet-400">Syncing...</span>
                          </div>
                          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-violet-500"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2 }}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between text-xs mt-2">
                            <span className="text-slate-400">GBP Optimization</span>
                            <span className="text-violet-400">Processing...</span>
                          </div>
                           <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-violet-500"
                              initial={{ width: 0 }}
                              animate={{ width: "80%" }}
                              transition={{ duration: 2, delay: 0.5 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: CREDIT (Success) */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col items-center text-center h-full justify-center space-y-6"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-2 shadow-lg shadow-emerald-500/30"
                      >
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-white font-bold text-xl">All Systems Go</h3>
                        <p className="text-emerald-400 text-sm font-medium">Visibility Score: A+</p>
                      </div>

                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-full bg-slate-800 rounded-xl border border-slate-700 p-4 flex items-center justify-between"
                      >
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                                <CreditCard className="w-4 h-4 text-slate-400" />
                            </div>
                            <div className="text-left">
                                <div className="text-slate-200 font-bold text-xs">Payment Received</div>
                                <div className="text-slate-500 text-[10px]">Just now</div>
                            </div>
                         </div>
                         <div className="text-emerald-400 font-bold">+$3,000.00</div>
                      </motion.div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* White Label Badge */}
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur border border-slate-700 px-2 py-1 rounded text-[10px] text-slate-400 font-mono">
                Powered by [Your Brand]
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
