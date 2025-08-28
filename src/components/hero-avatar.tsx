export function HeroAvatar() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl border bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 p-2 shadow-sm">
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <img src="/images/avatar.jpg" alt="Portrait" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
