import "../css/timeline.css";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    age: "18 Years old",
    desc: "Going into the second year of my T-Level course alongside a work placement at Bloc Digital. Placed first in the category for use of data and AI in our digital solution at the EMIOT Challenge ",
  },
  {
    year: "2024",
    age: "17 Years old",
    desc: "Currently taking on a T-Level Digital Design, Production and Development course at Derby College",
  },
  {
    year: "2022",
    age: "15 Years old",
    desc: "I started and completed an A-Level in Computer Science & GCSE Statistics",
  },
  {
    year: "2021",
    age: "14 Years old",
    desc: "I decided to take a Computer Science & ICT IGCSE, which sparked my passion for programming",
  },
  {
    year: "2019",
    age: "12 Years old",
    desc: "I started my Mathematics & English IGCSEs & finished them in 2020 and 2021",
  },
  {
    year: "2018",
    age: "11 Years old",
    desc: "I became Home Educated; this allowed much more flexibility in my work as well as more family time",
  },
];

function TimelineItem({ item, index, scrollProgress, totalItems }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Calculate progress for this item - distribute scroll progress across all items
  const itemStartProgress = index / totalItems;
  const itemEndProgress = (index + 1) / totalItems;
  
  // Calculate how much of this item's border should be revealed
  let itemProgress = 0;
  if (scrollProgress >= itemStartProgress) {
    const itemRange = itemEndProgress - itemStartProgress;
    const scrolledInItem = scrollProgress - itemStartProgress;
    itemProgress = Math.min(scrolledInItem / itemRange, 1);
  }

  return (
    <motion.div
      ref={ref}
      key={index}
      className="timeline__timeline-item"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ "--item-progress": Math.max(0, Math.min(1, itemProgress)) }}
    >
      <p className="timeline-item__date">{item.year}</p>
      <h1 className="timeline-item__title">{item.age}</h1>
      <p className="timeline-item__description">{item.desc}</p>
    </motion.div>
  );
}

function TimeLine({ scrollProgress }) {
  const { total = 0, timelineLeftRatio = 0.6, timelineBottomRatio = 0.1 } = scrollProgress;
  
  const timelineLeftEnd = timelineLeftRatio;
  const timelineBottomStart = timelineLeftEnd;
  const timelineBottomEnd = timelineLeftEnd + timelineBottomRatio;
  
  // Calculate progress for each segment
  const timelineLeftProgress = Math.min(total / timelineLeftEnd, 1);
  const timelineBottomProgress = total > timelineBottomStart 
    ? Math.min((total - timelineBottomStart) / timelineBottomRatio, 1) 
    : 0;

  return (
    <div className="timeline" style={{ 
      "--timeline-bottom-progress": Math.max(0, Math.min(1, timelineBottomProgress))
    }}>
      <h2>My Timeline</h2>
      {timelineData.map((item, index) => (
        <TimelineItem 
          key={index} 
          item={item} 
          index={index} 
          scrollProgress={Math.max(0, Math.min(1, timelineLeftProgress))}
          totalItems={timelineData.length}
        />
      ))}
    </div>
  );
}

export default TimeLine;
