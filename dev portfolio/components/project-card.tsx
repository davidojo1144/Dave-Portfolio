"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

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
  image = "/placeholder.svg?height=640&width=960",
  tags = ["React", "TypeScript", "Animations"],
  live = "#",
  repo = "#",
}: Project) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, bz: 0 })

  function onMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * 8 // tilt X
    const ry = (px - 0.5) * -8 // tilt Y
    const bz = (px - 0.5) * (py - 0.5) * 6 // subtle
    setTilt({ rx, ry, bz })
  }

  function onLeave() {
    setTilt({ rx: 0, ry: 0, bz: 0 })
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
      <Card className="overflow-hidden border hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-start justify-between gap-2">
            <span>{title}</span>
            <div className="flex items-center gap-2">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-muted-foreground hover:text-foreground"
                  aria-label="GitHub repository"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-muted-foreground hover:text-foreground"
                  aria-label="Open live demo"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border bg-muted">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="outline" className="border-emerald-200 text-emerald-700 dark:text-emerald-300">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
