import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./HeaderClock.css";

const MotionDiv = motion.div;

function useLiveTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}

function formatParts(date) {
  const day = new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(
    date,
  );
  const dateLabel = new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
  }).format(date);
  const time = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);

  return { day, dateLabel, time };
}

export default function HeaderClock() {
  const now = useLiveTime();
  const { day, dateLabel, time } = formatParts(now);
  const label = now.toLocaleString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <MotionDiv
      className="header-clock"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      aria-live="polite"
      aria-label={`Local time: ${label}`}
    >
      <div className="header-clock-body">
        <span className="header-clock-day">{day}</span>
        <span className="header-clock-date">{dateLabel}</span>
        <time className="header-clock-time" dateTime={now.toISOString()}>
          {time}
        </time>
      </div>
    </MotionDiv>
  );
}
