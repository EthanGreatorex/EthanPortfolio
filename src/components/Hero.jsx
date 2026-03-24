import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../../images/hero-me.jpeg";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <MotionDiv
          className="hero-visual"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-pattern" aria-hidden />
          <div className="hero-illustration" aria-hidden>
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="hero-image"
            />
          </div>
        </MotionDiv>
        <MotionH1
          className="hero-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span className="hero-title-text">
            <Typewriter
              words={[
                "Web Developer.",
                "React Developer.",
                "Full Stack Developer.",
              ]}
              loop={0} 
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </MotionH1>
        <MotionP
          className="hero-description"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I've been passionate about Web development from a young age, I love
          being able to express what I love in a way other people can visually
          see and interact with! Besides Web development, I enjoy music, running
          and watching movies!
        </MotionP>
        <MotionDiv
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <a href="#contact" className="btn btn--primary">
            Contact me
          </a>
          <a href="#projects" className="btn btn--outline">
            View projects
          </a>
        </MotionDiv>
        <MotionDiv
          className="hero-social"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a
            href="https://github.com/EthanGreatorex"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-greatorex/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}
