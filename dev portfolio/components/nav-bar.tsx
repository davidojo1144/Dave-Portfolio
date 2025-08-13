"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Github, Linkedin, Mail, Menu } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container max-w-6xl px-4 h-14 flex items-center justify-between mx-auto">
        <Link href="#" className="font-semibold tracking-tight">
          <span className="text-foreground">dev</span>
          <span className="text-emerald-500">.portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="Email">
            <a href="mailto:hello@example.com" target="_blank" rel="noreferrer">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground hover:opacity-80"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <Button asChild variant="outline" size="icon" aria-label="Email">
                    <a href="mailto:hello@example.com" target="_blank" rel="noreferrer">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" aria-label="GitHub">
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
