"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const mailto = useMemo(() => {
    const to = "hello@example.com"
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Your Name"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    return `mailto:${to}?subject=${subject}&body=${body}`
  }, [name, email, message])

  return (
    <section id="contact" className="py-16 md:py-24 border-t">
      <div className="container max-w-3xl px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Contact</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Have a project in mind or want to collaborate? Let’s build something great.
        </p>
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = mailto
          }}
          aria-label="Contact form"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell me a bit about your idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <a className="text-sm text-muted-foreground underline-offset-4 hover:underline" href={mailto}>
              Or open in your email client
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
