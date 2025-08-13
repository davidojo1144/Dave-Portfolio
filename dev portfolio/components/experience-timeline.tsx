"use client"

import { motion } from "framer-motion"
import { Briefcase, Rocket, Wrench } from "lucide-react"

const items = [
  {
    icon: <Rocket className="h-4 w-4" />,
    title: "Shipped Multi‑Platform MVPs",
    period: "2023 — 2025",
    body: "Led design/dev of animated mobile and web apps with robust auth and CI/CD.",
  },
  {
    icon: <Wrench className="h-4 w-4" />,
    title: "Cloud & Auth Integrations",
    period: "Ongoing",
    body: "Worked with Appwrite, Clerk, Firebase, Supabase, and Google Cloud to ship secure features.",
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
      <div className="container max-w-6xl px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
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
                <div className="absolute left-1 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                  {it.icon}
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{it.title}</h3>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{it.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{it.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
