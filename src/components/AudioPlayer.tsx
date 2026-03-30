import { useState, useEffect, useRef, useCallback } from "react";

interface AudioPlayerProps {
  pageType?: string;
  audioFile?: string;
}

// Global instance tracking to prevent double audio players
let globalAudioRef: HTMLAudioElement | null = null;
let globalPlayerId = 0;

const VOLUME_STORAGE_KEY = "audioVolume";
const MUTE_STORAGE_KEY = "audioMuted";
const LONG_PRESS_DURATION = 500;

const AudioPlayer = ({ pageType, audioFile }: AudioPlayerProps = {}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mobileControlsRef = useRef<HTMLDivElement>(null);
  const longPressTimerRef = useRef<number | null>(null);
  const longPressTriggeredRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefsLoaded, setPrefsLoaded] = useState(false);
  const [showMobileSoundControls, setShowMobileSoundControls] = useState(false);

  const getAudioFile = useCallback(() => {
    if (audioFile) return audioFile;

    switch (pageType) {
      case "liefde":
        return "/liefde.mp3";
      case "openjegeest":
        return "/Open_Je_Geest_1.mp3";
      case "leven":
        return "/leven4.mp3";
      case "weeszot":
        return "/weeszot.mp3";
      case "geld":
        return "/btc2.mp3";
      case "ziekzot":
        return "/heal2.mp3";
      case "reacties":
        return "/reacties.mp3";
      default:
        return "/index.mp3";
    }
  }, [audioFile, pageType]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedVolume = localStorage.getItem(VOLUME_STORAGE_KEY);
    const savedMuted = localStorage.getItem(MUTE_STORAGE_KEY);

    const parsedVolume =
      savedVolume === null ? 0.3 : Math.min(1, Math.max(0, Number(savedVolume)));

    setVolume(Number.isFinite(parsedVolume) ? parsedVolume : 0.3);
    setIsMuted(savedMuted === null ? true : savedMuted === "true");
    setPrefsLoaded(true);
  }, []);

  useEffect(() => {
    if (!prefsLoaded || typeof window === "undefined") return;
    localStorage.setItem(VOLUME_STORAGE_KEY, String(volume));
  }, [volume, prefsLoaded]);

  useEffect(() => {
    if (!prefsLoaded || typeof window === "undefined") return;
    localStorage.setItem(MUTE_STORAGE_KEY, String(isMuted));
  }, [isMuted, prefsLoaded]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = isMuted ? 0 : volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  useEffect(() => {
    if (!prefsLoaded) return;

    const audio = audioRef.current;
    if (!audio) return;

    const currentPlayerId = Date.now();

    if (globalAudioRef && globalAudioRef !== audio && globalPlayerId !== currentPlayerId) {
      globalAudioRef.pause();
      globalAudioRef.currentTime = 0;
      globalAudioRef = null;
      globalPlayerId = 0;
    }

    globalAudioRef = audio;
    globalPlayerId = currentPlayerId;

    const source = getAudioFile();

    audio.autoplay = false;
    audio.loop = false;
    audio.preload = "auto";
    audio.pause();
    audio.currentTime = 0;
    audio.src = source;
    audio.load();
    audio.volume = isMuted ? 0 : volume;
    audio.muted = isMuted;

    setIsLoaded(false);
    setIsPlaying(false);

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      audio.pause();
      audio.currentTime = 0;
    };

    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      setIsLoaded(false);
      setIsPlaying(false);
    };

    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    const autoplayTimeout = window.setTimeout(async () => {
      if (isMuted) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
        return;
      }

      try {
        await audio.play();
      } catch (error) {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      }
    }, 200);

    return () => {
      window.clearTimeout(autoplayTimeout);

      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);

      if (globalAudioRef === audio) {
        audio.pause();
        audio.currentTime = 0;
        globalAudioRef = null;
        globalPlayerId = 0;
      }
    };
  }, [getAudioFile, prefsLoaded]);

  useEffect(() => {
    if (!showMobileSoundControls) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (mobileControlsRef.current && !mobileControlsRef.current.contains(target)) {
        setShowMobileSoundControls(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [showMobileSoundControls]);

  useEffect(() => {
    return () => {
      if (longPressTimerRef.current) {
        window.clearTimeout(longPressTimerRef.current);
      }
    };
  }, []);

  const togglePlay = async () => {
    if (longPressTriggeredRef.current) {
      longPressTriggeredRef.current = false;
      return;
    }

    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    try {
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        if (isMuted) {
          setIsMuted(false);
          if (typeof window !== "undefined") {
            localStorage.setItem(MUTE_STORAGE_KEY, "false");
          }
        }

        await audio.play();
      }
    } catch (error) {
      console.error("Play error:", error);
    }
  };

  const toggleMute = async () => {
    const audio = audioRef.current;
    const nextMuted = !isMuted;

    setIsMuted(nextMuted);

    if (typeof window !== "undefined") {
      localStorage.setItem(MUTE_STORAGE_KEY, String(nextMuted));
    }

    if (!audio) return;

    if (nextMuted) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else if (isLoaded) {
      try {
        await audio.play();
      } catch (error) {
        console.log("Play after unmute prevented:", error);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVolume = parseFloat(e.target.value);
    setVolume(nextVolume);

    if (typeof window !== "undefined") {
      localStorage.setItem(VOLUME_STORAGE_KEY, String(nextVolume));
    }

    if (nextVolume > 0 && isMuted) {
      setIsMuted(false);
      if (typeof window !== "undefined") {
        localStorage.setItem(MUTE_STORAGE_KEY, "false");
      }
    }

    if (nextVolume === 0 && !isMuted) {
      setIsMuted(true);
      if (typeof window !== "undefined") {
        localStorage.setItem(MUTE_STORAGE_KEY, "true");
      }
    }
  };

  const startLongPress = () => {
    longPressTriggeredRef.current = false;

    if (longPressTimerRef.current) {
      window.clearTimeout(longPressTimerRef.current);
    }

    longPressTimerRef.current = window.setTimeout(() => {
      longPressTriggeredRef.current = true;
      setShowMobileSoundControls(true);
    }, LONG_PRESS_DURATION);
  };

  const cancelLongPress = () => {
    if (longPressTimerRef.current) {
      window.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const volumeSliderBackground = isMuted
    ? "rgba(255,255,255,0.3)"
    : `linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${
        volume * 100
      }%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`;

  return (
    <>
      <audio ref={audioRef} />

      {/* Desktop */}
      <div className="hidden md:flex fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-md rounded-full p-3 items-center gap-2 shadow-lg border border-white/20">
        <button
          onClick={togglePlay}
          disabled={!isLoaded}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
          title={isPlaying ? "Pauze" : "Afspelen"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          onClick={toggleMute}
          className={`w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center text-white ${
            isMuted
              ? "bg-white/20 hover:bg-white/30"
              : "bg-green-500/30 hover:bg-green-500/50"
          }`}
          title={isMuted ? "Geluid uit" : "Geluid aan"}
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5 6.5 9H4v6h2.5L11 19V5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9l4 4m0-4-4 4"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5 6.5 9H4v6h2.5L11 19V5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5 9.5a4 4 0 0 1 0 5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7a7.5 7.5 0 0 1 0 10"
              />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
            style={{ background: volumeSliderBackground }}
          />
        </div>

        {!isLoaded && (
          <div
            className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
            title="Laden..."
          />
        )}
      </div>

      {/* Mobile */}
      <div
        ref={mobileControlsRef}
        className="fixed bottom-20 left-4 z-50 md:hidden flex flex-col items-start gap-3"
      >
        {showMobileSoundControls && (
          <div className="bg-black/85 backdrop-blur-md rounded-2xl px-3 py-3 flex items-center gap-3 shadow-lg border border-white/20 animate-fade-in-up">
            <button
              onClick={toggleMute}
              className={`w-11 h-11 rounded-full transition-all duration-200 flex items-center justify-center text-white ${
                isMuted
                  ? "bg-white/15 hover:bg-white/25"
                  : "bg-green-500/70 hover:bg-green-500/90"
              }`}
              title={isMuted ? "Geluid uit" : "Geluid aan"}
            >
              {isMuted ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5 6.5 9H4v6h2.5L11 19V5Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9l4 4m0-4-4 4"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5 6.5 9H4v6h2.5L11 19V5Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.5 9.5a4 4 0 0 1 0 5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7a7.5 7.5 0 0 1 0 10"
                  />
                </svg>
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-28 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
              style={{ background: volumeSliderBackground }}
            />
          </div>
        )}

        <button
          onClick={togglePlay}
          onTouchStart={startLongPress}
          onTouchEnd={cancelLongPress}
          onTouchCancel={cancelLongPress}
          onMouseDown={startLongPress}
          onMouseUp={cancelLongPress}
          onMouseLeave={cancelLongPress}
          disabled={!isLoaded}
          className="bg-black/80 backdrop-blur-md rounded-full p-4 flex items-center justify-center text-white shadow-lg border border-white/20 hover:bg-black/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none touch-manipulation"
          title={isPlaying ? "Pauze" : "Afspelen"}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {!isPlaying && isLoaded && (
        <div className="hidden md:flex fixed top-20 left-4 z-40 bg-black/80 backdrop-blur-md rounded-2xl p-4 max-w-xs animate-fade-in">
          <p className="text-white text-sm">
            {isMuted
              ? "🔇 Geluid staat uit - klik om muziek te starten"
              : "🎵 Muziek beschikbaar - klik om af te spelen"}
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.22s ease-out;
        }
      `}</style>
    </>
  );
};

export default AudioPlayer;