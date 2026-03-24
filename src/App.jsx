import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="starfield" aria-hidden>
        <span className="stars stars--near" />
        <span className="stars stars--far" />
        <div className="shooting-stars">
          <span className="shooting-star" />
          <span className="shooting-star" />
          <span className="shooting-star" />
          <span className="shooting-star" />
          <span className="shooting-star" />
        </div>
      </div>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Skills />
        <Timeline />
        <Projects />
        <section id="contact" className="contact">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get in touch</h2>
          <a href="mailto:eggreatorex@icloud.com" className="btn btn--primary">
            Contact me
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
