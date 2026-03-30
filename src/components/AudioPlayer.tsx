import { useState, useEffect, useRef } from "react";

interface AudioPlayerProps {
  pageType?: string;
  audioFile?: string;
}

// Global instance tracking to prevent double audio players
let globalAudioRef: HTMLAudioElement | null = null;
let globalPlayerId = 0;

const VOLUME_STORAGE_KEY = "audioVolume";
const MUTE_STORAGE_KEY = "audioMuted";

const AudioPlayer = ({ pageType, audioFile }: AudioPlayerProps = {}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefsLoaded, setPrefsLoaded] = useState(false);

  const getAudioFile = () => {
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
  };

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

    if (globalAudioRef && globalPlayerId !== currentPlayerId) {
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
  }, [pageType, audioFile, prefsLoaded, isMuted, volume]);

  const togglePlay = async () => {
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

  return (
    <>
      <audio ref={audioRef} />

      <div className="hidden md:flex fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-md rounded-full p-3 items-center gap-2 shadow-lg border border-white/20">
        <button
          onClick={togglePlay}
          disabled={!isLoaded}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
          title={isPlaying ? "Pauze" : "Afspelen"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.87-2.25 1.07V22l-2.5-1.5L5 22v-6.73L4.27 3z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
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
            style={{
              background: isMuted
                ? "rgba(255,255,255,0.3)"
                : `linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) ${
                    volume * 100
                  }%, rgba(255,255,255,0.3) ${
                    volume * 100
                  }%, rgba(255,255,255,0.3) 100%)`,
            }}
          />
        </div>

        {!isLoaded && (
          <div
            className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
            title="Laden..."
          />
        )}
      </div>

      <div className="fixed bottom-20 left-4 z-50 md:hidden flex flex-col gap-3">
        <button
          onClick={togglePlay}
          disabled={!isLoaded}
          className="bg-black/80 backdrop-blur-md rounded-full p-4 flex items-center justify-center text-white shadow-lg border border-white/20 hover:bg-black/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          title={isPlaying ? "Pauze" : "Afspelen"}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          onClick={toggleMute}
          className={`backdrop-blur-md rounded-full p-4 flex items-center justify-center text-white shadow-lg border border-white/20 transition-all duration-200 ${
            isMuted
              ? "bg-black/80 hover:bg-black/90"
              : "bg-green-500/70 hover:bg-green-500/90"
          }`}
          title={isMuted ? "Geluid uit" : "Geluid aan"}
        >
          {isMuted ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.87-2.25 1.07V22l-2.5-1.5L5 22v-6.73L4.27 3z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
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

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default AudioPlayer;