import { useEffect, useState } from "react";
import { invitation, t } from "@/config/invitation";

const { couple, event } = invitation;

interface HeroProps {
  lang: "en" | "te";
}

const HeroSectionUltra = ({ lang }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Stagger in after intro completes
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes revealFadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes letterByLetter {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatingWedding {
          0%, 100% { opacity: 0.08; transform: translateY(0) rotate(0deg); }
          50% { opacity: 0.12; transform: translateY(-10px) rotate(2deg); }
        }

        /* Wedding Props - Subtle Background */
        .wedding-prop-bg {
          position: absolute;
          opacity: 0.08;
          pointer-events: none;
          animation: floatingWedding 8s ease-in-out infinite;
        }

        .prop-haldi { top: 5%; left: 5%; font-size: clamp(2rem, 10vw, 4rem); animation-delay: 0s; }
        .prop-mehendi { top: 15%; right: 8%; font-size: clamp(2rem, 10vw, 4rem); animation-delay: 1s; }
        .prop-mandala { bottom: 15%; left: 10%; font-size: clamp(3rem, 12vw, 5rem); animation-delay: 2s; }
        .prop-kalash { bottom: 10%; right: 5%; font-size: clamp(2rem, 10vw, 4rem); animation-delay: 3s; }
        .prop-marigold-top { top: 25%; right: 15%; font-size: clamp(1.5rem, 8vw, 3rem); animation-delay: 0.5s; }

        .hero-section-ultra {
          position: relative;
          min-h-[100svh];
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-center;
          padding: clamp(1rem, 3vw, 3rem) clamp(1rem, 4vw, 2.5rem);
          overflow: hidden;
          background: linear-gradient(135deg, #F9F5F0 0%, #FFF5E6 50%, #FBF3E6 100%);
        }

        /* Gradient Background */
        .hero-gradient-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(circle at 100% 0%, rgba(212, 160, 23, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(34, 139, 34, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(227, 130, 110, 0.02) 0%, transparent 70%);
        }

        /* Content Container */
        .hero-content-ultra {
          position: relative;
          z-10;
          max-width: 900px;
          width: 100%;
        }

        /* Logo with stagger */
        .hero-logo-ultra {
          display: inline-block;
          margin-bottom: clamp(1rem, 3vw, 2rem);
          animation: ${loaded ? "revealFadeUp" : "none"} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: ${loaded ? 1 : 0};
        }

        .hero-logo-ultra img {
          width: clamp(60px, 15vw, 120px);
          height: auto;
          object-fit: contain;
          opacity: 0.9;
          mix-blend-mode: multiply;
        }

        /* Blessing Text */
        .hero-blessing-ultra {
          font-family: "Cinzel", serif;
          font-size: clamp(0.75rem, 2vw, 1rem);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(212, 160, 23, 0.85);
          margin-bottom: clamp(1.5rem, 3vw, 2rem);
          animation: ${loaded ? "revealFadeUp" : "none"} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards;
          opacity: ${loaded ? 1 : 0};
          font-weight: 400;
          line-height: 1.4;
        }

        /* Message */
        .hero-message-ultra {
          font-family: "Cormorant", serif;
          font-size: clamp(0.95rem, 2.5vw, 1.3rem);
          font-weight: 300;
          letter-spacing: 0.05em;
          line-height: 1.7;
          color: rgba(42, 20, 10, 0.8);
          margin-bottom: clamp(2rem, 4vw, 3rem);
          animation: ${loaded ? "revealFadeUp" : "none"} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
          opacity: ${loaded ? 1 : 0};
          text-align: center;
          padding: 0 clamp(1rem, 3vw, 2rem);
        }

        /* Couple Names Container */
        .hero-names-container-ultra {
          margin-bottom: clamp(2rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.5rem, 2vw, 1rem);
          align-items: center;
        }

        /* Groom Name */
        .hero-groom-ultra {
          font-family: "Playfair Display", serif;
          font-size: clamp(2.5rem, 10vw, 5rem);
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.1;
          color: rgba(42, 20, 10, 0.95);
          animation: ${loaded ? "revealFadeUp" : "none"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s forwards;
          opacity: ${loaded ? 1 : 0};
          word-wrap: break-word;
          text-align: center;
        }

        /* Separator with Ampersand */
        .hero-separator-ultra {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 4vw, 1.5rem);
          margin: clamp(0.5rem, 2vw, 1rem) 0;
          animation: ${loaded ? "revealFadeUp" : "none"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s forwards;
          opacity: ${loaded ? 1 : 0};
        }

        .separator-line-ultra {
          flex-grow: 1;
          max-width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 160, 23, 0.4), transparent);
        }

        .separator-ampersand-ultra {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-family: "Playfair Display", serif;
          color: rgba(227, 130, 110, 0.7);
          font-weight: 400;
        }

        /* Bride Name */
        .hero-bride-ultra {
          font-family: "Playfair Display", serif;
          font-size: clamp(2.5rem, 10vw, 5rem);
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.1;
          color: rgba(42, 20, 10, 0.95);
          animation: ${loaded ? "revealFadeUp" : "none"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.65s forwards;
          opacity: ${loaded ? 1 : 0};
          word-wrap: break-word;
          text-align: center;
        }

        /* Sumuhurtham Section */
        .hero-sumuhurtham-ultra {
          margin-top: clamp(2rem, 4vw, 3rem);
          padding: clamp(1.5rem, 3vw, 2.5rem);
          background: linear-gradient(135deg, rgba(212, 160, 23, 0.06) 0%, rgba(34, 139, 34, 0.04) 100%);
          border-top: 1px solid rgba(212, 160, 23, 0.2);
          border-bottom: 1px solid rgba(212, 160, 23, 0.2);
          animation: ${loaded ? "revealFadeUp" : "none"} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.75s forwards;
          opacity: ${loaded ? 1 : 0};
        }

        .sumuhurtham-label-ultra {
          font-family: "Cinzel", serif;
          font-size: clamp(0.7rem, 1.8vw, 0.9rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(212, 160, 23, 0.8);
          margin-bottom: clamp(0.5rem, 1vw, 0.8rem);
          font-weight: 500;
        }

        .sumuhurtham-time-ultra {
          font-family: "Playfair Display", serif;
          font-size: clamp(1.4rem, 4vw, 2rem);
          font-weight: 400;
          letter-spacing: 0.03em;
          color: rgba(42, 20, 10, 0.9);
          line-height: 1.3;
          margin-bottom: clamp(0.5rem, 1vw, 0.8rem);
          word-wrap: break-word;
        }

        .sumuhurtham-note-ultra {
          font-family: "Cormorant", serif;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          font-weight: 300;
          letter-spacing: 0.05em;
          color: rgba(227, 130, 110, 0.8);
          font-style: italic;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .hero-section-ultra {
            padding: 1rem;
          }

          .hero-message-ultra {
            padding: 0 0.5rem;
          }

          .hero-separator-ultra {
            gap: 0.8rem;
          }

          .separator-line-ultra {
            max-width: 60px;
          }
        }
      `}</style>

      <section className="hero-section-ultra" lang={lang}>
        {/* Gradient Background */}
        <div className="hero-gradient-bg" />

        {/* Wedding Props - Very Subtle */}
        <div className="wedding-prop-bg prop-haldi">🌸</div>
        <div className="wedding-prop-bg prop-mehendi">🌺</div>
        <div className="wedding-prop-bg prop-mandala">🎆</div>
        <div className="wedding-prop-bg prop-kalash">🏺</div>
        <div className="wedding-prop-bg prop-marigold-top">🌼</div>

        {/* Main Content */}
        <div className="hero-content-ultra">
          {/* Logo */}
          <div className="hero-logo-ultra">
            <img src="/logo.png" alt="B&V Logo" />
          </div>

          {/* Blessing */}
          <div className="hero-blessing-ultra">
            {t(event.blessing, lang)}
          </div>

          {/* Message */}
          <div className="hero-message-ultra">
            {t(event.message, lang)}
          </div>

          {/* Names Container */}
          <div className="hero-names-container-ultra">
            <h1 className="hero-groom-ultra">{t(couple.groom, lang)}</h1>

            <div className="hero-separator-ultra">
              <div className="separator-line-ultra" />
              <span className="separator-ampersand-ultra">&</span>
              <div className="separator-line-ultra" />
            </div>

            <h2 className="hero-bride-ultra">{t(couple.bride, lang)}</h2>
          </div>

          {/* Sumuhurtham */}
          <div className="hero-sumuhurtham-ultra">
            <div className="sumuhurtham-label-ultra">
              {t(event.sumuhurthamLabel, lang)}
            </div>
            <div className="sumuhurtham-time-ultra">
              {event.sumuhurthamEn}
            </div>
            <div className="sumuhurtham-note-ultra">
              {event.sumuhurthamNoteEn}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionUltra;
