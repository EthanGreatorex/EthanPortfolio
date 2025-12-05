import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../assets/pfp-2.jpeg";
import "../css/hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TechCarousel from "./TechCarousel";

function Hero() {
  const [hasCopyEmail, setCopyEmail] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("eggreatorex@icloud.com");
    setCopyEmail(true);
    setTimeout(() => setCopyEmail(false), 2000);
  }

  return (
    <>
      <motion.div
        animate={{ opacity: 1.5, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="hero-content">
          <div className="hero__profile">
            <img
              className="hero__profile-image expand-on-hover"
              src={ProfilePicture}
              alt="ethan taking selfie in London"
            />
          </div>
          <div className="hero-about">
            <h1 className="hero-about__title">Hi,</h1>
            <h3 className="hero-about__name">I&apos;m Ethan.</h3>
            <motion.p
              className="hero-about__occupation"
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1, // controls the wave speed
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0.5,
                  },
                },
              }}
            >
              {"Student learning Web Dev".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { color: "var(--base-animation-text)" },
                    animate: {
                      color: "var(--accent-color)",
                      transition: {
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    },
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            <a
              href="https://github.com/EthanGreatorex"
              className="hero__link"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/ethan-greatorex-240983327/"
              target="_blank"
              className="hero__link"
              rel="noreferrer"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <button onClick={copyEmail} tabIndex={0} className="hero__link">
              {hasCopyEmail ? (
                <p className="copied-email">Copied!</p>
              ) : (
                <FaEnvelope></FaEnvelope>
              )}
            </button>
            <p className="hero-about__hobbies">
              Besides web development, I enjoy music, running and watching
              movies!
            </p>
          </div>
          <TechCarousel />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
