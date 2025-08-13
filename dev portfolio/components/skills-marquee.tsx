"use client"

import styles from "./skills-marquee.module.css"
import { Badge } from "@/components/ui/badge"

const skills = [
  "React Native",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Zustand",
  "Redux",
  "Clerk",
  "Firebase",
  "Supabase",
  "Appwrite",
  "Google Cloud",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "tRPC",
  "GraphQL",
]

export function SkillsMarquee() {
  // Duplicate the list for seamless scroll
  const track = [...skills, ...skills]

  return (
    <div className={`relative py-4 ${styles.marqueeWrap}`}>
      <div className={`flex ${styles.marqueeTrack}`}>
        {track.map((label, i) => (
          <Badge key={`${label}-${i}`} variant="secondary" className="px-3 py-1 text-sm rounded-full border">
            {label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
