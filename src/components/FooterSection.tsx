import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FooterSectionProps {
  lang: "en" | "te";
}

const FooterSection = ({ lang }: FooterSectionProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer ref={ref} className="py-12 sm:py-16 md:py-32 px-4 sm:px-6 text-center space-y-8 sm:space-y-10 md:space-y-12 bg-background relative overflow-hidden" lang={lang}>
      {/* Archival Paper Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-multiply">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto relative z-10 space-y-12 sm:space-y-14 md:space-y-16">
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          <p
            className={`font-playfair text-lg sm:text-2xl md:text-3xl italic text-ink/60 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} text-balance px-4 leading-relaxed`}
          >
            {lang === "en" ? "We can't wait to celebrate with you!" : "మీతో కలిసి జరుపుకోవడానికి మేము ఎదురుచూస్తున్నాము!"}
          </p>

          <div className={`space-y-3 sm:space-y-4 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="font-script text-4xl sm:text-6xl md:text-8xl text-ink leading-tight">
              Bhargav Raj
            </h3>
            <div className="flex justify-center items-center py-1 sm:py-2">
              <span className="text-ink/40 text-2xl sm:text-3xl md:text-4xl font-handwritten tracking-[0.5em] animate-pulse">❤</span>
            </div>
            <h3 className="font-script text-4xl sm:text-6xl md:text-8xl text-ink leading-tight">
              Sri Vaishnavi
            </h3>
          </div>

          <div className={`flex flex-col items-center gap-4 sm:gap-5 md:gap-6 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <p className="font-cinzel text-[9px] sm:text-[10px] md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase text-ink/40">
              April 29th, 2026
            </p>
            <div className="inline-block border border-ink/10 rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 font-cinzel text-[8px] sm:text-[9px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.3em] uppercase text-ink/60 bg-ink/5 transition-all duration-500 hover:bg-ink/10 hover:border-ink/20 cursor-default">
              #BhargaVaishu
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="pt-8 sm:pt-12 md:pt-16 border-t border-ink/10 space-y-3 sm:space-y-4">
          <p className="font-cinzel text-[8px] sm:text-[9px] md:text-xs text-ink/30 tracking-[0.5em] sm:tracking-[0.6em] uppercase text-balance px-4">
            With Love & Blessings
          </p>
          <div className="text-ink/10 text-lg sm:text-xl font-serif">❋</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
