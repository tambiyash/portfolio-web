"use client"
import type React from "react"
import { useRef } from "react"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div ref={containerRef} onMouseMove={onMouseMove} className={cn("relative h-full w-full bg-black", className)}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <AnimatePresence>
          <motion.div
            className="absolute z-0 opacity-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 z-10 w-full h-full bg-black [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-20 blur-[100px]" />
          </motion.div>
        </AnimatePresence>
        {children}
      </div>
    </div>
  )
}

