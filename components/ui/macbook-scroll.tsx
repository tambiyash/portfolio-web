"use client"
import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src: string
  showGradient?: boolean
  title?: string | React.ReactNode
  badge?: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[60vh] md:h-[80vh] flex items-center justify-center"
      style={{
        perspective: "1000px",
      }}
    >
      <div className="relative flex flex-col max-w-5xl w-full">
        {title && (
          <div className="relative text-center mb-4 mx-auto">
            {badge && badge}
            {title}
          </div>
        )}
        <motion.div
          style={{
            scale: imageScale,
            opacity: imageOpacity,
            rotateX: useTransform(scrollYProgress, [0, 1], [18, 0]),
          }}
          className="relative rounded-xl bg-gray-950 border border-gray-800"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-950 rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={src || "/placeholder.svg"}
                alt="Macbook screen"
                width={800}
                height={500}
                className="object-cover object-top rounded-xl"
              />
            </div>
          </div>

          {showGradient && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-xl" />
          )}

          <div className="h-60 md:h-96 w-full rounded-xl" />
        </motion.div>
      </div>
    </motion.div>
  )
}

