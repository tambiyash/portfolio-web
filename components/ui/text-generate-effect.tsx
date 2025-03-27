"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [wordArray, setWordArray] = useState<string[]>([])

  useEffect(() => {
    setWordArray(words.split(" "))
  }, [words])

  const renderWords = () => {
    return (
      <div>
        {wordArray.map((word, idx) => {
          return (
            <motion.span
              key={`${word}-${idx}`}
              className="dark:text-white text-white opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.05,
              }}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </div>
    )
  }

  return <div className="text-base sm:text-xl md:text-2xl leading-snug tracking-wide">{renderWords()}</div>
}

