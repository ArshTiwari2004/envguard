"use client"

import { useCallback, useEffect, useRef } from "react"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export function SparklesCore({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateSparkle = useCallback(() => {
    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * (maxSize! - minSize!) + minSize!,
      opacity: Math.random(),
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }
  }, [minSize, maxSize])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const sparkles = Array.from({ length: particleDensity! }, generateSparkle)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparkles.forEach((sparkle, index) => {
        sparkle.x += sparkle.dx
        sparkle.y += sparkle.dy
        sparkle.opacity = Math.sin(Date.now() * 0.005 + sparkle.id) * 0.5 + 0.5

        if (sparkle.x < 0 || sparkle.x > canvas.width) sparkle.dx *= -1
        if (sparkle.y < 0 || sparkle.y > canvas.height) sparkle.dy *= -1

        ctx.save()
        ctx.globalAlpha = sparkle.opacity
        ctx.fillStyle = particleColor!
        ctx.beginPath()
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
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
  }, [generateSparkle, particleDensity, particleColor])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background: background || "transparent",
      }}
    />
  )
}
