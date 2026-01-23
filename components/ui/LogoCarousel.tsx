'use client'

import { useState } from 'react'
import BrandLogo from './BrandLogo'

const platforms = [
  { key: 'chatgpt', label: 'OpenAI' },
  { key: 'claude', label: 'Anthropic' },
  { key: 'gemini', label: 'Gemini' },
  { key: 'google', label: 'Google Overviews' },
  { key: 'perplexity', label: 'Perplexity' },
  { key: 'grok', label: 'Grok' },
  { key: 'deepseek', label: 'DeepSeek' },
]

export default function LogoCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex will-change-transform animate-marquee-fast"
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {/* Duplicate content for seamless infinite loop */}
        {[...platforms, ...platforms].map((platform, index) => (
          <div
            key={`${platform.key}-${index}`}
            className="flex items-center gap-3 mx-8 shrink-0 transition-opacity duration-300"
            style={{ opacity: isPaused ? 0.8 : 1 }}
          >
            <BrandLogo platform={platform.key} size={36} />
            <span className="text-sm font-medium text-slate-300 whitespace-nowrap">
              {platform.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
