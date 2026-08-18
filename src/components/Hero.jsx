import { FaGithub, FaLinkedin } from 'react-icons/fa';
import heroImage from '../../images/black-bg-pfp.jpeg';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Hero.css';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionImg = motion.img;
const MotionSpan = motion.span;
const MotionA = motion.a;

const name = 'Ethan Greatorex';
const nameLetters = name.split('');

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 200, damping: 18 },
  },
};

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <MotionDiv
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20, delay: 0.1 }}
        >
          <MotionDiv
            className="hero-avatar-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <MotionImg
            src={heroImage}
            alt="Ethan Greatorex"
            className="hero-image"
            whileHover={{ scale: 1.06, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          />
          <MotionSpan
            className="hero-badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.8 }}
          >
            ✦
          </MotionSpan>
        </MotionDiv>

        <MotionP
          className="hero-greeting"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hey, I'm
        </MotionP>

        <MotionH1
          className="hero-name"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={name}
        >
          {nameLetters.map((char, i) => (
            <MotionSpan
              key={i}
              className="hero-name-letter"
              variants={letterVariants}
              aria-hidden={char !== ' '}
            >
              {char === ' ' ? '\u00A0' : char}
            </MotionSpan>
          ))}
        </MotionH1>

        <MotionH2
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Typewriter
            words={['Web Developer.', 'React Developer.']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={65}
            deleteSpeed={35}
            delaySpeed={1800}
          />
        </MotionH2>

        <MotionP
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
        >
          @ Bloc Digital
        </MotionP>

        <MotionP
          className="hero-description"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          I've been passionate about web development from a young age, I love
          expressing what I care about in ways people can see and interact with.
          Besides coding, I enjoy watching movies and hanging out with friends .
        </MotionP>

        <MotionDiv
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.35 }}
        >
          <MotionA
            href="#contact"
            className="btn btn--primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact me
          </MotionA>
          <MotionA
            href="#projects"
            className="btn btn--outline"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View projects →
          </MotionA>
        </MotionDiv>

        <MotionDiv
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        >
          <MotionA
            href="https://github.com/EthanGreatorex"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
            whileHover={{ y: -4, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <FaGithub />
          </MotionA>
          <MotionA
            href="https://www.linkedin.com/in/ethan-greatorex/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
            whileHover={{ y: -4, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <FaLinkedin />
          </MotionA>
        </MotionDiv>

        <MotionDiv
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          aria-hidden
        >
          <MotionSpan
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </MotionSpan>
        </MotionDiv>
      </div>
    </section>
  );
}
