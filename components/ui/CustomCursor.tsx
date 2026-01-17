'use client'

import { useEffect, useRef, useState } from 'react'

interface TrailDot {
  x: number
  y: number
  opacity: number
}

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const trailRef = useRef<TrailDot[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    // Check if touch device
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

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Trail configuration
    const trailLength = 20
    const dotSpacing = 3 // Frames between new dots

    let frameCount = 0

    // Initialize trail
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

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      frameCount++

      // Add new dot at interval
      if (frameCount % dotSpacing === 0 && isVisible) {
        trailRef.current.unshift({
          x: mousePos.current.x,
          y: mousePos.current.y,
          opacity: 1,
        })

        // Limit trail length
        if (trailRef.current.length > trailLength) {
          trailRef.current.pop()
        }
      }

      // Draw and update trail
      trailRef.current.forEach((dot, index) => {
        // Fade out based on position in trail
        dot.opacity = 1 - (index / trailLength)

        // Calculate size (larger at front, smaller at back)
        const size = Math.max(2, 8 - (index * 0.3))

        // Draw dot with gradient
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, size
        )

        // Blue to violet gradient matching your brand
        gradient.addColorStop(0, `rgba(96, 165, 250, ${dot.opacity * 0.6})`)
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${dot.opacity * 0.4})`)
        gradient.addColorStop(1, `rgba(139, 92, 246, 0)`)

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
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

  // Don't render on touch devices
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
