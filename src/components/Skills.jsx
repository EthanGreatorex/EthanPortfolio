import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaApple,
  FaWindows,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiSharp, SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";
import "./Skills.css";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionUl = motion.ul;
const MotionLi = motion.li;
const MotionSpan = motion.span;

const SKILLS = [
  { name: "Python", Icon: FaPython },
  { name: "React", Icon: FaReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3 },
  { name: "Node", Icon: FaNodeJs },
  { name: "C#", Icon: SiSharp },
  { name: ".NET", Icon: SiDotnet },
  { name: "Windows", Icon: FaWindows },
  { name: "Mac", Icon: FaApple },
];

function SkillPill({ skill, variants }) {
  const IconComponent = skill.Icon;

  return (
    <MotionLi
      className="skills-item"
      tabIndex={0}
      aria-label={`Skill: ${skill.name}`}
      variants={variants}
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <MotionSpan
        className="skills-icon"
        aria-hidden
        whileHover={{ rotate: [0, -12, 12, 0] }}
        transition={{ duration: 0.4 }}
      >
        <IconComponent />
      </MotionSpan>
      {skill.name}
    </MotionLi>
  );
}

export default function Skills() {
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <MotionSection
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work with</h2>
        <p className="section-description" style={{ marginBottom: "2.5rem" }}>
          Technologies and tools I use to bring ideas to life.
        </p>
      </MotionDiv>

      <div className="skills-marquee-wrap" aria-hidden>
        <MotionUl
          className="skills-marquee"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((skill, i) => (
            <li key={`${skill.name}-${i}`} className="skills-marquee-item">
              <skill.Icon />
              <span>{skill.name}</span>
            </li>
          ))}
        </MotionUl>
      </div>
    </MotionSection>
  );
}
