import React from "react";
import "../css/stars.css";
import { useMemo } from "react";

function Stars({ count = 120 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      delay: Math.random() * 5 + "s",
      duration: 2 + Math.random() * 3 + "s",
    }));
  }, [count]);

  return (
    <div className="stars">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default Stars;
