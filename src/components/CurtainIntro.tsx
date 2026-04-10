import { useState } from "react";

interface CurtainIntroProps {
  onComplete?: () => void;
}

const CurtainIntro = ({ onComplete }: CurtainIntroProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Call the callback after animation completes
    setTimeout(() => {
      onComplete?.();
    }, 1400); // Longer duration for the heavier velvet animation
  };

  return (
    <>
      <style>{`
        @keyframes curtainWaveLeft {
          0% {
            transform: translateX(0) skewX(0deg);
            transform-origin: right center;
          }
          50% {
            transform: translateX(-2px) skewX(-1deg);
          }
          100% {
            transform: translateX(calc(-100% - 20px)) skewX(0deg);
          }
        }

        @keyframes curtainWaveRight {
          0% {
            transform: translateX(0) skewX(0deg);
            transform-origin: left center;
          }
          50% {
            transform: translateX(2px) skewX(1deg);
          }
          100% {
            transform: translateX(calc(100% + 20px)) skewX(0deg);
          }
        }

        @keyframes topLightFade {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .curtain-left-open {
          animation: curtainWaveLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .curtain-right-open {
          animation: curtainWaveRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .light-fade {
          animation: topLightFade 1.2s ease-out forwards;
        }
      `}</style>

      {/* Curtain Overlay */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        style={{
          pointerEvents: isOpen ? "none" : "auto",
          transition: "opacity 300ms ease-out 1200ms",
        }}
      >
        {/* Dramatic Top Theatrical Lighting */}
        <div
          className={`absolute top-0 left-0 right-0 h-1/3 pointer-events-none z-40 ${
            isOpen ? "light-fade" : ""
          }`}
          style={{
            background: `radial-gradient(ellipse at center top, 
              rgba(255, 100, 100, 0.4) 0%, 
              rgba(200, 50, 50, 0.2) 30%, 
              transparent 100%)`,
          }}
        />

        {/* Left Curtain */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 transition-all z-30 ${
            isOpen ? "curtain-left-open" : ""
          }`}
          style={{
            background: `linear-gradient(135deg, 
              #4a0e0e 0%,
              #6b1f1f 8%,
              #8b2e2e 16%,
              #a63b3b 24%,
              #8b2e2e 32%,
              #6b1f1f 40%,
              #4a0e0e 50%,
              #5a1a1a 60%,
              #7a2525 70%,
              #9a3535 80%,
              #6a2020 90%,
              #4a0e0e 100%)`,
            filter: "drop-shadow(-30px 0 60px rgba(0, 0, 0, 0.7))",
          }}
        >
          {/* Deep Velvet Texture - Diagonal Weave */}
          <div className="absolute inset-0 opacity-40">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                {/* Rich velvet texture pattern */}
                <pattern id="velvet-texture-left" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.4" fill="rgba(0, 0, 0, 0.15)" />
                  <circle cx="5" cy="3" r="0.3" fill="rgba(0, 0, 0, 0.1)" />
                  <circle cx="3" cy="5" r="0.35" fill="rgba(0, 0, 0, 0.12)" />
                  <circle cx="7" cy="7" r="0.4" fill="rgba(0, 0, 0, 0.15)" />
                  <circle cx="2" cy="6" r="0.25" fill="rgba(255, 255, 255, 0.05)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#velvet-texture-left)" />
            </svg>
          </div>

          {/* Prominent Vertical Folds/Pleats - HIGHLY DETAILED */}
          <div className="absolute inset-0 opacity-80">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pleat-shadow-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 0, 0, 0.4)" />
                  <stop offset="50%" stopColor="rgba(0, 0, 0, 0)" />
                  <stop offset="100%" stopColor="rgba(255, 150, 100, 0.2)" />
                </linearGradient>
              </defs>

              {/* Ultra-dense vertical pleats for realistic curtain effect */}
              {Array.from({ length: 120 }).map((_, i) => {
                const offset = (i * 100) / 120;
                const isPleat = i % 3 === 0;
                const isShadow = i % 3 === 1;
                
                if (isPleat) {
                  return (
                    <line
                      key={`pleat-${i}`}
                      x1={`${offset}%`}
                      y1="0"
                      x2={`${offset}%`}
                      y2="100%"
                      stroke="rgba(0, 0, 0, 0.35)"
                      strokeWidth="1.2"
                    />
                  );
                } else if (isShadow) {
                  return (
                    <line
                      key={`shadow-${i}`}
                      x1={`${offset}%`}
                      y1="0"
                      x2={`${offset}%`}
                      y2="100%"
                      stroke="rgba(255, 100, 80, 0.15)"
                      strokeWidth="0.8"
                    />
                  );
                }
                return null;
              })}
            </svg>
          </div>

          {/* Bottom Gathered Fabric Effect */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: `linear-gradient(to top, 
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.15) 50%,
                transparent 100%)`,
              borderRadius: "50% 50% 0 0",
            }}
          />

          {/* Subtle Depth Shadow on Edge */}
          <div
            className="absolute top-0 right-0 w-8 h-full pointer-events-none"
            style={{
              background: `linear-gradient(to left, 
                rgba(0, 0, 0, 0.6) 0%,
                transparent 100%)`,
            }}
          />
        </div>

        {/* Right Curtain */}
        <div
          className={`absolute right-0 top-0 h-full w-1/2 transition-all z-30 ${
            isOpen ? "curtain-right-open" : ""
          }`}
          style={{
            background: `linear-gradient(45deg, 
              #4a0e0e 0%,
              #6b1f1f 8%,
              #8b2e2e 16%,
              #a63b3b 24%,
              #8b2e2e 32%,
              #6b1f1f 40%,
              #4a0e0e 50%,
              #5a1a1a 60%,
              #7a2525 70%,
              #9a3535 80%,
              #6a2020 90%,
              #4a0e0e 100%)`,
            filter: "drop-shadow(30px 0 60px rgba(0, 0, 0, 0.7))",
          }}
        >
          {/* Deep Velvet Texture - Diagonal Weave */}
          <div className="absolute inset-0 opacity-40">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <pattern id="velvet-texture-right" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.4" fill="rgba(0, 0, 0, 0.15)" />
                  <circle cx="5" cy="3" r="0.3" fill="rgba(0, 0, 0, 0.1)" />
                  <circle cx="3" cy="5" r="0.35" fill="rgba(0, 0, 0, 0.12)" />
                  <circle cx="7" cy="7" r="0.4" fill="rgba(0, 0, 0, 0.15)" />
                  <circle cx="2" cy="6" r="0.25" fill="rgba(255, 255, 255, 0.05)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#velvet-texture-right)" />
            </svg>
          </div>

          {/* Prominent Vertical Folds/Pleats - HIGHLY DETAILED */}
          <div className="absolute inset-0 opacity-80">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              {/* Ultra-dense vertical pleats for realistic curtain effect */}
              {Array.from({ length: 120 }).map((_, i) => {
                const offset = (i * 100) / 120;
                const isPleat = i % 3 === 0;
                const isShadow = i % 3 === 1;
                
                if (isPleat) {
                  return (
                    <line
                      key={`pleat-${i}`}
                      x1={`${offset}%`}
                      y1="0"
                      x2={`${offset}%`}
                      y2="100%"
                      stroke="rgba(0, 0, 0, 0.35)"
                      strokeWidth="1.2"
                    />
                  );
                } else if (isShadow) {
                  return (
                    <line
                      key={`shadow-${i}`}
                      x1={`${offset}%`}
                      y1="0"
                      x2={`${offset}%`}
                      y2="100%"
                      stroke="rgba(255, 100, 80, 0.15)"
                      strokeWidth="0.8"
                    />
                  );
                }
                return null;
              })}
            </svg>
          </div>

          {/* Bottom Gathered Fabric Effect */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: `linear-gradient(to top, 
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.15) 50%,
                transparent 100%)`,
              borderRadius: "50% 50% 0 0",
            }}
          />

          {/* Subtle Depth Shadow on Edge */}
          <div
            className="absolute top-0 left-0 w-8 h-full pointer-events-none"
            style={{
              background: `linear-gradient(to right, 
                rgba(0, 0, 0, 0.6) 0%,
                transparent 100%)`,
            }}
          />
        </div>

        {/* Tap to Open Text */}
        <div
          className={`absolute inset-0 flex items-center justify-center z-40 transition-all duration-700 ${
            isOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="text-center px-6 max-w-md">
            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-4 mb-8 opacity-75">
              <div className="h-[0.5px] w-12 bg-white/70"></div>
              <span className="text-white/70 text-sm font-serif">✦</span>
              <div className="h-[0.5px] w-12 bg-white/70"></div>
            </div>

            {/* Main Text */}
            <div className="space-y-6">
              <p className="font-script text-5xl md:text-7xl text-white drop-shadow-lg leading-tight" style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)" }}>
                Welcome
              </p>
              <p className="font-playfair text-lg md:text-2xl text-white/90 italic font-light tracking-wide drop-shadow-md" style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)" }}>
                to our special wedding
              </p>
            </div>

            {/* Tap to Open Prompt */}
            <div className="mt-12 md:mt-16">
              <button
                onClick={handleOpen}
                className="group relative inline-flex flex-col items-center gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-8 py-6 transition-all duration-300 hover:scale-110"
              >
                <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-white/80 group-hover:text-white transition-colors duration-300 drop-shadow-md" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.4)" }}>
                  Tap to Open
                </p>

                {/* Animated Arrow */}
                <div className="flex flex-col items-center gap-1">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white transition-colors duration-300 animate-bounce drop-shadow-md"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Bottom Decorative Line */}
            <div className="mt-12 flex items-center justify-center gap-3 opacity-60">
              <div className="h-[0.5px] w-8 bg-white/50"></div>
              <span className="text-white/50 text-xs font-serif">✦</span>
              <div className="h-[0.5px] w-8 bg-white/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Fade-in + Slide-up */}
      <div
        className={`transition-all duration-1000 ease-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{
          transitionDelay: isOpen ? "300ms" : "0ms",
        }}
      >
        {/* Content will be rendered by parent component */}
      </div>
    </>
  );
};

export default CurtainIntro;
