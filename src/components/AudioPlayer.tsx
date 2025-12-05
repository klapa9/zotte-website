import { useState, useEffect, useRef } from 'react';

interface AudioPlayerProps {
  pageType?: string;
  audioFile?: string;
}

// Global instance tracking to prevent double audio players
let globalAudioRef: HTMLAudioElement | null = null;
let globalPlayerId = 0;

const AudioPlayer = ({ pageType, audioFile }: AudioPlayerProps = {}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isLoaded, setIsLoaded] = useState(false);
  const [playerId, setPlayerId] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Determine which audio file to use
  const getAudioFile = () => {
    if (audioFile) return audioFile;
    switch (pageType) {
      case 'energie': return '/Energy.mp3';
      case 'leven': return '/Leven.mp3';
      case 'weeszot': return '/Wees_Zot.mp3';
      default: return '/Rise_and_Shine.mp3';
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Generate unique player ID for this instance
    const currentPlayerId = Date.now();
    setPlayerId(currentPlayerId);

    // If this is not the current global instance, stop it
    if (globalAudioRef && globalPlayerId !== currentPlayerId) {
      console.log(`Stopping older audio instance ${globalPlayerId}, current instance is ${currentPlayerId}`);
      globalAudioRef.pause();
      globalAudioRef = null;
    }

    // Set this as the current global instance
    globalAudioRef = audio;
    globalPlayerId = currentPlayerId;

    // Clean up any existing state
    audio.pause();
    audio.currentTime = 0;
    setIsLoaded(false);
    setIsPlaying(false);

    // Set new audio source
    const newAudioFile = getAudioFile();
    console.log(`Setting audio source to: ${newAudioFile}, player ID: ${currentPlayerId}`);
    audio.src = newAudioFile;
    audio.volume = isMuted ? 0 : volume;

    // Set up event listeners
    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };

    const handleEnded = () => {
      console.log(`Audio ended for player ${currentPlayerId}, stopping playback`);
      setIsPlaying(false);
      // Stop completely - do NOT restart
      audio.pause();
      audio.currentTime = 0;
    };

    const handlePlay = () => {
      console.log(`Audio play event for player ${currentPlayerId}`);
      setIsPlaying(true);
    };

    const handlePause = () => {
      console.log(`Audio pause event for player ${currentPlayerId}`);
      setIsPlaying(false);
    };

    const handleError = (e: Event) => {
      console.error(`Audio error for player ${currentPlayerId}:`, e);
      setIsLoaded(false);
    };

    // Remove all existing event listeners first
    audio.removeEventListener('canplaythrough', () => {});
    audio.removeEventListener('ended', () => {});
    audio.removeEventListener('play', () => {});
    audio.removeEventListener('pause', () => {});
    audio.removeEventListener('error', () => {});

    // Add new event listeners
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    // Try to autoplay after a short delay
    const autoplayTimeout = setTimeout(async () => {
      try {
        if (audio.paused && !isPlaying) {
          await audio.play();
          console.log(`Playing audio: ${newAudioFile}, player ID: ${currentPlayerId}`);
        }
      } catch (error) {
        console.log(`Autoplay prevented for player ${currentPlayerId}:`, error);
        setIsPlaying(false);
      }
    }, 200);

    // Cleanup function
    return () => {
      clearTimeout(autoplayTimeout);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      if (globalAudioRef === audio) {
        audio.pause();
        globalAudioRef = null;
        globalPlayerId = 0;
      }
    };
  }, [pageType, audioFile]); // Reinitialize when pageType or audioFile changes

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [isMuted, volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // Make sure we have the correct source
        audio.src = getAudioFile();
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Play error:', error);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop={false}
        preload="auto"
      />

      {/* Floating Audio Controls */}
      <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-80 backdrop-blur-md rounded-full p-3 flex items-center gap-2 shadow-lg border border-white border-opacity-20">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          disabled={!isLoaded}
          className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
          title={isPlaying ? "Pauze" : "Afspelen"}
        >
          {isPlaying ? (
            // Pause icon
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            // Play icon
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center text-white"
          title={isMuted ? "Dempen uit" : "Dempen"}
        >
          {isMuted ? (
            // Muted icon
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.87-2.25 1.07V22l-2.5-1.5L5 22v-6.73L4.27 3z"/>
            </svg>
          ) : (
            // Unmuted icon
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>

        {/* Volume Slider */}
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer"
            style={{
              background: isMuted ? 'rgba(255,255,255,0.3)' : `linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
            }}
          />
        </div>

        {/* Loading indicator */}
        {!isLoaded && (
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" title="Laden..." />
        )}
      </div>

      {/* Mobile Play Button (appears after user interaction) */}
      <div className="fixed bottom-20 left-4 z-50 md:hidden">
        <button
          onClick={togglePlay}
          disabled={!isLoaded}
          className="bg-black bg-opacity-80 backdrop-blur-md rounded-full p-4 flex items-center justify-center text-white shadow-lg border border-white border-opacity-20 hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
      </div>

      {/* Welcome Message (only shows when not playing) */}
      {!isPlaying && isLoaded && (
        <div className="fixed top-20 left-4 z-40 bg-black bg-opacity-80 backdrop-blur-md rounded-2xl p-4 max-w-xs animate-fade-in">
          <p className="text-white text-sm">
            🎵 Muziek beschikbaar - klik om af te spelen
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default AudioPlayer;