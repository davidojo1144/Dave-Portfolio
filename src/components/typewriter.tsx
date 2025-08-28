"use client"

import { useEffect, useState } from "react"

type TypewriterProps = {
  words?: string[]
  typingSpeedMs?: number
  pauseMs?: number
}

export function Typewriter({
  words = ["Mobile App Developer", "Web App Developer", "Backend Curious", "Product‑Focused Creator", "Problem Solver", "Solution Oriented Engineer"],
  typingSpeedMs = 120,
  pauseMs = 1200,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (subIndex < current.length) setSubIndex((s) => s + 1)
          else setDeleting(true)
        } else {
          if (subIndex > 0) setSubIndex((s) => s - 1)
          else {
            setDeleting(false)
            setIndex((i) => i + 1)
          }
        }
      },
      deleting ? typingSpeedMs / 2 : typingSpeedMs,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, typingSpeedMs])

  useEffect(() => {
    if (!deleting && subIndex === words[index % words.length].length) {
      const pause = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(pause)
    }
  }, [subIndex, deleting, index, words, pauseMs])

  const text = words[index % words.length].slice(0, subIndex)
  return (
    <span className="inline-flex items-center">
      <span className="text-emerald-500">{text}</span>
      <span className="ml-0.5 h-6 w-[2px] bg-emerald-500 animate-pulse" aria-hidden="true" />
    </span>
  )
}
