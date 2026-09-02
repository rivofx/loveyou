import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((currentHearts) => [
        ...currentHearts.slice(-15),
        {
          id: Date.now(),
          left: Math.random() * 100,
          duration: 10 + Math.random() * 20,
          size: 10 + Math.random() * 20,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', opacity: 0, scale: 0 }}
          animate={{ y: '-10vh', opacity: [0, 0.5, 0.5, 0], scale: 1 }}
          transition={{ duration: heart.duration, ease: 'linear' }}
          className="absolute text-rose-300/30"
          style={{ left: `${heart.left}%` }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
