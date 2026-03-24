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
import "./Skills.css";
import { motion } from "framer-motion";

const MotionSection = motion.section;
const MotionUl = motion.ul;
const MotionLi = motion.li;

const SKILLS = [
  { name: "Python", Icon: FaPython },
  { name: "React", Icon: FaReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3 },
  { name: "Node", Icon: FaNodeJs },
  { name: "Windows", Icon: FaWindows },
  { name: "Mac", Icon: FaApple },
  { name: "C#", Icon: SiSharp },
  { name: ".NET", Icon: SiDotnet },
  { name: "JavaScript", Icon: SiJavascript },
];

export default function Skills() {
  return (
    <MotionSection
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <p className="section-label">Skills</p>
      <h2 className="section-title">What I work with</h2>
      <p className="section-description" style={{ marginBottom: "2rem" }}>
        Technologies and tools I use.
      </p>
      <MotionUl
        className="skills-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.08 },
          },
        }}
      >
        {SKILLS.map((skill) => {
          const IconComponent = skill.Icon;

          return (
            <MotionLi
              key={skill.name}
              className="skills-item"
              tabIndex={0}
              aria-label={`Skill: ${skill.name}`}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35 }}
            >
              <span className="skills-icon" aria-hidden>
                <IconComponent />
              </span>
              {skill.name}
            </MotionLi>
          );
        })}
      </MotionUl>
    </MotionSection>
  );
}
