import {
  SiPython,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiApple,
  SiDotnet,
  SiJavascript,
} from 'react-icons/si';
import { FaWindows } from 'react-icons/fa6';
import './Skills.css';

const SKILLS = [
  { name: 'Python', Icon: SiPython },
  { name: 'React', Icon: SiReact },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'HTML', Icon: SiHtml5 },
  { name: 'CSS', Icon: SiCss3 },
  { name: 'Node', Icon: SiNodedotjs },
  { name: 'Windows', Icon: FaWindows },
  { name: 'Mac', Icon: SiApple },
  { name: 'C#', Icon: SiDotnet },
  { name: 'JavaScript', Icon: SiJavascript },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="section-label">Skills</p>
      <h2 className="section-title">What I work with</h2>
      <p className="section-description" style={{ marginBottom: '2rem' }}>
        Technologies and tools I use.
      </p>
      <ul className="skills-list">
        {SKILLS.map(({ name, Icon }) => (
          <li key={name} className="skills-item">
            <span className="skills-icon" aria-hidden>
              <Icon />
            </span>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
