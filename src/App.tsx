import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from './config';
import FloatingHearts from './components/FloatingHearts';

type Stage = 'intro' | 'story' | 'letter' | 'pause' | 'final';

export default function App() {
  const [stage, setStage] = useState<Stage>('intro');
  const [storyIndex, setStoryIndex] = useState(0);
  const [showFinalPart, setShowFinalPart] = useState(0);

  const totalStoryItems = CONFIG.story.length;

  const nextStory = () => {
    if (storyIndex < totalStoryItems - 1) {
      setStoryIndex(prev => prev + 1);
    } else {
      setStage('letter');
    }
  };

  const startStory = () => {
    setStage('story');
  };

  const goToPause = () => {
    setStage('pause');
    setTimeout(() => {
      setStage('final');
      // Sequence the final reveal parts
      setTimeout(() => setShowFinalPart(1), 2000);
      setTimeout(() => setShowFinalPart(2), 4500);
      setTimeout(() => {
        setShowFinalPart(3);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#e11d48', '#fb7185', '#fda4af']
        });
      }, 7000);
    }, 3000);
  };

  const restart = () => {
    setStage('intro');
    setStoryIndex(0);
    setShowFinalPart(0);
  };

  // Determine current content for the story stage
  const currentItem = CONFIG.story[storyIndex] as any;

  return (
    <div className={`min-h-screen ${CONFIG.colors.background} ${CONFIG.colors.text} overflow-hidden font-sans relative transition-colors duration-1000`}>
      <FloatingHearts />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center min-h-screen"
      >
        <AnimatePresence mode="wait">
          
          {/* INTRO STAGE */}
          {stage === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mb-8 flex justify-center"
              >
                <Heart size={80} className={`${CONFIG.colors.heart} fill-current`} />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
                Bună, {CONFIG.herName}
              </h1>
              <button
                onClick={startStory}
                className={`group flex items-center gap-3 ${CONFIG.colors.accent} text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:opacity-90 transition-all transform hover:scale-105 active:scale-95`}
              >
                AM CEVA SĂ-ȚI SPUN ❤️
              </button>
            </motion.div>
          )}

          {/* STORY STAGE */}
          {stage === 'story' && (
            <motion.div
              key={`story-${storyIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-2xl text-center"
            >
              {currentItem.type === 'text' ? (
                <div className="space-y-8">
                  <p className="text-3xl md:text-4xl font-serif italic leading-relaxed">
                    "{currentItem.content}"
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-video bg-black"
                  >
                    <video 
                      src={currentItem.url} 
                      controls
                      autoPlay
                      muted
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs">
                      VIDEO
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none flex items-end justify-center p-6">
                      <p className="text-white text-xl font-medium">{currentItem.caption}</p>
                    </div>
                  </motion.div>
                </div>
              )}

              <button
                onClick={nextStory}
                className="mt-12 flex items-center gap-2 mx-auto bg-white/50 backdrop-blur-sm border border-rose-200 px-6 py-3 rounded-full hover:bg-white transition-colors"
              >
                <span>{storyIndex === totalStoryItems - 1 ? "MAI DEPARTE 💗" : "CONTINUĂ 💕"}</span>
                <ChevronRight size={20} />
              </button>
            </motion.div>
          )}

          {/* LETTER STAGE */}
          {stage === 'letter' && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-xl bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-rose-100 relative"
            >
              <Heart className="absolute -top-6 -right-6 text-rose-400 fill-rose-400 rotate-12" size={48} />
              <h2 className="text-2xl font-bold mb-6 text-rose-600">Pentru tine...</h2>
              <div className="whitespace-pre-line text-lg leading-relaxed text-rose-900 mb-8 font-medium">
                {CONFIG.loveLetter}
              </div>
              <div className="text-right font-cursive text-3xl mb-8 text-rose-600">
                — Cu drag, {CONFIG.myName}
              </div>
              <button
                onClick={goToPause}
                className="w-full bg-rose-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-rose-600 transition-all flex justify-center items-center gap-2"
              >
                APASĂ AICI ❤️
              </button>
            </motion.div>
          )}

          {/* PAUSE STAGE */}
          {stage === 'pause' && (
            <motion.div
              key="pause"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              {/* Ecran minimal pentru momentul de pauză dramatică */}
            </motion.div>
          )}

          {/* FINAL REVEAL STAGE */}
          {stage === 'final' && (
            <motion.div
              key="final"
              className="text-center flex flex-col items-center justify-center w-full"
            >
              <div className="h-64 flex flex-col items-center justify-center">
                <AnimatePresence>
                  {showFinalPart >= 0 && (
                    <motion.p
                      key="part0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5 }}
                      className="text-2xl md:text-3xl font-light mb-4"
                    >
                      Dar un lucru e sigur…
                    </motion.p>
                  )}
                  {showFinalPart >= 1 && (
                    <motion.p
                      key="part1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                      className="text-4xl md:text-6xl font-bold mb-4"
                    >
                      Te-aș alege din nou.
                    </motion.p>
                  )}
                  {showFinalPart >= 2 && (
                    <motion.p
                      key="part2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="text-3xl md:text-5xl font-cursive text-rose-500"
                    >
                      Mereu. ❤️
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {showFinalPart >= 3 && (
                  <motion.div
                    key="part3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="mt-12 flex flex-col items-center"
                  >
                    <h2 className="text-5xl md:text-7xl font-black text-rose-600 drop-shadow-lg mb-8">
                      {CONFIG.finalMessage}
                    </h2>
                    
                    <motion.div
                      animate={{ 
                        scale: [1, 1.15, 1],
                        filter: ['drop-shadow(0 0 20px rgba(244, 63, 94, 0.4))', 'drop-shadow(0 0 40px rgba(244, 63, 94, 0.7))', 'drop-shadow(0 0 20px rgba(244, 63, 94, 0.4))']
                      }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className={`${CONFIG.colors.heart} cursor-pointer`}
                      onClick={() => confetti()}
                    >
                      <Heart size={120} fill="currentColor" />
                    </motion.div>

                    <button
                      onClick={restart}
                      className="mt-20 flex items-center gap-2 text-rose-400 hover:text-rose-600 transition-colors font-medium uppercase tracking-widest text-sm"
                    >
                      <RotateCcw size={16} />
                      REIA POVESTEA ❤️
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

        </AnimatePresence>
      </motion.main>
    </div>
  );
}
