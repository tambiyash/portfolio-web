"use client";
import { motion } from "framer-motion"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { MacbookScroll } from "@/components/ui/macbook-scroll"

const technologies = [
  { name: "ReactJS", level: "Advanced" },
  { name: "VueJS", level: "Intermediate" },
  { name: "NuxtJS", level: "Intermediate" },
  { name: "Express", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "GraphQL", level: "Intermediate" },
]

export default function TechStack() {
  return (
    <div className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-purple-500 mb-2"
          >
            I constantly try to improve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            My tech stack
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {technologies.map((tech, index) => (
            <BackgroundGradient key={tech.name} className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center h-full"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-purple-400">{tech.level}</p>
              </motion.div>
            </BackgroundGradient>
          ))}
        </div>

        <MacbookScroll
          title={
            <span className="text-base sm:text-xl md:text-2xl font-semibold text-white">
              My development <br /> environment
            </span>
          }
          src="/placeholder.svg?height=1000&width=1600"
          showGradient={false}
        />
      </div>
    </div>
  )
}