import { useEffect, useState } from "react";

interface PremiumFloatingElement {
  id: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
  symbol: string;
  color: string;
}

const PremiumFloatingElements = () => {
  const [elements, setElements] = useState<PremiumFloatingElement[]>([]);

  useEffect(() => {
    const createElements = () => {
      const symbols = ["✦", "✧", "✿", "✾", "⭐", "🌸", "🌺", "🌼", "🌻"];
      const colors = [
        "rgba(255, 215, 0, 0.6)",
        "rgba(227, 130, 110, 0.6)",
        "rgba(34, 139, 34, 0.6)",
        "rgba(176, 96, 222, 0.6)",
        "rgba(244, 164, 96, 0.6)",
      ];

      const newElements: PremiumFloatingElement[] = Array.from({ length: 12 }).map((_, i) => ({
        id: `float-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 3,
        size: 1 + Math.random() * 1.5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      }));

      setElements(newElements);
    };

    createElements();
  }, []);

  return (
    <>
      <style>{`
        @keyframes float-orb {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) scale(0.8);
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) translateX(var(--tx)) scale(1.2);
          }
        }

        .premium-floating-element {
          position: fixed;
          pointer-events: none;
          font-size: clamp(1rem, 2vw, 2rem);
          font-weight: 300;
          z-index: 5;
          filter: drop-shadow(0 0 10px currentColor);
        }

        .premium-floating-sparkle {
          position: fixed;
          pointer-events: none;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
          border-radius: 50%;
          box-shadow: 0 0 8px 2px rgba(255, 215, 0, 0.4);
          z-index: 5;
          animation: sparkle-pulse 3s ease-in-out infinite;
        }

        @keyframes sparkle-pulse {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .floating-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 5;
          overflow: hidden;
        }
      `}</style>

      <div className="floating-container">
        {/* Animated Floating Elements */}
        {elements.map((element) => (
          <div
            key={element.id}
            className="premium-floating-element"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              "--tx": `${(Math.random() - 0.5) * 200}px`,
              color: element.color,
              animation: `float-orb ${element.duration}s ease-in-out ${element.delay}s infinite`,
              fontSize: `${element.size}rem`,
            } as React.CSSProperties}
          >
            {element.symbol}
          </div>
        ))}

        {/* Scattered Sparkles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="premium-floating-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: `0 0 8px 2px ${
                ["rgba(255, 215, 0, 0.4)", "rgba(227, 130, 110, 0.4)", "rgba(34, 139, 34, 0.4)"][
                  Math.floor(Math.random() * 3)
                ]
              }`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default PremiumFloatingElements;
