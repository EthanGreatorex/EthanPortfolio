import { SiGithub, SiLinkedin } from "react-icons/si";
import heroImage from '../../images/hero-me.jpeg';
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <div className="hero-visual">
          <div className="hero-pattern" aria-hidden />
          <div className="hero-illustration" aria-hidden>
            <img src={heroImage} alt="Hero Illustration" className="hero-image" />
          </div>
        </div>
        <h1 className="hero-title">
          <span className="hero-title-text">Student Web Developer.</span>
        </h1>
        <p className="hero-description">
          I've been passionate about Web development from a young age, I love
          being able to express what I love in a way other people can visually
          see and interact with! Besides Web development, I enjoy music,
          running and watching movies!
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn--primary">
            Contact me
          </a>
          <a href="#projects" className="btn btn--outline">
            View projects
          </a>
        </div>
        <div className="hero-social">
          <a
            href="https://github.com/EthanGreatorex"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-greatorex/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
