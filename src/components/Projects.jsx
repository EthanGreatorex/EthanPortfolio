import {
  FaReact,
  FaFigma,
  FaBootstrap,
  FaPython,
  FaCss3,
  FaHtml5,
  FaFlask,
  FaSass,
} from 'react-icons/fa6';
import './Projects.css';

import chattyImg from '../../images/chatty.png';
import smartrouteImg from '../../images/smartroute.png';
import whereswallyImg from '../../images/whereswally.png';
import cosmoAIImg from '../../images/cosmo-chat.png';
import youtubeImg from '../../images/youtube.png';
import papersync from '../../images/papersync.png'
import blogImg from '../../images/blog.png';
import reactMovieAppImg from '../../images/react-movie-app.png';
import planetExplorerImg from '../../images/planet-explorer.png';
import reactQuizAppImg from '../../images/react-quiz-app.png';
import easyArticleImg from '../../images/easy-article.png';
import terminalWebsiteImg from '../../images/terminal-website.png';
import spaceGameImg from '../../images/space-game.png';

const project_data = [
  {
    title: 'PaperSync',
    image: papersync,
    link: 'https://www.linkedin.com/posts/ethan-greatorex_i-recently-had-an-idea-for-an-ios-app-activity-7430564762469519360-LgKP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMOZABfE_u3OuhJBwcvVcMTzdoHndGKq8',
    technologies: [{ icon: FaReact }],
    description:
      'An IOS app that uses AI to scan physical documents for dates and events, and adds them to Apple Calendar.',
    date: '2025',
  },
  {
    title: 'Chatty',
    image: chattyImg,
    link: 'https://github.com/EthanGreatorex/Chatty',
    technologies: [{ icon: FaReact }],
    description:
      'A live chatting website! Create an account, and message other users.',
    date: '2025',
  },
  {
    title: 'SmartRoute',
    image: smartrouteImg,
    link: 'https://pager-union-03256972.figma.site',
    technologies: [{ icon: FaFigma }],
    description:
      'EMIOT Challenge award winning design prototype for easier, smarter and more eco route planning.',
    date: '2025',
  },
  {
    title: "WheresWally",
    image: whereswallyImg,
    link: 'https://github.com/EthanGreatorex/WhereIsWally',
    technologies: [{ icon: FaReact }, { icon: FaBootstrap }],
    description:
      "A fun where's Wally game with leaderboards! Built with React, Express & MongoDB.",
    date: '2025',
  },
  {
    title: 'Cosmo AI',
    image: cosmoAIImg,
    link: 'https://cosmoai-v2z5.onrender.com/',
    technologies: [
      { icon: FaPython },
      { icon: FaCss3 },
      { icon: FaHtml5 },
      { icon: FaFlask },
    ],
    description:
      'An app built using Flask that allows users to chat with AI and upload files & website URLs.',
    date: '2025',
  },
  {
    title: 'Youtube Comment Search',
    image: youtubeImg,
    link: 'https://ethangreatorex.github.io/YouTubeCommentSearcher/',
    technologies: [{ icon: FaReact }, { icon: FaCss3 }, { icon: FaHtml5 }],
    description: 'Fetch and search for comments & users from a youtube video',
    date: '2025',
  },
  {
    title: 'React Movie App',
    image: reactMovieAppImg,
    link: 'https://ethangreatorex.github.io/ReactMovieApp/',
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }, { icon: FaReact }],
    description:
      'An app built using React to search for movies and view details.',
    date: '2025',
  },
  {
    title: 'Easy Article',
    image: easyArticleImg,
    link: 'https://github.com/EthanGreatorex/EasyArticleFlaskAPP',
    technologies: [
      { icon: FaCss3 },
      { icon: FaHtml5 },
      { icon: FaFlask },
      { icon: FaPython },
    ],
    description:
      'An app that allows users to view articles in a simple format through web scraping. Orignally started as a Python Tkinter app.',
    date: '2024',
  },
  {
    title: 'Terminal Website',
    image: terminalWebsiteImg,
    link: 'https://ethangreatorex.github.io/TerminalWebsiteV2/',
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }],
    description:
      'A fun project that simulates a terminal interface. Built using HTML, JS and CSS',
    date: '2023',
  },
  {
    title: 'Space Game',
    image: spaceGameImg,
    link: 'https://github.com/EthanGreatorex/SpaceGame',
    technologies: [{ icon: FaPython }],
    description:
      'A game build using Python and Pygame. Players must avoid the asteroids which get faster over time.',
    date: '2022',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <p className="section-label">Portfolio</p>
      <h2 className="section-title">Discover what I've created</h2>
      <p className="section-description" style={{ marginBottom: '2rem' }}>
        Each project can be viewed on my GitHub or live.
      </p>
      <div className="projects-grid">
        {project_data.map((project) => (
          <article key={project.title + project.date} className="project-card">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-card-image-wrap">
                <img
                  src={project.image}
                  alt=""
                  className="project-card-image"
                />
              </div>
              <div className="project-card-inner">
                <span className="project-date">{project.date}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-technologies">
                  {project.technologies.map(({ icon: Icon }, i) => (
                    <li key={i} className="project-tech-icon" aria-hidden>
                      <Icon />
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
