"use client";
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import Button from "@/components/ui/button"
import { SparklesCore } from "@/components/ui/sparkles"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const introText = "Hi! I'm Yash, a Frontend Developer and Product Owner/Manager."

  return (
    <div className="h-[90vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8a2be2"
        />
      </div>

      <div className="text-center z-10 px-6 md:px-10 py-24 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base uppercase tracking-widest text-purple-400 mb-6"
        >
          DYNAMIC WEB MAGIC WITH NEXT.JS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
        >
          Transforming Concepts into <span className="text-purple-500">Seamless User Experiences</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <TextGenerateEffect words={introText} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button otherClasses="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-6 py-3 flex items-center gap-2 group"
            title="See my work"
            icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            position="right"
          />
        </motion.div>
      </div>
    </div>
  )
}