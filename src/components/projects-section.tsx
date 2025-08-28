import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  const projects = [
    {
      title: "Cross‑Platform Onboarding",
      description: "Animated, multi-step onboarding flow for mobile and web with deep-link auth and cloud sync.",
      image: "/images/project-1.jpg",
      tags: ["React Native", "Clerk", "Animations", "Deep Linking"],
      live: "#",
      repo: "#",
    },
    {
      title: "Realtime Chat Kit",
      description: "A realtime chat with presence, typing indicators, and message reactions.",
      image: "/images/project-2.jpg",
      tags: ["React", "Firebase", "Tailwind", "Framer Motion"],
      live: "#",
      repo: "#",
    },
    {
      title: "Serverless Notes",
      description: "Offline‑first notes app with instant sync, RLS, and image uploads.",
      image: "/images/project-3.jpg",
      tags: ["Supabase", "RLS", "PWA", "Uploads"],
      live: "#",
      repo: "#",
    },
    {
      title: "Headless Commerce",
      description: "Fast cart, payments, and product search with a clean, accessible design.",
      image: "/images/project-4.jpg",
      tags: ["React", "Stripe", "Vite", "SEO"],
      live: "#",
      repo: "#",
    },
     {
      title: "Headless Commerce",
      description: "Fast cart, payments, and product search with a clean, accessible design.",
      image: "/images/project-4.jpg",
      tags: ["React", "Stripe", "Vite", "SEO"],
      live: "#",
      repo: "#",
    },
     {
      title: "Headless Commerce",
      description: "Fast cart, payments, and product search with a clean, accessible design.",
      image: "/images/project-4.jpg",
      tags: ["React", "Stripe", "Vite", "SEO"],
      live: "#",
      repo: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 border-t">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Projects</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">A few things I loved building recently</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              image={p.image}
              tags={p.tags as string[]}
              live={p.live}
              repo={p.repo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
