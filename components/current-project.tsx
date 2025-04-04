"use client";
import { motion } from "motion/react";
import { CodeBlock } from "@/components/ui/code-block";
import { codeString } from "@/data";

export default function CurrentProject() {
  return (
    <div className="w-full flex flex-row lg:flex-nowrap md:flex-nowrap flex-wrap gap-20" id="current-project">
      <div className="flex-1/2 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-wider text-purple-500 mb-2"
        >
          What am I proud of?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Done built a UI <br />
          component library
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400"
        >
          A lightweight, high-performance UI library designed for modern web applications. Built with
          performance and developer experience in mind
          using React, TailwindCSS and Motion.
        </motion.p>
      </div>
      <motion.div
        layout
        className=""
        transition={{ type: "spring", duration: 1 }}
        initial={{ opacity: 0, x: "-50vw" }}
        whileInView={{ opacity: 1, x: 0}}
      >
        <CodeBlock
          language="jsx"
          filename="ButtonComponent.jsx"
          tabs={[
            { name: "ButtonComponent.jsx", code: codeString[0], language: "jsx", highlightLines: [9, 13, 14, 18] },
            { name: "button.css", code: codeString[1], language: "css", highlightLines: [1, 2, 3] }
          ]}
        />
      </motion.div>
    </div>
  )
}