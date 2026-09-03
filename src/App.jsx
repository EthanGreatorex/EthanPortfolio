import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Process from "./components/Process";
import Timeline from "./components/Timeline";
import "./App.css";

const MotionDiv = motion.div;
function App() {
  return (
    <MotionDiv
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <Timeline />
        <Process />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>E / G</span>
        <span>2026</span>
      </footer>
    </MotionDiv>
  );
}

export default App;
