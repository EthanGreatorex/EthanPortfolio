import { motion } from 'framer-motion';
import './Contact.css';

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
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      <div className="contact-inner">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Want to have a chat?</h2>
        <p className="section-description" style={{ textAlign: 'center', margin: '0 auto' }}>
          Have any questions or just want to chat? I'd love to hear from you.
        </p>

        <MotionSpan
          className="contact-wave"
          animate={{ rotate: [0, 14, -8, 14, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
          aria-hidden
        >
          👋
        </MotionSpan>

        <MotionA
          href="mailto:eggreatorex@icloud.com"
          className="contact-email"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          eggreatorex@icloud.com
        </MotionA>

        <MotionA
          href="mailto:eggreatorex@icloud.com"
          className="btn btn--primary"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.96 }}
        >
          Send a message
        </MotionA>
      </div>
    </MotionSection>
  );
}
