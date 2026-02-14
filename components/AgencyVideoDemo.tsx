'use client'

import { Play } from 'lucide-react'

export default function AgencyVideoDemo() {
  return (
    <section className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Your New Backend <span className="text-gradient">Operations Center</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Watch how agencies use our fulfillment system to deliver results without hiring new staff.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group cursor-pointer">
          
          {/* Placeholder Overlay (Remove this when Loom is added) */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-primary/50">
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              </div>
              <p className="text-slate-400 font-medium">Watch 2-Minute Walkthrough</p>
            </div>
          </div>

          {/* Loom Embed Code Instructions (Commented out for future use) */}
          {/* 
          <iframe 
            src="YOUR_LOOM_EMBED_URL" 
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0" 
            allowFullScreen 
          /> 
          */}
        </div>

      </div>
    </section>
  )
}
