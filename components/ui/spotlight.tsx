"use client"
import type React from "react"
import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"

const Spot = ({
  children,
  className,
  fill = "white",
}: {
  children?: React.ReactNode
  className?: string
  fill?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div className={cn("relative group", className)} onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${fill}10,
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

export default Spot;
