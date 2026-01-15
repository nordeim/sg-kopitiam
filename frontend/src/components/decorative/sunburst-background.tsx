export function SunburstBackground() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-slow-rotate opacity-60 bg-texture-sunburst bg-center bg-no-repeat bg-[length:800px_800px]"
      />
    </div>
  )
}