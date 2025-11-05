import "../css/timeline.css";
import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    age: "18 Years old",
    desc: "Going into the second year of my T-Level course alongside a work placement at Bloc Digital",
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

function TimeLine() {
  return (
    <div className="timeline">
      <h2>My Timeline</h2>
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="timeline__timeline-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="timeline-item__date">{item.year}</p>
          <h1 className="timeline-item__title">{item.age}</h1>
          <p className="timeline-item__description">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default TimeLine;
