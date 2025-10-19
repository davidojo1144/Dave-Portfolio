import { ProjectCard } from "./project-card"
import { assets } from './../images/images';


export function ProjectsSection() {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A modern real-time chat web application designed for seamless communication and instant message delivery.  Built with efficiency and scalability in mind, it leverages Socket.io for live bidirectional communication between users and the server, enabling instant updates without page reloads. The project showcases my ability to integrate frontend frameworks with real-time backend services, and demonstrates strong skills in JavaScript and Socket.io",
      image: assets.project10,
      tags: ["React vite", "Node js", "Mongo Db", "Socket.io", "Redux", "Express",],
      live: "https://app.gosharperly.com/login",
      repo: "https://github.com/davidojo1144/Realtime-Chat-App",
    },
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
      title: "Veegil Bank",
      description: "Veegil Bank — a modern digital banking experience built for simplicity, speed, and security. Manage your money, make payments, and grow your finances — all in one smart app.",
      image: assets.project9,
      tags: ["React vite", "Tailwind", "Context Api", "Next  js", "Nest  js"],
      live: "https://veegil-bank-3z51.onrender.com/",
      repo: "#",
    },
    {
      title: "E Commerce",
      description: "The Cart That Gets You. Get personalized picks, lightning-fast delivery, and a seamless way to shop your favorite brands.",
      image: assets.project7,
      tags: ["React vite", "Tailwind", "Context Api", "Dummy Json"],
      live: "https://my-e-commerce-project-phi.vercel.app/",
      repo: "https://github.com/davidojo1144/My-E-commerce-Project",
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
      title: "Real Estate",
      description: "Find Your Key. Not Just A House. Discover the home that’s meant for your story.",
      image: assets.project8,
      tags: ["React vite", "Tailwind", "Context Api"],
      live: "https://my-real-estate-website-project.vercel.app/#Header",
      repo: "https://github.com/davidojo1144/MyRealEstateWebsiteProject",
    },
     {
      title: "Jobs Mobile App",
      description: "Stop scrolling, start applying. We streamline the job hunt for software engineers. Find relevant roles faster, apply instantly, and track your progress toward landing your next great opportunity.",
      image: assets.project6,
      tags: ["React Native", "Appwrite", "Restful Api", "Expo"],
      live: "#",
      repo: "https://github.com/davidojo1144/Jobs_Mobile_App",
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
      title: "D clutter",
      description: "Turn your unused household items into cash and find hidden treasures. Declutter provides a simple, trusted marketplace for your community to buy and sell pre-loved goods effortlessly.",
      image: assets.project5,
      tags: ["React Vite", "Java", "Sql", "Context Api", "Tailwind"],
      live: "https://d-clutter-project.vercel.app/",
      repo: "https://github.com/davidojo1144/D-Clutter-Project",
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
