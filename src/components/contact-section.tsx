"use client"

import { useMemo, useState } from "react"
import { Send } from "lucide-react"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const mailto = useMemo(() => {
    const to = "davco1144@gmail.com"
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Your Name"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    return `mailto:${to}?subject=${subject}&body=${body}`
  }, [name, email, message])

  return (
    <section id="contact" className="py-16 md:py-24 border-t">
      <div className="max-w-3xl px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Contact</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
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
            <input
              id="name"
              className="h-10 px-3 rounded-md border bg-white dark:bg-neutral-900"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="h-10 px-3 rounded-md border bg-white dark:bg-neutral-900"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              className="px-3 py-2 rounded-md border bg-white dark:bg-neutral-900"
              placeholder="Tell me a bit about your idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition-colors"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </button>
            <a
              className="text-sm text-neutral-600 dark:text-neutral-400 underline-offset-4 hover:underline"
              href={mailto}
            >
              Or open in your email client
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
