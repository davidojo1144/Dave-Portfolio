"use client"

import { motion } from "framer-motion"
import { Briefcase, Rocket, Wrench } from "lucide-react"

const items = [
  {
    icon: <Rocket className="h-4 w-4" />,
    title: "Frontend Engineer",
    period: "Ongoing",
    body: "Led designers/dev to build mobile and web apps with robust auth and CI/CD.",
  },
  {
    icon: <Wrench className="h-4 w-4" />,
    title: "Mobile App Developer",
    period: "Ongoing",
    body: "Build Mobile App and also Worked with Appwrite, Clerk, Firebase, Supabase, and Google Cloud to ship secure features.",
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    title: "Freelance & Product Work",
    period: "Ongoing",
    body: "Partnered with startups to deliver fast, delightful UX with maintainable code.",
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Experience</h2>
        <div className="relative">
          <div
            className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800"
            aria-hidden="true"
          />
          <div className="grid gap-8">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                className="relative pl-10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="absolute left-1 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border bg-white dark:bg-neutral-900">
                  {it.icon}
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{it.title}</h3>
                    <span className="text-xs text-neutral-500">•</span>
                    <span className="text-xs text-neutral-500">{it.period}</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{it.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
