'use client'

import { Network, Database, Share2 } from 'lucide-react'

export default function PooledDataHook() {
  return (
    <section className="py-24 px-4 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* Icon Cluster */}
        <div className="flex justify-center items-center space-x-8 opacity-50">
          <Network className="w-12 h-12 text-slate-600" />
          <div className="h-px w-16 bg-slate-800" />
          <Share2 className="w-12 h-12 text-slate-400" />
          <div className="h-px w-16 bg-slate-800" />
          <Database className="w-12 h-12 text-slate-600" />
        </div>

        {/* Copy */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Day One <span className="text-slate-400">Authority.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            You don't need your own case studies to start. <br className="hidden md:block"/>
            The <span className="text-white font-medium">audit report shows the problem so clearly</span> that the conversation starts itself.
          </p>
        </div>

        {/* Metric */}
        <div className="inline-flex items-center px-6 py-3 bg-slate-900 rounded-full border border-slate-800">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse"></span>
          <span className="text-slate-300 font-mono text-sm">NETWORK DATA: ACTIVE</span>
        </div>

      </div>
    </section>
  )
}
