export function Footer() {
  return (
    <footer className="py-10 border-t mt-auto">
      <div className="container max-w-6xl px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {"© "}
          <span>{new Date().getFullYear()}</span> Built with care — animations, performance, and accessibility in mind.
        </p>
        <div className="text-xs text-muted-foreground">Available for freelance and full‑time roles.</div>
      </div>
    </footer>
  )
}
