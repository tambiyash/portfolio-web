"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { LampContainer } from "@/components/ui/lamp"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "I prioritize client collaboration, fostering open communication",
    description:
      "Working closely with clients to understand their needs and vision is at the core of my development process. I believe in transparent communication and regular updates to ensure project success.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=450&width=600"
          width={600}
          height={450}
          alt="Laptop showing a website"
          className="object-cover rounded-xl shadow-2xl"
        />
      </div>
    ),
  },
  {
    title: "I'm very flexible with time zone communications",
    description:
      "Working with clients globally means adapting to different time zones. I ensure availability for meetings and discussions regardless of location, making collaboration seamless across borders.",
    content: (
      <div className="h-full w-full bg-[#0A0A0A] rounded-xl p-8 flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute top-1/4 left-1/4 bg-blue-500/20 rounded-full px-3 py-1 text-sm">USA</div>
          <div className="absolute top-1/3 right-1/3 bg-green-500/20 rounded-full px-3 py-1 text-sm">Germany</div>
          <div className="absolute top-1/5 right-1/4 bg-yellow-500/20 rounded-full px-3 py-1 text-sm">Ukraine</div>
          <div className="w-full h-full bg-grid-white/[0.05] rounded-xl"></div>
        </div>
      </div>
    ),
  },
  {
    title: "Tech enthusiast with a passion for development",
    description:
      "I'm constantly exploring new technologies and methodologies to enhance my skills and deliver cutting-edge solutions. My passion for development drives me to stay ahead of industry trends.",
    content: (
      <div className="h-full w-full bg-[#0A0A0A] rounded-xl p-8 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-64 h-48 bg-[#111] rounded-lg p-4 flex flex-col gap-2">
            <div className="w-full h-3 bg-[#222] rounded-full"></div>
            <div className="w-3/4 h-3 bg-[#222] rounded-full"></div>
            <div className="w-1/2 h-3 bg-[#222] rounded-full"></div>
            <div className="w-2/3 h-3 bg-[#222] rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function Features() {
  return (
    <div className="py-20">
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-20"
        >
          What I <span className="text-purple-500">Bring</span> to the Table
        </motion.h2>
      </LampContainer>

      <div className="mt-10">
        <StickyScroll content={features} />
      </div>
    </div>
  )
}