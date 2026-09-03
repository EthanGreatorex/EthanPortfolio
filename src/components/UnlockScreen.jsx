import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./UnlockScreen.css";

const MotionDiv = motion.div;
const MotionButton = motion.button;
const MotionCircle = motion.circle;
const MotionPath = motion.path;

const TICK_ANIM_MS = 750;
const HOLD_MS = 380;
const EXIT_MS = 280;

function UnlockTick() {
  return (
    <div className="unlock-tick" aria-hidden="true">
      <MotionDiv
        className="unlock-tick-burst"
        initial={{ scale: 0.6, opacity: 0.6 }}
        animate={{ scale: 1.8, opacity: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      />
      <MotionDiv
        className="unlock-tick-burst unlock-tick-burst--secondary"
        initial={{ scale: 0.6, opacity: 0.4 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
      />

      <MotionDiv
        className="unlock-tick-icon"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        <svg viewBox="0 0 72 72" className="unlock-tick-svg">
          <MotionCircle
            className="unlock-tick-circle"
            cx="36"
            cy="36"
            r="31"
            fill="var(--accent-soft)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{ transformOrigin: "36px 36px" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
          <MotionCircle
            cx="36"
            cy="36"
            r="31"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
          <MotionPath
            className="unlock-tick-check"
            d="M23 37.5 L32.5 47 L51 25.5"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.38,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </svg>
      </MotionDiv>
    </div>
  );
}

export default function UnlockScreen({ onUnlock }) {
  const [phase, setPhase] = useState("idle");
  const timersRef = useRef([]);

  useEffect(() => {
    document.body.classList.add("unlock-active");
    return () => {
      document.body.classList.remove("unlock-active");
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  const beginUnlock = useCallback(() => {
    if (phase !== "idle") return;

    setPhase("success");

    timersRef.current.forEach(clearTimeout);
    timersRef.current = [
      window.setTimeout(() => {
        setPhase("exiting");
        onUnlock();
      }, TICK_ANIM_MS + HOLD_MS),
    ];
  }, [onUnlock, phase]);

  return (
    <MotionDiv
      className={`unlock-screen unlock-screen--${phase}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exiting" ? 0 : 1 }}
      transition={{ duration: EXIT_MS / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="unlock-screen-glow" aria-hidden="true" />

      {phase === "idle" ? (
        <MotionButton
          type="button"
          className="unlock-screen-tap"
          onClick={beginUnlock}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="unlock-screen-tap-ring" aria-hidden="true" />
          <span className="unlock-screen-tap-label">Tap to unlock</span>
        </MotionButton>
      ) : (
        <MotionDiv
          className="unlock-screen-reveal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          <UnlockTick />
          <MotionDiv
            className="unlock-screen-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Welcome in
          </MotionDiv>
        </MotionDiv>
      )}
    </MotionDiv>
  );
}
