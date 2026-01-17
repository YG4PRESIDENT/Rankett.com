'use client'

import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      )
    }
    checkTouchDevice()

    if (isTouchDevice) return

    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Track hover on interactive elements
    const handleElementMouseEnter = () => setIsHovering(true)
    const handleElementMouseLeave = () => setIsHovering(false)

    // Smooth animation loop
    const animate = () => {
      const ease = 0.15
      currentX += (mouseX - currentX) * ease
      currentY += (mouseY - currentY) * ease

      if (cursor) {
        cursor.style.transform = `translate(${currentX - 20}px, ${currentY - 20}px) scale(${isHovering ? 1.5 : 1})`
      }

      requestAnimationFrame(animate)
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleElementMouseEnter)
      el.addEventListener('mouseleave', handleElementMouseLeave)
    })

    // Start animation
    const animationId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementMouseEnter)
        el.removeEventListener('mouseleave', handleElementMouseLeave)
      })
      cancelAnimationFrame(animationId)
    }
  }, [isTouchDevice, isVisible, isHovering])

  // Re-attach hover listeners when DOM changes
  useEffect(() => {
    if (isTouchDevice) return

    const handleElementMouseEnter = () => setIsHovering(true)
    const handleElementMouseLeave = () => setIsHovering(false)

    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementMouseEnter)
        el.removeEventListener('mouseleave', handleElementMouseLeave)
        el.addEventListener('mouseenter', handleElementMouseEnter)
        el.addEventListener('mouseleave', handleElementMouseLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [isTouchDevice])

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease, transform 0.15s ease-out',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(2px)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
