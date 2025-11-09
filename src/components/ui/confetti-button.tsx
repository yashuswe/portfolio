import { motion } from "framer-motion";
import { useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  delay: number;
}

export function ConfettiButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isExploding, setIsExploding] = useState(false);

  const colors = [
    "#667eea",
    "#764ba2",
    "#f093fb",
    "#4facfe",
    "#43e97b",
    "#fa709a",
  ];

  const handleClick = () => {
    if (isExploding) return;

    setIsExploding(true);
    const pieces: ConfettiPiece[] = [];

    // Create 30 confetti pieces
    for (let i = 0; i < 30; i++) {
      pieces.push({
        id: i,
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400 - 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        delay: Math.random() * 0.1,
      });
    }

    setConfetti(pieces);

    // Clear confetti after animation
    setTimeout(() => {
      setConfetti([]);
      setIsExploding(false);
    }, 2000);
  };

  return (
    <div className="relative inline-block">
      <motion.div
        onClick={handleClick}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: "pointer" }}
      >
        {children}
      </motion.div>

      {/* Confetti particles */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-sm"
            style={{
              backgroundColor: piece.color,
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            animate={{
              x: piece.x,
              y: piece.y,
              opacity: 0,
              rotate: piece.rotation,
              scale: 0,
            }}
            transition={{
              duration: 1.5,
              delay: piece.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
