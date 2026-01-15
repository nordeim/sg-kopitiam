export function CoffeeRing({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="opacity-10"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(var(--color-golden-hour))" strokeWidth="1" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="rgb(var(--color-sunrise-coral-dark))" strokeWidth="1" opacity="0.8" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="rgb(var(--color-coffee-medium))" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>
  )
}
