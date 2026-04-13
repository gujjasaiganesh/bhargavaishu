import { useScrollReveal } from "@/hooks/useScrollReveal";

interface WeddingIllustrationProps {
  lang?: "en" | "te";
}

const WeddingIllustration = ({ lang = "en" }: WeddingIllustrationProps) => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-background relative overflow-hidden" lang={lang}>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Decorative Header */}
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <span className="text-ink/60 text-3xl sm:text-4xl md:text-5xl font-script tracking-widest">The Wedding</span>
          </div>
          <div className="h-[0.5px] w-16 sm:w-18 bg-ink/30 mx-auto"></div>
        </div>

        {/* Wedding Illustration - Card Style */}
        <div
          className={`relative group px-2 sm:px-3 md:px-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Sketch Frame Border */}
          <div className="absolute -inset-2 sm:-inset-3 md:-inset-8 border-[0.5px] border-ink/20 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] pointer-events-none transition-all duration-1000 group-hover:inset-[-1rem] sm:group-hover:inset-[-1.5rem] md:group-hover:inset-[-2rem] group-hover:border-ink/30\"></div>

          <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] bg-accent/30 shadow-sm transition-all duration-[2000ms]">
            {/* Soft Archival Blending */}
            <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_80px_rgba(244,241,234,1)]\"></div>

            <img
              src="/wedding.png"
              alt="Wedding"
              className="w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-105 filter grayscale-[0.1] sepia-[0.05] contrast-[0.95] brightness-[1.02]"
            />

            {/* Ink Wash Overlay */}
            <div className="absolute inset-0 bg-ink/5 mix-blend-multiply pointer-events-none\"></div>
          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div
          className={`flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-[0.5px] w-10 sm:w-12 md:w-16 bg-ink/20\"></div>
          <span className="text-ink/40 text-xs sm:text-sm font-serif\">✦</span>
          <div className="h-[0.5px] w-10 sm:w-12 md:w-16 bg-ink/20\"></div>
        </div>
      </div>
    </section>
  );
};

export default WeddingIllustration;
