import "./Timeline.css";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionSection = motion.section;
const MotionArticle = motion.article;

const timelineData = [
  {
    year: "2026",
    age: "19 Years old",
    desc: "Employed @ Bloc Digital as a Web Developer",
  },
  {
    year: "2025",
    age: "18 Years old",
    desc: "Going into the second year of my T-Level course alongside a work placement at Bloc Digital. Placed first in the category for use of data and AI in our digital solution at the EMIOT Challenge ",
  },
  {
    year: "2024",
    age: "17 Years old",
    desc: "Took on a T-Level Digital Design, Production and Development course at Derby College",
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

const currentYear = new Date().getFullYear().toString();

export default function Timeline() {
  return (
    <MotionSection
      id="timeline"
      className="timeline"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <p className="section-label">Timeline</p>
      <h2 className="section-title">Experience & milestones</h2>
      <p className="section-description" style={{ marginBottom: "2rem" }}>
        Key moments in my journey so far.
      </p>
      <div className="timeline-list">
        {timelineData.map((event, i) => (
          <MotionArticle
            key={event.year + i}
            className="timeline-item"
            tabIndex={0}
            aria-label={`${event.year}, ${event.age}. ${event.desc}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? 16 : -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <div className="timeline-marker" aria-hidden />

            <div className="timeline-content">
              <span className="timeline-year">
                {event.year}

                {event.year === currentYear && (
                  <FaCrown className="crown-icon" />
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
