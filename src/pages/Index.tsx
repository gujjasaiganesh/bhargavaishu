import { useState } from "react";
import FloatingElements from "@/components/FloatingElements";
import HeroPremium from "@/components/HeroPremium";
import EventsSection from "@/components/EventsSection";
import WeddingIllustration from "@/components/WeddingIllustration";
import VenueSection from "@/components/VenueSection";
import FooterSection from "@/components/FooterSection";
import MusicToggle from "@/components/MusicToggle";
import LanguageToggle from "@/components/LanguageToggle";
import MinimalIntro from "@/components/MinimalIntro";

const Index = () => {
  const [lang, setLang] = useState<"en" | "te">("en");
  const [introCompleted, setIntroCompleted] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-amber-50 via-amber-50 to-pink-50">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(212, 160, 23, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(34, 139, 34, 0.05) 0%, transparent 50%)'
        }} />
      </div>

      {/* Music Toggle - Always Visible */}
      <MusicToggle />

      {/* Minimal Intro */}
      <MinimalIntro onComplete={() => setIntroCompleted(true)} />

      {/* Main Content */}
      {introCompleted && (
        <div className="transition-all duration-700 ease-out opacity-100 translate-y-0">
          <LanguageToggle lang={lang} onLangChange={setLang} />
          <FloatingElements />
          <div className="relative z-10">
            <HeroPremium lang={lang} />
            <EventsSection lang={lang} />
            <WeddingIllustration lang={lang} />
            <VenueSection lang={lang} />
            <FooterSection lang={lang} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
