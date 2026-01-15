export function SteamRise() {
  return (
    <g className="translate-x-[100px] translate-y-[20px]">
      {[
        { cx: -15, cy: 0, r: 6, delay: "0s" },
        { cx: 0, cy: -10, r: 8, delay: "0.3s" },
        { cx: 15, cy: 0, r: 5, delay: "0.6s" },
      ].map((particle, i) => (
        <circle
          key={i}
          className="animate-steam-rise origin-center"
          cx={particle.cx}
          cy={particle.cy}
          r={particle.r}
          fill="#FFF8E7"
          opacity="0.6"
          style={{ animationDelay: particle.delay }}
        />
      ))}
    </g>
  )
}
