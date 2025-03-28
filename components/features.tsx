"use client";
import { LampContainer } from "@/components/ui/lamp"
import { motion } from "motion/react"
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export default function Features() {
  return (
    <section id="about" className="py-20">
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
        <BentoGrid className="w-full py-20">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}