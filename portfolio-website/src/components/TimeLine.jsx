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

function TimelineItem({ item, index, totalItems }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      key={index}
      className="timeline__timeline-item"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.1
      }}
    >
      <div className="timeline-item__content">
        <p className="timeline-item__date">{item.year}</p>
        <h3 className="timeline-item__title">{item.age}</h3>
        <p className="timeline-item__description">{item.desc}</p>
      </div>
    </motion.div>
  );
}

function TimeLine({ scrollProgress }) {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const { total = 0, timelineLeftRatio = 0.6 } = scrollProgress;
  
  const timelineProgress = Math.min(total / timelineLeftRatio, 1);

  return (
    <div className="timeline" ref={timelineRef}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Timeline
      </motion.h2>
      <div className="timeline__container">
        <div className="timeline__line"></div>
        <div 
          className="timeline__line-progress"
          style={{ "--timeline-progress": Math.max(0, Math.min(1, timelineProgress)) }}
        ></div>
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            index={index}
            totalItems={timelineData.length}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
