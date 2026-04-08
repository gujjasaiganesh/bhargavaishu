import { useState } from "react";

interface MinimalIntroProps {
  onComplete?: () => void;
}

const MinimalIntro = ({ onComplete }: MinimalIntroProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleTap = () => {
    if (!isOpening && !isCompleted) {
      setIsOpening(true);
      setTimeout(() => {
        setIsCompleted(true);
        onComplete?.();
      }, 1200);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes slideOut {
          0% { transform: translateX(0) scaleX(1); opacity: 1; }
          100% { transform: translateX(var(--direction, 1) * 120%) scaleX(1.1); opacity: 0; }
        }

        .minimal-intro {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url('/watercolor-bg.png') center/cover no-repeat,
                      linear-gradient(135deg, #f5e6d3 0%, #faf5f0 50%, #f9f0e6 100%);
          background-blend-mode: overlay;
          transition: opacity 0.5s ease-out, pointer-events 0.5s ease-out;
          pointer-events: ${isCompleted ? "none" : "auto"};
          opacity: ${isCompleted ? 0 : 1};
          overflow: hidden;
        }

        .intro-backdrop {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 25% 60%, rgba(212, 160, 23, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 75% 40%, rgba(139, 46, 46, 0.04) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .intro-content {
          position: relative;
          z-index: 10;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: clamp(2rem, 5vw, 3rem);
          max-width: 90vw;
          animation: ${isOpening ? "fadeOut 0.4s ease-out forwards" : "none"};
        }

        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1) translateY(0); }
          100% { opacity: 0; transform: scale(0.98) translateY(-30px); }
        }

        .intro-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(3.5rem, 14vw, 6rem);
          font-weight: 400;
          letter-spacing: 0.05em;
          color: rgba(42, 20, 10, 0.95);
          margin: 0 0 2rem 0;
          animation: ${isOpening ? "none" : "slideDown"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .intro-subtitle {
          font-family: "Cormorant", serif;
          font-size: clamp(1rem, 4vw, 1.6rem);
          font-weight: 300;
          letter-spacing: 0.1em;
          color: rgba(227, 130, 110, 0.8);
          text-transform: uppercase;
          margin: 0 0 2.5rem 0;
          animation: ${isOpening ? "none" : "slideDown"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
        }

        .intro-button {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.6rem, 2vw, 1rem);
          padding: clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 5vw, 2.5rem);
          background: linear-gradient(135deg, rgba(212, 160, 23, 0.1) 0%, rgba(139, 46, 46, 0.08) 100%);
          border: 2px solid rgba(212, 160, 23, 0.25);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.2s ease-out;
          font-family: inherit;
          animation: ${isOpening ? "none" : "slideDown"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }

        .intro-button:hover {
          background: linear-gradient(135deg, rgba(212, 160, 23, 0.15) 0%, rgba(139, 46, 46, 0.12) 100%);
          border-color: rgba(212, 160, 23, 0.4);
          transform: scale(1.05);
        }

        .intro-button:active {
          transform: scale(0.98);
        }

        .intro-button-text {
          font-family: "Cinzel", serif;
          font-size: clamp(0.8rem, 2vw, 1rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(42, 20, 10, 0.85);
          font-weight: 500;
        }

        .intro-arrow {
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .intro-arrow svg {
          width: clamp(1rem, 2.5vw, 1.2rem);
          height: clamp(1rem, 2.5vw, 1.2rem);
          stroke: rgba(212, 160, 23, 0.7);
          stroke-width: 1.5;
        }

        /* Curtains */
        .curtain {
          position: fixed;
          top: 0;
          width: 50%;
          height: 100%;
          z-index: 55;
          animation: ${isOpening ? "slideOut" : "none"} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          pointer-events: none;
        }

        .curtain-left {
          left: 0;
          background: linear-gradient(90deg, rgba(227, 130, 110, 0.9) 0%, rgba(227, 130, 110, 0.7) 50%, transparent 100%);
          --direction: -1;
        }

        .curtain-right {
          right: 0;
          background: linear-gradient(270deg, rgba(34, 139, 34, 0.9) 0%, rgba(34, 139, 34, 0.7) 50%, transparent 100%);
          --direction: 1;
        }

        @media (max-width: 640px) {
          .intro-content {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>

      <div className={`minimal-intro ${isCompleted ? "completed" : ""}`}>
        <div className="intro-backdrop" />

        <div className="intro-content">
          <h1 className="intro-title">Welcome</h1>
          <p className="intro-subtitle">To Our Celebration</p>

          <button
            onClick={handleTap}
            className="intro-button"
            aria-label="Open invitation"
            type="button"
          >
            <span className="intro-button-text">Tap to Open</span>
            <div className="intro-arrow">
              <svg fill="none" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>

        {isOpening && (
          <>
            <div className="curtain curtain-left" />
            <div className="curtain curtain-right" />
          </>
        )}
      </div>
    </>
  );
};

export default MinimalIntro;
