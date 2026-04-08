import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  lang?: "en" | "te";
}

const CountdownTimer = ({ targetDate, lang = "en" }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return null;
  }

  const padZero = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="relative py-8 sm:py-12 md:py-20 px-3 sm:px-4 md:px-6 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Main Countdown Container - Oval Shape */}
        <div className="relative group">
          {/* Outer border frame - subtle */}
          <div className="absolute -inset-2 sm:-inset-3 md:-inset-6 border-[0.5px] border-ink/15 rounded-[2rem] sm:rounded-[3rem] md:rounded-[5rem] pointer-events-none transition-all duration-1000 group-hover:inset-[-1rem] sm:group-hover:inset-[-1.5rem] md:group-hover:inset-[-3rem] group-hover:border-ink/25\"></div>

          {/* Main oval container */}
          <div className="relative px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 bg-background border border-ink/10 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4.5rem] shadow-sm overflow-hidden transition-all duration-700 hover:shadow-md hover:border-ink/15\">
            {/* Subtle inner frame */}
            <div className="absolute inset-3 sm:inset-4 md:inset-8 border border-ink/5 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[4rem] pointer-events-none\"></div>

            {/* Archival texture overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="countdown-texture" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#countdown-texture)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-10">
              {/* Label */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <p className="text-ink/60 font-cinzel text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase font-light">
                  {lang === "en" ? "Time Until" : "సమయం వరకు"}
                </p>
                <p className="text-ink font-script text-2xl sm:text-3xl md:text-5xl opacity-90">
                  {lang === "en" ? "The Big Day" : "బిగ్ డే"}
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="h-[0.5px] w-8 sm:w-10 md:w-16 bg-ink/20\"></div>
                <span className="text-ink/40 text-xs md:text-sm font-serif tracking-widest\">✦</span>
                <div className="h-[0.5px] w-8 sm:w-10 md:w-16 bg-ink/20\"></div>
              </div>

              {/* Countdown Display */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-8 overflow-x-auto">
                {/* Days */}
                <div className="flex flex-col items-center space-y-1 sm:space-y-1.5 md:space-y-2 group/item flex-shrink-0">
                  <div className="relative">
                    <span className="font-script text-3xl sm:text-4xl md:text-7xl text-ink/90 leading-none transition-all duration-500 group-hover/item:text-ink">
                      {padZero(timeLeft.days)}
                    </span>
                  </div>
                  <span className="font-cinzel text-[7px] sm:text-[9px] md:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-ink/60 font-light">
                    {lang === "en" ? "Days" : "రోజులు"}
                  </span>
                </div>

                {/* Separator */}
                <div className="flex flex-col items-center space-y-2 sm:space-y-2.5 md:space-y-3 opacity-50 flex-shrink-0">
                  <span className="font-handwritten text-lg sm:text-xl md:text-3xl text-ink/40">:</span>
                  <div className="h-1 w-[0.5px] bg-ink/20\"></div>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center space-y-1 sm:space-y-1.5 md:space-y-2 group/item flex-shrink-0">
                  <div className="relative">
                    <span className="font-script text-3xl sm:text-4xl md:text-7xl text-ink/90 leading-none transition-all duration-500 group-hover/item:text-ink">
                      {padZero(timeLeft.hours)}
                    </span>
                  </div>
                  <span className="font-cinzel text-[7px] sm:text-[9px] md:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-ink/60 font-light">
                    {lang === "en" ? "Hours" : "గంటలు"}
                  </span>
                </div>

                {/* Separator */}
                <div className="flex flex-col items-center space-y-2 sm:space-y-2.5 md:space-y-3 opacity-50 flex-shrink-0">
                  <span className="font-handwritten text-lg sm:text-xl md:text-3xl text-ink/40">:</span>
                  <div className="h-1 w-[0.5px] bg-ink/20\"></div>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center space-y-1 sm:space-y-1.5 md:space-y-2 group/item flex-shrink-0">
                  <div className="relative">
                    <span className="font-script text-3xl sm:text-4xl md:text-7xl text-ink/90 leading-none transition-all duration-500 group-hover/item:text-ink">
                      {padZero(timeLeft.minutes)}
                    </span>
                  </div>
                  <span className="font-cinzel text-[7px] sm:text-[9px] md:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-ink/60 font-light">
                    {lang === "en" ? "Minutes" : "నిమిషాలు"}
                  </span>
                </div>

                {/* Separator */}
                <div className="flex flex-col items-center space-y-2 sm:space-y-2.5 md:space-y-3 opacity-50 flex-shrink-0">
                  <span className="font-handwritten text-lg sm:text-xl md:text-3xl text-ink/40">:</span>
                  <div className="h-1 w-[0.5px] bg-ink/20\"></div>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center space-y-1 sm:space-y-1.5 md:space-y-2 group/item flex-shrink-0">
                  <div className="relative">
                    <span className="font-script text-3xl sm:text-4xl md:text-7xl text-ink/90 leading-none transition-all duration-500 group-hover/item:text-ink">
                      {padZero(timeLeft.seconds)}
                    </span>
                  </div>
                  <span className="font-cinzel text-[7px] sm:text-[9px] md:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-ink/60 font-light">
                    {lang === "en" ? "Seconds" : "సెకన్లు"}
                  </span>
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 pt-3 sm:pt-4">
                <div className="h-[0.5px] w-6 sm:w-8 md:w-14 bg-ink/15\"></div>
                <span className="text-ink/30 text-xs font-serif\">✦</span>
                <div className="h-[0.5px] w-6 sm:w-8 md:w-14 bg-ink/15\"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle supporting text */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <p className="text-ink/50 font-playfair text-xs sm:text-sm md:text-base italic font-light">
            {lang === "en"
              ? "April 29, 2026 at 10:32 AM"
              : "ఏప్రిల్ 29, 2026 10:32 AM"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
