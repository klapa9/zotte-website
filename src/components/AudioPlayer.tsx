import { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = volume;

    // Try to autoplay when component mounts
    const playAudio = async () => {
      try {
        // Set audio source
        audio.src = '/Rise_and_Shine.mp3';
        
        audio.addEventListener('canplaythrough', () => {
          setIsLoaded(true);
        });

        audio.addEventListener('ended', () => {
          setIsPlaying(false);
        });

        audio.addEventListener('play', () => {
          setIsPlaying(true);
        });

        audio.addEventListener('pause', () => {
          setIsPlaying(false);
        });

        // Attempt to play (may be blocked by browser autoplay policy)
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch((error) => {
            console.log('Autoplay prevented:', error);
            setIsPlaying(false);
          });
        }
      } catch (error) {
        console.error('Audio setup error:', error);
      }
    };

    // Small delay to ensure page is loaded
    setTimeout(playAudio, 100);

    return () => {
      if (audio) {
        audio.pause();
        audio.removeEventListener('canplaythrough', () => {});
        audio.removeEventListener('ended', () => {});
        audio.removeEventListener('play', () => {});
        audio.removeEventListener('pause', () => {});
      }
    };
  }, []);

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
        loop
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
            🎵 Klik op de play knop om "Rise and Shine" af te spelen
          </p>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;