import heroImage from "../../images/upscaled-space-bg.jpg";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUpRightFromSquare, FaGithub, FaLinkedin } from "react-icons/fa6";
import "./Hero.css";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionImg = motion.img;
const MotionA = motion.a;

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-backdrop">
        <MotionImg
          src={heroImage}
          alt=""
          className="hero-image"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <MotionP
          className="hero-kicker"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Web Dev @ Bloc Digital / UK
        </MotionP>
        <MotionH1
          className="hero-name"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          Ethan
          <br />
          <em>Greatorex</em>
        </MotionH1>
        <MotionP
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          19 year old web developer passionate about creating engaging digital
          experiences.
        </MotionP>
        <MotionDiv
          className="hero-socials"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <MotionA
            href="https://github.com/EthanGreatorex"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
          >
            <FaGithub aria-hidden="true" />
          </MotionA>
          <MotionA
            href="https://www.linkedin.com/in/ethan-greatorex/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
          >
            <FaLinkedin aria-hidden="true" />
          </MotionA>
        </MotionDiv>
        <MotionDiv
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <MotionA
            href="#projects"
            className="btn btn--primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            View my work <FaArrowUpRightFromSquare aria-hidden="true" />
          </MotionA>
          <MotionA
            href="#contact"
            className="btn btn--outline"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in touch
          </MotionA>
        </MotionDiv>
      </div>
      <a
        href="#projects"
        className="hero-scroll-hint"
        aria-label="Scroll to selected work"
      >
        <span>Scroll to explore</span>
        <FaArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
