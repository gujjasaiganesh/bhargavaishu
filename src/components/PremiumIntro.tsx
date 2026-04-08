import { useState, useEffect } from "react";

interface PremiumIntroProps {
  onComplete?: () => void;
}

const PremiumIntro = ({ onComplete }: PremiumIntroProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isOpening) {
      const timer = setTimeout(() => {
        setIsCompleted(true);
        onComplete?.();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpening, onComplete]);

  return (
    <>
      <style>{`
        @keyframes shimmerGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(227, 130, 110, 0.2); }
          50% { text-shadow: 0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(227, 130, 110, 0.4); }
        }

        @keyframes mandalaReveal {
          0% { opacity: 0; transform: scale(0.8) rotate(0deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes floatingPetal {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px) rotate(360deg); opacity: 0; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes slideOutLeft {
          0% { transform: translateX(0) skewX(0deg); opacity: 1; }
          100% { transform: translateX(-150%) skewX(-5deg); opacity: 0; }
        }

        @keyframes slideOutRight {
          0% { transform: translateX(0) skewX(0deg); opacity: 1; }
          100% { transform: translateX(150%) skewX(5deg); opacity: 0; }
        }

        .premium-intro-container {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #F5E8D8 0%, #FFF5E6 50%, #FBF3E6 100%);
          transition: opacity 0.8s ease-out;
          pointer-events: ${isCompleted ? "none" : "auto"};
        }

        .premium-intro-container.completed {
          opacity: 0;
          pointer-events: none;
        }

        .intro-backdrop {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(227, 130, 110, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 70% 50%, rgba(34, 139, 34, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .intro-content {
          position: relative;
          z-10;
          text-align: center;
          padding: 2rem 1rem;
          max-width: 95vw;
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .mandala-backdrop {
          position: absolute;
          width: 300px;
          height: 300px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.08;
          animation: mandalaReveal 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          pointer-events: none;
        }

        .intro-decorative-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.75rem, 3vw, 1.5rem);
          margin: 1.5rem 0;
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
          width: 100%;
        }

        .intro-line {
          height: 1px;
          flex: 0 1 clamp(2rem, 8vw, 4rem);
          background: linear-gradient(90deg, transparent, rgba(227, 130, 110, 0.6), transparent);
        }

        .intro-symbol {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          color: rgba(255, 215, 0, 0.85);
          line-height: 1;
        }

        .intro-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(3rem, 12vw, 6rem);
          font-weight: 400;
          letter-spacing: 0.08em;
          line-height: 1.1;
          color: rgba(42, 20, 10, 0.9);
          margin: 0.5rem 0;
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards;
          opacity: 0;
          word-spacing: normal;
          text-align: center;
        }

        .intro-title.shimmer {
          animation: shimmerGlow 2s ease-in-out infinite;
        }

        .intro-subtitle {
          font-family: "Cormorant", serif;
          font-size: clamp(1.1rem, 4vw, 1.8rem);
          font-weight: 300;
          letter-spacing: 0.12em;
          line-height: 1.4;
          color: rgba(227, 130, 110, 0.8);
          text-transform: uppercase;
          margin: 1.5rem 0 2.5rem 0;
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
          opacity: 0;
          text-align: center;
        }

        .intro-cta-button {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 5vw, 2.5rem);
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(34, 139, 34, 0.1) 100%);
          border: 2px solid rgba(227, 130, 110, 0.3);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
          opacity: 0;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .intro-cta-button:hover {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(34, 139, 34, 0.15) 100%);
          border-color: rgba(227, 130, 110, 0.6);
          transform: scale(1.05);
        }

        .intro-cta-text {
          font-family: "Cinzel", serif;
          font-size: clamp(0.75rem, 2vw, 0.95rem);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(42, 20, 10, 0.85);
          font-weight: 500;
          line-height: 1.2;
          text-align: center;
        }

        .intro-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .intro-arrow svg {
          width: 1.2rem;
          height: 1.2rem;
          stroke: rgba(227, 130, 110, 0.6);
          stroke-width: 1.5;
        }

        .petal {
          position: fixed;
          pointer-events: none;
        }

        .petal.floating {
          width: 20px;
          height: 20px;
          border-radius: 50% 0;
          opacity: 0.6;
        }

        .curtain-left {
          position: fixed;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, rgba(227, 130, 110, 0.95) 0%, rgba(227, 130, 110, 0.9) 50%, transparent 100%);
          z-index: 60;
          animation: ${isOpening ? "slideOutLeft" : "none"} 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          pointer-events: none;
        }

        .curtain-right {
          position: fixed;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(270deg, rgba(34, 139, 34, 0.95) 0%, rgba(34, 139, 34, 0.9) 50%, transparent 100%);
          z-index: 60;
          animation: ${isOpening ? "slideOutRight" : "none"} 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          pointer-events: none;
        }

        .opening-shimmer {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255, 215, 0, 0.4) 0%, transparent 70%);
          z-index: 55;
          opacity: 0;
          pointer-events: none;
          animation: ${isOpening ? "shimmer 1s ease-out forwards" : "none"};
        }

        @keyframes shimmer {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        .intro-flower-accent {
          position: absolute;
          font-size: 3rem;
          opacity: 0.15;
          animation: fadeInUp 1.2s ease-out forwards;
        }

        .intro-flower-topleft {
          top: 2rem;
          left: 2rem;
          animation-delay: 0.3s;
        }

        .intro-flower-bottomright {
          bottom: 2rem;
          right: 2rem;
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Main Container */}
      <div className={`premium-intro-container ${isCompleted ? "completed" : ""}`}>
        {/* Backdrop Pattern */}
        <div className="intro-backdrop" />

        {/* Central Content */}
        <div className="intro-content">
          {/* Mandala Backdrop */}
          <svg className="mandala-backdrop" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(227, 130, 110, 0.4)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(34, 139, 34, 0.3)" strokeWidth="0.5" />
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
                  stroke="rgba(227, 130, 110, 0.2)"
                  strokeWidth="0.3"
                />
              );
            })}
          </svg>

          {/* Top Decorative Line */}
          <div className="intro-decorative-line">
            <div className="intro-line" />
            <div className="intro-symbol">✦</div>
            <div className="intro-line" />
          </div>

          {/* Flower Accents */}
          <div className="intro-flower-accent intro-flower-topleft">🌸</div>
          <div className="intro-flower-accent intro-flower-bottomright">🌸</div>

          {/* Main Title */}
          <h1 className="intro-title shimmer">Welcome</h1>

          {/* Subtitle */}
          <p className="intro-subtitle">To Our Celebration</p>

          {/* CTA Button */}
          <button
            onClick={() => setIsOpening(true)}
            className="intro-cta-button"
            aria-label="Open invitation"
          >
            <span className="intro-cta-text">Tap to Open</span>
            <div className="intro-arrow">
              <svg fill="none" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>

          {/* Bottom Decorative Line */}
          <div className="intro-decorative-line" style={{ marginBottom: 0, marginTop: "2rem" }}>
            <div className="intro-line" />
            <div className="intro-symbol">✦</div>
            <div className="intro-line" />
          </div>
        </div>

        {/* Animated Curtains */}
        {isOpening && (
          <>
            <div className="curtain-left" />
            <div className="curtain-right" />
            <div className="opening-shimmer" />
          </>
        )}

        {/* Floating Petals */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`petal-${i}`}
            className="petal floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: "100%",
              backgroundColor: ["#FFD700", "#E3826E", "#228B22"][Math.floor(Math.random() * 3)],
              animation: `floatingPetal ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default PremiumIntro;
