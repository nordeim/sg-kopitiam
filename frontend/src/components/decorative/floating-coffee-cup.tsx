import { SteamRise } from "./steam-rise"

export function FloatingCoffeeCup() {
  return (
    <div 
      className="absolute right-[5%] bottom-[10%] w-[clamp(200px,30vw,400px)] opacity-90 animate-gentle-float hidden md:block"
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
        <SteamRise />
        
        {/* Cup Body */}
        <ellipse cx="100" cy="70" rx="70" ry="20" fill="#D4693B"/>
        <path d="M30 70 L40 180 Q100 200 160 180 L170 70" fill="#3D2B1F"/>
        
        {/* Coffee Surface */}
        <ellipse cx="100" cy="70" rx="60" ry="15" fill="#6B4423"/>
        <ellipse cx="100" cy="70" rx="55" ry="12" fill="#D4693B"/>
        
        {/* Handle */}
        <path 
          d="M165 90 Q200 90 200 130 Q200 170 165 170" 
          fill="none" 
          stroke="#3D2B1F" 
          strokeWidth="12" 
          strokeLinecap="round"
        />
        
        {/* Decorative Band */}
        <path 
          d="M35 120 L165 120" 
          stroke="#E8A857" 
          strokeWidth="4" 
          strokeDasharray="10 5"
        />
      </svg>
    </div>
  )
}
