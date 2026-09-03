import {
  FaReact,
  FaFigma,
  FaBootstrap,
  FaPython,
  FaCss3,
  FaHtml5,
  FaFlask,
  FaNodeJs,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { SiExpress, SiPrisma, SiPostgresql } from "react-icons/si";
import { createElement, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./Projects.css";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionArticle = motion.article;

import chattyImg from "../../images/chatty.png";
import smartrouteImg from "../../images/smartroute.png";
import whereswallyImg from "../../images/whereswally.png";
import cosmoAIImg from "../../images/cosmo-chat.png";
import youtubeImg from "../../images/youtube.png";
import papersync from "../../images/papersync.png";
import reactMovieAppImg from "../../images/react-movie-app.png";
import easyArticleImg from "../../images/easy-article.png";
import terminalWebsiteImg from "../../images/terminal-website.png";
import spaceGameImg from "../../images/space-game.png";
import twitter from "../../images/twitter.png";

const project_data = [
  {
    title: "Twitter Clone",
    image: twitter,
    link: "https://github.com/EthanGreatorex/TwitterClone",
    technologies: [
      { icon: FaReact },
      { icon: FaNodeJs },
      { icon: SiExpress },
      { icon: SiPrisma },
      { icon: SiPostgresql },
    ],
    description:
      "A full stack Twitter clone built with React, Express & Prisma ORM.",
    date: "2026",
  },
  {
    title: "PaperSync",
    image: papersync,
    link: "https://www.linkedin.com/posts/ethan-greatorex_i-recently-had-an-idea-for-an-ios-app-activity-7430564762469519360-LgKP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMOZABfE_u3OuhJBwcvVcMTzdoHndGKq8",
    technologies: [{ icon: FaReact }],
    description:
      "An iOS app that uses AI to scan physical documents for dates and events, and adds them to Apple Calendar.",
    date: "2026",
  },
  {
    title: "Chatty",
    image: chattyImg,
    link: "https://github.com/EthanGreatorex/Chatty",
    technologies: [{ icon: FaReact }],
    description:
      "A live chatting website! Create an account, and message other users.",
    date: "2025",
  },
  {
    title: "SmartRoute",
    image: smartrouteImg,
    link: "https://pager-union-03256972.figma.site",
    technologies: [{ icon: FaFigma }],
    description:
      "EMIOT Challenge award winning design prototype for easier, smarter and more eco route planning.",
    date: "2025",
  },
  {
    title: "WheresWally",
    image: whereswallyImg,
    link: "https://github.com/EthanGreatorex/WhereIsWally",
    technologies: [{ icon: FaReact }, { icon: FaBootstrap }],
    description:
      "A fun where's Wally game with leaderboards! Built with React, Express & MongoDB.",
    date: "2025",
  },
  {
    title: "Cosmo AI",
    image: cosmoAIImg,
    link: "https://cosmoai-v2z5.onrender.com/",
    technologies: [
      { icon: FaPython },
      { icon: FaCss3 },
      { icon: FaHtml5 },
      { icon: FaFlask },
    ],
    description:
      "An app built using Flask that allows users to chat with AI and upload files & website URLs.",
    date: "2025",
  },
  {
    title: "Youtube Comment Search",
    image: youtubeImg,
    link: "https://ethangreatorex.github.io/YouTubeCommentSearcher/",
    technologies: [{ icon: FaReact }, { icon: FaCss3 }, { icon: FaHtml5 }],
    description: "Fetch and search for comments & users from a youtube video",
    date: "2025",
  },
  {
    title: "React Movie App",
    image: reactMovieAppImg,
    link: "https://ethangreatorex.github.io/ReactMovieApp/",
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }, { icon: FaReact }],
    description:
      "An app built using React to search for movies and view details.",
    date: "2025",
  },
  {
    title: "Easy Article",
    image: easyArticleImg,
    link: "https://github.com/EthanGreatorex/EasyArticleFlaskAPP",
    technologies: [
      { icon: FaCss3 },
      { icon: FaHtml5 },
      { icon: FaFlask },
      { icon: FaPython },
    ],
    description:
      "An app that allows users to view articles in a simple format through web scraping. Originally started as a Python Tkinter app.",
    date: "2024",
  },
  {
    title: "Terminal Website",
    image: terminalWebsiteImg,
    link: "https://ethangreatorex.github.io/TerminalWebsiteV2/",
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }],
    description:
      "A fun project that simulates a terminal interface. Built using HTML, JS and CSS",
    date: "2023",
  },
  {
    title: "Space Game",
    image: spaceGameImg,
    link: "https://github.com/EthanGreatorex/SpaceGame",
    technologies: [{ icon: FaPython }],
    description:
      "A game built using Python and Pygame. Players must avoid the asteroids which get faster over time.",
    date: "2022",
  },
];

function TiltCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionArticle
      ref={ref}
      className="project-card"
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 22,
        delay: (index % 3) * 0.08,
      }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link"
        tabIndex={0}
      >
        <div className="project-card-image-wrap">
          <img src={project.image} alt="" className="project-card-image" />
          <span className="project-card-arrow" aria-hidden>
            <FaArrowUpRightFromSquare />
          </span>
        </div>
        <div className="project-card-inner">
          <span className="project-date">{project.date}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-technologies">
            {project.technologies.map((tech, i) => (
              <li key={i} className="project-tech-icon" aria-hidden>
                {createElement(tech.icon)}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </MotionArticle>
  );
}

export default function Projects() {
  return (
    <MotionSection
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-description" style={{ marginBottom: "2.5rem" }}>
          Each project can be viewed on my GitHub or live.
        </p>
      </MotionDiv>

      <div className="projects-grid">
        {project_data.map((project, index) => (
          <TiltCard
            key={project.title + project.date}
            project={project}
            index={index}
          />
        ))}
      </div>
    </MotionSection>
  );
}
