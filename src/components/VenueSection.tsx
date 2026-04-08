import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import venueQr from "@/assets/venue-qr.png";
import { MapPin } from "lucide-react";

const VENUE_NAME = "SYR Convention Hall";
const VENUE_ADDRESS = "RCI Road, Karmanghat, R.R Dist.";
const MAPS_LINK = "https://maps.app.goo.gl/HyP3h9aMD1Nw3LYn7?g_st=ic";

interface VenueSectionProps {
  lang: "en" | "te";
}

const VenueSection = ({ lang }: VenueSectionProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-background text-center overflow-hidden relative" lang={lang}>
      {/* Archival Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="venue-grid" width="60" height="60" patternUnits="userSpaceOnUse">
             <circle cx="30" cy="30" r="0.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#venue-grid)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
        <div className={`space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-cinzel text-lg sm:text-xl md:text-3xl text-ink/80 tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase font-light">
            {lang === "en" ? "The Venue" : "వివాహ వేదిక"}
          </h2>
          <div className="h-[0.5px] w-16 sm:w-18 bg-ink/20 mx-auto"></div>
        </div>

        <div className={`space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-playfair text-lg sm:text-2xl md:text-4xl text-ink italic leading-tight text-balance px-4">
            {VENUE_NAME}
          </p>
          <p className="font-serif text-ink/60 text-sm sm:text-base md:text-lg tracking-wide max-w-md mx-auto leading-relaxed text-balance px-6">
            {VENUE_ADDRESS}
          </p>
        </div>

        {/* QR Code Block - Journal Feel */}
        <div
          className={`relative inline-block p-4 sm:p-5 md:p-8 bg-background border border-ink/10 rounded-2xl sm:rounded-3xl md:rounded-3xl shadow-sm transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="absolute inset-1 sm:inset-2 border border-ink/5 rounded-[1rem] sm:rounded-[1.25rem] pointer-events-none"></div>
          <img
            src={venueQr}
            alt="QR code for directions"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-lg opacity-90 mix-blend-multiply filter grayscale-[0.2]"
            loading="lazy"
          />
          <div className="absolute -top-2 sm:-top-2.5 -right-2 sm:-right-2.5 w-6 h-6 sm:w-7 sm:h-7 bg-background border border-ink/10 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-ink/30 text-xs">✦</span>
          </div>
        </div>

        <p className={`font-cinzel text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.4em] uppercase text-ink/40 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {lang === "en" ? "Scan for Directions" : "దిశల కోసం స్కాన్ చేయండి"}
        </p>

        <div className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} pt-2 sm:pt-3 md:pt-4`}>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-block group w-full sm:w-auto px-3 sm:px-4 md:px-0">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto rounded-full border border-ink/20 text-ink/60 hover:bg-ink/5 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-7 text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase font-cinzel transition-all duration-700 hover:shadow-sm min-h-11 sm:min-h-12"
            >
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 md:w-4 md:h-4 mr-2 sm:mr-2 md:mr-3 opacity-40" />
              {lang === "en" ? "Open in Maps" : "మ్యాప్స్ లో చూడండి"}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
