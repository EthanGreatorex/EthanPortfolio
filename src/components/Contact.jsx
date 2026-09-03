import { motion } from "framer-motion";
import "./Contact.css";

const MotionSection = motion.section;
const MotionSpan = motion.span;
const MotionA = motion.a;

export default function Contact() {
  return (
    <MotionSection
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
    >
      <div className="contact-inner">
        <div className="contact-copy">
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Want to have
            <br />
            <em>a chat?</em>
          </h2>
          <p className="section-description">
            Have a project in mind, a question, or simply want to say hello? I
            would love to hear from you.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-panel-heading">
            <span>01 / Start a conversation</span>
            <span className="contact-status">
              <i /> Currently available
            </span>
          </div>
          <MotionA
            href="mailto:eggreatorex@icloud.com"
            className="contact-email"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.97 }}
          >
            eggreatorex@icloud.com <b aria-hidden>↗</b>
          </MotionA>
          <MotionA
            href="mailto:eggreatorex@icloud.com"
            className="btn btn--primary"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.97 }}
          >
            Send a message <span aria-hidden>↗</span>
          </MotionA>
          <div className="contact-panel-footer">
            <span>Find me online</span>
            <div className="contact-socials">
              <a
                href="https://github.com/EthanGreatorex"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-greatorex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
