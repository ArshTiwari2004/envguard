"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface DockItem {
  title: string
  icon: React.ReactNode
  href: string
}

interface FloatingDockProps {
  items: DockItem[]
  className?: string
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-900/80 backdrop-blur-md px-4 pb-3 border border-gray-700",
        className,
      )}
    >
      {items.map((item, i) => (
        <DockIcon mouseX={mouseX} key={i} {...item} />
      ))}
    </motion.div>
  )
}

function DockIcon({ mouseX, title, icon, href }: DockItem & { mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="relative aspect-square rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors group"
      onClick={() => window.open(href, "_blank")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon */}
      <div className="text-white">{icon}</div>

      {/* Tooltip */}
      <div className="absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {title}
      </div>
    </motion.div>
  )
}
