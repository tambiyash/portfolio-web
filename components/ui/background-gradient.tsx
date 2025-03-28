"use client"
import React from "react"
import { cn } from "@/lib/utils"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur-xl transition duration-1000 group-hover:opacity-100",
          animate && "animate-gradient",
        )}
      />
      <div className={cn("relative flex h-full w-full items-center justify-center rounded-lg bg-black", className)}>
        {children}
      </div>
    </div>
  )
};

