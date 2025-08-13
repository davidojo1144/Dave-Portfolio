"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  live?: string
  repo?: string
}

export function ProjectCard({
  title = "Project Title",
  description = "Short description of what this project does and why it matters.",
  image = "/images/project-1.jpg",
  tags = ["React", "TypeScript", "Animations"],
  live = "#",
  repo = "#",
}: Project) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  function onMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * 8
    const ry = (px - 0.5) * -8
    setTilt({ rx, ry })
  }

  function onLeave() {
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
    >
      <div className="overflow-hidden rounded-lg border bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between gap-2 p-4">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                aria-label="GitHub repository"
                title="Repository"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                aria-label="Open live demo"
                title="Live"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <div className="p-4 grid gap-3">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border bg-neutral-100 dark:bg-neutral-800">
            <img
              src={image || "/placeholder.svg"}
              alt={`${title} preview`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full border text-xs text-emerald-700 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-800/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
