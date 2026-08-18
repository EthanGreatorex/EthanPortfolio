import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import FloatingBackground from './components/FloatingBackground';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <FloatingBackground />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Skills />
          <Timeline />
          <Projects />
          <Contact />
        </main>
        <footer className="site-footer">
          Built with curiosity &amp; <span>☕</span> — {new Date().getFullYear()}
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
