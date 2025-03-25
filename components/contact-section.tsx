"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import Spot from "@/components/ui/spotlight";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="py-20 relative">
      <Spot className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />
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
              otherClasses={cn(
                "bg-black hover:bg-gray-900 text-white border border-purple-500/30 rounded-md px-4 py-2 flex items-center gap-2",
                copied && "bg-green-600 hover:bg-green-700",
              )}
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
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="font-bold">GH</span>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-400">@yourusername</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="font-bold">LI</span>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-400">linkedin.com/in/yourusername</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
                    <span className="font-bold">TW</span>
                  </div>
                  <div>
                    <p className="font-medium">Twitter</p>
                    <p className="text-sm text-gray-400">@yourusername</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}