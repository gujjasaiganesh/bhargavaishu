import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TempleBackgroundSectionProps {
  lang?: "en" | "te";
}

const TempleBackgroundSection = ({ lang = "en" }: TempleBackgroundSectionProps) => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className="relative w-full py-32 md:py-48 overflow-hidden bg-background"
      style={{
        backgroundImage: 'url(/temple-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Premium Overlay Gradients for Text Readability */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top to bottom gradient for elegant fade */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(244, 241, 234, 0.85) 0%,
              rgba(244, 241, 234, 0.7) 15%,
              rgba(244, 241, 234, 0.5) 35%,
              rgba(244, 241, 234, 0.3) 55%,
              rgba(244, 241, 234, 0.15) 75%,
              rgba(244, 241, 234, 0.05) 100%
            )`,
          }}
        />
        
        {/* Additional subtle dark overlay at bottom for depth */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0, 0, 0, 0.05) 50%,
              rgba(0, 0, 0, 0.15) 100%
            )`,
          }}
        />
      </div>

      {/* Sacred Temple Information Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-center text-center space-y-8 md:space-y-12">
        {/* Decorative Top Element */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex items-center justify-center gap-6">
            <div className="h-[0.5px] w-16 md:w-24 bg-ink/30" />
            <span className="text-ink/50 text-sm md:text-base font-serif">✦</span>
            <div className="h-[0.5px] w-16 md:w-24 bg-ink/30" />
          </div>
        </div>

        {/* Main Heading */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-script text-5xl md:text-7xl text-ink mb-4 leading-tight">
            {lang === "en" ? "Sacred Union" : "పవిత్ర సంయోగం"}
          </h2>
          <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-ink/60 font-light">
            {lang === "en" ? "Blessed by Tradition" : "సంప్రదాయంతో ఆశీర్వదించింది"}
          </p>
        </div>

        {/* Inspirational Message */}
        <div
          className={`max-w-3xl transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-playfair text-lg md:text-2xl italic text-ink/80 font-light leading-relaxed px-4">
            {lang === "en"
              ? "Two souls unite in the presence of divine grace, in a wedding of love, family, and eternal traditions."
              : "దేవతల ఆశీర్వాదం నుండి ఇద్దరు ఆత్మలు సంయోగం చెందుతారు, ప్రేమ, కుటుంబం మరియు శాశ్వత సంప్రదాయాల జరుపులో."}
          </p>
        </div>

        {/* Decorative Bottom Element */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[0.5px] w-12 md:w-16 bg-ink/20" />
            <span className="text-ink/40 text-sm font-serif">🙏</span>
            <div className="h-[0.5px] w-12 md:w-16 bg-ink/20" />
          </div>
        </div>

        {/* Blessing Text */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-handwritten text-4xl md:text-5xl text-ink/70 opacity-80">
            {lang === "en" ? "With Love & Blessings" : "ప్రేమ & ఆశీర్వాదాలతో"}
          </p>
        </div>
      </div>

      {/* Bottom Fade Effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(244, 241, 234, 0.95))',
        }}
      />
    </section>
  );
};

export default TempleBackgroundSection;
