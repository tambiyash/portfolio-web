"use client";
import { motion } from "motion/react"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { technologies, otherSkills } from "@/data";

export default function TechStack({ otherSkill=false }: { otherSkill?: boolean}) {
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
            {otherSkill ? "and" : "I constantly try to improve"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            {otherSkill ? "My Product Skills" : "My Tech Stack"}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {(otherSkill ? otherSkills : technologies).map((tech, index) => (
            <BackgroundGradient key={tech.name} className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-evenly h-full"
              >
                <h4 className="flex-1/2 text-xl md:text-2xl font-bold text-white mb-2">{tech.name}</h4>
                {tech.level && <p className="text-sm text-purple-400">{tech.level}</p>}
                <span className="w-20 h-20 mt-2">{tech.icon!}</span>
              </motion.div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  )
}