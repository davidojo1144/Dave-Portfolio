import { ProjectCard } from "./project-card"
import { assets } from './../images/images';


export function ProjectsSection() {
  const projects = [
    {
      title: "Go Sharperly",
      description: "A logistics web application designed to help merchants manage, track, and optimize their shipping and delivery operations seamlessly.",
      image: assets.project1,
      tags: ["React vite", "Node js", "Mongo Db", "Redux", "Deep Linking"],
      live: "https://app.gosharperly.com/login",
      repo: "#",
    },
    {
      title: "Habit Tracker Mobile App",
      description: "Your personal companion for self-improvement. This app makes it effortless to form lasting habits with motivational streaks, customizable goals, and insightful data visualization.",
      image: assets.project2,
      tags: ["React Native", "Appwrite", "Expo"],
      live: "https://expo.dev/artifacts/eas/mSfegGGarZVxRZvxhsRmo7.apk",
      repo: "https://github.com/davidojo1144/Habit-Tracker-MobileApp",
    },
    {
      title: "Tody App Mobile",
      description: "TodyApp is a React Native-based mobile application for managing tasks, projects, and productivity. It integrates with the DummyJSON API for fetching mock data like todos and user information. The app includes features for task listing, filtering, project management, settings, and more.",
      image: assets.project3,
      tags: ["React Native", "DummyJson","Expo", "Uploads"],
      live: "https://expo.dev/artifacts/eas/4724ESmp5Ga232FtAyXTGh.apk",
      repo: "https://github.com/davidojo1144/Tody-App-Mobile",
    },
    {
      title: "Learn Now",
      description: "Learn Now, a free educational web platform providing accessible learning resources and basic subject lessons for those who cannot afford formal education.",
      image: assets.project4,
      tags: ["React", "Python", "Sql", "Vite", "Context Api", "Tailwind"],
      live: "https://learn-now-gamma.vercel.app/",
      repo: "https://github.com/davidojo1144/Learn_Now",
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
