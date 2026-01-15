export function BeanBounce() {
  return (
    <div className="flex gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      {[0, 0.2, 0.4].map((delay, i) => (
        <div
          key={i}
          className="w-4 h-6 bg-coffee-medium relative rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] animate-bean-bounce"
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-0.5 h-[40%] bg-espresso-dark rounded-full" />
        </div>
      ))}
    </div>
  )
}
