"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import { Typewriter } from "./typewriter"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b" aria-label="Hero">
      {/* Background gradient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[960px] rounded-full blur-3xl bg-gradient-to-tr from-emerald-400/30 via-fuchsia-400/20 to-purple-400/20 dark:from-emerald-500/20 dark:via-fuchsia-500/10 dark:to-purple-500/10" />
        <div className="absolute -bottom-40 right-1/4 h-[380px] w-[760px] rounded-full blur-3xl bg-gradient-to-tr from-purple-400/20 via-emerald-400/20 to-amber-400/20 dark:from-purple-400/10 dark:via-emerald-400/10 dark:to-amber-400/10" />
      </div>

      <div className="max-w-6xl px-4 py-16 md:py-24 mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Building delightful apps for mobile and web
          </motion.h1>
          <motion.p
            className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I ship robust, user‑centric experiences with clean architecture, smooth animations, and a product mindset.
            From auth to cloud, I’ve worked with Appwrite, Clerk, Firebase, Supabase, and Google Cloud.
          </motion.p>

          <motion.div
            className="mt-6 text-lg md:text-xl font-medium"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            I am a <Typewriter />
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition-colors"
            >
              View Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              Download Résumé
              <Download className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl border bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 p-2 shadow-sm">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <img
                src="/images/hero.jpg"
                alt="Developer workspace with abstract shapes"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
