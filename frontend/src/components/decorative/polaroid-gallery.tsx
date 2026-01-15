export function Polaroid({ 
  rotation = "0deg", 
  image, 
  caption,
  delay = "0s" 
}: { 
  rotation?: string; 
  image: string; 
  caption: string;
  delay?: string;
}) {
  return (
    <div 
      className="bg-latte-cream p-3 pb-8 rounded-md shadow-lg hover:rotate-0 hover:scale-105 hover:z-10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
      style={{ transform: `rotate(${rotation})`, animationDelay: delay }}
    >
      <div className="w-full h-[150px] bg-gradient-to-br from-golden-hour-light to-coffee-light rounded-sm flex items-center justify-center font-display text-2xl text-espresso-dark/50 overflow-hidden">
        {image}
      </div>
      <p className="text-center font-display text-sm text-coffee-medium mt-3">{caption}</p>
    </div>
  )
}

export function PolaroidGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[500px] mx-auto md:mx-0">
      <Polaroid 
        rotation="-2deg" 
        image="1973" 
        caption="Uncle Lim's first stall" 
        delay="0s"
      />
      <Polaroid 
        rotation="3deg" 
        image="1980s" 
        caption="Vintage cup collection" 
        delay="0.2s"
      />
      <Polaroid 
        rotation="-1deg" 
        image="Today" 
        caption="Modern Tiong Bahru café" 
        delay="0.4s"
      />
    </div>
  )
}
