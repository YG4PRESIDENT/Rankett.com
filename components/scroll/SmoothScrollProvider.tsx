import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // GSAP ScrollTrigger integration
    gsap.registerPlugin(ScrollTrigger)

    const lenisInstance = new ReactLenis({
      lerp: isMobile ? 0.15 : 0.075, // Snappier on mobile, luxurious on desktop
      duration: 1.2,
      smoothTouch: true, // Enable smooth scroll for touch devices
      syncTouch: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    })

    lenisInstance.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000)
    })

    return () => {
      lenisInstance.destroy()
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile]) // Re-initialize Lenis when isMobile changes

  return <div style={{ height: '100%', overflow: 'hidden' }}>{children}</div>
}