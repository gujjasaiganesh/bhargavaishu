import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Get the audio element from DOM
    const audioElement = document.getElementById("wedding-audio") as HTMLAudioElement;
    if (audioElement) {
      audioRef.current = audioElement;
      audioElement.volume = 0.15;
      
      // Try to play immediately
      const playAudio = async () => {
        try {
          await audioElement.play();
          setIsPlaying(true);
        } catch (err) {
          // Autoplay might be blocked, handle user interaction
          const handleUserInteraction = async () => {
            try {
              await audioElement.play();
              setIsPlaying(true);
              // Remove listener after first successful play
              document.removeEventListener("click", handleUserInteraction);
            } catch (e) {
              console.log("Audio playback failed");
            }
          };
          document.addEventListener("click", handleUserInteraction);
        }
      };
      
      playAudio();
    }

    return () => {
      // Cleanup
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Hidden audio element with autoplay */}
      <audio
        id="wedding-audio"
        autoPlay
        loop
        preload="auto"
        style={{ display: "none" }}
      >
        <source src="/Audio.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-primary/20 shadow-lg flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 className="w-5 h-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full animate-ping"></span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5 opacity-60" />
        )}
      </button>
    </>
  );
};

export default MusicToggle;
