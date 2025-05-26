"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface HoverBorderGradientProps {
  children: React.ReactNode
  className?: string
}

export function HoverBorderGradient({ children, className }: HoverBorderGradientProps) {
  return (
    <motion.div className={cn("relative group", className)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
