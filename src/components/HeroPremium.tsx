import { useEffect, useState } from "react";
import { invitation, t } from "@/config/invitation";

const { couple, event, families } = invitation;

interface HeroPremiumProps {
  lang: "en" | "te";
}

const HeroPremium = ({ lang }: HeroPremiumProps) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes revealGraceful {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatingProp {
          0%, 100% { opacity: 0.08; transform: translateY(0) rotate(0deg); }
          50% { opacity: 0.12; transform: translateY(-8px) rotate(1deg); }
        }

        .hero-premium {
          position: relative;
          min-h-[100svh];
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 3rem);
          background: linear-gradient(135deg, #f5e6d3 0%, #faf5f0 50%, #f9f0e6 100%);
          overflow: hidden;
        }

        /* Subtle Gradient Background */
        .hero-gradient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(circle at 100% 0%, rgba(212, 160, 23, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(139, 46, 46, 0.04) 0%, transparent 50%);
        }

        /* Wedding Props - Subtle Background */
        .wedding-prop {
          position: absolute;
          pointer-events: none;
          opacity: 0.08;
          animation: floatingProp 8s ease-in-out infinite;
          font-size: clamp(3rem, 20vw, 8rem);
        }

        .prop-1 { top: 5%; left: 5%; animation-delay: 0s; }
        .prop-2 { top: 10%; right: 8%; animation-delay: 1s; font-size: clamp(2.5rem, 18vw, 6rem); }
        .prop-3 { bottom: 10%; left: 8%; animation-delay: 2s; }
        .prop-4 { bottom: 8%; right: 5%; animation-delay: 3s; font-size: clamp(2rem, 15vw, 5rem); }

        /* Content Container */
        .hero-content {
          position: relative;
          z-10;
          max-width: 1000px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* Logo */
        .hero-logo {
          display: inline-block;
          margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
          animation: ${revealed ? "revealGraceful" : "none"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: ${revealed ? 1 : 0};
        }

        .hero-logo img {
          width: clamp(70px, 18vw, 140px);
          height: auto;
          object-fit: contain;
          opacity: 0.9;
          mix-blend-mode: multiply;
        }

        /* Blessing Text */
        .hero-blessing {
          font-family: "Cinzel", serif;
          font-size: clamp(0.75rem, 2vw, 1.1rem);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(212, 160, 23, 0.85);
          margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
          animation: ${revealed ? "revealGraceful" : "none"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
          font-weight: 400;
          line-height: 1.6;
        }

        /* Message */
        .hero-message {
          font-family: "Cormorant", serif;
          font-size: clamp(1rem, 2.3vw, 1.4rem);
          font-weight: 300;
          letter-spacing: 0.04em;
          line-height: 1.8;
          color: rgba(42, 20, 10, 0.8);
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          animation: ${revealed ? "revealGraceful" : "none"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
          padding: 0 clamp(1rem, 3vw, 2rem);
          max-width: 800px;
        }

        /* Names Container - CRITICAL: Keep names as single units */
        .names-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(2rem, 4vw, 3rem);
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          width: 100%;
        }

        /* Groom Card */
        .groom-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.5rem, 1.5vw, 1rem);
          animation: ${revealed ? "revealGraceful" : "none"} 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
        }

        /* Groom Name - Single visual unit */
        .name-groom {
          font-family: "Pinyon Script", cursive;
          font-size: clamp(2.8rem, 11vw, 5.5rem);
          font-weight: 400;
          letter-spacing: 0.04em;
          line-height: 1.1;
          color: rgba(42, 20, 10, 0.95);
          white-space: normal;
          word-spacing: normal;
          font-variant-ligatures: common-ligatures;
          text-rendering: optimizeLegibility;
          display: inline-block;
          max-width: 100%;
          padding: 0 clamp(0.5rem, 2vw, 1rem);
          overflow-wrap: break-word;
          hyphens: none;
        }

        /* Groom Parents */
        .groom-parents {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.3rem, 1vw, 0.6rem);
        }

        /* Separator */
        .name-separator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 4vw, 1.8rem);
          width: 100%;
          animation: ${revealed ? "revealGraceful" : "none"} 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both;
        }

        /* Bride Card */
        .bride-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.5rem, 1.5vw, 1rem);
          animation: ${revealed ? "revealGraceful" : "none"} 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both;
        }

        .separator-line {
          flex: 1;
          max-width: 100px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 160, 23, 0.4), transparent);
        }

        .separator-symbol {
          font-size: clamp(1.4rem, 4vw, 2rem);
          font-family: "Playfair Display", serif;
          color: rgba(227, 130, 110, 0.7);
          font-weight: 300;
        }

        /* Bride Name - Single visual unit */
        .name-bride {
          font-family: "Pinyon Script", cursive;
          font-size: clamp(2.8rem, 11vw, 5.5rem);
          font-weight: 400;
          letter-spacing: 0.04em;
          line-height: 1.1;
          color: rgba(42, 20, 10, 0.95);
          white-space: normal;
          word-spacing: normal;
          font-variant-ligatures: common-ligatures;
          text-rendering: optimizeLegibility;
          display: inline-block;
          max-width: 100%;
          padding: 0 clamp(0.5rem, 2vw, 1rem);
          overflow-wrap: break-word;
          hyphens: none;
        }

        /* Bride Parents */
        .bride-parents {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.3rem, 1vw, 0.6rem);
        }

        /* Parent Name */
        .parent-name {
          font-family: "Cormorant", serif;
          font-size: clamp(0.75rem, 1.8vw, 1rem);
          font-weight: 300;
          letter-spacing: 0.02em;
          color: rgba(42, 20, 10, 0.75);
          line-height: 1.5;
        }

        /* Sumuhurtham Box */
        .sumuhurtham-box {
          margin-top: clamp(2rem, 4vw, 3.5rem);
          padding: clamp(1.5rem, 3vw, 2.5rem);
          background: linear-gradient(135deg, rgba(212, 160, 23, 0.08) 0%, rgba(139, 46, 46, 0.06) 100%);
          border-top: 1px solid rgba(212, 160, 23, 0.2);
          border-bottom: 1px solid rgba(212, 160, 23, 0.2);
          animation: ${revealed ? "revealGraceful" : "none"} 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.75s both;
          width: 100%;
          max-width: 600px;
        }

        .sumuhurtham-label {
          font-family: "Cinzel", serif;
          font-size: clamp(0.7rem, 1.8vw, 0.95rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(212, 160, 23, 0.85);
          margin-bottom: clamp(0.6rem, 1.5vw, 1rem);
          font-weight: 500;
        }

        .sumuhurtham-time {
          font-family: "Playfair Display", serif;
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 400;
          letter-spacing: 0.03em;
          color: rgba(42, 20, 10, 0.92);
          line-height: 1.4;
          margin-bottom: clamp(0.6rem, 1.5vw, 1rem);
        }

        .sumuhurtham-note {
          font-family: "Cormorant", serif;
          font-size: clamp(0.95rem, 2.2vw, 1.3rem);
          font-weight: 300;
          letter-spacing: 0.03em;
          color: rgba(227, 130, 110, 0.8);
          font-style: italic;
          line-height: 1.5;
        }

        /* Responsive Adjustments */
        @media (max-width: 640px) {
          .hero-premium {
            padding: 1.5rem 1rem;
          }

          .hero-message {
            padding: 0;
          }

          .name-separator {
            gap: 0.8rem;
          }

          .separator-line {
            max-width: 70px;
          }
        }

        @media (max-width: 480px) {
          .hero-logo img {
            max-width: 100px;
          }
        }
      `}</style>

      <section className="hero-premium" lang={lang}>
        <div className="hero-gradient" />

        {/* Wedding Props */}
        <div className="wedding-prop prop-1">🌸</div>
        <div className="wedding-prop prop-2">🌺</div>
        <div className="wedding-prop prop-3">🌼</div>
        <div className="wedding-prop prop-4">🎆</div>

        {/* Content */}
        <div className="hero-content">
          {/* Logo */}
          <div className="hero-logo">
            <img src="/logo.png" alt="B&V Logo" />
          </div>

          {/* Blessing */}
          <div className="hero-blessing">
            {t(event.blessing, lang)}
          </div>

          {/* Message */}
          <div className="hero-message">
            {t(event.message, lang)}
          </div>

          {/* Names - Perfect composition */}
          <div className="names-container">
            {/* Groom Section */}
            <div className="groom-card">
              <span className="name-groom">{t(couple.groom, lang)}</span>
              <div className="groom-parents">
                <div className="parent-name">{families.groomParentsEn}</div>
              </div>
            </div>

            {/* Separator */}
            <div className="name-separator">
              <div className="separator-line" />
              <span className="separator-symbol">&</span>
              <div className="separator-line" />
            </div>

            {/* Bride Section */}
            <div className="bride-card">
              <span className="name-bride">{t(couple.bride, lang)}</span>
              <div className="bride-parents">
                <div className="parent-name">{families.brideParentsEn}</div>
              </div>
            </div>
          </div>

          {/* Parents Section */}
          {/* Removed - parents now displayed below respective names */}

          {/* Sumuhurtham */}
          <div className="sumuhurtham-box">
            <div className="sumuhurtham-label">
              {t(event.sumuhurthamLabel, lang)}
            </div>
            <div className="sumuhurtham-time">
              {event.sumuhurthamEn}
            </div>
            <div className="sumuhurtham-note">
              {event.sumuhurthamNoteEn}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPremium;
