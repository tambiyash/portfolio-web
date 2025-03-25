"use client";
import { motion } from "framer-motion"
import { CodeBlock, dracula } from "react-code-blocks"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

const codeString1 = `// Importing a single module
import moduleName from 'modulePath';`

const codeString2 = `// Importing multiple modules
import { module1, module2 } from 'modulePath';`

const codeString3 = `// Importing named and default
import defaultExport, { namedExport } from 'modulePath';`

export default function CurrentProject() {
  return (
    <div className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-purple-500 mb-2"
          >
            THE INSIDE SCOOP
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Currently building a <br />
            JS Animation library
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400"
          >
            A lightweight, high-performance animation library designed for modern web applications. Built with
            performance and developer experience in mind.
          </motion.p>
        </div>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-200 dark:text-white">
              Code Snippets
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
              <div className="mt-4 space-y-6">
                <div className="text-pink-500">
                  <div className="mb-1 text-xs text-gray-400">// Line 1</div>
                  <CodeBlock text={codeString1} language="javascript" showLineNumbers={false} theme={dracula} />
                </div>
                <div className="text-pink-500">
                  <div className="mb-1 text-xs text-gray-400">// Line 2</div>
                  <CodeBlock text={codeString2} language="javascript" showLineNumbers={false} theme={dracula} />
                </div>
                <div className="text-pink-500">
                  <div className="mb-1 text-xs text-gray-400">// Line 3</div>
                  <CodeBlock text={codeString3} language="javascript" showLineNumbers={false} theme={dracula} />
                </div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}