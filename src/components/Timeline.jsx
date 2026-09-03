import { FaCrown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Timeline.css";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionArticle = motion.article;
const MotionSpan = motion.span;

const timelineData = [
  {
    year: "2026",
    age: "19 years old",
    desc: "Employed @ Bloc Digital as a Web Developer. Achieved a Distinction in my T-Level Digital Design, Production & Development",
  },
  {
    year: "2025",
    age: "18 years old",
    desc: "Going into the second year of my T-Level course alongside a work placement at Bloc Digital. Placed first in the category for use of data and AI in our digital solution at the EMIOT Challenge",
  },
  {
    year: "2024",
    age: "17 years old",
    desc: "Took on a T-Level Digital Design, Production and Development course at Derby College",
  },
  {
    year: "2022",
    age: "15 years old",
    desc: "I started and completed an A-Level in Computer Science & GCSE Statistics",
  },
  {
    year: "2021",
    age: "14 years old",
    desc: "I decided to take a Computer Science & ICT IGCSE, which sparked my passion for programming",
  },
  {
    year: "2019",
    age: "12 years old",
    desc: "I started my Mathematics & English IGCSEs & finished them in 2020 and 2021",
  },
  {
    year: "2018",
    age: "11 years old",
    desc: "I became Home Educated; this allowed much more flexibility in my work as well as more family time",
  },
];

const currentYear = new Date().getFullYear().toString();

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <MotionSection
      id="timeline"
      className="timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Timeline</p>
        <h2 className="section-title">Experience & milestones</h2>
        <p className="section-description" style={{ marginBottom: "3rem" }}>
          Key moments in my journey so far.
        </p>
      </MotionDiv>

      <div className="timeline-list" ref={ref}>
        <div className="timeline-track" aria-hidden>
          <MotionDiv
            className="timeline-track-fill"
            style={{ height: lineHeight }}
          />
        </div>

        {timelineData.map((event, i) => (
          <MotionArticle
            key={event.year + i}
            className={`timeline-item ${event.year === currentYear ? "timeline-item--current" : ""}`}
            tabIndex={0}
            aria-label={`${event.year}, ${event.age}. ${event.desc}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 22,
              delay: i * 0.06,
            }}
            whileHover={{ x: 8 }}
          >
            <div className="timeline-marker" aria-hidden>
              {event.year === currentYear && (
                <MotionSpan
                  className="timeline-marker-pulse"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>

            <div className="timeline-content">
              <span className="timeline-year">
                {event.year}
                {event.year === currentYear && (
                  <MotionSpan
                    initial={{ rotate: -20, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      delay: 0.3,
                    }}
                  >
                    <FaCrown className="crown-icon" aria-label="Current year" />
                  </MotionSpan>
                )}
              </span>
              <p className="timeline-age">{event.age}</p>
              <p className="timeline-description">{event.desc}</p>
            </div>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}
