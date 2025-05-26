"use client"

import { useEffect, useRef } from "react"

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const beams = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      angle: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.5,
      length: 100 + Math.random() * 200,
      opacity: 0.1 + Math.random() * 0.3,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        beam.x += Math.cos(beam.angle) * beam.speed
        beam.y += Math.sin(beam.angle) * beam.speed

        if (beam.x < -beam.length) beam.x = canvas.width + beam.length
        if (beam.x > canvas.width + beam.length) beam.x = -beam.length
        if (beam.y < -beam.length) beam.y = canvas.height + beam.length
        if (beam.y > canvas.height + beam.length) beam.y = -beam.length

        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length,
        )
        gradient.addColorStop(0, `rgba(147, 51, 234, ${beam.opacity})`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${beam.opacity * 0.8})`)
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(beam.x, beam.y)
        ctx.lineTo(beam.x + Math.cos(beam.angle) * beam.length, beam.y + Math.sin(beam.angle) * beam.length)
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
