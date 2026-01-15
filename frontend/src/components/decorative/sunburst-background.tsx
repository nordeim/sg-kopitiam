export function SunburstBackground() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-slow-rotate opacity-15"
        style={{
          background: `repeating-conic-gradient(
            from 0deg,
            rgb(var(--color-golden-hour)) 0deg 10deg,
            rgb(var(--color-latte-cream-warm)) 10deg 20deg
          )`
        }}
      />
    </div>
  )
}
