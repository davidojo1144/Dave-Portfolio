"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function NavBar() {
  const [open, setOpen] = useState(false)


  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header className="top-0 z-50 w-full fixed border-b bg-white/80 backdrop-blur dark:bg-neutral-950/80">
      <div className="max-w-6xl px-4 h-14 flex items-center justify-between mx-auto">
        <a href="#" className="font-semibold tracking-tight">
          <span>Dave</span>
          <span className="text-emerald-500">.portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            href="mailto:davco1144@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            href="https://github.com/davidojo1144"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            href="https://www.linkedin.com/in/david-ojo-ba1b7b2a7"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Open Menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-neutral-900 border-l shadow-xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Mobile Menu"
        >
          <div className="flex items-center justify-between h-14 px-4 border-b">
            <span className="font-semibold">Menu</span>
            <button
              aria-label="Close Menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 grid gap-4 bg-gray-500">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-black dark:text-black hover:opacity-80"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
                href="mailto:davco1144@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border "
                href="https://github.com/davidojo1144"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
                href="https://www.linkedin.com/in/david-ojo-ba1b7b2a7"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  )
}
