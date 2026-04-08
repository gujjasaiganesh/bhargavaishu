import { useEffect, useState } from "react";

interface MobileTempleBackgroundProps {
  opacity?: number;
  overlay?: "dark" | "light" | "gradient";
  showOnDesktop?: boolean;
}

/**
 * Mobile-Optimized Temple Background Component
 * - Responsive image loading (mobile/tablet/desktop specific)
 * - WebP with PNG fallback for optimization
 * - Lazy loading for performance
 * - Text-overlay gradients for readability
 * - Responsive sizing with proper aspect ratio
 */
const MobileTempleBackground = ({
  opacity = 0.25,
  overlay = "gradient",
  showOnDesktop = false,
}: MobileTempleBackgroundProps) => {
  const [supportsWebP, setSupportsWebP] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Check WebP support for performance
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const imageData = ctx.createImageData(1, 1);
      imageData.data.set([0, 0, 0, 0]);
      ctx.putImageData(imageData, 0, 0);
      setSupportsWebP(canvas.toDataURL("image/webp").indexOf("image/webp") === 5);
    }

    // Trigger lazy loading after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const templeImageWebP = "/temple-bg.webp";
  const templeImagePng = "/temple-bg.png";
  const imageSource = supportsWebP ? templeImageWebP : templeImagePng;

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .mobile-temple-bg {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 0;
            background-size: cover;
            background-position: center bottom;
            background-attachment: fixed;
            background-repeat: no-repeat;
            opacity: ${opacity};
          }

          .mobile-temple-overlay-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              rgba(244, 241, 234, 0.4) 0%,
              rgba(244, 241, 234, 0.2) 30%,
              rgba(244, 241, 234, 0) 60%,
              rgba(0, 0, 0, 0.15) 100%
            );
            pointer-events: none;
          }

          .mobile-temple-overlay-dark {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.3);
            pointer-events: none;
          }

          .mobile-temple-overlay-light {
            position: absolute;
            inset: 0;
            background: rgba(244, 241, 234, 0.25);
            pointer-events: none;
          }

          /* Optimize for different mobile sizes */
          @media (max-width: 480px) {
            .mobile-temple-bg {
              background-size: cover;
              background-position: center;
            }
          }

          /* Tablet size */
          @media (min-width: 481px) and (max-width: 768px) {
            .mobile-temple-bg {
              background-size: 120%;
              background-position: center bottom;
            }
          }
        }

        /* Hide on desktop by default */
        @media (min-width: 769px) {
          .mobile-temple-bg {
            display: none;
          }
        }

        ${showOnDesktop ? `
          @media (min-width: 769px) {
            .mobile-temple-bg {
              display: block;
              opacity: 0.1;
            }
          }
        ` : ""}

        /* Smooth image loading transition */
        .temple-bg-loaded {
          animation: fadeIn 800ms ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: ${opacity};
          }
        }
      `}</style>

      {/* Mobile Temple Background - Responsive */}
      {isVisible && (
        <div
          className={`mobile-temple-bg temple-bg-loaded`}
          style={{
            backgroundImage: `url('${imageSource}')`,
          }}
        >
          {/* Text Readability Overlay */}
          <div
            className={`mobile-temple-overlay-${overlay} pointer-events-none`}
          />
        </div>
      )}
    </>
  );
};

export default MobileTempleBackground;
