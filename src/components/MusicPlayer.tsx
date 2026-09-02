import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { CONFIG } from '../config';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src={CONFIG.music} loop />
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-rose-200 text-rose-600 hover:bg-rose-50 transition-all duration-300 font-medium text-sm"
      >
        {isPlaying ? (
          <>
            <VolumeX size={18} />
            <span>OPREȘTE MUZICA 🔇</span>
          </>
        ) : (
          <>
            <Volume2 size={18} />
            <span>PORNEȘTE MUZICA 🎵</span>
          </>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
