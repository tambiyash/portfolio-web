"use client"
import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

type MenuItemProps = {
  setActive: (item: string | null) => void
  active: string | null
  item: string
  children: React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        className={cn(
          "cursor-pointer text-sm hover:opacity-[0.9] px-4 py-2",
          active === item ? "text-purple-500" : "text-white",
        )}
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md rounded-md p-4 border border-purple-900/20"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

type MenuProps = {
  setActive: (item: string | null) => void
  children: React.ReactNode
}

export const Menu: React.FC<MenuProps> = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/[0.2] bg-black shadow-input flex justify-center space-x-4 px-8 py-6 my-6"
    >
      {children}
    </nav>
  )
}

type HoveredLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export const HoveredLink: React.FC<HoveredLinkProps> = ({ href, children, className }) => {
  return (
    <Link href={href} className={cn("text-neutral-200 hover:text-purple-500 transition-colors", className)}>
      {children}
    </Link>
  )
}

type ProductItemProps = {
  title: string
  description: string
  href: string
  src: string
}

export const ProductItem: React.FC<ProductItemProps> = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <img
        src={src || "/placeholder.svg"}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md object-cover"
      />
      <div>
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-xs text-neutral-400">{description}</p>
      </div>
    </Link>
  )
}
