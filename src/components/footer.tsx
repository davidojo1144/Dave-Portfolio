export function Footer() {
  return (
    <footer className="py-10 border-t mt-auto">
      <div className="max-w-6xl px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {"© "}
          <span>{new Date().getFullYear()}</span> Built with care — animations, performance, and accessibility in mind.
        </p>
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          Available for freelance and full‑time roles.
        </div>
      </div>
    </footer>
  )
}
