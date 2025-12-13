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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container"
        style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}
      >
        <div className="hero-content">
          <motion.div 
            className="hero__profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img
              className="hero__profile-image expand-on-hover"
              src={ProfilePicture}
              alt="ethan taking selfie in London"
            />
          </motion.div>
          <div className="hero-about">
            <motion.h1 
              className="hero-about__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi,
            </motion.h1>
            <motion.h3 
              className="hero-about__name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I&apos;m Ethan.
            </motion.h3>
            <motion.p
              className="hero-about__occupation text-shadows"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Student learning Web Dev
            </motion.p>

            <motion.div 
              className="hero__links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://github.com/EthanGreatorex"
                className="hero__link"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-greatorex-240983327/"
                target="_blank"
                className="hero__link"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <button onClick={copyEmail} tabIndex={0} className="hero__link" aria-label="Copy Email">
                {hasCopyEmail ? (
                  <span className="copied-email">✓</span>
                ) : (
                  <FaEnvelope></FaEnvelope>
                )}
              </button>
            </motion.div>
            <motion.p 
              className="hero-about__hobbies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              I've been passionate about Web development from a young age, I love been able to express what I love in a way other people can visually see and interactive with! <br></br><br></br> Besides Web development, I enjoy music, running and watching
              movies!
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-carousel"
        >
          <TechCarousel />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
