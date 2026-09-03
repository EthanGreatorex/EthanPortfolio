import { motion } from "framer-motion";
import "./Process.css";

const MotionArticle = motion.article;

const steps = [
  [
    "01",
    "Frame the idea",
    "Start with the purpose, audience, and the one thing the experience needs to make clear.",
  ],
  [
    "02",
    "Make it tangible",
    "Turn the direction into a considered interface with a responsive system and real content.",
  ],
  [
    "03",
    "Make it last",
    "Polish the details, test the edges, and ship something that feels good to use.",
  ],
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-heading">
        <p className="section-label">How I work</p>
        <h2 className="section-title">
          From first thought
          <br />
          <em>to final detail.</em>
        </h2>
      </div>
      <div className="process-list">
        {steps.map(([number, title, description], index) => (
          <MotionArticle
            className="process-item"
            key={number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="process-number">{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </MotionArticle>
        ))}
      </div>
    </section>
  );
}
