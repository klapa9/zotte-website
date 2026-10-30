import { useCallback, useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX, X } from 'lucide-react';

// Same order as the pages, followed by Geld and the shortened comments song.
const playlist = [
  { title: 'Angst is verboden', src: '/index.mp3' },
  { title: 'Open je geest', src: '/Open_Je_Geest_1.mp3' },
  { title: 'Wees zot', src: '/weeszot.mp3' },
  { title: 'Leven', src: '/leven4.mp3' },
  { title: 'Liefde', src: '/liefde.mp3' },
  { title: 'Ziek zot', src: '/heal2.mp3' },
  { title: 'Geld', src: '/btc2.mp3' },
  { title: 'Reacties', src: '/reacties-kort.mp3' },
];

function savedVolume() {
  const value = Number(localStorage.getItem('audioVolume') ?? 0.3);
  return Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0.3;
}

const controlClass = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 transition-colors';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  // Playback intent is separate from browser playback events: loading and
  // autoplay rejection must never undo an explicit pause.
  const shouldPlay = useRef(true);
  const autoplayBlocked = useRef(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(savedVolume);
  const [muted, setMuted] = useState(() => localStorage.getItem('audioMuted') === 'true');
  const [error, setError] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const track = playlist[trackIndex];

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !shouldPlay.current) return;
    const source = audio.src;
    try {
      await audio.play();
      if (audio.src !== source) return;
      if (!shouldPlay.current) audio.pause();
      autoplayBlocked.current = false;
      setBlocked(false);
    } catch (reason) {
      if (audio.src !== source || !shouldPlay.current) return;
      autoplayBlocked.current = reason instanceof DOMException && reason.name === 'NotAllowedError';
      setBlocked(autoplayBlocked.current);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
    localStorage.setItem('audioVolume', String(volume));
    localStorage.setItem('audioMuted', String(muted));
  }, [volume, muted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setError(false);
    setIsPlaying(false);
    audio.src = track.src;
    audio.load();
    void play();
  }, [track.src, play]);

  useEffect(() => {
    const retry = (event: Event) => {
      // Player buttons handle their own action, especially pause.
      if (event.target instanceof Node && playerRef.current?.contains(event.target)) return;
      if (autoplayBlocked.current && shouldPlay.current) void play();
    };
    document.addEventListener('click', retry);
    document.addEventListener('keydown', retry);
    return () => {
      document.removeEventListener('click', retry);
      document.removeEventListener('keydown', retry);
    };
  }, [play]);

  const changeTrack = (offset: number) => {
    setTrackIndex((index) => (index + offset + playlist.length) % playlist.length);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      shouldPlay.current = false;
      autoplayBlocked.current = false;
      setBlocked(false);
      audio.pause();
    } else {
      shouldPlay.current = true;
      if (error) {
        setError(false);
        audio.load();
      }
      void play();
    }
  };

  return (
    <div ref={playerRef} className="fixed bottom-20 left-4 z-50 max-w-[calc(100vw-2rem)] text-white md:bottom-auto md:left-auto md:right-4 md:top-4">
      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => { if (shouldPlay.current) changeTrack(1); }}
        onError={() => { setError(true); setIsPlaying(false); }}
      />
      <div className={`border border-white/20 bg-black/85 shadow-lg backdrop-blur-md ${expanded ? 'w-72 max-w-full rounded-2xl p-4' : 'flex items-center gap-1 rounded-full p-2'}`}>
        {expanded ? (
          <>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="min-w-0" aria-live="polite">
                <p className="text-xs uppercase tracking-widest text-cyan-300">Muziek · {trackIndex + 1}/{playlist.length}</p>
                <p className="mt-1 break-words font-semibold">{track.title}</p>
              </div>
              <button className={controlClass} onClick={() => setExpanded(false)} aria-label="Muziekspeler inklappen"><X size={18} /></button>
            </div>
            <div className="flex items-center justify-center gap-4">
              <button className={controlClass} onClick={() => changeTrack(-1)} aria-label="Vorig lied"><SkipBack size={20} /></button>
              <button className={`${controlClass} bg-cyan-500/30`} onClick={togglePlay} aria-label={isPlaying ? 'Muziek pauzeren' : 'Muziek afspelen'}>{isPlaying ? <Pause size={22} /> : <Play size={22} />}</button>
              <button className={controlClass} onClick={() => changeTrack(1)} aria-label="Volgend lied"><SkipForward size={20} /></button>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button className={controlClass} onClick={() => setMuted(!muted)} aria-label={muted ? 'Geluid aanzetten' : 'Geluid dempen'}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
              <input aria-label="Muziekvolume" type="range" min="0" max="1" step="0.05" value={volume} onChange={(event) => { setVolume(Number(event.target.value)); setMuted(false); }} className="min-w-0 flex-1 accent-cyan-300" />
            </div>
            {(blocked || error) && <p role="status" className="mt-3 text-xs text-white/70">{error ? 'Lied kon niet laden. Probeer opnieuw of kies het volgende lied.' : 'Klik op afspelen om de muziek te starten.'}</p>}
          </>
        ) : (
          <>
            <button className={controlClass} onClick={() => setExpanded(true)} aria-label="Muziekspeler uitklappen" aria-expanded={false} title="Muziekspeler openen"><Music2 size={22} /></button>
            <button className={controlClass} onClick={togglePlay} aria-label={isPlaying ? 'Muziek pauzeren' : 'Muziek afspelen'}>{isPlaying ? <Pause size={20} /> : <Play size={20} />}</button>
          </>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
