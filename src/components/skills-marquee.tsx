"use client"

import styles from "./skills-marquee.module.css"

const skills: {} = [
  "React Native",
  "React",
  "Vite",
  "MERN",
  "TypeScript",
  "JavaScript",
  "Java",
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
  "Git"
]

export function SkillsMarquee() {
  const track = [...skills, ...skills]

  return (
    <div className={`relative py-4 ${styles.marqueeWrap}`}>
      <div className={`flex ${styles.marqueeTrack}`}>
        {track.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="px-3 py-2 text-md rounded-full border bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
