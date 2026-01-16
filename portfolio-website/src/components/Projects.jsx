import Project from "./Project.jsx";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaCss3,
  FaHtml5,
  FaFlask,
  FaSass,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import CosmoAI from "../assets/cosmo-chat.png";
import ReactMovieApp from "../assets/react-movie-app.png";
import ReactQuizApp from "../assets/react-quiz-app.png";
import TerminalWebsite from "../assets/terminal-website.png";
import EasyArticle from "../assets/easy-article.png";
import SpaceGame from "../assets/space-game.png";
import ReactPlanetApp from "../assets/planet-explorer.png";
import youtube from "../assets/youtube.png";
import blog from "../assets/blog.png";
import smartroute from "../assets/smartroute2.png";
import whereswally from "../assets/whereswally.png";
import chatty from "../assets/chatty.png"
import "../css/projects.css";

const project_data = [
  {
    title: "Chatty",
    image: chatty,
    link: "https://github.com/EthanGreatorex/Chatty",
    technologies: [{ icon: FaReact }],
    description:
      "A live chatting website! Create an account, and message other users.",
    date: "2025",
  },
  {
    title: "SmartRoute",
    image: smartroute,
    link: "https://pager-union-03256972.figma.site",
    technologies: [{ icon: FaFigma }],
    description:
      "EMIOT Challenge award winning design prototype for easier, smarter and more eco route planning.",
    date: "2025",
  },
  {
    title: "WheresWally",
    image: whereswally,
    link: "https://github.com/EthanGreatorex/WhereIsWally",
    technologies: [{ icon: FaReact }, { icon: FaBootstrap }],
    description:
      "A fun where's Wally game with leaderboards! Built with React, Express & MongoDB.",
    date: "2025",
  },
  {
    title: "Cosmo AI",
    image: CosmoAI,
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
    image: youtube,
    link: "https://ethangreatorex.github.io/YouTubeCommentSearcher/",
    technologies: [{ icon: FaReact }, { icon: FaCss3 }, { icon: FaHtml5 }],
    description: "Fetch and search for comments & users from a youtube video",
    date: "2025",
  },
  {
    title: "Full Stack Blog App",
    image: blog,
    link: "https://github.com/EthanGreatorex/blogAPIProject",
    technologies: [{ icon: FaReact }, { icon: FaCss3 }, { icon: FaHtml5 }],
    description:
      "Create accounts, make posts, comment on posts! Built with express, react and postgresql.",
    date: "2025",
  },
  {
    title: "React Movie App",
    image: ReactMovieApp,
    link: "https://ethangreatorex.github.io/ReactMovieApp/",
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }, { icon: FaReact }],
    description:
      "An app built using React to search for movies and view details.",
    date: "2025",
  },
  {
    title: "React Planet Explorer",
    image: ReactPlanetApp,
    link: "https://ethangreatorex.github.io/PlanetExplorer/",
    technologies: [{ icon: FaSass }, { icon: FaHtml5 }, { icon: FaReact }],
    description:
      "An app built using React to search for star wars planets and view lots of facts!",
    date: "2025",
  },
  {
    title: "React Quiz App",
    image: ReactQuizApp,
    link: "https://ethangreatorex.github.io/ReactQuizApp/",
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }, { icon: FaReact }],
    description:
      "This app allows users to take quizzes on various topics. Built using React and The Trivia API.",
    date: "2025",
  },
  {
    title: "Easy Article",
    image: EasyArticle,
    link: "https://github.com/EthanGreatorex/EasyArticleFlaskAPP",
    technologies: [
      { icon: FaCss3 },
      { icon: FaHtml5 },
      { icon: FaFlask },
      { icon: FaPython },
    ],
    description:
      "An app that allows users to view articles in a simple format through web scraping. Orignally started as a Python Tkinter app.",
    date: "2024",
  },
  {
    title: "Terminal Website",
    image: TerminalWebsite,
    link: "https://ethangreatorex.github.io/TerminalWebsiteV2/",
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }],
    description:
      "A fun project that simulates a terminal interface. Built using HTML, JS and CSS",
    date: "2023",
  },
  {
    title: "Space Game",
    image: SpaceGame,
    link: "https://github.com/EthanGreatorex/SpaceGame",
    technologies: [{ icon: FaPython }],
    description:
      "A game build using Python and Pygame. Players must avoid the asteroids which get faster over time.",
    date: "2022",
  },
];

function Projects({ scrollProgress }) {
  const {
    total = 0,
    timelineLeftRatio = 0.6,
    timelineBottomRatio = 0.1,
    projectsRightRatio = 0.3,
  } = scrollProgress;

  const projectsRightStart = timelineLeftRatio + timelineBottomRatio;
  const projectsRightProgress =
    total > projectsRightStart
      ? Math.min((total - projectsRightStart) / projectsRightRatio, 1)
      : 0;


  return (
    <>
      <div className="project-list">
        <motion.h2
          className="project-list__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="typewriter">
            <h2>My Projects.</h2>
          </div>
        </motion.h2>
        {project_data.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.01 }}
            className="project-list__motion"
          >
            <Project
              key={index}
              title={project.title}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
              description={project.description}
              date={project.date}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Projects;
