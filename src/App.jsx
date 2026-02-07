import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
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
