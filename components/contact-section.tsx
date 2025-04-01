"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Copy } from "lucide-react";
import Spot from "@/components/ui/spotlight";
import Button from "@/components/ui/button";
import { GitHubLight, LinkedIn, XLight } from "developer-icons";
import { socials } from "@/data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("tambiyash@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="py-20 relative">
        <Spot className="-top-60 left-0 md:left-60 md:-top-20" fill="purple" />
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-900/20 to-black rounded-2xl p-8 border border-purple-900/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Do you want to start <br />a project together?
              </h2>
              <p className="text-gray-400 mb-8">
                I&#39;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <Button
                handleClick={copyEmail}
                otherClasses={
                  `bg-black hover:bg-gray-900 text-white border border-purple-500/30 rounded-md px-4 py-2 flex items-center gap-2
                  ${copied && "bg-green-600 hover:bg-green-700"}`
                }
                icon={<Copy className="w-4 h-4" />}
                position="left"
                title={copied ? "Email copied!" : "Copy my email address"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-black border border-purple-900/20">
                <h3 className="text-xl font-bold mb-4">Let&#39;s Connect</h3>
                <p className="text-gray-400 mb-6">Feel free to reach out through any of these platforms:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <GitHubLight className="w-full h-full"/>
                    </div>
                    <a target="_blank" href={`https://github.com/${socials.github}`}>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-gray-400">{socials.github}</p>
                    </a>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <LinkedIn className="w-full h-full"/>
                    </div>
                    <a target="_blank" href={`https://linkedin.com/in/${socials.linkedin}`}>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-gray-400">{socials.linkedin}</p>
                    </a>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <XLight className="w-full h-full"/>
                    </div>
                    <a target="_blank" href={`https://x.com/${socials.twitter}`}>
                      <p className="font-medium">X/Twitter</p>
                      <p className="text-sm text-gray-400">{socials.twitter}</p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Yash Tambi
          </p>
        </div>
    </footer>
  )
}
