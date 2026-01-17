'use client'

import { useEffect, useRef, useState } from 'react'

interface TrailDot {
  x: number
  y: number
  opacity: number
  size: number
  vx: number // slight drift
  vy: number
}

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const trailRef = useRef<TrailDot[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      setIsTouchDevice(isTouch)
    }
    checkTouchDevice()
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Pixie dust configuration - subtle and light
    const trailLength = 12
    const dotSpacing = 2

    let frameCount = 0

    trailRef.current = []

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      frameCount++

      // Add new particle
      if (frameCount % dotSpacing === 0 && isVisible) {
        trailRef.current.unshift({
          x: mousePos.current.x + (Math.random() - 0.5) * 4,
          y: mousePos.current.y + (Math.random() - 0.5) * 4,
          opacity: 0.4,
          size: Math.random() * 2 + 1, // 1-3px
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3 - 0.2, // slight upward drift
        })

        if (trailRef.current.length > trailLength) {
          trailRef.current.pop()
        }
      }

      // Draw particles
      trailRef.current.forEach((dot, index) => {
        // Update position with drift
        dot.x += dot.vx
        dot.y += dot.vy

        // Fade based on age
        dot.opacity = 0.35 * (1 - index / trailLength)

        // Draw tiny glowing dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)

        // Subtle white/blue glow
        ctx.fillStyle = `rgba(180, 200, 255, ${dot.opacity})`
        ctx.fill()

        // Tiny bright center
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity * 0.8})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isTouchDevice, isVisible])

  if (isTouchDevice) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
