import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <p className="section-label">About me</p>
      <h2 className="section-title">Who I am & what I do</h2>
      <div className="about-grid">
        <div className="about-content">
          <p className="section-description">
            I'm a software engineer focused on building fast, accessible web
            applications with React and Next.js. I care about clean architecture,
            performance, and great user experience.
          </p>
          <p className="about-text">
            When I'm not coding, I enjoy contributing to open source, writing
            about tech, and exploring new tools. I'm always up for discussing
            ideas and collaboration.
          </p>
          <ul className="about-skills">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Performance & scalability</li>
          </ul>
        </div>
        <div className="about-visual">
          <div className="about-card">
            <div className="about-card-pattern" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
