import { motion } from 'framer-motion';
import './FloatingBackground.css';

const MotionDiv = motion.div;

const ORBS = [
  { size: 420, x: '10%', y: '15%', color: 'var(--orb-1)', delay: 0 },
  { size: 320, x: '75%', y: '60%', color: 'var(--orb-2)', delay: 2 },
  { size: 280, x: '55%', y: '5%', color: 'var(--orb-3)', delay: 4 },
  { size: 200, x: '85%', y: '25%', color: 'var(--orb-1)', delay: 1 },
  { size: 160, x: '20%', y: '70%', color: 'var(--orb-2)', delay: 3 },
];

export default function FloatingBackground() {
  return (
    <div className="floating-bg" aria-hidden>
      <div className="floating-bg__grid" />
      {ORBS.map((orb, i) => (
        <MotionDiv
          key={i}
          className="floating-bg__orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 20, -10, 0],
            scale: [1, 1.08, 0.95, 1.04, 1],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
