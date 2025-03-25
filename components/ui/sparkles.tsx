"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  className,
  particleDensity,
}: {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  className?: string
  particleDensity?: number
}) => {
  const [particles, setParticles] = useState<
    {
      id: string
      createdAt: number
      size: number
      x: number
      y: number
      color: string
    }[]
  >([])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const particlesPerThousandPixels = particleDensity || 50
    const element = document.getElementById(id || "sparkles-container")
    if (!element) return

    const createParticles = () => {
      const { width, height } = element.getBoundingClientRect()
      const particleCount = Math.floor((width * height * particlesPerThousandPixels) / 1000)
      const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
        id: `particle-${Date.now()}-${i}`,
        createdAt: Date.now(),
        size: Math.floor(Math.random() * (maxSize || 4)) + (minSize || 1),
        x: Math.random() * width,
        y: Math.random() * height,
        color: particleColor || "#FFF",
      }))
      setParticles(newParticles)
    }

    createParticles()

    const interval = setInterval(
      () => {
        createParticles()
      },
      (speed || 1) * 1000,
    )

    return () => clearInterval(interval)
  }, [id, maxSize, minSize, particleColor, speed, mounted, particleDensity])

  if (!mounted) return null

  return (
    <div
      id={id || "sparkles-container"}
      className={cn("h-full w-full", className)}
      style={{
        position: "relative",
        background: background || "transparent",
      }}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: (speed || 1) / 2 }}
            style={{
              position: "absolute",
              top: particle.y,
              left: particle.x,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background: particle.color,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

