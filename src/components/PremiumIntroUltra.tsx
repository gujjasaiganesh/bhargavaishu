import { useState, useCallback } from "react";

interface PremiumIntroProps {
  onComplete?: () => void;
}

const PremiumIntroUltra = ({ onComplete }: PremiumIntroProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Instant callback with no delay
  const handleTapOpen = useCallback(() => {
    if (!isOpening && !isCompleted) {
      setIsOpening(true);
      // Animation completes, then callback
      setTimeout(() => {
        setIsCompleted(true);
        onComplete?.();
      }, 1600);
    }
  }, [isOpening, isCompleted, onComplete]);

  return (
    <>
      <style>{`
        /* Color Palette */
        :root {
          --gold: #D4A017;
          --maroon: #8B2E2E;
          --emerald: #228B22;
          --ivory: #F9F5F0;
          --peach: #E3826E;
        }

        /* ===== INTRO CONTAINER ===== */
        .premium-intro-ultra {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #F9F5F0 0%, #FFF5E6 50%, #FBF3E6 100%);
          transition: opacity 0.5s ease-out, pointer-events 0.5s ease-out;
          pointer-events: ${isCompleted ? "none" : "auto"};
          opacity: ${isCompleted ? 0 : 1};
          overflow: hidden;
        }

        /* ===== BACKDROP PATTERNS ===== */
        .intro-backdrop-ultra {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(212, 160, 23, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(34, 139, 34, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        /* ===== CENTRAL CONTENT ===== */
        .intro-content-ultra {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: clamp(1rem, 5vw, 3rem) clamp(1.5rem, 5vw, 2.5rem);
          max-width: 90vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          animation: ${isOpening ? "contentFadeOut" : "contentScaleIn"} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes contentScaleIn {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes contentFadeOut {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.98) translateY(-20px);
          }
        }

        /* ===== MANDALA BACKDROP ===== */
        .mandala-backdrop-ultra {
          position: absolute;
          width: clamp(200px, 40vw, 400px);
          height: clamp(200px, 40vw, 400px);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.06;
          animation: mandalaRevealUltra 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          pointer-events: none;
        }

        @keyframes mandalaRevealUltra {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8) rotate(-10deg);
          }
          100% {
            opacity: 0.06;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
        }

        /* ===== DECORATIVE LINES ===== */
        .intro-decorative-line-ultra {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 4vw, 1.5rem);
          margin: clamp(1rem, 3vw, 1.5rem) 0;
          animation: fadeInUpUltra 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards;
          opacity: 0;
          width: 100%;
        }

        @keyframes fadeInUpUltra {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .intro-line-ultra {
          height: 1px;
          flex: 0 1 clamp(2.5rem, 10vw, 5rem);
          background: linear-gradient(90deg, transparent, rgba(212, 160, 23, 0.5), transparent);
        }

        .intro-symbol-ultra {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: rgba(212, 160, 23, 0.8);
          line-height: 1;
        }

        /* ===== TITLE ===== */
        .intro-title-ultra {
          font-family: "Playfair Display", serif;
          font-size: clamp(3.2rem, 14vw, 6.5rem);
          font-weight: 400;
          letter-spacing: 0.06em;
          line-height: 1.05;
          color: rgba(42, 20, 10, 0.95);
          margin: clamp(0.5rem, 2vw, 1rem) 0;
          animation: fadeInUpUltra 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s forwards;
          opacity: 0;
          word-spacing: normal;
          text-align: center;
          white-space: normal;
          word-wrap: break-word;
        }

        /* Shimmer effect */
        .intro-title-ultra::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmerSlide 3s infinite;
          pointer-events: none;
        }

        @keyframes shimmerSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* ===== SUBTITLE ===== */
        .intro-subtitle-ultra {
          font-family: "Cormorant", serif;
          font-size: clamp(1.2rem, 4.5vw, 2rem);
          font-weight: 300;
          letter-spacing: 0.1em;
          line-height: 1.3;
          color: rgba(227, 130, 110, 0.85);
          text-transform: uppercase;
          margin: clamp(1.2rem, 3vw, 2rem) 0;
          animation: fadeInUpUltra 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s forwards;
          opacity: 0;
          text-align: center;
        }

        /* ===== CTA BUTTON ===== */
        .intro-cta-button-ultra {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(0.6rem, 2vw, 0.9rem);
          padding: clamp(1.1rem, 4vw, 1.6rem) clamp(1.6rem, 6vw, 2.8rem);
          background: linear-gradient(135deg, rgba(212, 160, 23, 0.08) 0%, rgba(34, 139, 34, 0.08) 100%);
          border: 2px solid rgba(212, 160, 23, 0.25);
          border-radius: 60px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUpUltra 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
          opacity: 0;
          backdrop-filter: blur(8px);
          text-align: center;
          font-family: inherit;
          border: none;
          background-color: transparent;
          position: relative;
        }

        .intro-cta-button-ultra:hover {
          background: linear-gradient(135deg, rgba(212, 160, 23, 0.15) 0%, rgba(34, 139, 34, 0.12) 100%);
          border-color: rgba(212, 160, 23, 0.45);
          transform: scale(1.06);
        }

        .intro-cta-button-ultra:active {
          transform: scale(0.98);
          transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .intro-cta-text-ultra {
          font-family: "Cinzel", serif;
          font-size: clamp(0.8rem, 2.5vw, 1.05rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(42, 20, 10, 0.88);
          font-weight: 500;
          line-height: 1.1;
          text-align: center;
        }

        .intro-arrow-ultra {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: bounceUltra 1.6s cubic-bezier(0.36, 0, 0.66, 1) infinite;
        }

        @keyframes bounceUltra {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .intro-arrow-ultra svg {
          width: clamp(1rem, 3vw, 1.3rem);
          height: clamp(1rem, 3vw, 1.3rem);
          stroke: rgba(212, 160, 23, 0.7);
          stroke-width: 1.5;
          transition: stroke 0.2s ease;
        }

        .intro-cta-button-ultra:hover .intro-arrow-ultra svg {
          stroke: rgba(212, 160, 23, 0.9);
        }

        /* ===== ANIMATED CURTAINS ===== */
        .curtain-left-ultra {
          position: fixed;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, rgba(227, 130, 110, 0.92) 0%, rgba(227, 130, 110, 0.85) 40%, transparent 100%);
          z-index: 55;
          animation: ${isOpening ? "slideOutLeftUltra" : "none"} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          pointer-events: none;
        }

        .curtain-right-ultra {
          position: fixed;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(270deg, rgba(34, 139, 34, 0.92) 0%, rgba(34, 139, 34, 0.85) 40%, transparent 100%);
          z-index: 55;
          animation: ${isOpening ? "slideOutRightUltra" : "none"} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          pointer-events: none;
        }

        @keyframes slideOutLeftUltra {
          0% {
            transform: translateX(0) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateX(-110%) scaleX(1.1);
            opacity: 0;
          }
        }

        @keyframes slideOutRightUltra {
          0% {
            transform: translateX(0) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateX(110%) scaleX(1.1);
            opacity: 0;
          }
        }

        /* ===== OPENING FLASH ===== */
        .opening-flash-ultra {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at center, rgba(212, 160, 23, 0.5) 0%, transparent 70%);
          z-index: 52;
          opacity: 0;
          pointer-events: none;
          animation: ${isOpening ? "flashBurst" : "none"} 0.8s ease-out forwards;
        }

        @keyframes flashBurst {
          0% { opacity: 0; }
          30% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* ===== FLOATING PETALS ===== */
        @keyframes floatingPetalUltra {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) translateX(var(--tx, 0)) rotate(var(--rot, 360deg));
            opacity: 0;
          }
        }

        .petal-ultra {
          position: fixed;
          pointer-events: none;
          border-radius: 50% 0;
        }

        /* ===== RESPONSIVE ADJUSTMENTS ===== */
        @media (max-width: 640px) {
          .intro-content-ultra {
            padding: 1.5rem 1rem;
          }

          .intro-decorative-line-ultra {
            margin: 0.8rem 0;
          }

          .intro-title-ultra {
            margin: 0.3rem 0;
          }

          .intro-subtitle-ultra {
            margin: 1rem 0;
          }

          .intro-cta-button-ultra {
            margin-top: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .intro-decorative-line-ultra {
            gap: 0.8rem;
          }

          .intro-line-ultra {
            flex: 0 1 clamp(1.5rem, 8vw, 3rem);
          }
        }
      `}</style>

      {/* Main Intro Container */}
      <div className={`premium-intro-ultra ${isCompleted ? "completed" : ""}`}>
        {/* Backdrop Patterns */}
        <div className="intro-backdrop-ultra" />

        {/* Central Content */}
        <div className="intro-content-ultra">
          {/* Mandala Backdrop */}
          <svg className="mandala-backdrop-ultra" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(212, 160, 23, 0.3)" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(227, 130, 110, 0.25)" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(34, 139, 34, 0.2)" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(212, 160, 23, 0.2)" strokeWidth="0.3" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              const cos = Math.cos((angle * Math.PI) / 180);
              const sin = Math.sin((angle * Math.PI) / 180);
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + cos * 45}
                  y2={50 + sin * 45}
                  stroke="rgba(212, 160, 23, 0.15)"
                  strokeWidth="0.2"
                />
              );
            })}
          </svg>

          {/* Top Decorative Line */}
          <div className="intro-decorative-line-ultra">
            <div className="intro-line-ultra" />
            <div className="intro-symbol-ultra">✦</div>
            <div className="intro-line-ultra" />
          </div>

          {/* Main Title */}
          <h1 className="intro-title-ultra">Welcome</h1>

          {/* Subtitle */}
          <p className="intro-subtitle-ultra">To Our Celebration</p>

          {/* CTA Button */}
          <button
            onClick={handleTapOpen}
            className="intro-cta-button-ultra"
            aria-label="Open invitation"
            type="button"
          >
            <span className="intro-cta-text-ultra">Tap to Open</span>
            <div className="intro-arrow-ultra">
              <svg fill="none" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          {/* Bottom Decorative Line */}
          <div className="intro-decorative-line-ultra" style={{ margin: "clamp(1.2rem, 3vw, 1.8rem) 0 0 0" }}>
            <div className="intro-line-ultra" />
            <div className="intro-symbol-ultra">✦</div>
            <div className="intro-line-ultra" />
          </div>
        </div>

        {/* Animated Curtains - Only render when opening */}
        {isOpening && (
          <>
            <div className="curtain-left-ultra" />
            <div className="curtain-right-ultra" />
            <div className="opening-flash-ultra" />
          </>
        )}

        {/* Floating Petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const colors = ["#D4A017", "#E3826E", "#228B22", "#FFD700"];
          const color = colors[i % colors.length];
          const tx = (Math.random() - 0.5) * 150;
          const rot = Math.random() * 360;
          const duration = 4.5 + Math.random() * 2;
          const delay = Math.random() * 0.8;

          return (
            <div
              key={`petal-${i}`}
              className="petal-ultra floating"
              style={{
                left: `${Math.random() * 100}%`,
                top: "102%",
                width: "18px",
                height: "18px",
                backgroundColor: color,
                opacity: 0.5,
                "--tx": `${tx}px`,
                "--rot": `${rot}deg`,
                animation: `floatingPetalUltra ${duration}s linear ${delay}s infinite`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
    </>
  );
};

export default PremiumIntroUltra;
